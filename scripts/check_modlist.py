#!/usr/bin/env python3
"""檢查 MODLIST.md 的必要關鍵字與 Phase 1 風險關鍵字。"""

from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
MODLIST = ROOT / "MODLIST.md"

REQUIRED_KEYWORDS = [
    "Minecraft 1.20.1",
    "Forge",
    "Java 17",
    "Create",
    "Ad Astra",
    "Create: Ad Astra Compatibility",
    "FTB Quests",
    "JEI",
]

RISK_KEYWORDS = [
    "Create 6",
    "Mekanism",
    "Applied Energistics 2",
    "MineColonies",
    "Cataclysm",
]


def normalize(text: str) -> str:
    """移除 Markdown 表格分隔符，讓關鍵字可跨表格格式匹配。"""
    return re.sub(r"\s+", " ", text.replace("|", " ")).strip()


def extract_phase_1(text: str) -> str:
    match = re.search(
        r"^## Phase 1：.*?\n(?P<body>.*?)(?=^## Phase 2：|^## |\Z)",
        text,
        flags=re.MULTILINE | re.DOTALL,
    )
    return match.group("body") if match else ""


def print_result(level: str, message: str) -> None:
    print(f"{level}: {message}")


def main() -> int:
    if not MODLIST.exists():
        print_result("FAIL", f"找不到 {MODLIST}")
        return 1

    text = MODLIST.read_text(encoding="utf-8")
    normalized_text = normalize(text)
    phase_1 = extract_phase_1(text)
    normalized_phase_1 = normalize(phase_1)

    failed = False
    warned = False

    for keyword in REQUIRED_KEYWORDS:
        if keyword in normalized_text:
            print_result("PASS", f"找到必要關鍵字：{keyword}")
        else:
            print_result("FAIL", f"缺少必要關鍵字：{keyword}")
            failed = True

    if not phase_1:
        print_result("FAIL", "找不到 Phase 1 區段")
        failed = True
    else:
        print_result("PASS", "找到 Phase 1 區段")

    for keyword in RISK_KEYWORDS:
        if keyword in normalized_phase_1:
            print_result("WARNING", f"風險關鍵字出現在 Phase 1：{keyword}")
            warned = True
        elif keyword in normalized_text:
            print_result("PASS", f"風險關鍵字未出現在 Phase 1：{keyword}")

    if failed:
        print_result("FAIL", "MODLIST.md 檢查未通過")
        return 1

    if warned:
        print_result("WARNING", "MODLIST.md 通過必要檢查，但 Phase 1 含風險關鍵字")
        return 0

    print_result("PASS", "MODLIST.md 檢查通過，未發現 Phase 1 風險關鍵字")
    return 0


if __name__ == "__main__":
    sys.exit(main())
