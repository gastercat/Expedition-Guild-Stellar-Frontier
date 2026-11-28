# EG:SF Astral Infusion Design｜星界灌注機制設計提案

Status: design source / proposed draft — 第 9 節開放決策已由 Project Maintainer 拍板（2026-11-18），技術可行性與材料尚待驗證，尚未核准實作
Project: Expedition Guild: Stellar Frontier / 遠征公會：星界邊境
Last Updated: 2026-11-18
Use: 補齊武器記憶系統（Weapon Memory）中「Astral-Witnessed」稱號所依賴的「星界灌注」機制定義。
Do Not Use For: 當前實作真相、已核准的實作範圍，或已確認的 Ad Astra 1.15.20 材料清單。

> Note:
> 這是一份設計來源文件，內容是提案，第 9 節的決策已拍板，但不代表已核准實作。
> 本檔依賴的武器記憶系統（含 `#egsf:trackable_weapons` tag 與 Bossbane 等稱號）目前尚未實作，材料來源 Celestisynth 也尚未加入本模組包。
> 全案八份既有設計文件（01-07 + Hypixel backlog）裡完全沒有定義「星界灌注」，只有 06 號文件把「Astral cores」列為一種可能的材料類型。本檔是從零推導的提案。
> 若要確認當前實作狀態，請檢查 docs/PROGRESSION_OVERVIEW.md、docs/releases/、active FTB Quests files、KubeJS，以及 packwiz metadata。

## 0. 摘要

- 星界灌注（Astral Infusion）是武器記憶系統五個稱號之一「Astral-Witnessed」的觸發機制，定位是 Ad Astra 太空進度線的武器紀念系統，跟 Bossbane（戰鬥線）、Wallbreaker（守城線）、Dragonsunder（公會核心防禦線）是同一層級的平行系統。
- 命名邏輯：「灌注」是動作/過程，「Astral-Witnessed」是完成後武器獲得的狀態/稱號。
- 提案採兩階段設計：Stage 1 是純任務文字版（不碰 KubeJS，符合 06 號文件「先文字後 NBT」的原則），Stage 2 是後期的裝置化版本（掛進武器記憶 NBT schema）。
- 灌注依星球分別記錄，並作為前往下一個星球的進度鎖（見第 9 節決策 1）。
- 兩階段都不涉及 Guild Threat 或 Forbidden Debt——這不是禁忌力量，是正常遠征里程碑，跟 godforging 的定位不同。

## 1. 設計範圍

- 本檔只定義「星界灌注」這一個機制，不重新設計星界前哨站評級、太空電梯，或 Ad Astra 本身的星球進度。
- 本檔假設 Ad Astra 的既有進度線（月球→火星→金星/水星→後續星球）維持不變，灌注機制是掛在這條線上的附加系統。進度鎖只在既有的火箭階級上加一道條件，不改變星球的順序。
- 本檔不是實作計畫，是規劃前的機制定義；要進實作要另外走 `implementation_plan` 格式。
- 對應到 Guild Tier 骨架（03 號文件 §3），星界灌注落在 Tier 4（Ad Astra 前置與首張太空許可）到 Tier 5（星界前哨、跨職業物資流通）之間。
- 本檔只處理武器，太空裝的「見證」故事是另一個獨立提案（見第 9 節決策 4）。

## 2. 機制定義

星界灌注：玩家將一把已在追蹤範圍內的武器帶到外星世界，使其暴露於／吸收該處的星界能量，使武器獲得「Astral-Witnessed」狀態。這個過程本質上是「見證」而非「戰鬥」——不需要打倒任何生物，強調的是抵達與存在，呼應 Ad Astra 本身「exploration is the core」的定位，也符合 Experience-filter 裡「強化 Ad Astra progression」的判準。

每個星球各自記錄一次灌注，在某個星球完成灌注，是解鎖下一階火箭的條件之一。

## 3. 前提系統與依賴

- 玩家（或公會）已完成至少一次火箭發射並抵達外星世界——這是既有 Ad Astra 進度，不是新系統。
- 武器本身已在武器記憶系統的可追蹤清單內（提案使用 `#egsf:trackable_weapons` tag，這個 tag 與武器記憶系統目前都尚未建立）。
- Stage 2 版本額外依賴：Celestisynth mod 提供的 Solar Crystal（見第 6 節），這個 mod 目前不在本模組包內，加入前要先另外評估並通過 server smoke test。
- Stage 2 不依賴星界前哨站評級系統（見第 9 節決策 2），兩個系統可以分開排程。

