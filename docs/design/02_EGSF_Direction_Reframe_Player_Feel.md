# EG:SF Direction Reframe｜委託方需求與玩家體感

Status: design source / expanded
Project: Expedition Guild: Stellar Frontier / 遠征公會：星界邊境
Last Updated: 2026-07-04
Use: 指引玩家體感決策、Chapter 0 onboarding 方向、requester tradeoffs，以及安全的小批次實作。
Do Not Use For: installed mod list、最終 balance values，或 active quest implementation details。

> Note:
> 這是一份設計來源文件。它可能描述設計意圖、未來計畫、backlog ideas，或歷史脈絡。
> 若要確認當前實作狀態，請檢查 docs/PROGRESSION_OVERVIEW.md、docs/releases/、active FTB Quests files、KubeJS，以及 packwiz metadata。

## 0. 摘要

- 專案方向已從 minimum validation 轉向 requester needs、玩家體感，以及受控實作。
- Requester 想要許多 mods 與長期 multiplayer goals。
- 正確回應不是一次安裝所有東西，而是將內容分類、分批、測試，並整合進 campaign。
- 玩家回饋指出，早期 quests 感覺太像 vanilla tutorial，rewards 也太弱。
- Chapter 0 應感覺像 expedition guild onboarding，而不是 vanilla survival training。
- 新內容應透過 Inventory-first（現況盤點優先）與 Experience-filter（體驗篩選）workflows 評估。

## 1. Requester Needs

- 希望 Create 與 Ad Astra 作為主要支柱，但不希望 pack 變成過度燒腦的大型 industrial complexity stack。
- 希望有許多 mods 與可見內容，讓朋友能快速感覺到這個 pack 有自己的 personality。
- 希望朋友們有 goals、roles，以及長期保持投入的理由。
- 偏好 RPG adventure、dimensions、bosses、artifacts、accessories，以及 multiplayer cooperation。
- 需要 pack 安全成長：新增內容應被分類、分批、測試，並整合進 guild campaign，而不是以失控堆疊的方式加入。

## 2. 玩家回饋

- 早期 quests 感覺太像 vanilla survival tutorial。
- Rewards 太弱，無法建立 momentum 或 excitement。
- 玩家沒有立刻感受到 modpack identity。
- 這指向 onboarding 與玩家體感問題，不只是內容數量問題。
- Pack 需要早期訊號，讓玩家知道自己加入的是一個擁有 shared tools、routes、supplies 與未來 goals 的 expedition guild。

## 3. Chapter 0 Retheme Direction

- Chapter 0 應改成 expedition guild onboarding。
- 它應介紹公會期待玩家使用的 practical tools：JEI、Jade、maps、teams、claims、voice chat、waystones、supplies，以及 future route awareness。
- Vanilla tasks 應被重新框定為 guild preparation，而不是基礎 Minecraft tutorial。
- Example directions:
  - 用 shared supply chest 取代「make a chest」。
  - 用 guild outpost 或 first rally point 取代「build a starter house」。
  - 用 expedition handbook 取代 generic control tips。
  - 用 route marking、return planning 與 supply preparation 取代孤立的 survival chores。
- 設計意圖：第一個 chapter 應告訴玩家，他們加入的是哪一種 server。

## 4. Reward Pacing Principles

- 早期 rewards 應降低無聊的 vanilla friction，並幫助玩家啟動 guild loop。
- 安全的早期 rewards：
  - Food。
  - Torches。
  - Bed 或 basic resting support。
  - Chest、barrel，或 small storage support。
  - 少量 iron 或 coal。
  - Basic building blocks。
  - 少量 XP。
  - 能協助 coordination 或 exploration 的 utility items。
- 避免會跳過 gates 的早期 rewards：
  - High-tier weapons。
  - High-tier armor。
  - Overpowered artifacts。
  - Ad Astra progression-critical items。
  - Rocket materials。
  - 過量 diamonds。
  - Netherite。
- Rewards 應建立 momentum，但不能繞過 Create 後勤、Boss Gate（Boss 關卡門檻）準備、Ad Astra progression，或未來 class identity。

## 5. Inventory-first（現況盤點優先）Workflow

在 changing quests、adding mods，或 expanding a design 前，使用此 workflow：

1. 掃描目前 repo 與 installed mod list。
2. 在新增任何東西前，先分類 existing systems。
3. 詢問 existing mods 是否已經能解決需求。
4. 檢查 current documentation、active FTB Quests、KubeJS 與 packwiz metadata。
5. 只有在新 mods 能填補明確 gap 時才加入。
6. 將 additions 拆成經過測試的小批次。
7. 記錄哪些內容已變更、哪些仍是 planned。

Inventory-first（現況盤點優先）可避免重複系統、意外的 compatibility drift，以及建立在實際不存在 mods 上的設計。

## 6. Experience-filter（體驗篩選）

用它會創造的 player experience 來評估一個 mod 或 system。

好的 candidates 會強化：

- Guild cooperation。
- Class identity。
- Boss gates 或 defense goals。
- Create 後勤。
- Ad Astra progression。
- Weapon 或 artifact excitement。
- Life/base content。
- 朋友可見 / 面向朋友體驗的價值。

有風險的 candidates：

- 造成 confusion 或太多彼此斷開的 tasks。
- 跳過 planned progression。
- 讓某個 class 或 play style 壓過其他選項。
- 讓 quests 被 chores 塞滿。
- 把 EG:SF 變成 generic mixed pack。
- 增加 technical risk，卻沒有明確 campaign benefit。

Technical installability 是必要條件，但還不夠。內容必須改善 guild campaign。

## 7. 未來用途

- 在 changing quests、planning docs、mod lists，或 candidate-mod phases 前，使用此檔作為 decision filter。
- 用它讓未來 implementation 對齊玩家體感與受控 batching。
- 不要將此檔視為已安裝模組真相、最終 balance policy，或 active quest implementation detail。
- 若要確認當前實作狀態，請檢查 `docs/PROGRESSION_OVERVIEW.md`、`docs/releases/`、active FTB Quests files、KubeJS，以及 packwiz metadata。
