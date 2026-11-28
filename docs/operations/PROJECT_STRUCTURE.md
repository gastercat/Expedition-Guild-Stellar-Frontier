# 專案結構（Project Structure）

各主要路徑的用途。修改規則見 [`AGENTS.md`](../../AGENTS.md)。

## 模組包內容（會進入 `.mrpack`）

| 路徑 | 用途 |
| --- | --- |
| `pack.toml` | packwiz pack metadata：名稱、版本、Minecraft／Forge 版本、index hash。`version` 只在發佈時修改。 |
| `index.toml` | packwiz file index 與 hash，由 `packwiz refresh` 產生，不手動修改。 |
| `mods/*.pw.toml` | 已安裝 mod 的 packwiz metadata，是「目前裝了什麼」的唯一依據。 |
| `config/ftbquests/quests/` | FTB Quests 的章節（`chapters/0.snbt`～`11.snbt`）、chapter groups 與 quest data。 |
| `kubejs/server_scripts/eg_stages.js` | GameStages 名稱清單。目前只定義名稱，不授予、不檢查 stage。 |

## Repo 工具與文件（不進入 pack）

| 路徑 | 用途 |
| --- | --- |
| `AGENTS.md`、`CLAUDE.md` | Agent 共用規則與 Claude Code 補充。 |
| `PROGRESS.md` | 目前版本、目標與尚未實作的系統。 |
| `README.md`、`CONTRIBUTING.md`、`CHANGELOG.md` | 專案總覽、協作入口、版本變更紀錄。 |
| `.packwizignore` | 排除不進入 pack 的檔案。根目錄新增檔案前要先確認已排除。 |
| `.github/` | PR template 與 Pack CI workflow。 |
| `scripts/` | CI 也會執行的檢查腳本；`scripts/ci/` 是 server smoke test，`scripts/legacy/` 是早期新增 mod 的 helper。 |
| `.claude/skills/` | Claude Code 的 Repo 專用 skills（`/release`）。 |
| `docs/collaboration/VERIFIED_FORMATS.md` | 已驗證可用的 FTB Quests／GameStages 格式。 |
| `docs/operations/` | 相容性策略、server 測試程序與本文件。 |
| `docs/design/` | 設計提案，不等於已實作。 |
| `docs/releases/` | 各版本 release notes 與 `INDEX.md`。 |
| `docs/player/`、`docs/testing/` | 玩家指南與測試指南。 |
| `docs/archive/` | 歷史規劃與測試紀錄，不是現行規則或安裝狀態。 |
