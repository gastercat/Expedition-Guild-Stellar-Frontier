# Friends Test Guide

## 測試目的

這份指南用來協助 2-4 人測試 v0.8.0 Friends Content Preview。

測試重點不是衝進度，而是確認：

- 多人能不能順利進入世界或伺服器。
- 玩家是否看得懂任務下一步。
- 新內容是否適合朋友一起玩。
- 戰利品是否公平。
- 遊戲是否穩定。
- 職業分工是否有感覺。

## 測試前準備

測試前請確認：

- 所有人使用同一版模組包。
- 可以進入同一個世界或伺服器。
- 可以開啟 FTB Quests。
- 如果有使用地圖、語音、隊伍或 chunk 設定，先確認是否正常。
- 測試前先說好本輪要測的內容。
- 保留 latest.log，遇到問題時方便回報。

如果有新安裝候選模組，請先用新測試世界或備份世界測，不要直接拿主要世界冒險。

## 2-4 人測試流程

建議流程：

1. 所有人加入世界或伺服器。
2. 確認每個人都能移動、互動、聊天。
3. 開啟 FTB Quests，確認任務書能正常顯示。
4. 如果有地圖、語音、隊伍或 chunk 功能，確認是否可用。
5. 一起閱讀本輪測試目標。
6. 一起探索、打怪、開箱、回基地。
7. 測試戰利品歸屬與公平感。
8. 測試不同職業在同一段內容中的感受。
9. 測試結束後整理回報。

## 必測項目

每輪朋友測試至少檢查：

- 能否進入主選單。
- 能否進入世界或伺服器。
- FTB Quests 是否可開啟。
- 玩家是否知道下一步要做什麼。
- 多人一起探索是否順。
- 戰利品是否有所有權或分配問題。
- 戰利品是否讓某個玩家明顯落後或過強。
- 新武器、遺物、地城、家具或夥伴內容是否正常顯示。
- 伺服器是否卡頓。
- 客戶端是否掉幀、崩潰或斷線。
- latest.log 是否有 ERROR 或 FATAL。

## 回報格式

建議回報：

```text
版本：
測試日期：
測試人數：
測試時間：
測試內容：

能否進入世界 / 伺服器：
FTB Quests 是否正常：
是否知道下一步要做什麼：
多人探索感受：
戰利品公平感：
職業分工感受：
效能 / 卡頓：
崩潰 / 斷線 / ERROR：

最好玩的地方：
最困惑的地方：
需要調整的地方：
```

## 崩潰 / 卡頓 / 任務異常回報

如果發生崩潰、卡頓或任務異常，請記錄：

- 發生時間點。
- 正在做什麼。
- 幾個玩家在線。
- 是否在探索新區域、開箱、進維度、召喚實體或打 Boss。
- 是否所有人都出問題，還是只有某個玩家。
- latest.log 是否有 FTB Quests / GameStages / KubeJS / mod ERROR。
- 是否能重現。

如果世界無法正常載入、伺服器持續崩潰、或任務主線被卡死，請停止測試。

## 戰利品與多人感受回饋

請特別觀察：

- 同一個箱子是否每個玩家都有合理收穫。
- 探索時是否有人一直拿不到東西。
- 戰利品是否太強，讓前面章節失去意義。
- 戰利品是否太雜，玩家不知道用途。
- 稀有物品是否讓團隊想繼續探索。
- 戰利品是否促進分享、交換和分工。

## Lootr 多人開箱測試

Lootr 的目標是改善多人探索時的戰利品公平感。測試時請至少用兩位玩家測一次同一個自然生成或 Lootr 轉換過的 loot 容器。

建議流程：

1. Player A 找到一個自然 loot chest / Lootr 容器。
2. Player A 開啟容器，確認能看到自己的戰利品。
3. Player B 開啟同一個容器。
4. Player B 應該也能看到自己的獨立戰利品。
5. 兩位玩家確認開箱過程沒有 crash、卡住或明顯 desync。
6. 檢查 latest.log 是否有 Lootr ERROR 或 FATAL。

請回報：

- Player B 是否看到空箱。
- 兩位玩家看到的 loot 是否各自獨立。
- 容器外觀或開啟狀態是否容易理解。
- 是否有人無法開箱、開箱後斷線，或 loot 消失。

## Simply Swords 武器測試

Simply Swords 的目標是先提供更多近戰武器選擇與 Vanguard 武器展示，不是完成最終武器平衡。

建議流程：

