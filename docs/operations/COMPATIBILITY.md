# 相容性（Compatibility）

本文件彙整 Expedition Guild: Stellar Frontier 目前的相容性策略。內容以本次文件整理時的 Repo 狀態為基礎，尤其是 `pack.toml`、`mods/*.pw.toml`、Release notes 與既有文件。

## 證據與狀態標籤

- `CURRENTLY_INSTALLED`：目前 `index.toml` 與對應的 `mods/*.pw.toml` metadata 中存在。
- `TESTED`：有具名 runtime test 或 Release 紀錄支持；只有 metadata 存在不構成 runtime evidence。
- `PLANNED`：設計或 roadmap 方向，不是目前安裝狀態的事實。
- `DEFERRED`：刻意排除於目前已授權範圍之外。
- `HISTORICAL`：保留較早 baseline 的證據，不是目前的相容性權威。

目前安裝狀態的權威來源是 `pack.toml`、`index.toml` 與 `mods/*.pw.toml`。歷史筆記與設計文件不得覆蓋這些檔案。`CURRENTLY_INSTALLED` 不代表已完整整合、完成平衡或通過 runtime verification。

## Minecraft／Loader

- Minecraft：`1.20.1`
- Loader：Forge
- Forge：`47.4.10`
- Java 目標版本：17
- Mod 管理器／pack format：packwiz（`packwiz:1.1.0`）

## 核心相容性原則

- 優先維持 Minecraft 1.20.1 Forge 相容性。
- 讓 Create 維持後勤主軸，而不是完整工業過載路線。
- 避免加入會把 Create 擠出原定角色的大型高複雜度工業模組組合。
- 避免早期 loot 跳過 Boss Gate、defense gate、Create 後勤或 Ad Astra 進度。
- 避免單一 Mod 的裝備數值壓過主要進度線。
- 優先採用能透過 FTB Quests、KubeJS 與 GameStages 說明並控制節奏的 Mod。
- 高風險內容應以小批次加入並執行 smoke test，避免一次大量加入 Mod。

## 已知核心系統

### 任務／進度（Quest／Progression）

- FTB Quests
- Item Filters
- Game Stages
- KubeJS
- Rhino
- Bookshelf

目前說明：FTB Quests Chapter 0-11 已存在。GameStages 獎勵與職業 stage 基礎已存在。KubeJS 目前是 passive stage naming skeleton，不是完整 gameplay automation layer。

### 效能

- Embeddium
- ModernFix
- FerriteCore
- Entity Culling
- Clumps

### 工具／地圖／多人

- JEI
- Jade
- AppleSkin
- Xaero's Minimap
- Xaero's World Map
- Waystones
- Balm
- Simple Voice Chat
- FTB Teams
- FTB Chunks
- FTB Library
- Architectury API

### Create 後勤

- 狀態：`CURRENTLY_INSTALLED`
- Metadata：`create-1.20.1-6.0.8.jar`
- Modrinth project／version：`LNytGWDc`／`8amzvn9x`
- 目前 metadata 中沒有明示的 `pin` 欄位。
- 測試狀態：v0.8.1 RC smoke-test 紀錄中為 `TESTED`。

### 太空探索

- 狀態：`CURRENTLY_INSTALLED`
- Ad Astra
- Botarium
- Resourceful Lib
- Resourceful Config
- Cloth Config API

- Metadata：`ad_astra-forge-1.20.1-1.15.20.jar`
- Modrinth project／version：`3ufwT9JF`／`Qf7QFXk2`
- 目前 metadata 中沒有明示的 `pin` 欄位。
- 測試狀態：v0.8.1 RC smoke-test 紀錄中為 `TESTED`。

### 建築／家具

- 狀態：`CURRENTLY_INSTALLED`
- Macaw's Furniture、Bridges、Doors、Fences and Walls、Lights and Lamps、Paths and Pavings、Roofs、Trapdoors 與 Windows 均存在於目前 metadata。
- `metadata` 的存在不代表已完成最終建築平衡或完整的面向玩家整合。

### 儲存

- 狀態：`CURRENTLY_INSTALLED`
- Sophisticated Backpacks、Sophisticated Core 與 Sophisticated Storage 均存在於目前 metadata。
- 測試狀態：v0.8.1 RC smoke-test 紀錄將 Sophisticated Storage／Backpacks 標記為 `TESTED`。
- Refined Storage、Applied Energistics 2 與 Storage Drawers 不存在於目前 metadata。

### 食物／農業

- 狀態：`CURRENTLY_INSTALLED`
- AppleSkin 與 Farmer's Delight 均存在於目前 metadata。
- 這項 `metadata` 證據不代表 Farmer's Delight 已通過目前 Release 的 runtime validation 或完成最終食物進度平衡。

### 戰鬥／RPG

目前 metadata 包含一層小型 RPG 與探索內容：

- Lootr、Simply Swords、Artifacts 與 Curios API 為 `CURRENTLY_INSTALLED`。
- 既有專案紀錄描述了較早的 Lootr、Simply Swords 與 Artifacts 測試，但安裝狀態本身不會把那些結果延伸到所有目前組態。
- Dungeon Crawl、Twilight Forest 與 Terramity 為 `CURRENTLY_INSTALLED`，並在 v0.8.1 RC smoke-test 紀錄中另行標記為 `TESTED`。

