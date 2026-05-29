# Expedition Guild: Stellar Frontier

中文名：遠征公會：星界邊境

## 專案定位

這是一個 Minecraft 1.20.1 Forge 模組包企劃專案。第一版目標是建立可測試的核心包，而不是直接堆疊大量內容。主軸為：

| 主題 | 說明 |
| --- | --- |
| Create 工業公會 | 用 Create 0.5.1j 建立早期到中期的機械化產線與公會基礎建設。 |
| RPG 職業分工 | 以工程師、探勘者、航太員、後勤官等角色分工設計任務與伺服器玩法。 |
| Ad Astra 太空遠征 | 將太空探索作為中後期目標，並用 Create: Ad Astra Compatibility 串接工業進程。 |

## 固定技術限制

| 項目 | 固定值 |
| --- | --- |
| Minecraft | 1.20.1 |
| Loader | Forge |
| Java | 17 |
| Create | 0.5.1j |
| 第一版定位 | 核心測試包 |

## 第一版原則

| 原則 | 決策 |
| --- | --- |
| 不下載模組 | 本專案只建立文件、清單、檢查腳本與未來放置 jar 的資料夾。 |
| 不假設 jar 存在 | `mods/` 目前保留空資料夾，後續手動放入檔案後再執行檢查。 |
| 控制維度數量 | 第一版只以 Ad Astra 太空線作為主要擴展維度來源。 |
| 控制科技模組規模 | 第一版不加入大型科技系統，Create 為唯一核心工業骨幹。 |
| Phase 控制 | AE2、MineColonies、Cataclysm、Twilight Forest、Blue Skies 全部延後。 |

## 目錄結構

| 路徑 | 用途 |
| --- | --- |
| `README.md` | 專案總覽。 |
| `MODLIST.md` | 分階段模組清單與排除項目。 |
| `COMPATIBILITY.md` | 相容性風險與檢查清單。 |
| `QUEST_DESIGN.md` | 任務線草稿。 |
| `SERVER_TEST_PROTOCOL.md` | 伺服器測試流程。 |
| `docs/` | 細部設計文件。 |
| `scripts/` | 自動檢查腳本。 |
| `mods/` | 未來手動放置 jar 的位置，目前不應放入任何檔案。 |

## 本機檢查

```bash
python3 scripts/validate_pack_structure.py
python3 scripts/check_modlist.py
python3 scripts/check_duplicate_mods.py
```

三個腳本都只使用 Python 標準函式庫，可在 macOS 以 `python3` 執行。
