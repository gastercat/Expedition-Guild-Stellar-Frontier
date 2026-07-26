# 模組清單（歷史規劃紀錄）

> **歷史權威界線 — `HISTORICAL_TEST_RECORD`**
>
> 本文件保存 Create `0.5.1j`／Ad Astra `1.15.19` 基線時期的規劃、測試、`PASS`、規則、世界名稱與當時的 `Next Step`。這些內容只適用於當時的測試基線，不是 `v0.8.1-friends-feedback-test` 的現行安裝或 runtime authority，也不得用來宣稱 Create `6.0.8`／Ad Astra `1.15.20` 已完成 runtime test。現行安裝狀態以 packwiz metadata 與 `COMPATIBILITY.md` 為準；現行 server/runtime 程序以 `SERVER_TEST_PROTOCOL.md` 為準。

> 狀態說明：此文件是規劃清單，不代表 jar 已下載或存在。所有模組後續仍需逐一確認 Minecraft 1.20.1、Forge、Java 17 與實際依賴版本。

## 當時固定環境

| 項目 | 值 | 備註 |
| --- | --- | --- |
| Minecraft | 1.20.1 | 全階段固定。 |
| Loader | Forge | 不使用 Fabric 或 Quilt。 |
| Java | 17 | 客戶端與伺服器一致。 |
| Create | 0.5.1j | 第一版鎖定，不使用 Create 6。 |

## Phase 1：Frontier Demo

目標：朋友伺服器可以穩定玩 1～2 週。

