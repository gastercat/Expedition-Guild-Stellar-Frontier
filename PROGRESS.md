# Progress

最後更新：2026-11-29

## 目前版本

- `v0.8.1-friends-feedback-test`（GitHub pre-release，commit `e12bca1`）。
- 技術基線：Minecraft `1.20.1`、Forge `47.4.10`、Java `17`、Create `1.20.1-6.0.8`、Ad Astra `1.20.1-1.15.20`。
- Pack CI 在 `main` 上通過。CI 通過只代表 dedicated server 能啟動。

## 目前目標

- 收集 v0.8.1 的朋友回饋：早期任務與獎勵手感、Create 與 Ad Astra 的伏筆是否清楚。目前還沒有任何回饋紀錄。
- Ch0–3 垂直切片：一群朋友在一個晚上從出生點玩到擊敗 Naga。等 Yoi 與朋友實際遊玩確認，尤其是 Naga 會不會閃退。
- 下一步：改寫任務書文案（不再像規格書），之後另開 PR 讓 Gunner 改用 TaCZ。

## 尚未實作

以下系統只存在於設計文件，遊戲中還沒有：

- Arcanist：暫時移出，等加入法術 mod 再回來。Vanguard／Gunner 目前只有起始裝備與被動加成，還沒有技能。
- Ch4–11：只有任務層骨架，章節標題標示【預告】。
- 真正的 Boss 戰、Guild Threat、Dragon Disaster、wave／raid 系統。
- 職業技能、裝備鎖、職業融合。
- 設計提案 `08`（Astral Infusion）與 `09`（Seven Curses Backlash）。

## 已知問題

- `EGSF-v0.8.1-Render-Native-Crash`：已以 `CLOSED_UNRESOLVED` 關閉，根因未知。朋友推測 Twilight Forest 的 Naga Boss 可能讓部分 Windows 內顯筆電閃退，沒有 log 佐證。若再次發生，保存 crash report、`latest.log` 與重現步驟後另開 incident。
