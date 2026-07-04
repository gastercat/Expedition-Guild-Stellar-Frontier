# EG:SF Genesis Design｜初版世界觀與主題

Status: design source / expanded
Project: Expedition Guild: Stellar Frontier / 遠征公會：星界邊境
Last Updated: 2026-07-04
Use: 保存 EG:SF 最初的 identity、世界概念與核心設計句。
Do Not Use For: 當前 mod inventory、active quest state，或最終當前實作真相。

> Note:
> 這是一份設計來源文件。它可能描述設計意圖、未來計畫、backlog ideas，或歷史脈絡。
> 若要確認當前實作狀態，請檢查 docs/PROGRESSION_OVERVIEW.md、docs/releases/、active FTB Quests files、KubeJS，以及 packwiz metadata。

## 0. 摘要

- EG:SF 起初是一個為朋友長期遊玩而構想的 multiplayer Minecraft modpack。
- 專案 identity 成為 Expedition Guild: Stellar Frontier / 遠征公會：星界邊境。
- 核心融合是 Create guild infrastructure、RPG role division，以及 Ad Astra space expedition。
- 這個 pack 應被視為 guild campaign，而不是隨機混合的 mod collection。
- Create 是 infrastructure，RPG 是 role division，Ad Astra 是 mid/late-game expedition goal。
- 在當前 baseline 下，Create 必須維持 1.20.1-0.5.1.j，不能使用 Create 6.x。

## 1. 核心 Identity

- Project name: Expedition Guild: Stellar Frontier.
- Chinese name: 遠征公會：星界邊境.
- 簡短 identity 句：EG:SF 是一個 multiplayer expedition-guild campaign，朋友們在其中建立共享 infrastructure、分工成不同角色、探索危險世界，並朝太空推進。
- EG:SF 是：
  - 一個具備 shared campaign goals 的長期 friend-server modpack。
  - 一個以 guild 為中心的 progression pack，其中 infrastructure、roles、exploration、combat 與 space travel 彼此支撐。
  - 一個由 Create 支援公會、RPG systems 給予玩家 identity、Ad Astra 為 campaign 帶來更大 frontier 的 pack。
- EG:SF 不是：
  - 不是隨機 kitchen-sink collection。
  - 不是純 Create engineering challenge。
  - 不是純 RPG adventure pack。
  - 不是在 campaign 形狀穩定前，就把每個被要求的 mod 一次裝進去的 one-time mod dump。

## 2. 原始設計意圖

- 設計意圖：建立一個長期 multiplayer world，讓朋友們有不同責任、目標，以及回來遊玩的理由。
- Server 應支援多種 play styles：exploration、building、logistics、combat、storage、supply 與 space preparation。
- Exploration、building、logistics、combat 與 space 都應服務 guild campaign，而不是變成彼此斷開的 side activities。
- Progression 應透過已測試的 phases 逐步擴張。這個 pack 應透過加入能強化 campaign 的內容成長，而不是一次安裝所有有趣的 mod。
- 整體 tone 應像是公會正在準備遠征：玩家收集 supplies、升級 base、承擔 danger、回收 loot，並把 discoveries 帶回來給團隊使用。

## 3. 核心 Gameplay Loop

核心 loop 的設計意圖：

1. 加入公會並了解目前的 expedition goals。
2. 建立 shared base、outpost，或 guild hall。
3. 探索 world、dungeons、structures，以及之後的 off-world destinations。
4. 帶回 resources、loot、samples 與 information。
5. 使用 Create、farming、storage、transport 與 logistics 升級 guild infrastructure。
6. 形成 role division，讓玩家自然成為 explorers、engineers、builders、suppliers、fighters、mages、storage managers，或 space specialists。
7. 透過分階段 progression 解鎖更強的 gear、magic、technology 與 expedition preparation。
8. 建造 rockets、launch infrastructure 與 off-world outposts。
9. 帶回 space resources 與 expedition results，用來升級公會並解鎖後續 campaign goals。

這個 loop 是設計來源文件。當前實作可能只涵蓋其中一部分。

## 4. 玩家角色

早期設計角色：

- Explorer：偵查 terrain、structures、resources 與 routes。
- Engineer：建造 Create machines 與實用 automation。
- Builder：打造 guild base、outposts、roads 與 presentation areas。
- Supplier：準備 food、torches、beds、fuel 與 expedition kits。
- Fighter：保護團隊並處理危險 encounters。
- Storage manager：整理 shared resources，讓公會維持可用。

後續設計角色：

- Chief engineer：規劃更大型的 Create infrastructure 與 guild facilities。
- Railway/logistics engineer：連接 bases、resource points 與 expedition sites。
- Space engineer：準備 rockets、launch sites、oxygen 與 astral infrastructure。
- Fighter：發展為 Vanguard / 前鋒或其他 combat identities。
- Mage：發展為 Arcanist / 奧術師與 utility/control identity。
- City planner：塑造 guild hall、districts、roads 與長期 base feel。
- Astral expedition member：支援 off-world exploration、outposts 與 return logistics。

這些是設計角色。它們尚不一定是已強制執行的 classes，也不應被視為當前 active restrictions。

## 5. 技術 Baseline

當前 design baseline：

- Minecraft: 1.20.1.
- Loader: Forge.
- Java target: 17.
- Pack manager: packwiz.
- Launcher target: Prism Launcher.
- Create baseline: Create 1.20.1-0.5.1.j.
- 在當前 baseline 下，不要使用 Create 6.x。
- 不要將當前 baseline 切換到 Fabric、NeoForge，或 Minecraft 1.21.x。

這個 baseline 存在的原因，是 EG:SF 在加入更大型 systems 之前，需要穩定的 multiplayer foundation。任何 implementation work 開始前，仍應在 packwiz metadata 與 compatibility documentation 中確認 compatibility truth。

## 6. 歷史筆記

- 早期 planning 曾探索 expedition themes、seasonal/chapter progression、role-based play、gentle hardcore adventure，以及 theme-park-like areas。
- 專案 identity 逐漸從 generic modded survival server 轉向 guild campaign。
- Create、RPG role division 與 Ad Astra 成為穩定的 conceptual triangle。
- 這些筆記是 historical design roots。它們可能會被當前 implementation docs、release notes、active quest files，或未來核准的 design passes 取代。

## 7. 未來用途

- 當未來 design work 變大或變得分散時，使用此檔保存專案 identity。
- 用它檢查新想法是否強化 guild campaign、shared infrastructure、role division、exploration 與 space frontier direction。
- 不要使用此檔驗證 installed mods、active quest state、active GameStages、KubeJS logic，或 packwiz metadata。
- 若要確認當前實作狀態，請檢查 `docs/PROGRESSION_OVERVIEW.md`、`docs/releases/`、`config/ftbquests/quests/` 底下的 active FTB Quests files、KubeJS files，以及 packwiz metadata。
