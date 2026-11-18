@AGENTS.md

## Claude Code 補充

以上 `AGENTS.md` 是所有 Agent 共用的規則；本段只補充 Claude Code 專用的事項，不得放寬 `AGENTS.md` 的任何規則。

- 角色：依 [`docs/collaboration/WORKFLOW.md`](docs/collaboration/WORKFLOW.md)，Claude Code 負責跨檔案工作、packwiz metadata、CI、需要判斷治理規則的任務，以及 Review 其他 Agent 的 Pull Request。
- 並行工作：每條 branch 使用獨立的 git worktree，避免與其他 branch 互相覆寫。
- Skills：Repo 專用的 skills 放在 `.claude/skills/<name>/SKILL.md`。Skill 只寫操作步驟，規則仍以 `AGENTS.md` 與 `docs/collaboration/` 為準，不得在 skill 裡建立第二套規則。目前有：
  - [`/release`](.claude/skills/release/SKILL.md)：版本發佈的前置檢查、prep PR 與 closeout PR；tag 與 GitHub Release 由 Project Maintainer 處理，或經指定版本與 commit 的授權後由 Agent 代為建立（`publish`）。
  - [`/merge-prep`](.claude/skills/merge-prep/SKILL.md)：PR merge 前檢查，以及 merge 後的 PROGRESS／CHANGELOG 同步。
  - 兩者都只在 Project Maintainer 手動呼叫時執行。
- `.claude/` 已列在 `.packwizignore`，不會進入 `index.toml` 或 `.mrpack`。在根目錄新增任何其他檔案前，先確認它已被 `.packwizignore` 排除，否則 CI 的 index 檢查會失敗。
