# 專案結構（Project Structure）

本文件提供未來本機 Agent 與維護者使用的低風險專案地圖，說明各主要路徑的用途，以及除非任務明確要求 gameplay 或 pack metadata 變更，否則應避免修改的位置。

| 路徑 | 用途 | 是否可安全修改？ | 說明 |
|---|---|---|---|
| `README.md` | 面向玩家的專案總覽與快速開始。 | 安全 | 僅限文件。應透明呈現 alpha 狀態。 |
| `CHANGELOG.md` | 簡短 changelog 索引與 Release 摘要。 | 安全 | 不要在此貼入完整 Release notes；連結至 `docs/releases/`。 |
| `PROGRESS.md` | 目前階段、允許的任務與 STOP POINT。 | 謹慎 | 這是 Agent 的現況權威；只在任務授權時更新，且必須與 `main` 的實際內容一致。 |
| `AGENTS.md` | 所有 AI Agent 共用的入口與紅線。 | 謹慎 | 規則變更必須經 Project Maintainer 核准。 |
| `CLAUDE.md` | Claude Code 專用補充，以 `@AGENTS.md` 匯入共用規則。 | 謹慎 | 不得放寬 `AGENTS.md` 的規則。 |
| `CONTRIBUTING.md` | 協作者最短入口。 | 安全 | 僅限文件。 |
| `docs/operations/COMPATIBILITY.md` | 相容性策略、風險等級、已確認鎖定與 planned／deferred systems。 | 安全 | 所有宣稱必須以 Repo metadata 與既有筆記為依據。 |
| `docs/operations/SERVER_TEST_PROTOCOL.md` | Server／runtime test procedure。 | 安全 | 僅限文件。 |
| `docs/` | 專案文件、design notes、Release 索引與歷史紀錄。 | 安全 | 整個資料夾已列在 `.packwizignore`，不會進入 pack。 |
| `docs/collaboration/` | 協作入口、Harness Guide、工作流程、執行程序、已驗證格式、提示詞與回報格式、任務索引。 | 謹慎 | 規則類文件的變更必須經 Project Maintainer 核准。 |
| `docs/operations/` | 現行的相容性策略、server 測試程序與本專案結構圖。 | 謹慎 | 現行權威文件；所有宣稱必須以 Repo metadata 與 evidence 為依據。 |
| `docs/player/`、`docs/testing/` | 玩家指南、測試指南與朋友測試指南。 | 安全 | 僅限文件。 |
| `docs/archive/` | 歷史規劃、phase 紀錄、測試紀錄、quest backups、legacy reference 與舊版 Agent 指南。 | 除非明確要求，否則不得修改 | 只作為歷史 evidence，不是現行安裝、程序或 runtime 結果。 |
| `docs/archive/planning/MODLIST.md` | 早期以規劃為主的 Mod 清單與 phase notes。 | 除非明確要求，否則不得修改 | 部分項目是 `PLANNED`，不是已安裝內容。目前安裝狀態以 packwiz metadata 為準。 |
| `docs/archive/planning/QUEST_DESIGN.md` | 早期 quest 與 progression design notes。 | 除非明確要求，否則不得修改 | 接近 gameplay design；不得依此重寫 quest logic。 |
| `docs/releases/` | 整理後的 Release notes。 | 安全 | 在此保存各版本 Release note files 與 `INDEX.md`。 |
| `docs/operations/PROJECT_STRUCTURE.md` | 本結構與安全邊界指南。 | 安全 | Repo layout 改變時更新。 |
| `docs/design/` | 設計專用文件。 | 謹慎 | 可能描述 planned progression；不得宣稱 planned systems 已實作。 |
| `docs/archive/quest-backups/` | 歷史 FTB Quests backups。 | 除非明確要求，否則不得修改 | 視為 archived snapshots，不再新增；改以 git 歷史保存。不得作為 active quest files 使用。 |
| `pack.toml` | packwiz pack metadata：pack name、author、pack version、pack format、Minecraft／Forge versions 與 index hash。 | 除非明確要求，否則不得修改 | 修改此檔屬於 pack metadata work。本任務明確不處理。 |
| `index.toml` | packwiz file index 與 hashes。 | 除非明確要求，否則不得修改 | 通常由 `packwiz refresh` 更新；docs-only pass 不得手動修改。 |
| `.packwizignore` | 從 packwiz exports 與 index 排除的檔案。 | 謹慎 | 修改可能影響 exported packs。 |
| `mods/*.pw.toml` | 已安裝 Mod 的 packwiz mod metadata。 | 除非明確要求，否則不得修改 | docs-only work 不得新增、移除、更新、重新命名或 pin Mod。 |
| `config/` | 模組包內含的 Minecraft／Mod config files。 | 謹慎 | Config 變更可能改變 gameplay、server behavior 或 generated pack contents。 |
| `config/ftbquests/` | Active FTB Quests config 與 quest data。 | 除非明確要求，否則不得修改 | 這是 gameplay progression content。 |
| `config/ftbquests/quests/` | Active quest database：chapter groups、chapter files 與 quest data。 | 除非明確要求，否則不得修改 | docs-only pass 不得修改 task logic、rewards、command rewards 或 chapter gates。 |
| `config/ftbquests/quests/chapters/` | Active FTB Quests chapter SNBT files。 | 除非明確要求，否則不得修改 | 目前 Repo 有 Chapter 0-11。應視為 active gameplay data。 |
| `kubejs/` | KubeJS scripts 與未來 gameplay integration logic。 | 除非明確要求，否則不得修改 | 目前 script 是 stage naming skeleton。docs-only task 不得新增 event logic。 |
| `kubejs/server_scripts/eg_stages.js` | 現有 GameStages naming skeleton。 | 除非明確要求，否則不得修改 | docs-only work 不得變更 gate names 或 gameplay hooks。 |
| `scripts/` | Validation／check scripts，CI 也會執行。 | 謹慎 | Audit 時可安全執行；修改 script 必須有明確授權。 |
| `scripts/ci/` | CI 專用 scripts，例如 server smoke test。 | 謹慎 | 修改會影響所有 PR 的 CI 結果。 |
| `.github/` | Pull Request template 與 GitHub Actions workflow。 | 謹慎 | 修改 workflow 會影響所有 PR 的 CI 結果。 |
| `.claude/` | Claude Code 的 Repo 專用設定與 skills。 | 謹慎 | 已列在 `.packwizignore`。 |
| `scripts/legacy/add_phase1_core_mods.sh` | 新增 Phase 1 core mods 的歷史 helper script。 | 除非明確要求，否則不得修改 | 執行此檔可能改變 mod metadata。 |
| `scripts/legacy/add_phase1_ad_astra_mods.sh` | 新增 Ad Astra 相關 Mod 的歷史 helper script。 | 除非明確要求，否則不得修改 | 執行此檔可能改變 mod metadata。 |
| `.gitignore` | Git ignore rules。 | 謹慎 | 可能影響哪些檔案會出現在 commits 中。 |
| Repo root 的 `RELEASE_NOTES_*.md` | 過去分散保存 Release notes 的位置。 | 謹慎 | 本次整理已將 Release notes 移至 `docs/releases/`。未來 notes 應放在該處。 |

