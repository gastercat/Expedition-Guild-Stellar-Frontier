# 測試清單

> Note / 注意：這是較舊的測試清單參考。最新給玩家與測試者看的清單與 bug 回報模板請看 [TESTING_GUIDE.md](TESTING_GUIDE.md)。

## 結構測試

| 項目 | 指令 | 通過條件 |
| --- | --- | --- |
| 專案結構 | `python3 scripts/validate_pack_structure.py` | 必要檔案都存在。 |
| 模組清單規則 | `python3 scripts/check_modlist.py` | 鎖定與排除規則通過。 |
| jar 重複檢查 | `python3 scripts/check_duplicate_mods.py` | 無重複或錯誤 loader 線索。 |

## 啟動測試

| 項目 | 通過條件 |
| --- | --- |
| 客戶端啟動 | 進入主選單，無模組載入錯誤。 |
| 單人世界 | 可建立新世界並遊玩 10 分鐘。 |
| 伺服器啟動 | Dedicated server 可產生世界並接受連線。 |
| 關閉流程 | 伺服器正常儲存與關閉。 |

## 玩法測試

| 項目 | 通過條件 |
| --- | --- |
| Create 基礎 | 水車、齒輪、壓製、切割可運作。 |
| Create 物流 | 輸送帶、漏斗、分類流程無明顯錯誤。 |
| Ad Astra 基礎 | 太空裝備與火箭流程可查詢並測試。 |
| 相容橋接 | Create: Ad Astra Compatibility 相關配方可用。 |
| 任務 | 任務章節可讀，交付條件不卡死。 |

## 多人測試

| 項目 | 通過條件 |
| --- | --- |
| 2 人測試 | 30 分鐘無重大同步錯誤。 |
| 4 人測試 | 30 分鐘 TPS 穩定，無重複崩潰。 |
| 遠征測試 | 至少兩人參與太空準備與往返。 |