1. 用 JEI 搜尋 Simply Swords 武器。
2. 在創造模式拿幾把普通武器，確認不 crash。
3. 在創造模式拿 1 把 unique weapon，確認不 crash。
4. 簡單打幾隻普通怪，觀察手感與傷害是否明顯失控。
5. 探索自然 / Lootr 箱子時，觀察是否出現 Simply Swords 武器。
6. 如果出現武器，記錄它出現在哪種箱子、數量是否太多、是否太早、是否太強。
7. 檢查 latest.log 是否有 Simply Swords ERROR、registry ERROR、loot table ERROR 或 FATAL。

請回報：

- JEI 是否能正常搜尋武器。
- 普通武器與 unique weapon 是否能正常拿取。
- 武器是否讓 Vanguard 有更明顯的武器選擇感。
- 武器是否太早、太多、太強。
- 自然 / Lootr 箱是否出現 Simply Swords 武器；如果找不到，記錄為「loot injection not yet confirmed」，不要當成測試失敗。

## Artifacts / Curios 遺物測試

Artifacts 的目標是先提供更多遺物與飾品收藏，讓多人探索與公會戰利品殿堂方向更有期待感。這不是最終遺物平衡。

建議流程：

1. 在 Mods list 確認看得到 Artifacts。
2. 在 Mods list 確認看得到 Curios API。
3. 開啟 Curios UI / 裝備欄，確認不 crash。
4. 用 JEI 搜尋 Artifacts。
5. 在創造模式拿 1 個 artifact，確認不 crash。
6. 裝備 1 個 artifact，確認不 crash。
7. 使用 Simply Swords 加上 artifact 做普通戰鬥測試，確認不 crash。
8. 探索自然 / Lootr 箱子時，觀察是否出現 artifact。
9. 如果出現 artifact，記錄它出現在哪種箱子、數量是否太多、是否太早、是否太強。
10. 多人開箱後，觀察 artifacts 是否因 Lootr 獨立戰利品而變得過量。
11. 檢查 latest.log 是否有 Artifacts ERROR、Curios ERROR、registry ERROR、loot table ERROR 或 FATAL。

請回報：

- Mods list 是否看得到 Artifacts / Curios。
- Curios UI / 裝備欄是否正常。
- JEI 是否能正常搜尋 Artifacts。
- artifact 是否能正常拿取與裝備。
- Simply Swords + artifact 普通戰鬥是否穩定。
- 自然 / Lootr 箱是否出現 artifact。
- artifact 是否太早、太多、太強。
- 多人開箱後 artifacts 是否過量。

## Macaw 基地生活 / 建築測試

Macaw 基地生活內容的目標是讓公會據點、休息區、遠征準備區和朋友共同基地更有生活感。這不是最終建築系統，也不是一次加入所有 Macaw 模組。

建議流程：

1. 在 Mods list 確認看得到 Macaw's Doors。
2. 在 Mods list 確認看得到 Macaw's Windows。
3. 在 Mods list 確認看得到 Macaw's Lights and Lamps。
4. 用 JEI 搜尋 doors / windows / lights。
5. 在創造模式放置數個 doors，確認不 crash。
6. 在創造模式放置數個 windows，確認不 crash。
7. 在創造模式放置數個 lights / lamps，確認不 crash。
8. 測試 doors 開關互動。
9. 測試 lights / lamps 發光或互動。
10. 存檔、離開、重進世界後，確認方塊仍正常。
11. 如果多人測試，請讓另一位玩家也互動同一批門窗與燈具。
12. 檢查 latest.log 是否有 Macaw ERROR、registry ERROR、model ERROR、texture ERROR 或 FATAL。

請回報：

- Mods list 是否看得到 Macaw's Doors / Windows / Lights and Lamps。
- JEI 是否能正常搜尋 doors / windows / lights。
- doors / windows / lights 是否能正常放置與破壞。
- doors 開關互動是否正常。
- lights / lamps 是否正常發光或互動。
- 存檔重進後方塊是否仍正常。
- 是否有 texture/model error、放置 crash、互動 crash、光源問題或效能問題。

## 職業感受回饋

請從三個職業角度觀察：

- Vanguard：前線承傷、近戰攔截、保護隊友是否有感。
- Gunner：遠距支援、清怪、安全警戒是否有感。
- Arcanist：控場、輔助、治療、utility 是否有感。

如果某一職業明顯沒有事做，或某一職業單人解決所有問題，請回報具體情境。

## 什麼情況要停止測試

遇到以下情況請停止：

- 世界或伺服器反覆崩潰。
- 任務進度無法恢復。
- 玩家資料或物品有遺失風險。
- 新內容造成嚴重卡頓。
- 戰利品或敵人強度明顯破壞主線。
- 玩家完全不知道下一步該做什麼。
- 需要修改設定、配方、KubeJS 或 GameStages 才能繼續。

停止後先整理回報，不要繼續堆疊其他新內容。
