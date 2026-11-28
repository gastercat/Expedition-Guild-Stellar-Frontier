# Progress

最後更新：2026-11-29

## 目前版本

- `v0.8.1-friends-feedback-test`（GitHub pre-release，commit `e12bca1`）。
- 技術基線：Minecraft `1.20.1`、Forge `47.4.10`、Java `17`、Create `1.20.1-6.0.8`、Ad Astra `1.20.1-1.15.20`。
- Pack CI 在 `main` 上通過。CI 通過只代表 dedicated server 能啟動。

## 目前目標

- 收集 v0.8.1 的朋友回饋：早期任務與獎勵手感、Create 與 Ad Astra 的伏筆是否清楚。目前還沒有任何回饋紀錄。
- 治理層已精簡（AOCI、協作流程文件、`/merge-prep` 已移除），之後把重心放回遊戲內容。

## 尚未實作

以下系統只存在於設計文件，遊戲中還沒有：

- 職業差異：三職業目前只是 GameStage 標籤，沒有任何東西讀取這些 stage。
- 真正的 Boss 戰、Guild Threat、Dragon Disaster、wave／raid 系統。
- 職業技能、裝備鎖、職業融合。
- 設計提案 `08`（Astral Infusion）與 `09`（Seven Curses Backlash）。

## 已知問題

- `EGSF-v0.8.1-Render-Native-Crash`：已以 `CLOSED_UNRESOLVED` 關閉，根因未知。朋友推測 Twilight Forest 的 Naga Boss 可能讓部分 Windows 內顯筆電閃退，沒有 log 佐證。若再次發生，保存 crash report、`latest.log` 與重現步驟後另開 incident。