| 模組名稱 | 分類 | 加入階段 | 玩家體驗目的 | 是否客戶端必裝 | 是否伺服器必裝 | 相容性備註 |
| --- | --- | --- | --- | --- | --- | --- |
| Minecraft | 基礎 | Phase 1：Frontier Demo | 提供固定遊戲版本基準。 | 是 | 是 | 鎖定 1.20.1。 |
| Forge | Loader | Phase 1：Frontier Demo | 提供模組載入環境。 | 是 | 是 | 必須使用 1.20.1 Forge 相容 build。 |
| Java | 執行環境 | Phase 1：Frontier Demo | 統一客戶端與伺服器執行環境。 | 是 | 是 | 鎖定 Java 17。 |
| Create | 工業核心 | Phase 1：Frontier Demo | 建立公會工業、動力、加工與物流核心。 | 是 | 是 | 鎖定 Create 0.5.1j，不使用第六版。 |
| Ad Astra | 太空核心 | Phase 1：Frontier Demo | 提供火箭、太空裝備與星球遠征主線。 | 是 | 是 | Stable：`ad_astra-forge-1.20.1-1.15.19.jar`，Modrinth version ID：`ZXcgZ31q`；不升到 1.15.20，除非整包遷移到 Create 6。 |
| Botarium | Ad Astra 依賴 | Phase 1：Frontier Demo | 支援 Ad Astra 所需的共用 API。 | 是 | 是 | 版本需符合 Ad Astra 要求。 |
| Resourceful Lib | Ad Astra 依賴 | Phase 1：Frontier Demo | 支援 Ad Astra 與 Resourceful 系列功能。 | 是 | 是 | 版本需符合 Ad Astra 要求。 |
| Resourceful Config | Ad Astra 依賴 | Phase 1：Frontier Demo | 支援 Ad Astra 設定系統。 | 是 | 是 | 版本需符合 Ad Astra 要求。 |
| Cloth Config | 設定依賴 | Phase 1：Frontier Demo | 提供設定介面與相關依賴。 | 是 | 是 | 必須使用 Forge 版，不可誤放 Fabric 版。 |
| FTB Quests | 任務系統 | Phase 1：Frontier Demo | 建立公會委託、教學與進度線。 | 是 | 是 | Batch 3B network receiver 已通過 smoke test；目前只建立任務系統骨架，尚未寫正式任務線。 |
| FTB Teams | 隊伍系統 | Phase 1：Frontier Demo | 支援多人隊伍、共享任務與公會分組。 | 是 | 是 | 需確認任務進度共享行為。 |
| FTB Chunks | 區塊管理 | Phase 1：Frontier Demo | 提供據點保護、地圖區塊與載入管理。 | 是 | 是 | 需限制 chunk loading，避免伺服器負載失控；Batch 3A network receiver 已通過 smoke test。 |
| FTB Library | 任務依賴 | Phase 1：Frontier Demo | 支援 FTB Quests、Teams、Chunks。 | 是 | 是 | 依實際 FTB 系列需求加入。 |
| JEI | 配方查詢 | Phase 1：Frontier Demo | 降低 Create 與 Ad Astra 配方學習成本。 | 是 | 建議 | 伺服器通常可不必裝，但整包測試建議保持一致。 |
| Simple Voice Chat | 多人語音 | Phase 1：Frontier Demo | 支援遠征與建設時的即時溝通。 | 是 | 是 | Batch 3A 初始化通過；正式伺服器需開啟對應 UDP port。 |
| Xaero's Minimap | 地圖 | Phase 1：Frontier Demo | 提供探索定位與據點標記。 | 是 | 視選型 | Batch 3C 已通過 smoke test；Xaero online version check expired 可忽略。 |
| Xaero's World Map | 地圖 | Phase 1：Frontier Demo | 提供世界地圖與遠征路線管理。 | 是 | 視選型 | Batch 3C 已通過 smoke test。 |
| Waystones | 傳送便利 | Phase 1：Frontier Demo | 降低多人集合與據點往返成本。 | 是 | 是 | Batch 3C 已通過 smoke test；第一次啟動可能自動修正 `waystones-common.toml`。 |
| Balm | Waystones 依賴 | Phase 1：Frontier Demo | 支援 Waystones。 | 是 | 是 | 作為 Waystones 自動依賴加入，Batch 3C 已通過 smoke test。 |
| Farmer's Delight | 食物與農業 | Phase 1：Frontier Demo | 提供穩定補給與後勤玩法。 | 是 | 是 | 可與 Create 自動農場形成早期供應鏈。 |
| Sophisticated Backpacks | 背包 | Phase 1：Frontier Demo | 提升探索、挖礦與太空遠征攜帶能力。 | 是 | 是 | 需避免過早取得過強升級。 |
| Sophisticated Storage | 儲物 | Phase 1：Frontier Demo | 提供基地倉儲升級與整理工具。 | 是 | 是 | 與 Storage Drawers 定位需區分。 |
| Storage Drawers | 倉儲 | Phase 1：Frontier Demo | 支援大量基礎材料與 Create 產線儲存。 | 是 | 是 | 需測試抽屜互動與物流效能。 |
| Terralith | 世界生成 | Phase 1：Frontier Demo | 提升主世界探索品質，不增加新維度。 | 是 | 是 | 必須在新世界啟用；需測試與結構模組生成密度。 |
| Towns and Towers | 結構生成 | Phase 1：Frontier Demo | 增加主世界聚落與探索目標。 | 是 | 是 | 需與 Terralith、YUNG's 系列共同測新世界。 |
| When Dungeons Arise | 結構生成 | Phase 1：Frontier Demo | 提供朋友伺服器初中期冒險據點。 | 是 | 是 | 結構規模大，需觀察生成與戰利品平衡。 |
| YUNG's 系列精選 | 結構改造 | Phase 1：Frontier Demo | 改善原版地牢、礦坑、要塞等探索體驗。 | 是 | 是 | 精選加入，不一次放滿；需避免結構過密。 |
| Embeddium | 客戶端效能 | Phase 1：Frontier Demo | 改善渲染效能與 FPS。 | 是 | 否 | 客戶端模組；需測試與其他渲染相關模組相容。 |
| ModernFix | 效能與記憶體 | Phase 1：Frontier Demo | 改善啟動、記憶體與部分載入效率。 | 建議 | 是 | 可同裝客戶端與伺服器；遇到 mixin crash 時優先隔離測試。 |
| FerriteCore | 記憶體優化 | Phase 1：Frontier Demo | 降低記憶體使用量。 | 建議 | 是 | 常用於伺服器與客戶端，需與 ModernFix 共同測。 |
| Entity Culling | 客戶端效能 | Phase 1：Frontier Demo | 減少不可見實體渲染成本。 | 是 | 否 | 客戶端模組。 |
| Clumps | 經驗球優化 | Phase 1：Frontier Demo | 降低大量經驗球造成的實體負載。 | 是 | 是 | 伺服器端效益明顯，客戶端保持一致較簡單。 |

