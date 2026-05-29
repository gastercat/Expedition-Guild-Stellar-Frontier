# 相容性規則

此文件定義 `Expedition Guild: Stellar Frontier` 的正式相容性規則。任何模組加入正式分支前，都必須先通過本文測試流程。

## 一、版本鎖定

| 項目 | 規則 | 備註 |
| --- | --- | --- |
| Minecraft | 1.20.1 | 不在同一分支混用其他 Minecraft 版本。 |
| Loader | Forge | 不使用 Fabric 或 Quilt 檔案。 |
| Java | 17 | 客戶端與伺服器都使用 Java 17。 |
| Create | 0.5.1j | 第一版與正式分支基準都鎖定此版本。 |
| Ad Astra | 1.20.1 Forge | 只接受支援 Minecraft 1.20.1 Forge 的版本。 |
| Create 6 | 正式分支禁止 | 不在正式分支使用 Create 6；若要研究，必須另開實驗分支。 |

## 二、Ad Astra 注意事項

| 規則 | 說明 |
| --- | --- |
| 世界資料風險 | Ad Astra 涉及維度、星球、機器、能源、太空服、火箭與世界資料。 |
| 正式世界不可移除 | 不要在正式世界建立後移除 Ad Astra，避免維度資料、方塊實體、物品與玩家位置損壞。 |
| 依賴同步安裝 | Ad Astra 的依賴需要一起安裝，缺少依賴時不可進入正式測試。 |
| Create 橋接 | 必須加入 Create: Ad Astra Compatibility，使 Ad Astra 礦物能進入 Create 加工流程。 |
| 結構擴充 | 如果加入 Ad Astra: Structures Overhaul，需要確認 Resourceful Lib、Botarium、Resourceful Config。 |

## Ad Astra 依賴檢查

| 依賴 | 必要性 | 檢查重點 |
| --- | --- | --- |
| Botarium | 必要 | 需符合 Ad Astra 版本需求，並確認為 Forge 版。 |
| Resourceful Lib | 必要 | 需符合 Ad Astra 與可能的 Structures Overhaul 版本需求。 |
| Resourceful Config | 必要 | 需符合 Ad Astra 與可能的 Structures Overhaul 版本需求。 |
| Cloth Config | 必要 | 需使用 Forge 版，不可誤放 Fabric 版。 |
| Create: Ad Astra Compatibility | 必要 | 需同時支援 Create 0.5.1j 與目前 Ad Astra 版本。 |

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
| Create: Ad Astra Compatibility | 配方、礦物處理、Create 與 Ad Astra 版本矩陣。 | 若配方缺失或啟動失敗，先退回此 addon。 |
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
| 9 | Create 是否能處理 Ad Astra 礦物 | Ad Astra 礦物可進入 Create 加工流程，配方輸入輸出正確。 |
| 10 | 關服重開後世界是否正常 | 關服、重開、重新進入後，世界、玩家位置、維度與方塊實體正常。 |

## 正式分支準入規則

| 結果 | 處理 |
| --- | --- |
| 10 項測試全通過 | 可進入正式分支候選。 |
| 客戶端或伺服器無法啟動 | 不可合併，先修依賴或版本。 |
| 新世界無法建立 | 不可合併，先檢查世界生成與結構模組。 |
| Ad Astra 維度或火箭流程失敗 | 不可合併，先退回太空相關變更。 |
| Create 加工或 Ponder 失敗 | 不可合併，先檢查 Create addon 版本。 |
| 關服重開後壞檔 | 不可合併，該組合視為高風險。 |
