# 相容性規則

此文件定義 `Expedition Guild: Stellar Frontier` 的正式相容性規則。任何模組加入正式分支前，都必須先通過本文測試流程。

## 一、版本鎖定

| 項目 | 規則 | 備註 |
| --- | --- | --- |
| Minecraft | 1.20.1 | 不在同一分支混用其他 Minecraft 版本。 |
| Loader | Forge | 不使用 Fabric 或 Quilt 檔案。 |
| Java | 17 | 客戶端與伺服器都使用 Java 17。 |
| Create | 0.5.1j | 第一版與正式分支基準都鎖定此版本。 |
| Ad Astra | 1.15.19 for 1.20.1 Forge | 目前鎖定 `ad_astra-forge-1.20.1-1.15.19.jar`，Modrinth version ID：`ZXcgZ31q`。 |
| Create 6 | 正式分支禁止 | 不在正式分支使用 Create 6；若要研究，必須另開實驗分支。 |

## 二、Ad Astra 注意事項

| 規則 | 說明 |
| --- | --- |
| 世界資料風險 | Ad Astra 涉及維度、星球、機器、能源、太空服、火箭與世界資料。 |
| 正式世界不可移除 | 不要在正式世界建立後移除 Ad Astra，避免維度資料、方塊實體、物品與玩家位置損壞。 |
| 依賴同步安裝 | Ad Astra 的依賴需要一起安裝，缺少依賴時不可進入正式測試。 |
| Create 橋接 | Phase 1 暫不使用 Create: Ad Astra Compatibility；未來 Ad Astra x Create 加工配方改由 KubeJS 或 datapack 明確補上。 |
| 結構擴充 | 如果加入 Ad Astra: Structures Overhaul，需要確認 Resourceful Lib、Botarium、Resourceful Config。 |
| 禁止版本 | 不使用 Ad Astra 1.15.20，除非未來整包決定遷移到 Create 6。 |

## Ad Astra / Create 修復紀錄

| 項目 | 結論 |
| --- | --- |
| 問題版本 | Ad Astra 1.15.20 在 Forge 1.20.1 + Create 0.5.1j 下啟動崩潰。 |
| root cause | Ad Astra 1.15.20 的 CreateCompat 嘗試呼叫 `com/simibubi/create/api/registry/CreateRegistries`。 |
| 相容方向 | 該 API 屬於 Create 0.6.x 方向，但本包硬性鎖定 Create 0.5.1j。 |
| 修復方式 | Ad Astra 降版到 1.15.19。 |
| 修復版本 | `ad_astra-forge-1.20.1-1.15.19.jar`，Modrinth version ID：`ZXcgZ31q`。 |
| Create 狀態 | 維持 `create-1.20.1-0.5.1.j.jar`，`pin = true`。 |
| 測試結果 | Prism Launcher 測試 instance 成功進入主選單。 |
| Clean Smoke Test | PASS。測試世界：`EGSF_Phase1_CleanSmokeTest`。 |
| Smoke Test 結果 | 新世界成功建立；Create 成功載入；JEI 成功載入 Create recipe；Ad Astra 維度成功載入與儲存。 |
| log 結果 | `latest.log` 不再出現 `create_ad_astra_compat`、`Couldn't load tag create:crushed_ores`、`CreateRegistries` / `NoClassDefFoundError`。 |
| 下一步 | Phase 1 Batch 2 可定案，進入 Phase 1 Batch 3。 |

## Ad Astra 依賴檢查

| 依賴 | 必要性 | 檢查重點 |
| --- | --- | --- |
| Botarium | 必要 | 需符合 Ad Astra 版本需求，並確認為 Forge 版。 |
| Resourceful Lib | 必要 | 需符合 Ad Astra 與可能的 Structures Overhaul 版本需求。 |
| Resourceful Config | 必要 | 需符合 Ad Astra 與可能的 Structures Overhaul 版本需求。 |
| Cloth Config | 必要 | 需使用 Forge 版，不可誤放 Fabric 版。 |
| Create: Ad Astra Compatibility | Phase 1 暫緩 | 目前組合造成 crushed ore tag error，已從 Phase 1 移除。 |

