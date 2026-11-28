# AGENTS.md

所有 AI Agent（Claude Code、Codex 等）在本 Repo 工作時的共用規則。這份文件刻意保持簡短：規則只保留真的在防止問題的部分，其餘交給 CI 與 git。

## 專案身分

Expedition Guild: Stellar Frontier（遠征公會：星界邊境）是 Minecraft `1.20.1` Forge 的多人遠征公會戰役模組包。主角是戰役結構，不是任何單一 mod，也不是把很多 mod 堆在一起的 kitchen-sink pack。

戰役主線：加入公會 → 選擇職業 → 訓練 → 擊敗第一個 Boss → 守衛公會據點 → 建立 Create 後勤 → 準備 Ad Astra 遠征 → 面對災厄與龍的威脅 → 職業融合 → 終局災厄 → 神裝／postgame。

## 開工前

先讀 [`PROGRESS.md`](PROGRESS.md)，了解目前版本與目標。依任務類型再讀：

| 要做的事 | 再讀 |
| --- | --- |
| Quest、KubeJS、GameStages、config | [`VERIFIED_FORMATS.md`](docs/collaboration/VERIFIED_FORMATS.md) |
| 新增、移除或升級 mod | [`COMPATIBILITY.md`](docs/operations/COMPATIBILITY.md) |
| Server／runtime 測試 | [`SERVER_TEST_PROTOCOL.md`](docs/operations/SERVER_TEST_PROTOCOL.md) |
| 發佈版本 | `/release` skill |

## 授權

Repo 寫入以 Project Maintainer（Yoi）在對話中的指示為準，只做明說的範圍。發現相鄰問題時回報，不要順手處理。

## 規則

1. **不直接 push `main`，一律走 Pull Request。** CI 通過，且 Yoi 在對話中明確說可以 merge 時，Agent 可以代為 merge。`main` 隨時保持可以啟動、可以遊玩。
2. **CI 通過只代表 dedicated server 能啟動，不代表遊戲內正常。** Agent 無法執行 client 測試，回報時照實說明哪些驗證過、哪些沒有。
3. **新語法要有來源。** 撰寫 FTB Quests、KubeJS、GameStages 或 packwiz 內容時，使用 `VERIFIED_FORMATS.md`、Repo 既有檔案、對應版本的官方文件或 mod 原始碼中出現過的語法。第一次使用的語法，在 PR 中註明來源；之後在遊戲裡確認可用，再補進 `VERIFIED_FORMATS.md`。
4. **不把 Yoi 的私人姓名、email、本機路徑或其他私人識別資訊寫進 Repo。**

`.mrpack`、`.DS_Store`、本機工具狀態等 artifact 由 `.gitignore` 擋下，不另外列為規則。

## Git、Pull Request 與發佈

- 一個任務一條 branch。並行工作時，每條 branch 使用獨立的 git worktree。
- 開 PR 前執行 `scripts/` 的檢查（與 CI 相同）。
- 改動 `mods/` 或 `config/` 後執行 `packwiz refresh`，並一起 commit `index.toml`。
- `pack.toml` 的 `version` 只在發佈版本時修改。
- Tag 與 GitHub Release 需要 Yoi 指定版本與完整 commit，例如「`v0.9.0` 用 commit `<full-sha>` 發佈」。流程見 `/release` skill。

## 技術基線

Minecraft `1.20.1`、Forge `47.4.10`、Java `17`、packwiz。目前安裝的 mod 與版本一律以 `pack.toml`、`index.toml` 與 `mods/*.pw.toml` 為準，不要從文件摘要推斷。

## 設計原則

- 提案前先檢查現有檔案、mod metadata 與 quest 檔。
- 說明這個變更會帶給玩家什麼體驗，以及它如何支撐遠征公會主線。
- 三職業：Vanguard（近戰前排、Boss 承壓）、Gunner（遠程、守城、清怪）、Arcanist（AOE、控場、治療、召喚、功能解法）。
- 每次變更保持小範圍、可測試、可回滾。

## 文件語言

說明文件使用繁體中文（zh-TW）。Mod 名稱、檔案路徑、指令、程式碼、設定鍵與版本資訊保留英文原文。

## 文件導覽

| 文件 | 內容 |
| --- | --- |
| [`PROGRESS.md`](PROGRESS.md) | 目前版本、目標與下一步 |
| [`CHANGELOG.md`](CHANGELOG.md) | 版本變更紀錄 |
| [`docs/collaboration/VERIFIED_FORMATS.md`](docs/collaboration/VERIFIED_FORMATS.md) | 已驗證的 GameStages／FTB Quests 格式 |
| [`docs/operations/COMPATIBILITY.md`](docs/operations/COMPATIBILITY.md) | 相容性策略與版本鎖定 |
| [`docs/operations/SERVER_TEST_PROTOCOL.md`](docs/operations/SERVER_TEST_PROTOCOL.md) | Server／runtime 測試程序 |
| [`docs/operations/PROJECT_STRUCTURE.md`](docs/operations/PROJECT_STRUCTURE.md) | 專案結構 |
| [`docs/PROGRESSION_OVERVIEW.md`](docs/PROGRESSION_OVERVIEW.md) | Chapter 0-11 進度 |
| [`docs/ROADMAP.md`](docs/ROADMAP.md) | 版本方向 |
| [`docs/design/INDEX.md`](docs/design/INDEX.md) | 設計來源（不等於已實作） |
