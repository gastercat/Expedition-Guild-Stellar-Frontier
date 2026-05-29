# Ad Astra 相容性筆記

## 必備模組關係

| 模組 | 關係 |
| --- | --- |
| Ad Astra | 太空探索核心。 |
| Botarium | 常見必要依賴，需與 Ad Astra 版本匹配。 |
| Resourceful Lib | 常見必要依賴，需與 Ad Astra 版本匹配。 |
| Resourceful Config | 常見必要依賴，需與 Ad Astra 版本匹配。 |
| Cloth Config | 設定介面依賴，需使用 Forge 版。 |
| Create: Ad Astra Compatibility | 必須加入，用於 Create 與 Ad Astra 的玩法銜接。 |

## 檢查順序

| 順序 | 檢查 |
| --- | --- |
| 1 | 確認所有檔案都是 Forge 版。 |
| 2 | 確認 Minecraft 版本為 1.20.1。 |
| 3 | 確認 Create 仍是 0.5.1j。 |
| 4 | 確認 Ad Astra 與依賴版本互相符合。 |
| 5 | 確認 Create: Ad Astra Compatibility 支援目前 Create 與 Ad Astra 組合。 |

## 遊戲內測試點

| 測試 | 通過條件 |
| --- | --- |
| JEI/配方顯示 | Ad Astra 與 Create 相關配方可查詢。 |
| 材料加工 | 相容模組提供的加工路線可完成。 |
| 火箭流程 | 裝備、燃料、氧氣、發射不崩潰。 |
| 伺服器同步 | 多人觀看或操作太空相關方塊不斷線。 |

## 常見失敗來源

| 現象 | 可能原因 |
| --- | --- |
| missing dependency | Botarium、Resourceful Lib、Resourceful Config 或 Cloth Config 缺少或版本錯誤。 |
| wrong mod loader | 誤放 Fabric jar。 |
| Create 物品消失或配方錯誤 | Create 附屬模組版本不符合 0.5.1j。 |
| 啟動後 mixin crash | 效能模組或相容模組版本衝突。 |
