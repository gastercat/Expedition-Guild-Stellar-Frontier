# EG:SF 朋友內容預覽｜v0.8.x 內容展示層

Status: design source / expanded
Project: Expedition Guild: Stellar Frontier / 遠征公會：星界邊境
Last Updated: 2026-07-04
Use: 指引 v0.8.x 朋友內容預覽 planning 與 pacing。
Do Not Use For: 完整 class implementation、TaCZ/Iron's full integration、weapon evolution，或 v1.0 deep systems。

> Note:
> 這是一份設計來源文件。它可能描述設計意圖、未來計畫、backlog ideas，或歷史脈絡。
> 若要確認當前實作狀態，請檢查 docs/PROGRESSION_OVERVIEW.md、docs/releases/、active FTB Quests files、KubeJS，以及 packwiz metadata。

## 0. 摘要

- v0.8.x 朋友內容預覽是 content visibility layer，不是完整的 EG:SF class system 或 endgame system。
- 它的目的，是讓朋友看見 EG:SF 不只是 Create + Ad Astra。
- 它應展示 exploration、combat、life/base content、weapon variety、artifacts，以及 multiplayer-friendly loot。
- 它必須維持 batch-based 且可測試。
- TaCZ、Iron's Spells、完整 weapon evolution，以及 v1.0 deep systems 都在這個 preview layer 之外。

## 1. Version Purpose

- v0.8.x 的存在目的是改善 first impression 與 early engagement。
- 它應在更深層 class systems 完成前，讓 pack 感覺更有生命力。
- 它應展示 EG:SF 可以支援 exploration、loot、weapons、base life，以及朋友可見 / 面向朋友體驗的時刻，同時不放棄 guild campaign identity。
- 它不應嘗試完成 TaCZ、Iron's Spells、完整 weapon evolution，或 v1.0 deep systems。
- 設計意圖：將 v0.8.x 作為穩定 baseline 與未來 v0.9.x class identity work 之間的 preview 與 bridge layer。

## 2. Player Experience Goals

- Exploration players 應有地方可去，也有理由把 discoveries 回報給公會。
- Combat players 應有 enemies、dungeons，或 weapons 可以嘗試，而不需要完整 class system。
- Life/base players 應有 decoration、guild-base，或 support content，讓 shared base 感覺更有生命力。
- Collection players 應看見 artifacts、curios、rare drops，或值得記住的 loot goals。
- Multiplayer groups 應避免 loot conflict，並擁有 shared objectives。
- 目標感受是：一起離開 guild base，找到有趣的東西，在旅途中存活，把 rewards 帶回家，並讓公會感覺更完整。

## 3. Preview Content Buckets

- Exploration / dungeons:
  - Optional routes、side contracts、abnormal nests、underground spaces，以及 side expedition areas。
- Weapon variety:
  - 更多 early and midgame combat toys，特別是用於 Vanguard / 前鋒-like identity previews。
- Artifacts / curios / relic-like rewards:
  - 可收藏 items，能創造故事並建立 variety，但不變成 unchecked power spikes。
- Base-life and building content:
  - Furniture、doors、lights、windows、food、guild hall presentation，以及 shared living spaces。
- Multiplayer loot support:
  - 減少多名玩家一起探索時衝突的 systems。
- Friend-facing life/support content:
  - Companions、support NPCs、supply flavor，或 group 可見的 social features。
- Optional side expeditions:
  - 可以放在 main progression 旁邊，但不取代 Create、Ad Astra，或未來 class work 的內容。

## 4. Confirmed / Candidate Content

本節只記錄 design relevance。有些 entries 可能已經實作，有些可能仍是 candidates。此檔不是已安裝模組真相。

- Lootr:
  - Role: multiplayer-friendly independent loot。
  - Preview value: 降低「一個玩家開了 chest，其他人什麼都沒有」的 friction。
- Simply Swords:
  - Role: Vanguard / 前鋒 weapon variety preview。
  - Preview value: 在完整 class systems 之前，給 combat players 更可見的 weapon flavor。
- Artifacts and Curios:
  - Role: exploration rewards 與 build variety。
  - Preview value: 讓 discoveries 更值得記住，並給玩家可收藏的 identity hooks。
- Macaw series:
  - Role: base-life 與 guild-building feel。
  - Preview value: 幫助 guild base 看起來並感覺像 shared place，而不只是 machines 和 chests。
- Dungeon Crawl:
  - Candidate role: underground guild contracts / abnormal nests。
  - Preview value: 給 exploration 與 combat players 可前往的地方。
- Twilight Forest:
  - Candidate role: side expedition。
  - Boundary: 不是 main progression replacement。
- Terramity:
  - Candidate role: side content、abnormal threats，或 calamity-style material source。
  - Boundary: 若使用，第一版只用 base mod；不加 addon。
- Touhou Little Maid:
  - Candidate role: 朋友可見 / 面向朋友體驗的 life/support side content。
  - Boundary: 不是 fourth class。
- Farmer's Delight limited addons:
  - Candidate role: guild food/supply layer。
  - Boundary: 只限 limited selection；避免 broad food-stack sprawl。

## 5. 延後 / 暫緩內容

- 延後 / 暫緩: TaCZ full Gunner / 銃士 system 不應一次全部塞進 v0.8.0。
- 延後 / 暫緩: Iron's Spells full Arcanist / 奧術師 system 應先作為 technical test 或 later class work 分階段處理。
- 延後 / 暫緩: full weapon evolution、essence、gem 與 affix systems。
- 延後 / 暫緩: Apotheosis deep integration。
- 延後 / 暫緩: Forbidden & Arcanus deep integration。
- 延後 / 暫緩: Botania。
- 延後 / 暫緩: full Create logistics integration。
- 延後 / 暫緩: full 公會階級、class restriction、transfer、subclass，或 fusion class systems。

這些 deferred systems 之後仍可能有價值，但 v0.8.x 不應變成把每個 v0.9.x 或 v1.0 system 都提前塞進去的地方。

## 6. Implementation Pacing

- 使用 small batches。
- 每個 batch 應包含：
  - relevant 時執行 packwiz install 或 metadata check。
  - Launch test。
  - Mod list check。
  - Relevant JEI 或 creative checks。
  - Log check。
  - 記錄 changed content。
  - 當 implementation work 已核准時，在 validation 後 commit。
- 不要同時安裝許多 high-risk systems。
- Suggested preview pacing 可以包含：
  - Lootr / dungeon or exploration batch。
  - Weapon + artifacts batch。
  - Base-life / building batch。
  - Side expedition batch。
  - Friend-facing support content batch。
  - Quest entry / guild contract text batch。
- Actual order 必須依照 current repo scan、installed mod state、compatibility notes，以及 release notes。

## 7. 未來用途

- 判斷 v0.8.x content 是否屬於 preview layer 時，使用此檔。
- 用它避免 v0.8.x 被 v0.9.x 或 v1.0 systems 塞到過載。
- 用它讓 preview content 保持可見、可測試，並面向朋友體驗。
- 若要確認 current installed mods，請檢查 packwiz metadata 與 release notes。
- 若要確認 current quest state，請檢查 active FTB Quests 與 `docs/PROGRESSION_OVERVIEW.md`。
