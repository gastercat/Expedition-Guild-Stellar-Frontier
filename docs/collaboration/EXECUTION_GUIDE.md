# 執行程序（Execution Guide）

本文件說明 Agent 執行 `RUNTIME` 類任務時的步驟，特別是 FTB Quests 章節與 packwiz metadata 的變更。任務能不能開始、能改哪些檔案，仍以 [`PROGRESS.md`](../../PROGRESS.md) 與授權內容（task file 或 Project Maintainer 的直接指示）為準；任務分類、並行上限與 PR 流程見 [`WORKFLOW.md`](WORKFLOW.md)。

內容改寫自舊版 `SKILL.md` 的 Phase A／B／C（原文見 [`docs/archive/agent-guides/SKILL.md`](../archive/agent-guides/SKILL.md)），並依目前的 branch／Pull Request／CI 流程調整。

## 流程總覽

| 階段 | 內容 | 可以寫入嗎 |
| --- | --- | --- |
| Phase A：研究 | 盤點現況、比較方案、產出 implementation plan | 否 |
| Phase B：實作 | 在任務 branch 上做小範圍變更並完成 static validation，開 draft PR | 只限 allowlist |
| Phase C：收尾 | Project Maintainer 回報 client runtime 結果後，處理修正或交付 merge | 只限修正 |

每一階段結束都要回報，等 Project Maintainer 確認後才進入下一階段。

## Phase A：研究

開始新的章節、gate、系統或機制時使用。

允許：讀檔、檢查 git 狀態、檢查 mod metadata、quest 檔、KubeJS 檔，產出研究報告與 implementation plan。

禁止：修改任何檔案、執行 `packwiz refresh`、安裝 mod、commit、push。

建議執行：

```bash
git status -sb
git log --oneline --decorate --max-count=18
packwiz list
ls config/ftbquests/quests/chapters/
```

回報需包含：

- 目前狀態與相關檔案盤點（mod、章節、KubeJS／GameStages）。
- 方案比較，以及每個方案的 Experience-filter（玩家會感受到什麼）。
- 建議方向與 implementation plan：會改哪些檔案、會新增或移動哪些 reward 與 stage、手動測試要怎麼做。
- 明確寫出「Phase A 未修改任何檔案」。

## Phase B：實作

只在 Project Maintainer 核准 Phase A 的 plan 之後進行。

一般允許的變更：

- task file 指定的單一章節檔：`config/ftbquests/quests/chapters/<N>.snbt`。
- `packwiz refresh` 產生的 `index.toml` 與 `pack.toml` 變更（見下方「packwiz metadata 規則」）。

規則：

- 保留既有 reward，除非 plan 寫明要移動。
- 需要時，可以把 GameStages command reward 移到新的、真正代表完成的 quest。
- 不得修改其他章節、KubeJS 或 `mods/*.pw.toml`，不得安裝 mod。
- 不得加入 ItemStages、Palladium、Pufferfish's Skills 等大型系統，也不得實作真正的 wave、raid、Guild Threat、Dragon Disaster、裝備鎖或技能樹，除非任務明確要求。

實作後的驗證：

```bash
git diff --name-only
git diff --stat
git diff -- config/ftbquests/quests/chapters/<N>.snbt
git diff -- index.toml pack.toml
rg -n "<target_stage>|<target_gate>|gamestage add @s|type: \"kill\"|type: \"item\"" config/ftbquests/quests/chapters/<N>.snbt
rg -n "<target_stage>|<target_gate>" config/ftbquests/quests/chapters
python3 -I scripts/validate_pack_structure.py
python3 -I scripts/check_duplicate_mods.py
python3 -I scripts/check_md_links.py
```

確認事項：

1. Diff 只包含 allowlist 內的檔案。
2. 沒有 KubeJS、其他章節或 `mods/*.pw.toml` 的變更。
3. 每個目標 GameStage 只有一個 command reward 來源。
4. Command reward 使用 [`VERIFIED_FORMATS.md`](VERIFIED_FORMATS.md) 的格式。
5. 沒有 artifact 汙染（見下方清單）。

全部通過後，在任務 branch 上 commit、push，開 draft Pull Request，並附上 [`WORKFLOW.md`](WORKFLOW.md) 規定的 runtime 測試清單。CI 必須通過 static checks 與 server smoke test。

## Phase C：收尾

Project Maintainer 在 Prism Launcher 依 runtime 測試清單測試，並把結果寫回 PR。

- 結果不通過：依附上的 crash log、截圖或觀察紀錄，在同一條 branch 修正，重新驗證後 push。只修正回報的問題，不順手整理其他內容。
- 結果通過：在 PR 留下最終驗證摘要，等待 Project Maintainer merge。Agent 不 merge、不建立 tag 或 Release。

## packwiz metadata 規則

修改任何會被打包的檔案（例如 quest 章節）後，必須執行 `packwiz refresh`，否則 CI 的 index 檢查會失敗。

`RUNTIME` 任務允許的 metadata 變更只有：

- `index.toml` 中被修改檔案的 hash。
- `pack.toml` 的 `[index].hash`。

若 `index.toml` 出現其他變更（新增或移除檔案、其他檔案的 hash 改變），停止並回報；通常代表 `.packwizignore` 漏掉了某個檔案。新增、移除或升級 mod 屬於 `RUNTIME_MODS`，必須另外取得授權（task file 或 Project Maintainer 的明確指示）。

`index.toml` 與 `pack.toml` 中不得出現以下 artifact：

```text
.opencode.bak
opencode.db
opencode.db-shm
opencode.db-wal
*.mrpack
.DS_Store
RELEASE_NOTES_*.md
.claude/
```

## 第一次使用新語法

依 `AGENTS.md` 的紅線「不得臆測格式」，寫自訂物品、規則或腳本時，可以使用 [`VERIFIED_FORMATS.md`](VERIFIED_FORMATS.md) 以外的語法，但必須走以下流程：

1. 找到對應版本的來源：官方文件、mod 原始碼，或 Repo 既有檔案。版本要對上（例如 KubeJS 以 `mods/kubejs.pw.toml` 的版本為準），不得使用其他 Minecraft 版本的範例。
2. 在 PR 描述的 Authoritative sources 中列出來源連結，並標明哪些語法是第一次使用。
3. CI 通過，且 Project Maintainer 的 client runtime 測試確認行為正確。
4. 在同一個 PR 或後續的 `STATIC` PR 中，把驗證過的語法與驗證版本補進 `VERIFIED_FORMATS.md`。

## Prism 實例

Prism Launcher 的實例只用於測試與格式探索。不得把實例裡的 quest 檔或其他檔案複製回 Repo，正式修改一律在 Repo 中進行。

## Commit 訊息

沿用既有慣例，例如：

```text
Add Chapter <N> <feature name> MVP gate
docs: <摘要>
content(packwiz): <摘要>
```