## 4. Stage 1：MVP 純任務版本（建議優先做這版）

- 不新增任何 KubeJS 邏輯、不新增材料、不新增裝置。
- 做法：每個星球的章節任務各加一個灌注任務，由 FTB Quests 的維度任務判定玩家已抵達該星球，再搭配 item 任務確認玩家攜帶指定武器。完成後透過既有的 command reward 機制授予該星球的灌注 GameStage（沿用 v0.7.x 起各章節使用的 FTB Quests command reward 加 GameStages 授予方式）。
- 優點：完全符合 06 號文件「先 quest/lore 後 NBT」的原則，也符合 07 號文件對 v0.8.x 範圍的限制——這版可以留到章節任務推進到對應星球時再做，不需要等武器記憶的 Stage B。
- 缺點：只是文字層的「認證」，沒有寫進武器 NBT，換一把武器就等於重來；也沒有視覺上的區別（沒有 tooltip 標記）。

## 5. Stage 2：裝置化深化版本（未來 v0.9.x+）

- 新增一個「星界灌注台」裝置（命名待定），風格上可以延續 Create 工程部或 Ad Astra 自身的科技美術，避免又長出一套新的視覺語言。
- 觸發條件（KubeJS 判定）：灌注台通過 biome 檢測 + 手持已追蹤武器 + 持有足夠的 Solar Crystal（見第 6 節）+ 與灌注台互動。
  - Biome 檢測參考 Goety 的 Necrotic Brazier：灌注台只有放在 Ad Astra 星球表面的 biome 才會啟動，放在其他地方不會運作。灌注台所在的 biome 同時決定這次寫入哪一個星球的紀錄，詳見第 9 節決策 2。
- 效果：
  - 寫入武器記憶 NBT：依星球分別記錄是否完成、完成時間戳，例如 `astral_witnessed.moon`、`astral_witnessed.mars`（欄位名稱待定）。
  - 授予該星球的灌注 GameStage，並推進進度鎖（見第 9 節決策 1）。
  - 授予 Astral-Witnessed 稱號與一次性提示，沿用武器記憶系統規劃中的 titles.js 模式（這個 KubeJS 檔案目前尚未建立）。
  - 視覺上建議只接稀有度外框/tooltip 系統的既有呈現方式（04 號文件 §6 已經設計好的稀有度外框），不要另外做專屬光效——避免每個系統都自己發明一套視覺語言。
- 這版才是真正「掛進」武器記憶 NBT schema 的版本，會用到 schema 的擴充欄位（schema 是否先擴充尚未決定，見第 7 節）。

## 6. 材料：Celestisynth 的 Solar Crystal

- 灌注材料改用 Celestisynth 的 `celestisynth:solar_crystal`，取代原提案的 Sky Stone 與 Etrium 合成材料。
- 以下是從 Celestisynth `1.20.1-1.3.3` jar 內容讀到的 static evidence，尚未在本模組包做 runtime 驗證：
  - Celestisynth 授權為 MIT，Modrinth 上有 Forge 1.20.1 版本（最新為 `1.20.1-1.3.4`），必要前置是 GeckoLib（本模組包已有）與 playerAnimator（本模組包沒有）。
  - Solar Crystal 是方塊，挖掘後掉落本身。它只出現在 Nether 生態域的「solar crater」地表結構，生成機率為 1/85，Nether 要塞等結構的戰利品箱也可能出現。
  - Celestisynth 本身也用 Solar Crystal 做 Solar Crystal 盔甲與 Solaris 武器，玩家可能會把材料優先拿去做裝備。
- Solar Crystal 在 Nether 取得，跟「星界」的主題不完全吻合，但決定保留 Nether 生成（第 9 節決策 3）。玩家在上太空前就能準備材料，月球與火星的灌注不會卡在材料上，敘事可以寫成「在地獄的高溫中凝結的太陽結晶」。
- 曾考慮的替代方案：用 datapack 覆寫 Celestisynth 的 biome modifier，改成生成在 Ad Astra 的水星或金星（水星的 `solar_power` 是 64，是所有星球中最高的）。這樣材料要到 tier 3 星球才拿得到，月球與火星的灌注就需要另一種材料，solar crater 結構能不能在 Nether 以外生成也要 runtime 測試，因此暫不採用。

