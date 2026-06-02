# Progression Overview / 進度總覽

這份文件整理 Expedition Guild: Stellar Frontier 目前 FTB Quests（任務書 / 公會任務）的 Chapter 0-11 主線結構。

內容根據目前可讀取的 `config/ftbquests/quests/chapters/` 章節檔與可見的 GameStages（進度標記 / 解鎖階段）command reward 整理。這份文件只做說明，不修改任務資料。

## Reading Status Labels / 狀態標籤怎麼看

| Label | 中文 | 意思 |
|---|---|---|
| Implemented | 已實作 | Repo 目前有任務、metadata 或明確內容支撐這段流程。 |
| MVP Gate | 最小可行門檻 | 已有最低限度完成門檻，常見是 FTB Quests item task、kill task 與 GameStages reward。 |
| Framework | 框架 | 章節、stage 名稱或方向已存在，但完整玩法尚未自動化。 |
| Placeholder | 佔位內容 | 任務文字明確保留未來內容位置，不代表完整系統已完成。 |
| Planned | 計畫中 | 目前文件或任務文字有提到，但仍是未來方向。 |
| Not implemented | 未實作 | 目前 metadata 或文件顯示該系統不存在或尚未啟用。 |

## Chapter Table / 章節表

| Chapter | Current role / 目前定位 | Player experience / 玩家體驗 | Gate / stage notes | Status |
|---|---|---|---|---|
| Chapter 0: `第 0 章：遠征啟程` | 新手導引與 handbook（操作手冊）。 | 打開 FTB Quests，學會使用 JEI、Jade、地圖、Waystones（傳送石）、FTB Teams/Chunks、Simple Voice Chat，並準備起始補給。 | 目前可見任務獎勵會授予 `eg.guild.joined` 與 `eg.chapter.0.handbook`。 | Implemented / 已實作導引框架。 |
| Chapter 1: `第 1 章：三職業訓練場` | 公會基地建立與職業方向試訓。 | 選基地、建立公共箱、登記隊伍與區塊、設返航點，嘗試 Vanguard/Gunner/Arcanist 方向任務，補齊基礎物資。 | 可見 reward 會 add/remove `eg.class.vanguard`、`eg.class.gunner`、`eg.class.arcanist`，並授予 `eg.chapter.1.class_training`。 | Implemented / 已有職業 stage 基礎；不是完整技能樹。 |
| Chapter 2: `第 2 章：第一個 Boss 前準備` | Create 後勤與討伐前準備。 | 建立安山合金、傳動軸、齒輪、水車、壓力機、鐵板等基礎 Create 後勤，同時準備食物、箭矢、盾牌與偵查紀錄。 | 目前可見會授予 `eg.chapter.2.boss_prep` 與 `eg.gate.first_hunt_ready`。 | Framework / 準備框架；真正 Boss Gate 強制仍在逐步硬化。 |
| Chapter 3: `第 3 章：第一討伐令` | 第一討伐 MVP。 | 做 Vanguard/Gunner/Arcanist 作戰演習，準備補給，最後完成 Blaze 擊殺任務。 | 第一討伐完成任務可見授予 `eg.chapter.3.first_hunt`。 | MVP Gate / 最小可行門檻；不是完整 Boss chain。 |
| Chapter 4: `第 4 章：第一次守城演習` | 第一次守城 MVP。 | 準備防線材料、遠程補給、前排盾牌、照明與食物，完成 vanilla mob 防守任務。 | 目前可見授予 `eg.gate.first_defense_ready` 與 `eg.chapter.4.first_defense`。 | MVP Gate / 最小可行門檻；不是完整 wave、raid 或 invasion 系統。 |
| Chapter 5: `第 5 章：災變前兆` | 災變前兆 MVP。 | 收集調查樣本、擊退少量 vanilla mobs、閱讀 Guild Threat（公會威脅）方向說明，提交調查報告。 | 目前可見授予 `eg.chapter.5.calamity_foreshadowing` 與 `eg.gate.calamity_reported`。 | MVP Gate + Framework / 門檻加框架；Guild Threat 與災變系統尚未完整實作。 |
| Chapter 6: `第 6 章：中階職業裝備` | 中階裝備與職業裝備方向。 | 閱讀未來裝備方向，準備 Vanguard/Gunner/Arcanist 升階材料、武器記憶與神器規範素材。 | 目前可見授予 `eg.chapter.6.mid_gear` 與 `eg.gate.mid_gear_certified`。 | Framework / Placeholder；真裝備系統與裝備鎖尚未完成。 |
| Chapter 7: `第 7 章：星界遠征準備` | Ad Astra（星界遠征模組）準備。 | 整理材料分艙、Create 加工計畫、食物、照明、發射場與遠征目標。 | 目前可見授予 `eg.chapter.7.astral_prep` 與 `eg.gate.astral_license_preapproved`。 | Framework / 已有 Ad Astra 主軸；完整星界 gate 自動化尚未確認完成。 |
| Chapter 8: `第 8 章：月球 / 火星前哨站` | 星界前哨站評級方向。 | 建立降落點、短期生存、樣本箱與 B 級加工前哨規劃。 | 目前可見授予 `eg.chapter.8.outpost_rating`。 | Framework；A/S 級殖民與星界兵站仍是 Placeholder。 |
| Chapter 9: `第 9 章：跨職業融合` | 融合職業方向。 | 閱讀 Spellblade、Arcane Ballistics、Assault Vanguard、星界灌注與三職業連攜方向。 | 目前可見授予 `eg.chapter.9.hybridization` 與 `eg.gate.fusion_certified`。 | Placeholder / Planned；融合職業尚未完整實作。 |
| Chapter 10: `第 10 章：終局災厄` | 終局災厄方向。 | 閱讀禁忌研究、終局星界兵站、星界重炮、兆級數字顯示與終局 gate 佔位。 | 目前可見授予 `eg.chapter.10.endgame_calamity` 與 `eg.gate.endgame_preapproved`。 | Placeholder / Planned endgame；不是已完成終局系統。 |
| Chapter 11: `第 11 章：後終局挑戰` | 後終局檔案與未來挑戰方向。 | 閱讀神格化兵裝、太空電梯、星界兵站網、後終局龍災、稱號收藏與重複挑戰方向。 | 目前可見授予 `eg.chapter.11.postgame` 與 `eg.gate.postgame_archived`。 | Placeholder / postgame framework；目前作為後終局方向檔案。 |

