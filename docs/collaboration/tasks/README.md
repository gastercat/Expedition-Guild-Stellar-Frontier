# 已授權協作任務

只有列於此處且狀態為 `OPEN` 的任務可以直接領取。任務未列出、狀態不是 `OPEN`，或需要超出 task file 的行為時，必須先由 Project Maintainer 另行授權。

| ID | 任務 | Mode | Status | Report format |
| --- | --- | --- | --- | --- |
| 001 | [Friends Preview Onboarding Review](001_friends_preview_onboarding_review.md) | `READ_ONLY` | `OPEN` | [Observation report](../REPORT_FORMATS.md#observation-report) |
| 002 | Friends Preview Runtime Observation | `READ_ONLY` | `PLANNED` | [Observation report](../REPORT_FORMATS.md#observation-report) |

Task 002 目前僅為 `PLANNED` 索引，不可領取，不授權啟動或執行 runtime test，且沒有對應 task file。

## 領取規則

- 任務不得自行擴張；發現相鄰問題只回報，不直接修正。
- `READ_ONLY` 任務不得修改 Repo、建立 commit、push 或 Pull Request。
- 寫入任務必須明列 allowlist，並使用獨立 branch 與 Pull Request。
- 所有寫入流程必須經過 Project Maintainer Review 後才能 merge；禁止自動 merge。
- 完成後使用 task file 指定的 [Report Formats](../REPORT_FORMATS.md)。
- Authority conflict、必要來源 `NOT_FOUND`、需要額外權限或無法驗證時，立即停止並回報 `STOP POINT`。

新增、關閉或重開任務屬 maintainer-controlled workflow；協作者不得自行改變 task status 來取得權限。