## 三、Create 注意事項

| 規則 | 說明 |
| --- | --- |
| addon 版本 | Create addon 必須確認支援 Create 0.5.1j。 |
| 禁止混用 | 不要混用只支援 Create 6 的 addon。 |
| 能源橋接 | Create Crafts & Additions 會牽涉 Forge Energy 與 Create kinetic energy，需要測試能源轉換與平衡。 |
| 鐵路跨區塊 | Create Steam 'n' Rails 會影響交通與多人區塊載入問題，需要測試火車跨區塊。 |

## Create addon 檢查

| addon | 檢查重點 | 失敗處理 |
| --- | --- | --- |
| Create: Ad Astra Compatibility | 配方、礦物處理、Create 與 Ad Astra 版本矩陣。 | Phase 1 已移除；未來若需要加工配方，優先用 KubeJS 或 datapack 明確補配方。 |
| Create Crafts & Additions | Forge Energy 與 Create kinetic energy 的轉換、發電與耗能平衡。 | 若能源路線過強，先限制配方或延後階段。 |
| Create Steam 'n' Rails | 火車、鐵路、跨區塊移動、多人同步。 | 若跨區塊卡車或掉車，暫停正式加入。 |
| Create Slice & Dice | Farmer's Delight 與 Create 食品自動化。 | 若配方衝突，先保留 Farmer's Delight，延後 addon。 |

## 四、測試流程

每次新增、移除或升降模組版本，都要以乾淨測試環境執行以下流程。

| 順序 | 測試項目 | 通過條件 |
| --- | --- | --- |
| 1 | 客戶端能否啟動 | 可進入主選單，沒有 mod loading failed、missing dependency 或 mixin crash。 |
| 2 | 伺服器能否啟動 | Dedicated server 可啟動完成並顯示可接受連線。 |
| 3 | 新世界能否建立 | 新世界可正常產生，不在生成階段崩潰。 |
| 4 | 玩家能否進入 | 玩家可連入伺服器並停留至少 10 分鐘。 |
| 5 | JEI 是否顯示配方 | Create、Ad Astra 與主要新增模組配方可查詢。 |
| 6 | Create Ponder 是否正常 | Create Ponder 可開啟，沒有材質、動畫或崩潰問題。 |
| 7 | Ad Astra 星球維度是否能進入 | 目標星球或太空維度可進入，玩家資料不損壞。 |
| 8 | 火箭是否能發射 | 火箭可組裝、加燃料、發射與返回。 |
| 9 | Create 是否能處理 Ad Astra 礦物 | Phase 1 不依賴相容 addon；未來由 KubeJS 或 datapack 明確補配方後再測。 |
| 10 | 關服重開後世界是否正常 | 關服、重開、重新進入後，世界、玩家位置、維度與方塊實體正常。 |

## 多人基礎層測試紀錄

| 項目 | 結果 |
| --- | --- |
| Phase | Phase 1 Batch 3A - Multiplayer Foundation |
| 判定 | PASS |
| 測試世界 | `EGSF_Phase1_Batch3A_MultiplayerT` |
| Simple Voice Chat | Client/server 初始化正常；整合單機測試中 server 成功啟動；authentication / validation 完成。 |
| FTB Teams | Network receiver 正常註冊。 |
| FTB Chunks | Network receiver 正常註冊。 |
| 世界儲存 | 新世界正常儲存與退出。 |
| Ad Astra | 維度仍正常儲存。 |
| Create / JEI | 仍正常載入。 |
| log 檢查 | 無 `CreateRegistries` / `NoClassDefFoundError`、無 `create_ad_astra_compat`、無 missing dependency / mod loading error / FATAL。 |

## 多人基礎層注意事項