## 7. 與武器記憶 NBT schema 的關係

- 武器記憶 NBT schema 要不要先擴充完整欄位，目前尚未決定。如果決定現在就擴充，`astral_witnessed` 系列欄位（依星球分別記錄是否達成與時間戳）現在就可以先保留欄位名，Stage 1 版本先不寫入，等 Stage 2 才真正賦值。
- 這樣 Stage 1 上線時不會動到 schema，Stage 2 上線時也不需要 migration。

## 8. 與其他系統的連結

- 跟公會兵裝進化（04 號文件 §4）的關係：可以把「完成星界灌注」設計成解鎖進化任務的其中一種觸發條件（跟擊敗 Boss、防禦事件並列），但不是必要連結，先當作未來可選的擴充點記下來，不是這次要做的事。
- 跟星界前哨站評級系統的關係：Stage 2 不要求前哨站評級達標（見第 9 節決策 2），之後如果要加成或額外獎勵，再另外提案。
- 不連結 Guild Threat / Forbidden Debt——星界灌注是正常遠征成就，不是禁忌力量，跟 God-Forged（依賴 Avaritia 神格化）的定位不同，不應該共用同一套「代價」邏輯。

## 9. 決策紀錄

以下決策由 Project Maintainer 於 2026-11-18 拍板。

### 決策 1：分星球記錄，並做成進度鎖

Astral-Witnessed 依星球分別記錄（月球、火星、金星、水星、Glacio 各一次）。在某個星球完成灌注，是解鎖下一階火箭的條件，技術不可行時改用 GameStages 控制任務進度。

Ad Astra `1.15.20` 的可行性（static evidence，尚未 runtime 驗證）：

- Ad Astra 本身沒有依玩家鎖星球的機制。星球需要的火箭階級寫在 `data/ad_astra/planets/*.json` 的 `tier` 欄位（月球 1、火星 2、金星與水星 3、Glacio 4），config 的 `disabledPlanets` 是整個 server 共用的設定。
- 火箭是在 NASA Workbench 用 `ad_astra:nasa_workbench` recipe type 製作，recipe 是一般的 JSON，KubeJS 可以移除並重新加入。
- 建議做法：移除 tier 2 到 tier 4 火箭的原本配方，重新加入多一個「航線許可」材料的版本。航線許可只能從該星球的灌注任務 reward 取得，例如帶有特定 NBT 的物品，KubeJS 以 strict NBT 比對，因此不需要新增 mod，鎖住的是整個團隊共用的火箭製作。
- 退而求其次：只在 FTB Quests 設任務依賴，加上 GameStages 記錄。這樣玩家仍然可以直接做下一階火箭飛過去，只是後面的任務不會開放。
- 金星與水星同為 tier 3，兩者擇一完成灌注即可解鎖 tier 4（Glacio）。另一個星球的灌注是 optional，仍然會記錄並授予稱號，但不是進度鎖的條件。

### 決策 2：人在外星球、biome 檢測通過、材料足夠就能灌注

Stage 2 不要求星界前哨站評級達標，所以兩個系統可以分開開發，第 10 節原本「前哨評級先、灌注台後」的排序限制取消。

環境檢測採用 biome 檢測，做法參考 Goety 的 Necrotic Brazier。Goety `2.5.36.1` 的 Necrotic Brazier 只有放在 Deep Dark biome 才會點燃運作，投入材料後會慢慢抽取周圍 Soul Candlestick 的 Soul Energy，抽滿才產出成品，中途被打斷就吐回所有材料，已消耗的能量也不會返還。灌注台沿用前半段的概念：

- 灌注台只有放在 Ad Astra 星球表面的 biome 才會啟動，軌道、Overworld 與其他維度都不會運作。
- 灌注台所在的 biome 決定寫入哪一個星球的紀錄。Ad Astra `1.15.20` 的星球表面 biome 如下：

| 星球 | Biome |
| --- | --- |
| 月球 | `ad_astra:lunar_wastelands` |
| 火星 | `ad_astra:martian_wastelands`、`ad_astra:martian_canyon_creek`、`ad_astra:martian_polar_caps` |
| 金星 | `ad_astra:venus_wastelands`、`ad_astra:infernal_venus_barrens` |
| 水星 | `ad_astra:mercury_deltas` |
| Glacio | `ad_astra:glacio_snowy_barrens`、`ad_astra:glacio_ice_peaks` |