## Agent 的安全邊界

進行 documentation-only pass 時，可安全修改的範圍限於：

- `README.md`
- `CHANGELOG.md`
- `docs/player/`、`docs/testing/`
- `docs/releases/*.md`
- `docs/` 下的新文件

修改以下項目時必須格外謹慎：

- `PROGRESS.md`、`AGENTS.md`、`CLAUDE.md`
- `docs/collaboration/`
- `docs/operations/`
- `docs/design/`
- `.packwizignore`
- `.gitignore`
- `.github/`
- `scripts/`

除非任務明確要求，否則不得修改：

- `pack.toml`
- `index.toml`
- `mods/*.pw.toml`
- `config/ftbquests/`
- `config/ftbquests/quests/`
- `config/ftbquests/quests/chapters/`
- `kubejs/`
- `docs/archive/`
- 會新增或更新 Mod 的 helper scripts（`scripts/legacy/`）

## 本次盤點確認的目前 Repo 事實

- Pack format 為 packwiz。
- Minecraft 為 `1.20.1`。
- Forge 為 `47.4.10`。
- Java `17` 是 documentation target；Java 未宣告於目前 packwiz version metadata。
- Create metadata 確認為 `create-1.20.1-6.0.8.jar`。
- Ad Astra metadata 確認為 `ad_astra-forge-1.20.1-1.15.20.jar`。
- 目前兩份 Mod metadata 均沒有明示的 `pin` 欄位。
- 目前 Release context 為 `v0.8.1-friends-feedback-test`。
- FTB Quests active chapters 從 `0.snbt` 至 `11.snbt` 均存在。
- `kubejs/server_scripts/eg_stages.js` 存在。
- Release notes 現已整理於 `docs/releases/`。
