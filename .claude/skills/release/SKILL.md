---
name: release
description: 準備 EG:SF 的版本發佈。`/release <tag>` 做前置檢查並開 release prep PR（pack.toml 版本、CHANGELOG、release notes 草稿）；`/release <tag> closeout` 在 Project Maintainer 發佈 GitHub Release 後補齊 release notes、INDEX 與 PROGRESS。只在 Project Maintainer 手動呼叫時使用。
argument-hint: <tag> [closeout]
disable-model-invocation: true
---

# /release

協助 Project Maintainer 發佈 EG:SF 的新版本。規則以 [`AGENTS.md`](../../../AGENTS.md)、[`docs/collaboration/WORKFLOW.md`](../../../docs/collaboration/WORKFLOW.md) 與 [`docs/operations/SERVER_TEST_PROTOCOL.md`](../../../docs/operations/SERVER_TEST_PROTOCOL.md) 為準；本 skill 只寫操作步驟。

## 權限邊界

Project Maintainer 手動呼叫本 skill，即授權本次發佈的下列寫入，且只限這些：

- `pack.toml` 的 `version` 欄位（不得改動其他欄位）。
- `CHANGELOG.md`、`PROGRESS.md`。
- `docs/releases/<tag>.md` 與 `docs/releases/INDEX.md`。

本 skill **不授權**：建立或 push tag、建立 GitHub Release、上傳 asset、merge 任何 PR、修改 `mods/**`、`config/**`、`kubejs/**`、`index.toml`，或替 Project Maintainer 填寫 runtime 測試結果。這些都由 Project Maintainer 處理。

## 發佈流程總覽

| 步驟 | 誰做 | 內容 |
| --- | --- | --- |
| 1. Prep PR | Agent（`/release <tag>`） | 前置檢查、更新 `pack.toml` 版本、CHANGELOG、release notes 草稿，開 PR |
| 2. Merge | Project Maintainer | Review 並 merge prep PR，等 `main` 的 Pack CI 通過 |
| 3. 整包測試 | Project Maintainer | 下載該 merge commit 的 `.mrpack` artifact，依 `SERVER_TEST_PROTOCOL.md` 測試 |
| 4. Tag 與 Release | Project Maintainer | 對**同一個 commit** 打 tag，建立 GitHub Release 並上傳 asset |
| 5. Closeout PR | Agent（`/release <tag> closeout`） | 補齊 commit、asset、測試結果、INDEX 與 PROGRESS，開 PR |

被測試的 commit、被 tag 的 commit 與 `.mrpack` 的來源必須是同一個 commit。步驟 2 之後如果 `main` 又有新的 merge，回到步驟 1 重新確認。

## 步驟 1：`/release <tag>`

### 1-1 確認輸入

- 沒有提供 `<tag>` 時，先問 Project Maintainer。Tag 慣例為 `vX.Y.Z-<slug>`，例如 `v0.8.1-friends-feedback-test`。
- 確認 release 類型：GitHub pre-release 或正式 release。
- 確認 `docs/releases/<tag>.md` 尚未存在，GitHub 上也沒有同名的 tag 或 release。

### 1-2 前置檢查

逐項檢查，任何一項不符合就停止並回報，不要繼續寫入：

1. `main` 最新 commit 的 Pack CI 兩個 job 都是 success。
2. 列出所有指向 `main` 的 open PR，請 Project Maintainer 決定要等它們 merge，還是不納入本版。
3. 讀 `PROGRESS.md`：有沒有未關閉的 incident、STOP POINT 是否允許發佈。不允許時停止，請 Project Maintainer 先更新授權。
4. 找出上一個 release：以 `docs/releases/INDEX.md` 第一列與 GitHub 最新 release 互相確認。兩者不一致時停止並回報。

### 1-3 整理變更內容

以上一個 release 的 tag（本機沒有時用 `git fetch origin tag <prev-tag>`，或使用 release notes 記載的 commit）到 `origin/main` 為範圍：

```bash
git log --oneline <prev>..origin/main
git diff --stat <prev>..origin/main -- mods/ index.toml pack.toml
git diff --stat <prev>..origin/main -- config/ kubejs/
```

- 從 merge commit 找出這段期間 merge 的 PR，讀 PR 標題與描述。
- 從 `mods/*.pw.toml` 的 diff 整理新增、移除與升級的 mod，以及版本號。
- 從 `config/ftbquests/quests/chapters/` 的 diff 整理有變動的章節。
- 分成三類：玩家看得到的變更、技術／打包變更、只有文件的變更。

### 1-4 開 prep PR

