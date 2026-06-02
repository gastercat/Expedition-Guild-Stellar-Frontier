# Expedition Guild: Stellar Frontier

中文名：遠征公會：星界邊境

## 這是什麼？

Expedition Guild: Stellar Frontier 是一個 Minecraft 1.20.1 Forge alpha 模組包，核心目標是做成「遠征公會式多人進度戰役包」，不是單純把很多模組堆在一起的 kitchen sink。

玩家的出發點是加入公會、跟著 FTB Quests 了解目前目標、建立基地與後勤，逐步推進戰鬥、守城、Create 產線、Ad Astra 星界遠征，以及後續更高階的災厄與裝備成長內容。

目前 repo 已經有任務章節、GameStages 階段標記基礎、Create / Ad Astra / 多人便利 / 效能基線。部分中後期系統仍是任務文案與 progression 框架，尚未代表完整自動化玩法或完整職業技能已完成。

## 核心玩法

- 加入公會，建立或加入 FTB Teams。
- 跟著 FTB Quests 推進 Chapter 0 起始手冊與後續章節。
- 建立基地、公共箱、返航點、地圖標記與 Create 後勤。
- 探索地城、準備討伐、完成 Boss Gate / defense gate 的任務層目標。
- 逐步解鎖 Create 後勤、Ad Astra 星界遠征與高階戰鬥方向。
- 多人分工：探索、補給、後勤、戰鬥、建築、太空前哨。
- 三職業構想：Vanguard、Gunner、Arcanist，作為未來職業技能與裝備路線的設計方向。

## 目前版本狀態

Latest visible release tag / notes in this repo: `v0.7.3-alpha`.

Current development state: alpha documentation pass.

`pack.toml` 仍標示 pack version `0.1.0`，而 git tag / release notes 已整理到 `v0.7.3-alpha`。因此請以 release notes 與 changelog 作為目前開發脈絡，以 pack metadata 版本作為尚未同步的打包資訊看待。

## 已有主軸

根據目前 repo 內容，已可確認的主軸包括：

- FTB Quests progression：`config/ftbquests/quests/` 有 Chapter 0-11。
- GameStages progression flags：Chapter milestones 與 gate stage 已透過 FTB Quests command rewards 建立基礎。
- KubeJS stage naming skeleton：目前是命名/常數骨架，不是完整 gameplay logic。
- Create logistics line：Create `0.5.1j` 已在 pack metadata 中固定並 pin。
- Ad Astra stellar exploration line：Ad Astra `1.15.19` 與必要依賴已在 pack metadata 中。
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

Design direction / planned system:

- Vanguard：近戰、坦克、Boss 決鬥、前排承壓，後期 Boss 戰定位強。
- Gunner：槍械或遠程、守城、清怪、火力支援，守城與群怪場景定位強。
- Arcanist：魔法、控場、AOE、治療、召喚與功能解法。

目前 repo 內職業主要是 FTB Quests 任務層認證與 GameStages class stage foundation；尚未完成 Palladium、Pufferfish's Skills、正式技能樹、職業裝備鎖或完整法術曲線。

## 給朋友的開始方式

1. 進入新世界。
2. 打開 FTB Quests。
3. 先看 Chapter 0 / Handbook。
4. 跟著公會任務建立集合點、公共物資、返航點與地圖標記。
5. 不要只挖礦；盡早分工探索、後勤、戰鬥與基地建設。

## 注意事項

- 這是 alpha pack，平衡與任務流程仍會調整。
- 部分系統目前是任務/文案/進度框架，未必已完整自動化。
- 測試時請回報 crash、quest parsing error、無法完成的任務、過早取得的 loot、過強裝備與伺服器同步問題。
- 不要自行升級 Create 或 Ad Astra；目前相容性鎖定請看 [COMPATIBILITY.md](COMPATIBILITY.md)。

## 文件入口

- [CHANGELOG.md](CHANGELOG.md)
- [COMPATIBILITY.md](COMPATIBILITY.md)
- [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md)
- [docs/releases/INDEX.md](docs/releases/INDEX.md)
- [MODLIST.md](MODLIST.md)
- [QUEST_DESIGN.md](QUEST_DESIGN.md)
- [SERVER_TEST_PROTOCOL.md](SERVER_TEST_PROTOCOL.md)
