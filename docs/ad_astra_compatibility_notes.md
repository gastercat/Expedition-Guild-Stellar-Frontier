# Ad Astra 相容性筆記（歷史紀錄）

> **狀態 — `HISTORICAL_COMPATIBILITY_RECORD`**
>
> 本文件主要保存 Create `0.5.1j`／Ad Astra `1.15.19` 基線的相容性調查、crash、`PASS`、世界名稱、版本禁令與檢查程序。所有版本鎖定、禁止事項、配方方向與測試步驟只適用於當時基線，不是 `v0.8.1-friends-feedback-test` 的現行 authority。現行 packwiz metadata 為 Create `6.0.8`／Ad Astra `1.15.20`；這不表示新基線已完成 runtime test。Create: Ad Astra Compatibility 不在目前 packwiz metadata 中，不得作為預設安裝或測試步驟；任何加入都需要獨立授權。現行安裝狀態以 `COMPATIBILITY.md` 為準，現行 server/runtime 程序以 `SERVER_TEST_PROTOCOL.md` 為準。

## 當時必備模組關係

| 模組 | 關係 |
| --- | --- |
| Ad Astra | 太空探索核心。 |
| Botarium | 常見必要依賴，需與 Ad Astra 版本匹配。 |
| Resourceful Lib | 常見必要依賴，需與 Ad Astra 版本匹配。 |
| Resourceful Config | 常見必要依賴，需與 Ad Astra 版本匹配。 |
| Cloth Config | 設定介面依賴，需使用 Forge 版。 |
| Create: Ad Astra Compatibility | 必須加入，用於 Create 與 Ad Astra 的玩法銜接。 |

## 當時鎖定版本

| 項目 | 版本 |
| --- | --- |
| Create | `create-1.20.1-0.5.1.j.jar`，`pin = true`。 |
| Ad Astra | `ad_astra-forge-1.20.1-1.15.19.jar`。 |
| Ad Astra Modrinth version ID | `ZXcgZ31q`。 |
| Create: Ad Astra Compatibility | Phase 1 已移除。 |

## 當時已知不相容版本

| 版本 | 問題 | 決策 |
| --- | --- | --- |
| Ad Astra 1.15.20 | 在 Forge 1.20.1 + Create 0.5.1j 下啟動崩潰。 | 不使用，除非未來整包決定遷移到 Create 6。 |
| Create: Ad Astra Compatibility 1.0.0 | 目前組合造成 `Couldn't load tag create:crushed_ores`，缺少 `minecraft:crushed_calorite_ore`、`minecraft:crushed_desh_ore`、`minecraft:crushed_ostrum_ore`。 | Phase 1 移除，優先穩定性。 |

root cause：Ad Astra 1.15.20 的 CreateCompat 嘗試呼叫 `com/simibubi/create/api/registry/CreateRegistries`。這和 Create 0.6.x 方向相容，但本包硬性鎖定 Create 0.5.1j。

修復結果：Ad Astra 降版到 1.15.19，並移除 Create: Ad Astra Compatibility 後，Phase 1 Batch 2 Clean Smoke Test PASS。

測試世界：`EGSF_Phase1_CleanSmokeTest`。

已確認：
- Prism Launcher 成功進入主選單。
- 新世界成功建立。
- Create 成功載入。
- JEI 成功載入 Create recipe。
- Ad Astra 維度成功載入與儲存。
- `latest.log` 不再出現 `create_ad_astra_compat`。
- `latest.log` 不再出現 `Couldn't load tag create:crushed_ores`。
- `latest.log` 不再出現 `CreateRegistries` / `NoClassDefFoundError`。
- Phase 1 Batch 3A 後，Ad Astra 維度仍正常儲存。

未來若需要 Ad Astra x Create processing recipes，應由 KubeJS 或 datapack 明確補配方。

## 當時檢查順序

| 順序 | 檢查 |
| --- | --- |
| 1 | 確認所有檔案都是 Forge 版。 |
| 2 | 確認 Minecraft 版本為 1.20.1。 |
| 3 | 確認 Create 仍是 0.5.1j。 |
| 4 | 確認 Ad Astra 是 1.15.19，不是 1.15.20。 |
| 5 | 確認 Phase 1 不含 Create: Ad Astra Compatibility。 |

## 當時遊戲內測試點

| 測試 | 通過條件 |
| --- | --- |
| JEI/配方顯示 | Ad Astra 與 Create 相關配方可查詢。 |
| 材料加工 | 相容模組提供的加工路線可完成。 |
| 火箭流程 | 裝備、燃料、氧氣、發射不崩潰。 |
| 伺服器同步 | 多人觀看或操作太空相關方塊不斷線。 |

## 當時常見失敗來源

| 現象 | 可能原因 |
| --- | --- |
| missing dependency | Botarium、Resourceful Lib、Resourceful Config 或 Cloth Config 缺少或版本錯誤。 |
| wrong mod loader | 誤放 Fabric jar。 |
| Create 物品消失或配方錯誤 | Create 附屬模組版本不符合 0.5.1j。 |
| `CreateRegistries` ClassNotFound | Ad Astra 1.15.20 嘗試呼叫 Create 0.6.x 方向 API，但本包鎖定 Create 0.5.1j。 |
| `create:crushed_ores` tag error | Create: Ad Astra Compatibility 在目前組合引用不存在的 Ad Astra crushed ore item。 |
| 啟動後 mixin crash | 效能模組或相容模組版本衝突。 |
