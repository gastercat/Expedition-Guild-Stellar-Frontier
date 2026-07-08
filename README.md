# Expedition Guild: Stellar Frontier

中文名：遠征公會：星界邊境

## 這是什麼？

Expedition Guild: Stellar Frontier 是一個 Minecraft 1.20.1 Forge Alpha（測試版）模組包，核心目標是做成「遠征公會式多人進度戰役包」，不是單純把很多模組堆在一起的 kitchen sink。

玩家的出發點是加入公會、打開 FTB Quests（任務書 / 公會任務）了解目前目標、建立基地與後勤，逐步推進戰鬥、守城、Create（後勤與自動化模組）產線、Ad Astra（星界遠征模組）太空遠征，以及後續更高階的災厄與裝備成長內容。

目前 repo 已經有任務章節、GameStages（進度標記 / 解鎖階段）基礎、Create / Ad Astra / 多人便利 / 效能基線。部分中後期系統仍是 MVP（最小可行版本）、Framework（框架）或 Placeholder（佔位內容），不代表完整自動化玩法或完整職業技能已完成。

## 核心玩法

- 加入公會，建立或加入 FTB Teams。
- 跟著 FTB Quests 推進 Chapter 0 起始手冊與後續章節。
- 建立基地、公共箱、返航點、地圖標記與 Create 後勤。
- 探索地城、準備討伐、完成 Boss Gate / defense gate 的任務層目標。
- 逐步解鎖 Create 後勤、Ad Astra 星界遠征與高階戰鬥方向。
- 多人分工：探索、補給、後勤、戰鬥、建築、太空前哨。
- 三職業構想：Vanguard（近戰前排）、Gunner（槍械遠程）、Arcanist（魔法職業），作為未來職業技能與裝備路線的設計方向。

## 目前版本狀態

Latest visible release tag / notes in this repo: `v0.8.1-friends-feedback-test`.

Current development state: v0.8.1 Friends Feedback Test pre-release; waiting for friends feedback on early quest feel, reward feel, and Create / Ad Astra preview clarity.

`pack.toml` 仍標示 pack version `0.1.0`，而 GitHub pre-release / release notes 已整理到 `v0.8.1-friends-feedback-test`。因此請以 release notes 與 changelog 作為目前開發脈絡，以 pack metadata 版本作為尚未同步的打包資訊看待。

## 已有主軸

根據目前 repo 內容，已可確認的主軸包括：

- FTB Quests progression：`config/ftbquests/quests/` 有 Chapter 0-11。
- GameStages progression flags：Chapter milestones 與 gate stage 已透過 FTB Quests command rewards 建立基礎。
- KubeJS stage naming skeleton：目前是命名/常數骨架，不是完整 gameplay logic。
- Create logistics line：Create `1.20.1-6.0.8` 已在 pack metadata 中。
- Ad Astra stellar exploration line：Ad Astra `1.20.1-1.15.20` 與必要依賴已在 pack metadata 中。
- Multiplayer support：FTB Teams、FTB Chunks、Simple Voice Chat、Waystones、Xaero's Minimap / World Map。
- Performance baseline：Embeddium、ModernFix、FerriteCore、Entity Culling、Clumps。
- Player utility：JEI、Jade、AppleSkin。
- Building / life content：Macaw's Furniture 已在 pack metadata 中。
- Postgame archive direction：FTB Quests Chapter 11 已存在，內容主要是 postgame / archive direction。

已安裝但尚未深度整合或仍屬框架的內容：

- GameStages gate：已有 stage rewards，但不是所有 gameplay locks 都完整實作。
- KubeJS：目前沒有新增 gameplay event logic。
- 職業技能：尚未完成真技能樹或裝備鎖。
- Boss / defense / calamity：目前有 Chapter 3/4/5 的 FTB Quests MVP kill / supply gates，不代表完整 Boss chain、wave system、Guild Threat 或 Dragon Disaster 已完成。

## 職業構想

Design direction / planned system（設計方向 / 計畫中系統）：