## Phase 2：Guild Specialization

目標：每個玩家開始有職業路線。

| 模組名稱 | 分類 | 加入階段 | 玩家體驗目的 | 是否客戶端必裝 | 是否伺服器必裝 | 相容性備註 |
| --- | --- | --- | --- | --- | --- | --- |
| Create Steam 'n' Rails | Create 擴充 | Phase 2：Guild Specialization | 強化鐵路物流、公會交通與工程師路線。 | 是 | 是 | 必須確認支援 Create 0.5.1j。 |
| Create Crafts & Additions | Create 擴充 | Phase 2：Guild Specialization | 提供電力橋接與更完整的機械科技路線。 | 是 | 是 | 能源轉換需平衡，避免壓過 Ad Astra 進度。 |
| Create Slice & Dice | Create 擴充 | Phase 2：Guild Specialization | 串接 Farmer's Delight 與 Create 食品自動化。 | 是 | 是 | 需確認 Farmer's Delight 與 Create 版本相容。 |
| Better Combat | 戰鬥系統 | Phase 2：Guild Specialization | 提供戰鬥職業更明確的操作手感。 | 是 | 是 | 需測試武器模組與伺服器同步。 |
| Simply Swords | 武器 | Phase 2：Guild Specialization | 提供戰鬥玩家的成長裝備。 | 是 | 是 | 需平衡傷害，避免壓過探險難度。 |
| Iron's Spells 'n Spellbooks | 魔法職業 | Phase 2：Guild Specialization | 建立法術支援、輸出與輔助職業線。 | 是 | 是 | 需測試與 Better Combat、Curios API、戰利品表相容。 |
| Artifacts | 飾品與探索獎勵 | Phase 2：Guild Specialization | 增加探索型角色的稀有裝備目標。 | 是 | 是 | 通常需要 Curios API。 |
| Relics | 飾品與成長裝備 | Phase 2：Guild Specialization | 提供長期養成與職業特色裝備。 | 是 | 是 | 需確認與 Curios API、Artifacts 不重疊過度。 |
| Curios API | 飾品依賴 | Phase 2：Guild Specialization | 支援飾品欄位與裝備系統。 | 是 | 是 | Artifacts、Relics、部分魔法模組可能需要。 |
| Alex's Mobs | 生物與探索 | Phase 2：Guild Specialization | 增加探索、生態與素材取得路線。 | 是 | 是 | 需觀察實體數量與伺服器負載。 |
| Supplementaries | 建築與互動 | Phase 2：Guild Specialization | 增加基地細節、實用互動與生活感。 | 是 | 是 | 需注意 Moonlight Lib 等實際依賴。 |
| Chipped | 建築裝飾 | Phase 2：Guild Specialization | 提供建築職業更多方塊變體。 | 是 | 是 | 方塊量大，需測啟動與配方載入。 |
| Macaw's 系列 | 建築裝飾 | Phase 2：Guild Specialization | 增加屋頂、門窗、家具等建築專精內容。 | 是 | 是 | 精選加入，避免一次加入過多子模組造成維護成本。 |

