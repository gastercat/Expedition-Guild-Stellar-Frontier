# Testing Guide / 測試指南

這份文件給協助測試 Expedition Guild: Stellar Frontier 的朋友與測試者使用。

測試不只是找 crash。好的回報也包含：任務錯誤、進度跳過、過強 loot、多人同步問題，以及玩家不知道下一步要做什麼。

## What To Test First / 最先測什麼

先確認模組包基本健康狀態：

| 測試項目 | 要確認什麼 |
|---|---|
| Launch / 啟動 | 遊戲可以進主選單，沒有 mod loading error。 |
| New world / 新世界 | 可以建立並進入全新測試世界。 |
| FTB Quests / 任務書 | 任務書可以打開。 |
| Chapters / 章節 | 章節列表與章節頁面可以正常顯示。 |
| Text parsing / 文字解析 | 任務文字沒有破版、亂碼或 parsing error。 |
| Basic UI / 基礎介面 | JEI、Jade、地圖與多人相關 UI 可以使用。 |
| Logs / 紀錄 | 基本啟動過程沒有 crash report、fatal loading error、FTB Quests error、GameStages error 或 KubeJS error。 |

高風險測試請用新的測試世界。不要用重要的共享世界做第一輪測試。

## Quest Testing Checklist / 任務測試清單

測每個任務時，請檢查：

- 任務是否出現在預期章節？
- 任務描述是否看得懂？
- 需要的物品或擊殺目標是否符合該章節難度？
- task（任務條件）能不能完成？
- reward（獎勵）能不能領？
- 如果預期會給 GameStage（進度標記 / 解鎖階段），領獎後是否看起來有正確授予？
- 前置線或後續任務是否正常解鎖？
- 同一個重要 stage 是否從多個地方重複授予？
- 是否有任務要求不存在的物品、實體或 mod？
- 任務是否意外給了太後期的材料？

目前 Alpha 優先測試章節：

- Chapter 0：新手導引與 handbook。
- Chapter 1：隊伍、基地與職業 stage 選擇。
- Chapter 2：Create 準備與第一討伐前置。
- Chapter 3：第一討伐 MVP Gate。
- Chapter 4：第一次守城 MVP Gate。
- Chapter 5：災變前兆 MVP Gate。
- Chapter 7：Ad Astra 星界遠征準備流程。

## Multiplayer Checklist / 多人測試清單

多人測試時，請確認：

| 範圍 | 要測什麼 |
|---|---|
| Voice chat / 語音 | 玩家可以連線、聽到彼此，並設定輸入輸出。 |
| FTB Teams / 隊伍 | 玩家可以建立或加入隊伍，並理解共享遊玩方式。 |
| FTB Chunks / 區塊 | 基地 claim / chunks 行為清楚，不會意外擋住隊友。 |
| Waystones / 傳送石 | 共享傳送點命名清楚，不會讓玩家被傳到尷尬位置。 |
| Map markers / 地圖標記 | 基地、路線、危險點與資源點能清楚標記。 |
| Shared base / 共享基地 | 公共箱、補給與工作區讓新玩家看得懂。 |
| Quest flow / 任務流程 | 玩家知道目前任務是個人進度還是共享準備。 |

也請觀察多人協作問題：

- 大家知道下一步要做什麼嗎？
- 是否有人不小心耗光公共補給？
- 私人箱是否讓任務進度更難整理？
- 是否有人衝太快，跳過團隊準備？

## Progression Break Checklist / 進度破壞檢查

只要破壞預期戰役流程，都值得回報。

- loot chest 是否太早給了後期材料？
- 某把武器或工具是否讓戰鬥、討伐、守城變得太簡單？
- 某個 mod 是否跳過 Create 準備步驟？
- 某個 mod 是否跳過 Ad Astra 準備步驟？
- 任務是否在前置準備完成前就解鎖？
- 玩家是否能透過交易、死亡、傳送或幸運掉落跳過共享 gate？
- reward 是否給太多食物、裝備、貨幣或進度材料？
- Placeholder（佔位內容）章節是否讓玩家誤以為完整系統已完成？

## Current Alpha Systems To Watch / 目前特別需要注意的 Alpha 系統

以下內容目前是 Framework（框架）、MVP（最小可行版本）或 Planned（計畫中）方向，測試時請特別注意不要誤判成完成品：

- Vanguard / Gunner / Arcanist 還不是完整技能樹。
- Chapter 3 是第一討伐 MVP，不是完整 Boss chain。
- Chapter 4 是守城演習 MVP，不是真正 raid / wave 系統。
- Chapter 5 是災變前兆，不是真正 Guild Threat 或 Dragon Disaster 系統。
- KubeJS 目前有 passive stage naming skeleton，不是大量 gameplay automation。
- GameStages 用於進度標記，但不是所有未來鎖都已完整強制。

## Bug Report Template / Bug 回報模板

回報問題時，建議使用這個格式：

```text
Version / commit（版本或 commit）:
Singleplayer or multiplayer（單人或多人）:
Number of players（玩家數量）:
What happened（發生了什麼）:
What you expected（原本預期）:
Steps to reproduce（如何重現）:
Screenshot / log（截圖或 log）:
Relevant quest chapter（相關任務章節）:
Relevant quest name（相關任務名稱）:
Did it happen after claiming a reward?（是否在領獎勵後發生）:
Did anyone use commands, creative mode, or imported items?（是否有人使用指令、創造模式或外部物品）:
```

## Useful Logs / 有用的 log

維護者通常需要：

- `latest.log`
- `crash-reports/` 裡的檔案

玩家不需要看懂每一行 log。能提供以下資訊就很有幫助：

- 問題發生的大概時間。
- 當時正在看哪個 chapter 或 quest。
- 問題是在啟動、進世界、完成 task，還是領 reward 時發生。
- 任務頁或錯誤畫面的截圖。
- 如果和任務有關，請提供 item 或 entity 名稱。

## When To Stop Testing / 什麼情況要停止測試

遇到以下情況請先停止並回報：

- 遊戲無法進主選單。
- 世界無法進入。
- FTB Quests 無法打開。
- 章節無法顯示。
- 領 reward 會 crash。
- 多人環境出現可重複 crash。
- Create 變成預期外的 major version。
- Ad Astra 變成不相容版本。
- 發現嚴重進度跳過問題。
