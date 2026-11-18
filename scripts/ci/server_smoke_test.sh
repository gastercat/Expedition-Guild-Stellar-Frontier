#!/usr/bin/env bash
# EG:SF dedicated server smoke test.
#
# Installs Forge and the server-side mods from packwiz metadata into a fresh
# directory, starts the dedicated server, waits for it to finish loading, then
# stops it and checks for crash reports and KubeJS errors.
#
# This only proves the server starts. It is not client runtime evidence.
#
# Environment variables (all optional):
#   WORK_DIR        server install directory (default: $RUNNER_TEMP or /tmp + egsf-server)
#   CACHE_DIR       downloaded installers cache (default: $WORK_DIR/../egsf-ci-cache)
#   JAVA            java binary, Java 17 recommended (default: java)
#   PACKWIZ         packwiz binary (default: packwiz)
#   PACKWIZ_PORT    local port for packwiz serve (default: 8080)
#   SERVER_MEMORY   max heap for the server (default: 4G)
#   SMOKE_TIMEOUT   seconds to wait for "Done" (default: 900)

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
BASE_TMP="${RUNNER_TEMP:-/tmp}"
WORK_DIR="${WORK_DIR:-$BASE_TMP/egsf-server}"
CACHE_DIR="${CACHE_DIR:-$(dirname "$WORK_DIR")/egsf-ci-cache}"
JAVA="${JAVA:-java}"
PACKWIZ="${PACKWIZ:-packwiz}"
PACKWIZ_PORT="${PACKWIZ_PORT:-8080}"
SERVER_MEMORY="${SERVER_MEMORY:-4G}"
SMOKE_TIMEOUT="${SMOKE_TIMEOUT:-900}"

PACKWIZ_INSTALLER_VERSION="v0.5.14"
PACKWIZ_BOOTSTRAP_VERSION="v0.0.3"

log() { printf '[smoke] %s\n' "$*"; }
fail() { printf '[smoke] FAIL: %s\n' "$*" >&2; exit 1; }

toml_value() {
  sed -n "s/^$1 = \"\(.*\)\"$/\1/p" "$REPO_DIR/pack.toml" | head -n 1
}

MC_VERSION="$(toml_value minecraft)"
FORGE_VERSION="$(toml_value forge)"
[[ -n "$MC_VERSION" && -n "$FORGE_VERSION" ]] || fail "could not read minecraft/forge versions from pack.toml"
FORGE_ID="$MC_VERSION-$FORGE_VERSION"

log "Minecraft $MC_VERSION, Forge $FORGE_VERSION"
log "Java: $("$JAVA" -version 2>&1 | head -n 1)"
log "Work dir: $WORK_DIR"

rm -rf "$WORK_DIR"
mkdir -p "$WORK_DIR" "$CACHE_DIR"

download() {
  local url="$1" dest="$2"
  if [[ ! -s "$dest" ]]; then
    log "Downloading $url"
    curl -fsSL --retry 3 -o "$dest.part" "$url"
    mv "$dest.part" "$dest"
  fi
}

FORGE_INSTALLER="$CACHE_DIR/forge-$FORGE_ID-installer.jar"
BOOTSTRAP_JAR="$CACHE_DIR/packwiz-installer-bootstrap-$PACKWIZ_BOOTSTRAP_VERSION.jar"
INSTALLER_JAR="$CACHE_DIR/packwiz-installer-$PACKWIZ_INSTALLER_VERSION.jar"

download "https://maven.minecraftforge.net/net/minecraftforge/forge/$FORGE_ID/forge-$FORGE_ID-installer.jar" "$FORGE_INSTALLER"
download "https://github.com/packwiz/packwiz-installer-bootstrap/releases/download/$PACKWIZ_BOOTSTRAP_VERSION/packwiz-installer-bootstrap.jar" "$BOOTSTRAP_JAR"
download "https://github.com/packwiz/packwiz-installer/releases/download/$PACKWIZ_INSTALLER_VERSION/packwiz-installer.jar" "$INSTALLER_JAR"

# 1. Forge server
log "Installing Forge server"
(cd "$WORK_DIR" && "$JAVA" -jar "$FORGE_INSTALLER" --installServer . > forge-installer.out 2>&1) \
  || { tail -n 40 "$WORK_DIR/forge-installer.out" >&2; fail "Forge installer failed"; }
UNIX_ARGS="libraries/net/minecraftforge/forge/$FORGE_ID/unix_args.txt"
[[ -f "$WORK_DIR/$UNIX_ARGS" ]] || fail "Forge install did not create $UNIX_ARGS"

