# Exploration Test Notes

## Phase 1 Batch 3C - Exploration Utility

判定：PASS

測試世界：`EGSF_Phase1_Batch3C_ExploreTest`

## Installed Mods

| 模組 | 狀態 | 備註 |
| --- | --- | --- |
| Xaero's Minimap | 通過 | 成功載入。 |
| Xaero's World Map | 通過 | 成功載入。 |
| Waystones | 通過 | 成功載入。 |

## Automatic Dependencies

| 依賴 | 狀態 | 備註 |
| --- | --- | --- |
| Balm | 通過 | 作為 Waystones 依賴成功載入。 |

## Existing Systems

| 系統 | 結果 |
| --- | --- |
| FTB Quests | 仍正常 |
| FTB Teams | 仍正常 |
| FTB Chunks | 仍正常 |
| Simple Voice Chat | 仍正常 |
| Create / JEI | 仍正常 |
| Ad Astra 維度 | 仍正常儲存 |

## Log Checks

| 檢查項目 | 結果 |
| --- | --- |
| `CreateRegistries` / `NoClassDefFoundError` | 未出現 |
| `create_ad_astra_compat` | 未出現 |
| Missing dependency | 未出現 |
| Mod loading error | 未出現 |
| FATAL | 未出現 |

## Accepted Notes

| 項目 | 說明 |
| --- | --- |
| Waystones config | 第一次啟動會自動修正 `waystones-common.toml`，這是可接受項目。 |
| Xaero online check | Xaero online version check expired 可忽略。 |
| Ad Astra outdated 提示 | Ad Astra 1.15.19 顯示 outdated 可忽略；禁止升到 1.15.20，除非整包遷移到 Create 6。 |

## Next Step

Phase 1 Baseline Freeze。

先凍結目前可玩版本，建立 commit 與 server 測試準備。

不要直接繼續加入世界生成、結構、RPG 或戰鬥模組。
