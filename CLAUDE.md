@AGENTS.md

## Claude Code 補充

- Repo 專用的 skills 放在 `.claude/skills/<name>/SKILL.md`，只寫操作步驟，規則以 `AGENTS.md` 為準。目前有 [`/release`](.claude/skills/release/SKILL.md)，只在 Yoi 手動呼叫時執行。
- `.claude/` 已列在 `.packwizignore`。在根目錄新增其他檔案前，先確認它已被 `.packwizignore` 排除，否則 CI 的 index 檢查會失敗。
