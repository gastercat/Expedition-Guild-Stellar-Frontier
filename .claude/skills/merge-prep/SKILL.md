---
name: merge-prep
description: EG:SF 的 Pull Request merge 前檢查與 merge 後同步。`/merge-prep <PR>` 檢查 CI、衝突、任務分類、allowlist、runtime 測試結果與交叉 Review，給出能不能 merge 的結論；`/merge-prep post <PR...>` 在 merge 後確認 main 的 CI，並把 PROGRESS／CHANGELOG 的同步整理成一個 PR。只在 Project Maintainer 手動呼叫時使用，永遠不 merge。
argument-hint: <PR 編號> | post <PR 編號...>
disable-model-invocation: true
---

# /merge-prep

協助 Project Maintainer 決定一個 PR 能不能 merge，以及 merge 後要同步哪些文件。規則以 [`AGENTS.md`](../../../AGENTS.md) 與 [`docs/collaboration/WORKFLOW.md`](../../../docs/collaboration/WORKFLOW.md) 為準；本 skill 只寫操作步驟。

## 權限邊界

- 永遠不 merge、不 approve、不關閉 PR，也不在別人的 PR 上 push。
- 在 PR 上留言前先問 Project Maintainer；預設只在對話中回報。
- Post 模式只允許修改 `PROGRESS.md` 與 `CHANGELOG.md`，並且要透過獨立 branch 與 PR。

## 模式一：`/merge-prep <PR>`（merge 前）

### 1. 讀取 PR

用 GitHub 工具讀取：標題、描述、draft 狀態、base／head branch、`mergeable_state`、變更檔案清單、head commit 的 check runs、reviews 與留言。Base 不是 `main` 時先回報。

### 2. 逐項檢查

| # | 檢查 | 不符合時 |
| --- | --- | --- |
| 1 | Head commit 的 Pack CI 兩個 job（Static checks and mrpack export、Dedicated server smoke test）都是 success | ❌ 不能 merge |
| 2 | `mergeable_state` 為 `clean`，沒有衝突 | ❌ 不能 merge |
| 3 | PR 描述有填任務分類與授權來源：task file 路徑，或依 `AGENTS.md`「授權」一節格式標記的對話指示（日期與內容摘要） | ❌ 沒有授權來源；⚠️ 格式不完整時請作者補上 |
| 4 | 變更檔案符合任務分類（見下表） | ❌ 分類錯誤或越界 |
| 5 | 變更檔案都在 PR 描述的 allowlist 內 | ❌ 越界，列出多出來的檔案 |
| 6 | `RUNTIME`／`RUNTIME_MODS`：PR 附有 runtime 測試清單，而且 Project Maintainer 已在 PR 寫回 client runtime 結果 | ❌ 尚未完成 client runtime 測試 |
| 7 | `RUNTIME`／`RUNTIME_MODS`：有另一個 Agent 的交叉 Review 留言，且提出的問題已處理（`STATIC` 跳過此項） | ⚠️ 依 `WORKFLOW.md` 尚未完成；由 Project Maintainer 決定是否放行 |
| 8 | 沒有把 CI 或 static evidence 寫成 client runtime `PASS` | ❌ 請作者修正描述 |
| 9 | `RUNTIME_MODS` 同時只有 1 條；其他 open PR 沒有修改同一個檔案或同一章節 | ⚠️ 列出可能衝突的 PR |
| 10 | 仍是 draft | ⚠️ 提醒先按 Ready for review |

任務分類與可變更檔案的對照：

| 分類 | 可以出現的檔案 | 不得出現的檔案 |
| --- | --- | --- |
| `STATIC` | 文件、`docs/**`、`.github/`、`scripts/`、`.claude/`、`.packwizignore` | `mods/**`、`config/**`、`kubejs/**`；`index.toml`、`pack.toml` 除非 task file 明確授權（例如 `/release` 的版本號） |
| `RUNTIME` | task file 指定的 `config/**`、`kubejs/**`，以及只變動對應 hash 的 `index.toml`、`pack.toml` | `mods/**` |
| `RUNTIME_MODS` | `mods/**`、`index.toml`、`pack.toml`，以及授權範圍內的 config | 與該 mod 無關的 quest 或 KubeJS 變更 |

`index.toml` 有變動時，檢查 diff：`RUNTIME` 只能是被修改檔案的 hash，出現新增或移除的條目要標 ❌。

### 3. 判斷需要同步的文件

依變更內容列出 merge 後可能需要更新的文件，供 post 模式使用：

- 任何 merge：`CHANGELOG.md` 的 `## Unreleased`。
- 改變目前狀態、新增系統或 CI、關閉 incident：`PROGRESS.md`。
- 新增、移除或升級 mod：`docs/operations/COMPATIBILITY.md`。
- Quest 章節內容或狀態標籤改變：`docs/PROGRESSION_OVERVIEW.md`。

### 4. 回報格式

```markdown
## PR #<n> merge 前檢查

結論：✅ 可以 merge／❌ 尚不能 merge／⚠️ 可以 merge，但有需要 Project Maintainer 判斷的項目

| # | 檢查 | 結果 | 說明 |
| --- | --- | --- | --- |

### Merge 後需要同步
- …

### 其他觀察
- …（相鄰問題只回報，不修正）
```

## 模式二：`/merge-prep post <PR...>`（merge 後）

可以一次帶入多個已 merge 的 PR，合併成一次同步。

### 1. 確認 merge 結果

- 每個 PR 都已 merge。尚未 merge 的跳過並回報。
- `main` 上對應 merge commit 的 Pack CI 通過。失敗時這是最優先的事：依 `WORKFLOW.md`，`main` 必須隨時可以啟動，回報失敗原因並建議 revert，等 Project Maintainer 決定，不做其他同步。
- 結果是 `cancelled` 不等於失敗：Pack CI 設有 `cancel-in-progress`，短時間內連續 merge 時，較早的 run 會被下一個 merge 取消。只要之後某個 merge commit 的 run 是 success（它的內容已包含被取消的那次），就視為通過，並在回報中註明是哪一次 run 涵蓋了它。如果 `main` 最新的 run 本身是 `cancelled` 且沒有後續 run，則等它重新執行或請 Project Maintainer 手動觸發，不要當成通過。

### 2. 起草同步內容

- `CHANGELOG.md`：在 `## Unreleased` 下為每個 PR 加一行摘要，寫清楚對玩家或維護者的影響。
- `PROGRESS.md`：只更新事實，例如「目前狀態」中已完成的變更、已關閉的 incident、新的 CI 或工具。「目前目標」「下一步允許的任務」「Blocked／Deferred」「STOP POINT」涉及授權範圍，只能依 Project Maintainer 的指示修改；沒有指示時維持原樣，並在 PR 中列出建議。
- 兩份文件都不需要更新時，回報「不需要同步」並結束，不開空的 PR。

### 3. 開 sync PR

在新 branch（例如 `claude/sync-after-pr-<n>`）上修改、執行 `scripts/` 的三個檢查，commit、push，開 draft PR，任務分類為 `STATIC`，描述列出涵蓋的 PR 編號。

### 4. 收尾提醒

- 已 merge 的 head branch 若還在，提醒 Project Maintainer 刪除，或開啟 GitHub 的 "Automatically delete head branches"。Agent 不刪除遠端 branch。
- 列出模式一第 3 步判斷需要、但不在本 skill 權限內的文件（例如 `COMPATIBILITY.md`），建議另開任務處理。
