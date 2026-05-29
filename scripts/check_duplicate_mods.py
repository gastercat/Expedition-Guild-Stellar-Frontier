#!/usr/bin/env python3
"""檢查 mods/ 內未來放入的 jar 是否有重複或明顯 loader 錯誤。"""

from pathlib import Path
import re
import sys

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

FORBIDDEN_HINTS = [
    "fabric",
    "quilt",
    "create-6",
    "create6",
    "appliedenergistics2",
    "ae2",
    "minecolonies",
    "cataclysm",
    "twilightforest",
    "twilight-forest",
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


def main() -> int:
    if not MODS_DIR.exists():
        fail(f"找不到 mods 資料夾：{MODS_DIR}")
        return 1

    jars = sorted(MODS_DIR.glob("*.jar"))
    if not jars:
        pass_("mods/ 目前沒有 jar；符合『先不下載模組』的專案狀態")
        return 0

    errors = []
    warnings = []
    grouped = {}

    for jar in jars:
        lower = jar.name.lower()
        grouped.setdefault(canonical_name(jar.name), []).append(jar.name)

        for hint in FORBIDDEN_HINTS:
            if hint in lower:
                errors.append(f"{jar.name} 含有第一版不允許或錯誤 loader 線索：{hint}")

        if "1.20.1" not in lower:
            warnings.append(f"{jar.name} 檔名未標示 1.20.1，需人工確認版本")

        if "forge" not in lower:
            warnings.append(f"{jar.name} 檔名未標示 Forge，需人工確認 loader")

    for canonical, names in grouped.items():
        if canonical and len(names) > 1:
            errors.append(f"疑似重複模組 {canonical}：{', '.join(names)}")

    for warning in warnings:
        warn(warning)

    if errors:
        for error in errors:
            fail(error)
        return 1

    pass_("mods/ jar 檔未發現重複或明顯違規線索")
    return 0


if __name__ == "__main__":
    sys.exit(main())
