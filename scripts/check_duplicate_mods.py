#!/usr/bin/env python3
"""檢查 mods/ 的 mod 是否有重複或明顯 loader 錯誤。

檢查對象是每個 mods/*.pw.toml 的 `filename`（packwiz 下載後的 jar 名稱），
以及任何直接放在 mods/ 的 jar。
"""

from pathlib import Path
import re
import sys
import tomllib

ROOT = Path(__file__).resolve().parents[1]
MODS_DIR = ROOT / "mods"

KNOWN_MODS = {
    "ad_astra": ["ad-astra", "adastra", "ad_astra"],
    "botarium": ["botarium"],
    "cloth_config": ["cloth-config", "cloth_config", "clothconfig"],
    "create": ["create"],
    "create_ad_astra_compatibility": [
        "create-ad-astra",
        "create_ad_astra",
        "ad-astra-compat",
        "ad_astra_compat",
    ],
    "resourceful_config": ["resourceful-config", "resourceful_config"],
    "resourceful_lib": ["resourceful-lib", "resourceful_lib"],
}

# Create 6 與 Twilight Forest 已在 v0.8.x 加入，不再列為禁止線索。
FORBIDDEN_HINTS = [
    "fabric",
    "quilt",
    "appliedenergistics2",
    "ae2",
    "minecolonies",
    "cataclysm",
    "blue-skies",
    "blueskies",
]


def canonical_name(filename: str) -> str:
    lower = filename.lower()
    stem = re.sub(r"\.jar$", "", lower)
    for canonical, hints in KNOWN_MODS.items():
        if any(hint in stem for hint in hints):
            return canonical
    stem = re.sub(r"[-_]?mc?1\.20\.1", "", stem)
    stem = re.sub(r"[-_]?forge", "", stem)
    stem = re.sub(r"[-_]?v?\d+(?:\.\d+)+(?:[a-z])?", "", stem)
    stem = re.sub(r"[^a-z0-9]+", "-", stem).strip("-")
    return stem or lower


def fail(message: str) -> None:
    print(f"[FAIL] {message}")


def warn(message: str) -> None:
    print(f"[WARN] {message}")


def pass_(message: str) -> None:
    print(f"[PASS] {message}")


def collect_jar_names(errors: list[str]) -> list[tuple[str, str]]:
    """回傳 (jar 名稱, 來源檔案) 清單。"""
    names = []
    for meta in sorted(MODS_DIR.glob("*.pw.toml")):
        try:
            data = tomllib.loads(meta.read_text(encoding="utf-8"))
        except tomllib.TOMLDecodeError as exc:
            errors.append(f"{meta.name} 無法解析：{exc}")
            continue
        filename = data.get("filename")
        if not isinstance(filename, str) or not filename:
            errors.append(f"{meta.name} 缺少 filename 欄位")
            continue
        names.append((filename, meta.name))
    for jar in sorted(MODS_DIR.glob("*.jar")):
        names.append((jar.name, jar.name))
    return names


def main() -> int:
    if not MODS_DIR.exists():
        fail(f"找不到 mods 資料夾：{MODS_DIR}")
        return 1

    errors = []
    warnings = []
    grouped = {}

    entries = collect_jar_names(errors)
    if not entries and not errors:
        fail("mods/ 沒有任何 .pw.toml 或 jar")
        return 1

    for name, source in entries:
        lower = name.lower()
        grouped.setdefault(canonical_name(name), []).append(f"{name}（{source}）")

        for hint in FORBIDDEN_HINTS:
            if hint in lower:
                errors.append(f"{name}（{source}）含有不允許或錯誤 loader 線索：{hint}")

        if "1.20.1" not in lower:
            warnings.append(f"{name}（{source}）檔名未標示 1.20.1，需人工確認版本")

        if "forge" not in lower:
            warnings.append(f"{name}（{source}）檔名未標示 Forge，需人工確認 loader")

    for canonical, names in grouped.items():
        if canonical and len(names) > 1:
            errors.append(f"疑似重複模組 {canonical}：{', '.join(names)}")

    for warning in warnings:
        warn(warning)

    if errors:
        for error in errors:
            fail(error)
        return 1

    pass_(f"{len(entries)} 個 mod 未發現重複或明顯違規線索")
    return 0


if __name__ == "__main__":
    sys.exit(main())
