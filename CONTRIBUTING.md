# 協作指南

Expedition Guild: Stellar Frontier 接受小範圍、可 Review、可回滾的協作。這份文件只提供最短入口；完整導覽請閱讀 [協作者主導覽](docs/collaboration/README.md)。

## 可以協作什麼

- 測試：依已授權任務進行觀察與問題回報。
- 文件：修正明確授權的說明、模板或導覽。
- 研究：整理相容性、需求或可行性證據，不把推測寫成事實。
- 受控小型修改：只處理任務指定的檔案與行為。

目前只開放已明確授權的小型任務。發現相鄰問題不代表已獲得修改權限。

## 第一次協作的閱讀順序

1. 閱讀 [協作者主導覽](docs/collaboration/README.md) 並選擇適合的入口。
2. 閱讀 `AGENT.md`、`SKILL.md` 與任務指定文件。
3. 確認任務的 authoritative sources、scope、allowed changes、forbidden changes 與 stop conditions。
4. 先蒐集 evidence，再判斷是否能回報 `PASS`。

## 寫入與 Review 規則

- 不得直接修改或提交到 `main`。
- 所有 Repo 寫入工作都必須使用獨立 branch 與 Pull Request。
- 流程固定為：specification → small batch → validation → Pull Request → Yoi Review → merge。
- Yoi 是最終設計、scope 與 Release authority；協作者不得自行擴張主線或替專案做未授權決策。
- 發現 authority conflict、scope 不明或證據不足時，停止並回報，不得靜默修正。