| 項目 | 規則 |
| --- | --- |
| Simple Voice Chat | 正式多人伺服器必須確認 UDP port 開放與轉發。 |
| FTB 顯示名稱 | FTB Library / Teams / Chunks 可能顯示 `NeoForge` 字樣，但目前實際 jar 為 Forge：`ftb-library-forge-2001.2.12.jar`、`ftb-teams-forge-2001.3.2.jar`、`ftb-chunks-forge-2001.3.7.jar`。 |
| 批次控制 | 下一步是 Phase 1 Batch 3B：FTB Quests / Item Filters。不要在同一批次加入地圖、Waystones、世界生成或結構模組。 |
| Ad Astra 更新 | Ad Astra 1.15.19 顯示 outdated 可忽略；除非整包遷移到 Create 6，否則不升到 1.15.20。 |

## 任務基礎層測試紀錄

| 項目 | 結果 |
| --- | --- |
| Phase | Phase 1 Batch 3B - Quest Foundation |
| 判定 | PASS |
| 測試世界 | `EGSF_Phase1_Batch3B_QuestTest` |
| FTB Quests | Network receiver 正常註冊。 |
| Item Filters | Network receiver 正常註冊。 |
| FTB Teams / FTB Chunks | 仍正常。 |
| Simple Voice Chat | 仍正常。 |
| Create / JEI | 仍正常載入。 |
| Ad Astra | 維度仍正常儲存。 |
| log 檢查 | 無 `CreateRegistries` / `NoClassDefFoundError`、無 `create_ad_astra_compat`、無 missing dependency / mod loading error / FATAL。 |

## 任務基礎層注意事項

| 項目 | 規則 |
| --- | --- |
| FTB 顯示名稱 | FTB 顯示名稱可能含 `NeoForge`，但目前實際 jar 是 Forge。 |
| 任務內容 | FTB Quests 目前只建立任務系統骨架，尚未開始寫正式任務線。 |
| 批次控制 | 下一步是 Phase 1 Batch 3C：探索便利層。不要在下一批加入世界生成、結構、背包、料理、裝飾或戰鬥模組。 |
| Ad Astra 更新 | Ad Astra 1.15.19 顯示 outdated 可忽略；除非整包遷移到 Create 6，否則不升到 1.15.20。 |

## 探索便利層測試紀錄

| 項目 | 結果 |
| --- | --- |
| Phase | Phase 1 Batch 3C - Exploration Utility |
| 判定 | PASS |
| 測試世界 | `EGSF_Phase1_Batch3C_ExploreTest` |
| Xaero's Minimap | 成功載入。 |
| Xaero's World Map | 成功載入。 |
| Waystones | 成功載入。 |
| Balm | 作為 Waystones 依賴成功載入。 |
| FTB Quests | 仍正常。 |
| FTB Teams / FTB Chunks | 仍正常。 |
| Simple Voice Chat | 仍正常。 |
| Create / JEI | 仍正常。 |
| Ad Astra | 維度仍正常儲存。 |
| log 檢查 | 無 `CreateRegistries` / `NoClassDefFoundError`、無 `create_ad_astra_compat`、無 missing dependency / mod loading error / FATAL。 |

## 探索便利層注意事項

| 項目 | 規則 |
| --- | --- |
| Waystones config | 第一次啟動可能自動修正 `waystones-common.toml`，這是可接受項目。 |
| Xaero online check | Xaero online version check expired 可忽略。 |
| Ad Astra 更新 | Ad Astra 1.15.19 顯示 outdated 可忽略；除非整包遷移到 Create 6，否則不升到 1.15.20。 |
| 下一步 | 進入 Phase 1 Baseline Freeze，先凍結目前可玩版本、建立 commit 與 server 測試準備。 |
| 批次控制 | 不要直接繼續加入世界生成、結構、RPG 或戰鬥內容模組。 |

## 正式分支準入規則

| 結果 | 處理 |
| --- | --- |
| 10 項測試全通過 | 可進入正式分支候選。 |
| 客戶端或伺服器無法啟動 | 不可合併，先修依賴或版本。 |
| 新世界無法建立 | 不可合併，先檢查世界生成與結構模組。 |
| Ad Astra 維度或火箭流程失敗 | 不可合併，先退回太空相關變更。 |
| Create 加工或 Ponder 失敗 | 不可合併，先檢查 Create addon 版本。 |
| 關服重開後壞檔 | 不可合併，該組合視為高風險。 |