這是預覽相容性（preview compatibility），不是最終平衡或完整整合。Better Combat 與 Touhou Little Maid 不存在於目前 metadata，且在目前專案狀態下維持 `DEFERRED`。

Vanguard／Gunner／Arcanist 仍是設計方向與 quest／stage framework，不是已完成的 class skill systems。

### 維度／結構

Ad Astra 與 Twilight Forest 為 `CURRENTLY_INSTALLED`。Dungeon Crawl 也以結構內容存在。Blue Skies、Cataclysm、Terralith、YUNG's series 與 When Dungeons Arise 不存在於目前 metadata。不得從 metadata 存在推論已完成最終維度進度或平衡。

## 整合風險等級

| 類別 | 風險 | 原因 | 說明 |
|---|---|---|---|
| 大型工業系統 | 高 | 可能壓過 Create、增加 recipe 複雜度，或使模組包偏離公會遠征節奏。 | 只能在有明確 progression design 時加入。 |
| 高數值裝備／endgame equipment | 高 | 可能跳過 Boss Gate、defense gate 與 Ad Astra 準備。 | 需要 loot 與 stage control。 |
| Loot table 大幅改寫 | 高 | 早期結構 loot 可能繞過規劃中的進度。 | 需要 FTB Quests／KubeJS／GameStages review。 |
| 維度／Boss mega-mods | 高 | 會增加 worldgen、loot、scaling 與 progression conflicts。 | 以獨立批次測試。 |
| 武器／遺物／飾品 | 中 | 支援 RPG 目標，但可能快速扭曲平衡。 | 需要 class identity 與 loot pacing。 |
| 地城／結構內容 | 中 | 適合探索，但必須檢查 loot density 與 generation load。 | 需要新世界測試。 |
| 食物／農業 addons | 中 | 通常風險較低，但可能影響生存壓力與 Create automation。 | 保持 rewards 保守。 |
| QoL／地圖／資訊 Mod | 低 | 通常只有較低的進度風險。 | 仍須驗證 client／server side requirements。 |
| 效能 Mod | 低 | 是重要 baseline，但仍可能發生 mixin conflicts。 | 變更後執行 smoke test。 |
| 家具／建築內容 | 低 | 以低進度風險支援基地識別。 | 注意 recipe conflicts 與 block count。 |

## 明確設計決策

由目前 Repo metadata 或文件確認：

- Minecraft 鎖定為 `1.20.1`。
- Loader 為 Forge。
- Forge metadata 為 `47.4.10`。
- Java `17` 是文件記錄的 runtime target。
- Create metadata 為 `create-1.20.1-6.0.8.jar`，沒有明示的 `pin` 欄位。
- Ad Astra metadata 為 `ad_astra-forge-1.20.1-1.15.20.jar`，沒有明示的 `pin` 欄位。
- Create: Ad Astra Compatibility 不存在於目前 metadata，且在 Phase 1 發生相容性問題後被 deferred。
- KubeJS 已存在，但目前 Release notes 表示 Chapter 3-5 MVP gates 沒有新增 KubeJS gameplay logic。
- Refined Storage 不存在於目前 pack metadata。
- Applied Energistics 2 不存在於目前 pack metadata。
- Botania 不存在於目前 pack metadata。

## Create／Ad Astra 歷史相容性紀錄

狀態：`HISTORICAL`

- 在較早的 Create `0.5.1j` baseline 下，Ad Astra `1.15.20` 曾發生涉及 `com/simibubi/create/api/registry/CreateRegistries` 的 startup crash。
- 當時的歷史處置是將 Ad Astra 降級至 `1.15.19`，並從該 Phase 1 組合移除 Create: Ad Astra Compatibility。
- 舊 crash、error class 與降級處置仍是相關歷史證據，但不得覆蓋目前 Create `6.0.8`／Ad Astra `1.15.20` 的 packwiz metadata。

## 規劃中／延後內容

以下項目是 roadmap 或 planning references；除非未來 metadata 另有證據，否則不是目前已安裝系統：

- 正式 class skill tree、class gear locks 與 active class skills。
- Palladium 或 Pufferfish's Skills 評估。
- Gunner firearm line。
- Arcanist spell curve 與 magic expansion。
- 完整 Boss chain 與 Boss Gate enforcement。
- 完整 defense／wave／invasion system。
- Guild Threat 與 Dragon Disaster systems。
- Endgame calamity、divine gear 與 postgame boss rush。
- 額外維度、大型 structure mods 與 major combat content。

## 測試政策

新增、移除 Mod 或變更版本時，使用乾淨的測試流程：

1. Client 可進入 main menu。
2. Dedicated server 可以啟動。
3. 可以生成新世界。
4. Player 可以進入並保持連線。
5. JEI 顯示核心 recipes。
6. FTB Quests 可以開啟，且相關 chapters 可正確 parse。
7. GameStages rewards 可在預期位置授予。
8. Create 與 Ad Astra 核心互動仍可載入。
9. 儲存、退出、重新啟動並再次進入世界。
10. 檢查 logs 中是否有 mod loading errors、FTB Quests errors、GameStages errors、KubeJS errors 與 fatal crashes。