- Vanguard（近戰前排）：近戰、坦克、Boss 決鬥、前排承壓，後期 Boss 戰定位強。
- Gunner（槍械遠程）：槍械或遠程、守城、清怪、火力支援，守城與群怪場景定位強。
- Arcanist（魔法職業）：魔法、控場、AOE、治療、召喚與功能解法。

目前 repo 內職業主要是 FTB Quests 任務層認證與 GameStages class stage foundation；尚未完成 Palladium、Pufferfish's Skills、正式技能樹、職業裝備鎖或完整法術曲線。

## 給朋友的開始方式

1. 進入新世界。
2. 打開 FTB Quests。
3. 先看 Chapter 0 / Handbook。
4. 跟著公會任務建立集合點、公共物資、返航點與地圖標記。
5. 不要只挖礦；盡早分工探索、後勤、戰鬥與基地建設。

## 專案導覽

如果你是第一次看這個 repo，可以先照這個順序讀：

1. `README.md`：確認這個模組包的玩家體驗、目前狀態與朋友測試入口。
2. `docs/PLAYER_GUIDE.md`：給實際進服玩家看的開始方式。
3. `docs/TESTING_GUIDE.md`：記錄 crash、卡關、任務問題與平衡回饋。
4. `docs/PROGRESSION_OVERVIEW.md`：確認 Chapter 0-11 的目前進度與哪些內容仍是 MVP / Framework / Placeholder。
5. `docs/design/INDEX.md`：查設計來源與 MOC，但不要把設計文件當成已實作真相。

## 協作與回饋流程

朋友測試回饋請先以「能不能重現、玩家當下卡在哪裡、是否影響多人進度」為核心。最有用的回饋包含：

- 發生在哪個世界、章節、任務或遊玩階段。
- 玩家原本想做什麼，實際發生什麼。
- 是否有 crash、log、截圖、任務無法完成、loot 過早取得、裝備過強或伺服器同步問題。
- 若是平衡感受，請描述「太難 / 太簡單 / 太拖 / 不知道下一步」的具體情境。

## Issue 與 Pull Request 最小規則

- 開 Issue 前，先確認是否能用 `docs/TESTING_GUIDE.md` 的格式描述問題。
- Issue 標題請保留可搜尋的關鍵字，例如 crash、FTB Quests、loot、server sync、Chapter 編號或相關 mod 名稱。
- Pull Request 請保持小範圍，說明玩家體驗會改變什麼，以及是否只改文件。
- 不要在同一個 Issue 或 Pull Request 混合 mod add/update、FTB Quests、KubeJS、release flow 與文件整理。
- 朋友預覽階段的文件補充可以很小；先讓下一位朋友知道要看哪裡、怎麼回報，就已經足夠。

## 注意事項

- 這是 alpha pack，平衡與任務流程仍會調整。
- 部分系統目前是任務/文案/進度框架，未必已完整自動化。
- 測試時請回報 crash、quest parsing error、無法完成的任務、過早取得的 loot、過強裝備與伺服器同步問題。
- 不要自行升級 Create 或 Ad Astra；目前相容性鎖定請看 [COMPATIBILITY.md](COMPATIBILITY.md)。

## 文件入口

- [docs/PLAYER_GUIDE.md](docs/PLAYER_GUIDE.md) - 給第一次進服朋友看的玩家指南。
- [docs/PROGRESSION_OVERVIEW.md](docs/PROGRESSION_OVERVIEW.md) - Chapter 0-11 進度總覽與狀態標籤。
- [docs/TESTING_GUIDE.md](docs/TESTING_GUIDE.md) - 測試清單與 bug 回報模板。
- [CHANGELOG.md](CHANGELOG.md) - 總覽式 changelog。
- [COMPATIBILITY.md](COMPATIBILITY.md) - 相容性策略與版本鎖定。
- [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md) - 專案結構與安全修改邊界。
- [docs/releases/INDEX.md](docs/releases/INDEX.md) - release notes 索引。
- [MODLIST.md](MODLIST.md)
- [QUEST_DESIGN.md](QUEST_DESIGN.md)
- [SERVER_TEST_PROTOCOL.md](SERVER_TEST_PROTOCOL.md)