## Phase 3：Stellar Expansion

目標：大型模組包擴充。

| 模組名稱 | 分類 | 加入階段 | 玩家體驗目的 | 是否客戶端必裝 | 是否伺服器必裝 | 相容性備註 |
| --- | --- | --- | --- | --- | --- | --- |
| Twilight Forest | 維度冒險 | Phase 3：Stellar Expansion | 提供大型副本式維度與團隊探索目標。 | 是 | 是 | 不放入 Phase 1，避免第一版維度過量。 |
| Blue Skies | 維度冒險 | Phase 3：Stellar Expansion | 提供額外維度、Boss 與探索進度。 | 是 | 是 | 需與 Twilight Forest、Ad Astra 分工，避免進度線擁擠。 |
| L_Ender's Cataclysm | Boss 與地城 | Phase 3：Stellar Expansion | 提供高階團隊戰鬥與終局挑戰。 | 是 | 是 | 傷害與裝備掉落需重新平衡。 |
| Mowzie's Mobs | Boss 與生物 | Phase 3：Stellar Expansion | 增加高品質野外挑戰與戰鬥事件。 | 是 | 是 | 需測試與 Better Combat、Simply Swords 平衡。 |
| MineColonies | 城鎮經營 | Phase 3：Stellar Expansion | 擴展公會據點為 NPC 城鎮與長期建設。 | 是 | 是 | 伺服器負載高，需獨立壓力測試。 |
| Applied Energistics 2 | 儲存網路 | Phase 3：Stellar Expansion | 支援大型基地、跨星球物流與後期自動化。 | 是 | 是 | 不放入 Phase 1；加入後需重新設計儲存進度。 |
| Ad Astra: Structures Overhaul | 太空結構擴充 | Phase 3：Stellar Expansion | 擴展太空探索中的結構與遠征目標。 | 是 | 是 | 需確認支援目前 Ad Astra 版本與 Forge 1.20.1。 |

## 當時第一版明確不加入

| 模組 | 原因 |
| --- | --- |
| Applied Energistics 2 | 延後至 Phase 3，避免第一版科技複雜度過高。 |
| MineColonies | 延後至 Phase 3，避免伺服器測試變因過多。 |
| L_Ender's Cataclysm | 延後至 Phase 3，避免戰鬥平衡過早膨脹。 |
| Twilight Forest | 延後至 Phase 3，避免維度內容過量。 |
| Blue Skies | 延後至 Phase 3，避免維度內容過量。 |
| Create 6 | 與第一版 Create 0.5.1j 鎖定策略衝突。 |
| Ad Astra 1.15.20 | 與 Create 0.5.1j 啟動相容性衝突；除非整包遷移到 Create 6，否則不使用。 |
| Create: Ad Astra Compatibility | Phase 1 Clean Smoke Test 前移除；目前組合造成 `create:crushed_ores` tag error。 |

## Phase 1 Batch 2 定案

| 項目 | 結果 |
| --- | --- |
| Clean Smoke Test | PASS |
| 測試世界 | `EGSF_Phase1_CleanSmokeTest` |
| Stable Create | 0.5.1j |
| Stable Ad Astra | 1.15.19 |
| Create: Ad Astra Compatibility | 已從 Phase 1 移除。 |
| log 檢查 | 不再出現 `create_ad_astra_compat`、`Couldn't load tag create:crushed_ores`、`CreateRegistries` / `NoClassDefFoundError`。 |
| 後續加工配方 | 未來 Ad Astra x Create processing recipes 應由 KubeJS 或 datapack 明確補上。 |

## Phase 1 Batch 3A 定案

