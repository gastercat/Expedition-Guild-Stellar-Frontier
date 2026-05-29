#!/usr/bin/env python3
"""檢查模組包專案必要檔案與資料夾是否存在。"""

from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]

REQUIRED_FILES = [
    "README.md",
    "MODLIST.md",
    "COMPATIBILITY.md",
    "QUEST_DESIGN.md",
    "SERVER_TEST_PROTOCOL.md",
]

REQUIRED_DIRS = [
    "docs",
    "scripts",
    "config",
    "kubejs",
    "quests",
]


def print_result(level: str, message: str) -> None:
    print(f"{level}: {message}")


def main() -> int:
    failed = False

    for rel_path in REQUIRED_FILES:
        path = ROOT / rel_path
        if path.is_file():
            print_result("PASS", f"必要檔案存在：{rel_path}")
        else:
            print_result("FAIL", f"缺少必要檔案：{rel_path}")
            failed = True

    for rel_path in REQUIRED_DIRS:
        path = ROOT / rel_path
        if path.is_dir():
            print_result("PASS", f"必要資料夾存在：{rel_path}")
        else:
            print_result("FAIL", f"缺少必要資料夾：{rel_path}")
            failed = True

    if failed:
        print_result("FAIL", "專案結構檢查未通過")
        return 1

    print_result("PASS", "專案結構檢查通過")
    return 0


if __name__ == "__main__":
    sys.exit(main())
