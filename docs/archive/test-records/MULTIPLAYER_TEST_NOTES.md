# Multiplayer Test Notes（歷史測試紀錄）

> **歷史權威界線 — `HISTORICAL_TEST_RECORD`**
>
> 本文件保存 Create `0.5.1j`／Ad Astra `1.15.19` 基線時期的規劃、測試、`PASS`、規則、世界名稱與當時的 `Next Step`。這些內容只適用於當時的測試基線，不是 `v0.8.1-friends-feedback-test` 的現行安裝或 runtime authority，也不得用來宣稱 Create `6.0.8`／Ad Astra `1.15.20` 已完成 runtime test。現行安裝狀態以 packwiz metadata 與 `COMPATIBILITY.md` 為準；現行 server/runtime 程序以 `SERVER_TEST_PROTOCOL.md` 為準。

## Phase 1 Batch 3A - Multiplayer Foundation

判定：PASS

測試世界：`EGSF_Phase1_Batch3A_MultiplayerT`

## 當時 Installed Mods

| 模組 | 狀態 | 備註 |
| --- | --- | --- |
| Simple Voice Chat | 通過 | Client/server 初始化正常。 |
| FTB Teams | 通過 | Network receiver 正常註冊。 |
| FTB Chunks | 通過 | Network receiver 正常註冊。 |

## 當時 Automatic Dependencies

| 依賴 | 實際 jar | 備註 |
| --- | --- | --- |
| Architectury API | `architectury-9.2.14-forge.jar` | 由 FTB 系列自動加入。 |
| FTB Library | `ftb-library-forge-2001.2.12.jar` | 顯示名稱可能含 `NeoForge`，但實際 jar 是 Forge。 |

## 當時 Test Results

| 測試項目 | 結果 |
| --- | --- |
| Prism Launcher 啟動 | PASS |
| Simple Voice Chat client 初始化 | PASS |
| Simple Voice Chat server 初始化 | PASS |
| Voice Chat authentication / validation | PASS |
| FTB Teams network receiver | PASS |
| FTB Chunks network receiver | PASS |
| 新世界儲存與退出 | PASS |
| Ad Astra 維度儲存 | PASS |
| Create / JEI 載入 | PASS |
| `CreateRegistries` / `NoClassDefFoundError` | 未出現 |
| `create_ad_astra_compat` | 未出現 |
| Missing dependency / Mod loading error / FATAL | 未出現 |

## 當時 Server Notes

| 項目 | 注意事項 |
| --- | --- |
| Simple Voice Chat | 正式多人伺服器需要確認 UDP port 開放與轉發。 |
| FTB 顯示名稱 | FTB Library / Teams / Chunks 在顯示名稱可能出現 `NeoForge` 字樣，但目前實際 jar 是 Forge。 |
| Ad Astra outdated 提示 | Ad Astra 1.15.19 顯示 outdated 可忽略；禁止升到 1.15.20，除非整包遷移到 Create 6。 |

## 當時 Next Step

Phase 1 Batch 3B：FTB Quests / Item Filters。已通過。

下一步：Phase 1 Batch 3C：探索便利層。

Phase 1 Batch 3C 已通過。下一步是 Phase 1 Baseline Freeze。

不要直接繼續加入世界生成、結構、RPG 或戰鬥模組。