- 實作上可以用 KubeJS 建立 `#egsf:astral_infusion/<星球>` 這類 biome tag，與灌注台互動時讀取所在位置的 biome 再比對 tag，不需要新增 mod。這是 static evidence 推得的做法，尚未 runtime 驗證。
- 灌注過程也沿用 Necrotic Brazier 的後半段：放入武器與 Solar Crystal 後不會立刻完成，而是經過一段時間慢慢消耗材料，消耗完才寫入紀錄並歸還武器。中途被打斷時，武器原樣歸還，已消耗的 Solar Crystal 不返還。
- 打斷條件至少包含灌注台被破壞、玩家取出武器或材料、灌注台所在 biome 不再符合。以下細節尚待定義：
  - 灌注需要的時間，以及要不要依星球調整。例如依 `data/ad_astra/planets/*.json` 的 `solar_power`（水星 64、月球 24、Glacio 14、火星 12、金星 8），讓陽光越強的星球灌注越快。
  - 玩家離開灌注台多遠算打斷。
  - 灌注進行中的視覺與音效提示。
- 實作上需要記錄每座灌注台的進度並持續計時。KubeJS 可能要用 custom block 搭配 block entity，或把進度存在 server 的 persistent data 再用 tick 事件推進，兩種做法都要先確認 KubeJS `2001.6.5` 是否支援，尚未驗證。

### 決策 3：材料改用 Celestisynth 的 Solar Crystal

詳見第 6 節。加入 Celestisynth 要新增 Celestisynth 與 playerAnimator 兩個 mod，要先通過 server smoke test 與 client runtime 測試。Solar Crystal 保留 Celestisynth 原本的 Nether 生成，不搬到外星球。

### 決策 4：先只限武器

維持跟其他四個稱號一致。太空裝（Netherite Space Suit / Jet Suit）的「見證」故事之後另外提案。

## 10. 風險

- 材料風險：Celestisynth 尚未在本模組包驗證相容性，它新增的武器與盔甲也可能影響 Vanguard 的職業定位與平衡。
- 進度鎖風險：火箭配方改由任務 reward 解鎖後，任務設定一旦出錯，玩家就會卡在某個星球。實作時要在 runtime 測試裡逐階確認每一把火箭都做得出來。
- 灌注過程風險：慢慢消耗的設計會讓玩家在星球上被怪物或環境打斷，Solar Crystal 本身又是稀有材料（Nether 生成機率 1/85），浪費太多會讓人挫折。打斷條件與灌注時間要在 runtime 測試裡調整。
- 範圍蔓延風險：一旦把灌注台做成裝置，容易被要求越做越複雜（多星球效果、多材料配方），要靠 MVP 邊界（第 11 節）守住。

## 11. MVP 邊界

- 現在（本次規劃）：只確認機制定義與決策，不寫任何 KubeJS，不新增材料，不新增裝置。
- Stage 1 上線時：只做維度任務 + item 任務 + command reward，不碰 NBT。進度鎖若在 Stage 1 就實作，要另外開任務，因為它會修改 Ad Astra 的火箭配方。
- Stage 2 之前必須先有：武器記憶 Stage A 已穩定、Celestisynth 已加入本模組包並通過測試。
- 不要在 Stage 1、2 都還沒做的情況下，先把公會兵裝進化的「星界灌注觸發進化」連結做出來——那是第 8 節提到的未來可選項，不是這次範圍。

## 12. 未來用途

- 第 9 節已拍板，可以把本檔內容併入武器記憶系統的 `implementation_plan`，或作為獨立的 Stage 2 任務規劃來源。
- 使用本檔時，搭配 `docs/design/03_EGSF_Class_Progression_Calamity_Layer.md`（Guild Tier 定位）與 `docs/design/04_EGSF_System_Integration.md`（Space Elevator / 星界物流章節）一起看。
- 不要把本檔當成已核准的實作範圍或已驗證的材料清單。
- 若要確認當前實作狀態，請檢查 active FTB Quests、KubeJS、packwiz metadata，以及 `docs/PROGRESSION_OVERVIEW.md`。
