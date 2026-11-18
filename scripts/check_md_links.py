#!/usr/bin/env python3
"""檢查 Repo 內 Markdown 文件的相對連結是否指向存在的檔案或資料夾。"""

from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]

# 不檢查的資料夾（相對於 ROOT）。
SKIP_DIRS = {".git", "node_modules", ".venv"}

# [text](target) 形式的 inline link；不處理 reference-style link。
LINK_RE = re.compile(r"(?<!!)\[[^\]]*\]\(([^)\s]+)(?:\s+\"[^\"]*\")?\)")
FENCE_RE = re.compile(r"^\s*(```|~~~)")
INLINE_CODE_RE = re.compile(r"`[^`]*`")
EXTERNAL_PREFIXES = ("http://", "https://", "mailto:", "#")


def iter_markdown_files():
    for path in ROOT.rglob("*.md"):
        rel_parts = path.relative_to(ROOT).parts
        if any(part in SKIP_DIRS for part in rel_parts):
            continue
        yield path


def check_file(path: Path) -> list[str]:
    errors = []
    in_fence = False
    for lineno, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        if FENCE_RE.match(line):
            in_fence = not in_fence
            continue
        if in_fence:
            continue
        for match in LINK_RE.finditer(INLINE_CODE_RE.sub("", line)):
            target = match.group(1)
            if target.startswith(EXTERNAL_PREFIXES):
                continue
            target_path = target.split("#", 1)[0]
            if not target_path:
                continue
            resolved = (path.parent / target_path).resolve()
            if not resolved.exists():
                rel = path.relative_to(ROOT)
                errors.append(f"{rel}:{lineno}: 連結目標不存在：{target}")
    return errors


def main() -> int:
    errors = []
    count = 0
    for path in sorted(iter_markdown_files()):
        count += 1
        errors.extend(check_file(path))

    for error in errors:
        print(f"FAIL: {error}")

    if errors:
        print(f"FAIL: 共 {len(errors)} 個相對連結失效（檢查了 {count} 份 Markdown）")
        return 1

    print(f"PASS: {count} 份 Markdown 的相對連結全部有效")
    return 0


if __name__ == "__main__":
    sys.exit(main())