# 2. Server-side mods and overrides from packwiz metadata
log "Starting packwiz serve on port $PACKWIZ_PORT"
(cd "$REPO_DIR" && "$PACKWIZ" serve --refresh=false --port "$PACKWIZ_PORT" > "$WORK_DIR/packwiz-serve.out" 2>&1) &
SERVE_PID=$!
cleanup_serve() {
  kill "$SERVE_PID" 2>/dev/null || true
  wait "$SERVE_PID" 2>/dev/null || true
}
trap cleanup_serve EXIT

for _ in $(seq 1 30); do
  curl -fs "http://localhost:$PACKWIZ_PORT/pack.toml" > /dev/null 2>&1 && break
  sleep 1
done
curl -fs "http://localhost:$PACKWIZ_PORT/pack.toml" > /dev/null || fail "packwiz serve did not start"

log "Installing server-side mods with packwiz-installer"
cp "$INSTALLER_JAR" "$WORK_DIR/packwiz-installer.jar"
(cd "$WORK_DIR" && "$JAVA" -jar "$BOOTSTRAP_JAR" -g -s server \
    --bootstrap-no-update --bootstrap-main-jar packwiz-installer.jar \
    "http://localhost:$PACKWIZ_PORT/pack.toml" > packwiz-installer.out 2>&1) \
  || { tail -n 40 "$WORK_DIR/packwiz-installer.out" >&2; fail "packwiz-installer failed"; }
cleanup_serve
trap - EXIT

MOD_COUNT="$(find "$WORK_DIR/mods" -name '*.jar' | wc -l | tr -d ' ')"
log "Installed $MOD_COUNT server-side mod jars"
[[ "$MOD_COUNT" -gt 0 ]] || fail "no mods were installed"

# 3. Server configuration
echo "eula=true" > "$WORK_DIR/eula.txt"
cat > "$WORK_DIR/server.properties" <<EOF
online-mode=false
level-seed=egsf-ci
motd=EGSF CI smoke test
EOF
echo "-Xmx$SERVER_MEMORY" >> "$WORK_DIR/user_jvm_args.txt"

# 4. Start, wait for "Done", stop
log "Starting dedicated server (timeout ${SMOKE_TIMEOUT}s)"
cd "$WORK_DIR"
rm -f console.in
mkfifo console.in
"$JAVA" @user_jvm_args.txt "@$UNIX_ARGS" nogui < console.in > server.out 2>&1 &
SERVER_PID=$!
exec 3> console.in

START=$SECONDS
STATUS=""
while true; do
  if grep -q 'Done (' server.out 2>/dev/null; then
    STATUS="done"; break
  fi
  if ! kill -0 "$SERVER_PID" 2>/dev/null; then
    STATUS="exited"; break
  fi
  if (( SECONDS - START > SMOKE_TIMEOUT )); then
    STATUS="timeout"; break
  fi
  sleep 5
done

if [[ "$STATUS" == "done" ]]; then
  log "Server reached Done after $((SECONDS - START))s, sending stop"
  echo "stop" >&3
  for _ in $(seq 1 60); do
    kill -0 "$SERVER_PID" 2>/dev/null || break
    sleep 2
  done
fi
if kill -0 "$SERVER_PID" 2>/dev/null; then
  kill "$SERVER_PID" 2>/dev/null || true
  sleep 5
  kill -9 "$SERVER_PID" 2>/dev/null || true
fi
exec 3>&-
rm -f console.in

# 5. Results
FAILED=0
case "$STATUS" in
  done) log "PASS: server started" ;;
  exited) log "server exited before Done"; FAILED=1 ;;
  timeout) log "server did not reach Done within ${SMOKE_TIMEOUT}s"; FAILED=1 ;;
esac

if compgen -G "crash-reports/*" > /dev/null; then
  log "crash report found:"
  ls crash-reports
  FAILED=1
fi

KUBEJS_LOG="logs/kubejs/server.log"
if [[ -f "$KUBEJS_LOG" ]] && grep -E '\[ERR|ERROR' "$KUBEJS_LOG" > kubejs-errors.txt; then
  log "KubeJS errors found:"
  cat kubejs-errors.txt
  FAILED=1
fi

if (( FAILED )); then
  log "Last 60 lines of server output:"
  tail -n 60 server.out
  fail "server smoke test failed"
fi

log "Smoke test passed"
