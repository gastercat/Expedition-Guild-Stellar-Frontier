# Quest Test Notes（歷史測試紀錄）

> **歷史權威界線 — `HISTORICAL_TEST_RECORD`**
>
> 本文件保存 Create `0.5.1j`／Ad Astra `1.15.19` 基線時期的規劃、測試、`PASS`、規則、世界名稱與當時的 `Next Step`。這些內容只適用於當時的測試基線，不是 `v0.8.1-friends-feedback-test` 的現行安裝或 runtime authority，也不得用來宣稱 Create `6.0.8`／Ad Astra `1.15.20` 已完成 runtime test。現行安裝狀態以 packwiz metadata 與 `COMPATIBILITY.md` 為準；現行 server/runtime 程序以 `SERVER_TEST_PROTOCOL.md` 為準。

## Phase 1 Batch 3B - Quest Foundation

判定：PASS

測試世界：`EGSF_Phase1_Batch3B_QuestTest`

## 當時 Installed Mods

| 模組 | 狀態 | 備註 |
| --- | --- | --- |
| FTB Quests | 通過 | Network receiver 正常註冊。 |
| Item Filters | 通過 | Network receiver 正常註冊。 |

## 當時 Existing Systems

| 系統 | 結果 |
| --- | --- |
| FTB Teams | 仍正常 |
| FTB Chunks | 仍正常 |
| Simple Voice Chat | 仍正常 |
| Create / JEI | 仍正常 |
| Ad Astra 維度 | 仍正常儲存 |

## 當時 Log Checks

| 檢查項目 | 結果 |
| --- | --- |
| `CreateRegistries` / `NoClassDefFoundError` | 未出現 |
| `create_ad_astra_compat` | 未出現 |
| Missing dependency | 未出現 |
| Mod loading error | 未出現 |
| FATAL | 未出現 |

## 當時 Notes

| 項目 | 注意事項 |
| --- | --- |
| FTB 顯示名稱 | 可能含 `NeoForge`，但目前實際 jar 是 Forge。 |
| Ad Astra outdated 提示 | Ad Astra 1.15.19 顯示 outdated 可忽略；禁止升到 1.15.20，除非整包遷移到 Create 6。 |
| 任務內容 | FTB Quests 目前只建立任務系統骨架，尚未開始寫正式任務線。 |

## 當時 Next Step

Phase 1 Batch 3C：探索便利層。已通過。

下一步：Phase 1 Baseline Freeze。

不要直接繼續加入世界生成、結構、RPG 或戰鬥模組。
