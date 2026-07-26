# EG:SF Harness Guide

EG:SF Harness 是一組既有治理文件、implementation evidence、任務規格與 Git／Pull Request 流程。它的目的，是讓協作者知道先讀什麼、誰負責什麼、何時必須停止；`docs/collaboration/` 本身不是技術版本權威。

## 固定閱讀順序

1. [`AGENT.md`](../../AGENT.md)：Repo red lines、語言規範、範圍與 Git 安全規則。
2. [`SKILL.md`](../../SKILL.md)：強制工作流程、已驗證格式與 validation expectations。
3. [`PROGRESS.md`](../../PROGRESS.md)：目前 phase、goal、已知狀態與 STOP POINT。
4. [`COMPATIBILITY.md`](../../COMPATIBILITY.md)：相容性分類、installed／planned／deferred／historical 邊界。
5. 任務指定文件：本次 objective、authoritative sources、allowlist 與 stop conditions。
6. 需要 runtime 驗證時，才閱讀 [`SERVER_TEST_PROTOCOL.md`](../../SERVER_TEST_PROTOCOL.md) 並依其保存 evidence。

本 Repo 實際存在的檔名是單數 `AGENT.md`。不得假設存在 `AGENTS.md`，也不得在未授權任務中處理 rename。

## 文件責任

| 來源 | 責任 | 不代表什麼 |
| --- | --- | --- |
| `AGENT.md` | 安全治理、red lines、語言與 scope 規則。 | 不取代實際 metadata 或任務規格。 |
| `SKILL.md` | 執行順序、已驗證格式、validation 與 publish 邊界。 | 不自動授權任何修改。 |
| `PROGRESS.md` | 目前專案狀態、goal、blocked／deferred 與 STOP POINT。 | 不單獨證明 runtime 狀態或 installed inventory。 |
| `COMPATIBILITY.md` | 相容性狀態與證據分類的 current guidance。 | 不取代 packwiz metadata。 |
| 任務指定文件 | 本次工作的 objective、scope、allowlist、forbidden 與完成條件。 | 不得自行擴張到相鄰問題。 |
| `SERVER_TEST_PROTOCOL.md` | Active runtime 測試程序、證據欄位與結果判定。 | 閱讀程序本身不構成 runtime verification。 |

## Authority model

### Implementation truth

- `pack.toml`
- `index.toml`
- `mods/*.pw.toml`

這些檔案是目前安裝 metadata 的主要證據。修改權限仍由任務 scope 決定；可讀不等於可寫。

### Current governance

- `AGENT.md`
- `SKILL.md`
- `PROGRESS.md`
- `COMPATIBILITY.md`
- `SERVER_TEST_PROTOCOL.md`

### Release evidence

- [`docs/releases/INDEX.md`](../releases/INDEX.md)
- 對應版本的 Release notes

Release evidence 說明某次發布宣告與當時結果；不得自動延伸為所有後續 commit 的 runtime `PASS`。

### Design sources

- [`docs/design/INDEX.md`](../design/INDEX.md)
- `docs/design/**`

Design source 可以保存方向、候選與歷史脈絡，但不等於 current implementation truth，也不能覆蓋 metadata、active files 或 current governance。

### Historical evidence

標示為 historical 的 Phase、planning、test 或 compatibility 文件保留當時的 `PASS`、crash、世界名稱與決策。它們是可追溯 evidence，不是現行安裝、程序或 runtime 結果。

## Static evidence 與 runtime verification

- 路徑存在、metadata、diff、設定文字與 log 片段屬 static evidence。
- 實際啟動、進入世界、多人連線、操作結果與完整 runtime artifact 才能支持相應的 runtime claim。
- 只有 static evidence 時，不得回報 runtime `PASS`；依缺口使用 `PARTIAL` 或 `UNVERIFIED`。

## Conflict rule

若 implementation truth、current governance、Release evidence、design source 或任務規格互相衝突：

1. `STOP`，不要繼續寫入。
2. 列出衝突位置、來源、觀察到的文字與可能影響。
3. 不得自行選擇方便的版本或靜默修正。
4. 將 evidence 與建議選項回報給 Yoi，等待決策。

## 寫入工作流程

所有 Repo 寫入變更採用：specification → preflight → independent branch → small scoped change → validation → Pull Request → Yoi Review → merge。

- 不得直接修改 `main`。
- 預設採可回滾的 doc-only 或 isolated change。
- Maintainer-controlled paths 只有在任務明確授權時才能修改。
- 協作資料夾只負責導覽、模板與任務索引，不得宣告新的版本 baseline。