## Main Arcs / 主線段落

### Onboarding / Handbook / 新手導引

Chapter 0 教玩家使用這包真正需要的工具：FTB Quests、JEI、Jade、地圖、Waystones、FTB Teams/Chunks 與 Simple Voice Chat。這是避免玩家只照原版生存節奏玩的第一道導引。

### Early Survival And Guild Setup / 初期生存與公會建立

Chapter 1 把初期生存轉成公會共同建設。重點不是只做工具，而是公共箱、隊伍、標記基地、返航點、食物、照明與第一個職業方向。

### Create Logistics / Create 後勤線

Chapter 2 開始 Create（後勤與自動化模組）支援線。目前 Create 的定位是穩定加工、可重複補給、支援戰鬥與後續星界準備，不是唯一主線。

### Hunt, Defense, And Calamity MVP Gates / 討伐、守城與災變前兆 MVP

Chapters 3、4、5 目前提供可測的 MVP 進度檢查：

- Chapter 3：透過 Blaze kill task 完成第一討伐。
- Chapter 4：透過物資提交加 zombie/skeleton kill tasks 完成第一次守城演習。
- Chapter 5：透過樣本提交加 zombie/skeleton/spider kill tasks 完成災變前兆調查。

這些不是完整 Boss、wave、raid、Guild Threat 或 Dragon Disaster 系統。

### Ad Astra / Space Preparation / 星界遠征準備

Chapters 7、8 將戰役推向 Ad Astra。現在重點是準備：材料分艙、發射規劃、前哨標準、返航路線與 Create 支援後勤。

### Future Expansion / Postgame Archive / 未來擴充與後終局檔案

Chapters 9、10、11 目前多半是 Framework 與 Placeholder，保留融合職業、終局災厄、神格化裝備、星界兵站與後終局挑戰方向。

## Current Progression Philosophy / 目前進度設計哲學

- FTB Quests 負責教玩家現在該做什麼，並標記戰役里程碑。
- GameStages 記錄玩家或隊伍的進度狀態。
- Create 支援後勤與準備，不是唯一主線。
- Ad Astra 將探索擴展到星界遠征。
- 戰鬥、Boss、職業、loot 與災變系統仍在逐步硬化。
- Alpha 文件要誠實：MVP 與 Placeholder 章節有方向價值，但不是已完成系統。
