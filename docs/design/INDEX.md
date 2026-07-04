# EG:SF docs/design 設計來源索引

`docs/design/` 收錄 Expedition Guild: Stellar Frontier 的設計來源文件。這些文件可以包含設計意圖、未來計畫、已拒絕想法、backlog 項目、歷史脈絡與探索筆記。它們不是當前實作真相。

若要確認當前實作與進度真相，請優先檢查以下來源：

- `docs/PROGRESSION_OVERVIEW.md`
- `docs/releases/`
- `config/ftbquests/quests/` 底下的 active FTB Quests files
- `kubejs/` 底下的 KubeJS files
- packwiz metadata，例如 `pack.toml`、`index.toml`、`mods/*.pw.toml`
- compatibility notes，例如 `COMPATIBILITY.md`

設計文件應作為決策用的來源材料閱讀，而不是某個系統已安裝、已實作、已平衡，或已在遊戲內啟用的證據。它們不應覆蓋 release notes、packwiz metadata、active quest files、KubeJS files，或 compatibility documentation。

## 設計來源文件庫

Phase 1 與 Phase 2 建立了初始 corpus 結構。Phase 3A-3F 完成第一輪擴寫。Phase 4B 將各檔案狀態標頭從 skeleton status 更新為 expanded status。

- `01_EGSF_Genesis_Design.md` - 專案 identity、原始 loop、技術 baseline，以及 guild campaign 方向。
- `02_EGSF_Direction_Reframe_Player_Feel.md` - requester 需求、玩家體感修正、Chapter 0 onboarding、reward pacing、Inventory-first（現況盤點優先）與 Experience-filter（體驗篩選）框架。
- `03_EGSF_Class_Progression_Calamity_Layer.md` - Vanguard / 前鋒、Gunner / 銃士、Arcanist / 奧術師、公會階級、職業配置指引、Boss Gate（Boss 關卡門檻）、類 Calamity 進度設計，以及未來 v0.9.x 職業定位擴展參考。
- `04_EGSF_System_Integration.md` - Create guild engineering、storage/logistics、公會兵裝進化、龍災、公會核心、rarity presentation、endgame/godforging，以及星界後勤。
- `05_EGSF_Mod_Integration_Scope_Review.md` - mod 候選評估層、Inventory-first（現況盤點優先）、Experience-filter（體驗篩選），以及已接受方向 / 候選 / 延後 / 拒絕的 direction rules。
- `06_EGSF_RPG_Server_Archaeology.md` - 將 RPG server archaeology 轉譯成可重用的 EG:SF 設計原則，而不是複製舊系統。
- `07_EGSF_Friends_Content_Preview.md` - v0.8.x 朋友內容預覽 / content visibility layer，不是完整 class 或 endgame 系統。
- `backlog/EGSF_Hypixel_Style_Life_RPG_Backlog.md` - 僅列入 backlog / 尚未實作的 lightweight Hypixel-style life/RPG systems。

## 應該使用哪個檔案

- 專案 identity、原始概念與技術 baseline：`01_EGSF_Genesis_Design.md`
- 玩家體感、onboarding、rewards，以及安全實作框架：`02_EGSF_Direction_Reframe_Player_Feel.md`
- 職業角色、公會階級、職業配置指引、Boss Gate（Boss 關卡門檻）、轉職 / 副職 / 融合職業方向：`03_EGSF_Class_Progression_Calamity_Layer.md`
- Create 後勤、龍災、公會核心、godforging、大型系統與星界後勤：`04_EGSF_System_Integration.md`
- mod add/remove decisions、候選分類與 scope review：`05_EGSF_Mod_Integration_Scope_Review.md`
- 舊 RPG server inspiration，以及可重用的 progression / loot / armory 原則：`06_EGSF_RPG_Server_Archaeology.md`
- v0.8.x 面向朋友體驗的 content preview decisions：`07_EGSF_Friends_Content_Preview.md`
- 必須暫時停放的 lightweight life/RPG side-system ideas：`backlog/EGSF_Hypixel_Style_Life_RPG_Backlog.md`
- 當前實作真相：使用 `docs/PROGRESSION_OVERVIEW.md`、`docs/releases/`、active FTB Quests files、KubeJS files、packwiz metadata，以及 `docs/design/` 以外的 compatibility docs。

## Legacy Notes

以下檔案是早期 quest design drafts：

- `QUEST_DESIGN.md`
- `docs/design/questline.md`

`docs/design/questline.md` 仍可僅作歷史參考。它可能描述較舊的 Chapter 0-7 planning，且不應覆蓋目前 Chapter 0-11 的 FTB Quests 實作。

檢查當前 quest truth 時，請使用 `config/ftbquests/quests/` 底下的 active FTB Quests files 與 `docs/PROGRESSION_OVERVIEW.md`。
