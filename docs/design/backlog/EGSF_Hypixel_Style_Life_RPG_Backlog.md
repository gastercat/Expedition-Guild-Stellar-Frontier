# EG:SF Hypixel-style Life RPG Backlog｜輕量生活 RPG 系統暫存

Status: design source / backlog / expanded
Project: Expedition Guild: Stellar Frontier / 遠征公會：星界邊境
Last Updated: 2026-07-04
Use: 保存 v0.8.x backlog idea，用於 lightweight Hypixel SkyBlock-inspired guild systems。
Do Not Use For: immediate v0.7.4 implementation、current v0.8.0 patch scope，或 real XP/pet/minion/economy systems。

> Note:
> 這是一份設計來源文件。它可能描述設計意圖、未來計畫、backlog ideas，或歷史脈絡。
> 若要確認當前實作狀態，請檢查 docs/PROGRESSION_OVERVIEW.md、docs/releases/、active FTB Quests files、KubeJS，以及 packwiz metadata。

## 0. 摘要

- 這是一份僅列入 backlog / 尚未實作的設計來源文件，用於 lightweight Hypixel SkyBlock-inspired guild life/RPG systems。
- 它不應打斷 v0.7.4 work 或 current v0.8.x implementation。
- 四個 systems 是 Guild Research Codex / 公會研究圖鑑、Guild Logistics Facilities / 公會後勤設施、Maid / Artifact / Class Support / 女僕・遺物夥伴・職業輔助，以及 Guild Loot Hall / 公會戰利品殿堂。
- 第一版 implementation 若日後獲准，應保持小規模且 FTB Quests-only。
- 第一版 MVP（最小可行版本）應接在 Chapter 1 guild base / early progression 附近，而不是新增獨立 chapter。
- MVP（最小可行版本）不要實作 real skill XP、pets、minions、auction/economy、KubeJS、GameStages、recipes、loot changes，或 new mods。

## 1. Backlog Status

- Status: backlog / not implemented.
- 在明確的 future phase 開始前，不應為這些 systems 修改任何 files。
- 原始 scan-only decision 不需要 commit。
- 這些 ideas 應暫時停放，直到更高優先度的 v0.8.x 或 v0.9.x work 準備好之後。
- 此檔保存這個 idea，避免它意外滲入 current implementation scope。

## 2. Four Lightweight Systems

- Guild Research Codex / 公會研究圖鑑:
  - 用 lightweight checklist-style 記錄 discoveries、materials、bosses、artifacts，或 routes。
  - 設計意圖：讓 progress 感覺被公會記錄下來，但不建立 real research system。
- Guild Logistics Facilities / 公會後勤設施:
  - 以 lightweight quest 表現 guild kitchen、storage、workshop、armory，或 supply areas。
  - 設計意圖：透過簡單 tasks，讓 base 感覺像正在運作的 guild facility。
- Maid / Artifact / Class Support / 女僕・遺物夥伴・職業輔助:
  - 為 Touhou Little Maid、artifacts、relics，或 class helper concepts 提供 lightweight support role framing。
  - 設計意圖：保留 support/life flavor，但不做成 fourth class 或 pet system。
- Guild Loot Hall / 公會戰利品殿堂:
  - 用於 boss trophies、rare drops、artifacts 與 expedition memories 的 lightweight showcase/checklist。
  - 設計意圖：讓 loot 與 victories 對團隊可見。

## 3. MVP（最小可行版本）Boundaries

- 第一版 MVP（最小可行版本）應接在 Chapter 1 guild base / early progression 附近。
- 不要為 MVP（最小可行版本）建立新的 independent chapter。
- 只使用 FTB Quests checkmark tasks、item tasks，以及 text/lore tasks。
- 每個 system 都保持小規模。
- 避免讓玩家學習新的 major system。
- 將 MVP（最小可行版本）保持為 lightweight guild-base flavor layer，而不是新的 progression backbone。

## 4. Deferred Implementation Phases

- Phase A:
  - Chapter 1 新增四個 checkmark/text entry tasks。
- Phase B:
  - 每個 system 增加 2-3 個 low-risk item tasks。
- Phase C:
  - 穩定測試後，才考慮 passive GameStages。
- Phase D:
  - 如果仍然適合，再連接 v0.8 content，例如 Twilight Forest、Terramity、Touhou Little Maid、Artifacts 與 Simply Swords。

這些 phases 不是已核准的 implementation tasks。它們只是 future planning 的停放結構。

## 5. Explicit Non-goals

- 不要實作 real skill XP。
- 不要實作 real pet system。
- 不要實作 real minion system。
- 不要實作 auction/economy systems。
- MVP（最小可行版本）不要碰 KubeJS。
- MVP（最小可行版本）不要碰 GameStages。
- 不要修改 recipes。
- 不要修改 loot。
- MVP（最小可行版本）不要新增 new mods。
- MVP（最小可行版本）不要修改 Chapter 3、4、5、9、10，或 11。

## 6. Future Integration Targets

- Twilight Forest 作為 side expedition discoveries。
- Terramity 作為 abnormal samples / calamity-like side content。
- Touhou Little Maid 作為 support/life content。
- Artifacts and Curios 作為 artifact collection 與 build variety。
- Simply Swords 作為 weapon display 或 armory progression reference。
- Lootr and dungeon content 作為 loot hall 或 expedition memory support。
- 如果 implementation 日後明確獲准，guild base 與 Chapter 1 是最安全的 first attachment point。

## 7. 未來用途

- 使用此檔讓這些 systems 保持停放，直到它們被明確排程。
- 用它防止 current implementation work 發生 scope creep。
- 不要將它視為已核准的 immediate task list。
- Implementation 前，重新掃描 current Chapter 1、current quests、current installed mods，以及 latest release notes。
- 如果日後獲准，先從 minimal docs/quest design proposal 開始，再碰 FTB Quests data。