| 項目 | 結果 |
| --- | --- |
| 名稱 | Multiplayer Foundation |
| Clean Smoke Test | PASS |
| 測試世界 | `EGSF_Phase1_Batch3A_MultiplayerT` |
| 新增模組 | Simple Voice Chat、FTB Teams、FTB Chunks |
| 自動依賴 | Architectury API、FTB Library |
| Voice Chat | Client/server 初始化正常，整合單機測試中 server 啟動，authentication / validation 完成。 |
| FTB network | FTB Teams / FTB Chunks network receiver 正常註冊。 |
| 既有核心 | Ad Astra 維度仍正常儲存；Create / JEI 仍正常載入。 |
| log 檢查 | 無 `CreateRegistries` / `NoClassDefFoundError`、無 `create_ad_astra_compat`、無 missing dependency / mod loading error / FATAL。 |
| 注意 | FTB 顯示名稱可能含 `NeoForge`，但實際 jar 為 Forge。 |
| 下一步 | Phase 1 Batch 3B：FTB Quests / Item Filters。不要一次加入地圖、Waystones、世界生成或結構模組。 |

## Phase 1 Batch 3B 定案

| 項目 | 結果 |
| --- | --- |
| 名稱 | Quest Foundation |
| Smoke Test | PASS |
| 測試世界 | `EGSF_Phase1_Batch3B_QuestTest` |
| 新增模組 | FTB Quests、Item Filters |
| FTB Quests | Network receiver 正常註冊。 |
| Item Filters | Network receiver 正常註冊。 |
| 既有多人基礎 | FTB Teams / FTB Chunks 仍正常；Simple Voice Chat 仍正常。 |
| 既有核心 | Create / JEI 仍正常；Ad Astra 維度仍正常儲存。 |
| log 檢查 | 無 `CreateRegistries` / `NoClassDefFoundError`、無 `create_ad_astra_compat`、無 missing dependency / mod loading error / FATAL。 |
| 注意 | FTB 顯示名稱可能含 `NeoForge`，但實際 jar 為 Forge；FTB Quests 目前只建立任務系統骨架，尚未開始寫正式任務線。 |
| 下一步 | Phase 1 Batch 3C：探索便利層。不要在下一批加入世界生成、結構、背包、料理、裝飾或戰鬥模組。 |

## Phase 1 Batch 3C 定案

| 項目 | 結果 |
| --- | --- |
| 名稱 | Exploration Utility |
| Smoke Test | PASS |
| 測試世界 | `EGSF_Phase1_Batch3C_ExploreTest` |
| 新增模組 | Xaero's Minimap、Xaero's World Map、Waystones |
| 自動依賴 | Balm |
| 地圖 | Xaero's Minimap / Xaero's World Map 成功載入。 |
| 傳送便利 | Waystones 成功載入。 |
| 依賴 | Balm 成功載入。 |
| 既有任務 / 多人基礎 | FTB Quests、FTB Teams / FTB Chunks、Simple Voice Chat 仍正常。 |
| 既有核心 | Create / JEI 仍正常；Ad Astra 維度仍正常儲存。 |
| log 檢查 | 無 `CreateRegistries` / `NoClassDefFoundError`、無 `create_ad_astra_compat`、無 missing dependency / mod loading error / FATAL。 |
| 注意 | Waystones 第一次啟動會自動修正 `waystones-common.toml`；Xaero online version check expired 可忽略。 |
| 下一步 | Phase 1 Baseline Freeze。先凍結目前可玩版本，建立 commit 與 server 測試準備，不要直接繼續加大型內容模組。 |

## 當時待決策項目

| 項目 | 建議 |
| --- | --- |
| 地圖模組 | 已選 Xaero's Minimap + Xaero's World Map。 |
| YUNG's 系列 | 先挑 Better Mineshafts、Better Dungeons、Better Strongholds、Better Desert Temples 等少量核心項目測試。 |
| Macaw's 系列 | 先挑建築需求最高的子模組，不一次放滿整套。 |
| 效能模組 | 先建立無效能模組基準，再逐一加入 Embeddium、ModernFix、FerriteCore、Entity Culling、Clumps。 |
