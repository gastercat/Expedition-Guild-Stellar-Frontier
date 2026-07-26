# EG:SF 協作者主導覽

本資料夾是朋友、文件協作者、研究協作者與工程協作者的薄入口層。它只說明如何找到任務、authority、提示詞與回報格式，不建立第二套技術或版本權威。

目前只開放已明確授權的小型任務。沒有任務、scope 或 allowed changes，就沒有 Repo 寫入權限。

## 適用對象與入口

| 協作者 | 建議入口 | 預設權限 |
| --- | --- | --- |
| 測試者 | [已授權任務索引](tasks/README.md)與任務指定的測試指南 | 觀察、重現、回報；預設不修改 Repo。 |
| 文件協作者 | [Harness Guide](HARNESS_GUIDE.md)、[Prompt Templates](PROMPT_TEMPLATES.md) | 只修改任務明確列出的文件。 |
| 研究協作者 | [Prompt Templates](PROMPT_TEMPLATES.md)的 Compatibility research 與 [Report Formats](REPORT_FORMATS.md) | 蒐集與分類證據；不把研究建議寫成 implementation truth。 |
| 工程協作者 | `AGENT.md`、`SKILL.md`、任務規格與 [Harness Guide](HARNESS_GUIDE.md) | 只執行明確授權、可隔離的小型變更。 |

## Scope 與權限級別

- Tier 1 — read-only：可 Review、搜尋、記錄測試觀察與回報問題；不得修改 Repo。
- Tier 2 — documentation：只可修改任務明列的文件與模板；不得修改 metadata、quest、KubeJS 或 gameplay。
- Tier 3 — isolated change：只可處理明確授權的單一文件、任務文字或獨立內容；不得進行主線重構或跨系統施工。

以下範圍由 maintainer 控制，只有任務明確授權時才能修改：`pack.toml`、`index.toml`、`mods/**`、`config/ftbquests/**`、`kubejs/**`、`docs/releases/**`、Git tags、GitHub Releases、GameStages 主鏈，以及核心 Mod／版本決策。

## 從哪裡開始

1. 閱讀根目錄的 [CONTRIBUTING.md](../../CONTRIBUTING.md)。
2. 依 [Harness Guide](HARNESS_GUIDE.md) 的順序確認 authority 與 STOP POINT。
3. 從 [已授權任務索引](tasks/README.md)選擇狀態為 `OPEN` 的任務。
4. 需要建立任務包時使用 [Prompt Templates](PROMPT_TEMPLATES.md)。
5. 完成後使用 [Report Formats](REPORT_FORMATS.md) 回報 evidence、風險與未驗證項目。

## 最小工作流程

1. Specification before execution：先確認 objective、scope、authority 與 stop conditions。
2. Small batch：只處理能獨立 Review 的最小範圍。
3. Evidence before `PASS`：沒有相稱的 file、command 或 runtime evidence，就使用 `PARTIAL` 或 `UNVERIFIED`。
4. 寫入工作使用獨立 branch；不得直接修改 `main`。
5. 提交 Pull Request，等待 Yoi Review；禁止自動 merge。

遇到路徑不存在、authority conflict、未授權檔案、需要擴大 scope 或無法驗證時，立即停止並回報。不要選擇「看起來方便」的版本，也不要自行補做相鄰工作。