在新 branch（例如 `claude/release-<tag>`）上：

1. `pack.toml` 的 `version` 改為 tag 中的版本號（例如 `0.9.0`），執行 `packwiz refresh`，確認 `index.toml` 沒有變動、`pack.toml` 只變動 `version`（與隨之改變的 `[index].hash`，若有）。
2. `CHANGELOG.md`：把 `## Unreleased` 中屬於本版的項目整理成新的版本段落，放在 Unreleased 之下，並補上 1-3 的重點。保留未納入本版的 Unreleased 項目。
3. `docs/releases/<tag>.md`：依照上一份 release notes 的結構起草：

   ```markdown
   # <版本名稱> Release Notes

   ## Summary
   ## Release Artifact
   ## Player-Facing Changes
   ## Technical / Packaging Notes
   ## Runtime Test Result
   ## Not Included
   ## Next Steps
   ```

   - Release Artifact 的 Commit 與 Asset size 寫 `TBD（closeout 時填入）`。
   - Runtime Test Result 寫 `UNVERIFIED（等待 Project Maintainer 依 SERVER_TEST_PROTOCOL.md 測試）`，不得預先寫 `PASS`。
   - Not Included 參考 `PROGRESS.md` 的 Blocked Items。
   - 依 `AGENTS.md` 語言規範，新撰寫的 release notes 使用繁體中文。
4. 執行 `scripts/` 的三個檢查，commit、push，開 draft PR，任務分類為 `STATIC`。PR 描述附上「步驟 2–4 的操作清單」（見下方），方便 Project Maintainer 照做。

### 給 Project Maintainer 的步驟 2–4 操作清單

把以下內容填入實際值後放進 PR 描述：

1. Merge 本 PR，等 `main` 的 Pack CI 通過，記下 merge commit 的完整 40 字元 SHA。
2. 在該次 Actions run 的頁面下載 artifact `EGSF-<sha7>`，解壓縮得到 `EGSF-<sha7>.mrpack`，改名為 `EGSF-<tag>.mrpack`。
3. 用這個 `.mrpack` 依 `docs/operations/SERVER_TEST_PROTOCOL.md` 測試，保存紀錄（tag 或 full commit、各 Stage 結果、`PASS`／`PARTIAL`／`UNVERIFIED`、log）。
4. 測試結果可以發佈時，對同一個 commit 打 annotated tag 並 push：

   ```bash
   git fetch origin main
   git tag -a <tag> <full-sha> -m "<版本名稱>"
   git push origin <tag>
   ```

5. 在 GitHub 的 Releases 頁面建立 release：選擇 `<tag>`，依類型勾選 pre-release，上傳 `EGSF-<tag>.mrpack`，說明欄可貼上 `docs/releases/<tag>.md` 的內容。本機有 `gh` 的話也可以：

   ```bash
   gh release create <tag> EGSF-<tag>.mrpack --prerelease --title "<版本名稱>" --notes-file docs/releases/<tag>.md
   ```

6. 完成後呼叫 `/release <tag> closeout`，並附上測試結果。

## 步驟 5：`/release <tag> closeout`

### 5-1 確認發佈結果

- 用 GitHub 工具讀取 `<tag>` 的 release：確認存在、類型（pre-release 與否）、asset 名稱與大小。
- 確認 tag 指向的 commit 與 prep PR 的 merge commit 相同。不同時停止並回報。
- 向 Project Maintainer 取得測試結果。沒有提供時不得自行填寫，標記為 `UNVERIFIED` 並在回報中列出。

### 5-2 開 closeout PR

在新 branch（例如 `claude/release-<tag>-closeout`）上：

1. `docs/releases/<tag>.md`：填入 Commit（short SHA）、Asset 名稱與大小、Release type，把 Runtime Test Result 換成 Project Maintainer 提供的結果與範圍，用 `PASS`／`PARTIAL`／`UNVERIFIED` 如實標記。
2. `docs/releases/INDEX.md`：在表格最上方加入新的一列。
3. `PROGRESS.md`：更新「目前版本與階段」與「目前狀態」中的事實（目前 release、release 狀態、asset）。「目前目標」「下一步允許的任務」「STOP POINT」涉及授權範圍，只能依 Project Maintainer 的指示修改；沒有指示時維持原樣，並在 PR 中列出建議。
4. 執行 `scripts/` 的三個檢查，commit、push，開 draft PR，任務分類為 `STATIC`。

## 回報

每個步驟結束時回報：做了什麼、檢查結果、PR 連結、下一步由誰做什麼。任何跳過或未執行的檢查都要明列。
