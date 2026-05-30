# Runtime Test Plan

## Environment

- Minecraft: 1.20.1
- Loader: Forge
- Forge: 47.4.10
- Java: 17
- Pack manager: packwiz

## Start packwiz server

Command:

```bash
/Users/gastercat/go/bin/packwiz serve
```

## Prism Launcher Test

測試流程：
1. 建立 Minecraft 1.20.1 Forge 47.4.10 instance
2. Java 設為 17
3. 使用 packwiz serve 提供的 pack.toml URL 匯入或更新
4. 啟動遊戲
5. 進入主選單
6. 檢查 Mods 頁面
7. 建立新世界
8. 不要使用正式世界測試

## Client Smoke Test

目前結果：
- Prism Launcher 測試 instance 已成功進入主選單
- Ad Astra 已從 1.15.20 降到 1.15.19
- Create 維持 `create-1.20.1-0.5.1.j.jar`
- Create pin 維持 `true`
- Phase 1 Batch 2 Clean Smoke Test PASS
- Clean test world: `EGSF_Phase1_CleanSmokeTest`
- Create 成功載入
- JEI 成功載入 Create recipe
- Ad Astra 維度成功載入與儲存
- `latest.log` 不再出現 `create_ad_astra_compat`
- `latest.log` 不再出現 `Couldn't load tag create:crushed_ores`
- `latest.log` 不再出現 `CreateRegistries` / `NoClassDefFoundError`
- Phase 1 Batch 3A Multiplayer Foundation PASS
- Batch 3A test world: `EGSF_Phase1_Batch3A_MultiplayerT`
- Simple Voice Chat client/server 初始化正常
- Voice Chat server 在單機整合測試中成功啟動
- Voice Chat 完成 authentication / validation
- FTB Teams / FTB Chunks network receiver 正常註冊
- 新世界正常儲存與退出
- 沒有 missing dependency / mod loading error / FATAL
- Phase 1 Batch 3B Quest Foundation PASS
- Batch 3B test world: `EGSF_Phase1_Batch3B_QuestTest`
- FTB Quests network receiver 正常註冊
- Item Filters network receiver 正常註冊
- FTB Teams / FTB Chunks 仍正常
- Simple Voice Chat 仍正常
- Create / JEI 仍正常
- Ad Astra 維度仍正常儲存
- Phase 1 Batch 3C Exploration Utility PASS
- Batch 3C test world: `EGSF_Phase1_Batch3C_ExploreTest`
- Xaero's Minimap 成功載入
- Xaero's World Map 成功載入
- Waystones 成功載入
- Balm 作為 Waystones 依賴成功載入
- FTB Quests 仍正常

必測：
- Minecraft 能進主選單
- Mods 頁面能看到 Create
- Mods 頁面能看到 Ad Astra
- JEI 能搜尋 create
- JEI 能搜尋 ad astra
- Create Ponder 能打開
- 創造模式物品欄有 Create 物品
- 創造模式物品欄有 Ad Astra 物品

## New World Test

目前結果：新世界 smoke test 已通過。

必測：
- 建立全新測試世界
- 進入世界不崩潰
- 放置 Create 基礎機械方塊
- 放置 Ad Astra 基礎機器或火箭相關方塊
- 使用 JEI 查看 Create / Ad Astra 配方
- 不測正式世界

## Failure Criteria

任一條成立就停止新增模組：
- 遊戲無法啟動
- 主選單前崩潰
- 進世界崩潰
- Create 變成 6.x
- Ad Astra 變成 1.15.20，且整包仍鎖定 Create 0.5.1j
- Create: Ad Astra Compatibility 回到 Phase 1 並再次造成 `create:crushed_ores` tag error
- Ad Astra 缺依賴
- JEI 無法載入
- crash log 出現 mixin 或 dependency error

## Recipe Policy

- Phase 1 不使用 Create: Ad Astra Compatibility。
- Future Ad Astra x Create processing recipes should be handled by KubeJS or datapack.

## Multiplayer Smoke Test

目前結果：Phase 1 Batch 3A 已通過。

測試世界：`EGSF_Phase1_Batch3A_MultiplayerT`

必測：
- Simple Voice Chat client 初始化
- Simple Voice Chat server 初始化
- Voice Chat authentication / validation
- FTB Teams network receiver 註冊
- FTB Chunks network receiver 註冊
- 新世界儲存與退出
- Ad Astra 維度儲存
- Create / JEI 載入

正式伺服器注意事項：
- Simple Voice Chat 需要確認 UDP port。
- FTB Library / Teams / Chunks 顯示名稱可能出現 `NeoForge`，但目前實際 jar 是 Forge。

下一步：
- Phase 1 Batch 3B：FTB Quests / Item Filters。
- 不要一次加入地圖、Waystones、世界生成或結構模組。

## Quest Foundation Smoke Test

目前結果：Phase 1 Batch 3B 已通過。

測試世界：`EGSF_Phase1_Batch3B_QuestTest`

必測：
- FTB Quests network receiver 註冊
- Item Filters network receiver 註冊
- FTB Teams / FTB Chunks 仍正常
- Simple Voice Chat 仍正常
- Create / JEI 載入
- Ad Astra 維度儲存
- 無 `CreateRegistries` / `NoClassDefFoundError`
- 無 `create_ad_astra_compat`
- 無 missing dependency / mod loading error / FATAL

目前範圍：
- FTB Quests 只建立任務系統骨架。
- 尚未開始寫正式任務線。

下一步：
- Phase 1 Batch 3C：探索便利層。
- 不要在下一批加入世界生成、結構、背包、料理、裝飾或戰鬥模組。

## Exploration Utility Smoke Test

目前結果：Phase 1 Batch 3C 已通過。

測試世界：`EGSF_Phase1_Batch3C_ExploreTest`

必測：
- Xaero's Minimap 載入
- Xaero's World Map 載入
- Waystones 載入
- Balm 載入
- FTB Quests 仍正常
- FTB Teams / FTB Chunks 仍正常
- Simple Voice Chat 仍正常
- Create / JEI 仍正常
- Ad Astra 維度仍正常儲存
- 無 `CreateRegistries` / `NoClassDefFoundError`
- 無 `create_ad_astra_compat`
- 無 missing dependency / mod loading error / FATAL

可接受 log / config 行為：
- Waystones 第一次啟動會自動修正 `waystones-common.toml`。
- Xaero online version check expired 可忽略。

下一步：
- Phase 1 Baseline Freeze。
- 凍結目前可玩版本，建立 commit 與 server 測試準備。
- 不要直接繼續加入世界生成、結構、RPG 或戰鬥模組。
