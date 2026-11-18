# Expedition Guild: Stellar Frontier Roadmap

## Purpose

This roadmap records planned direction for Expedition Guild: Stellar Frontier.
It is not a guarantee that every listed feature will be implemented.

Every feature must still pass Inventory-first and Experience-filter review before
implementation. The project should continue to ask what files, mods, formats, and
tested workflows already exist, and what player experience the change creates for
the expedition guild campaign.

## Current baseline

- 目前 release 為 `v0.8.1-friends-feedback-test`（GitHub pre-release），正在收集朋友回饋；目前狀態與允許的任務以 [`PROGRESS.md`](../PROGRESS.md) 為準。
- v0.7.x 建立了 Chapter 0-11 gate skeleton、FTB Quests MVP gates、GameStages reward checks 與繁中玩家文件；v0.8.x 加入朋友預覽內容並 polish Chapter 0／1。
- Release notes are stored in `docs/releases/`.

## v0.8.0 Friends Content Preview

Candidate content layers:

- Twilight Forest
- Terramity
- Touhou Little Maid
- Macaw series / furniture and building content
- Lootr
- Dungeon Crawl
- Simply Swords
- Artifacts

Design intent:

- More exploration, combat, base life, collectible gear, multiplayer loot feel,
  and friend-visible content.
- Do not treat this as a blind install-all pass.
- Start with low-risk mod install verification, JEI scan, FTB Quest
  introductions, and player-facing documentation.

## v0.8.x Lightweight Guild Systems

- Guild Research Codex
- Guild Logistics Facilities
- Maid / Relic Companion / Class Assistant
- Guild Loot Hall

MVP rule:

- Start with FTB Quests text/checkmark/item tasks.
- No real skill XP, pets, minions, auction/economy, complex KubeJS, recipes,
  loot, or new systems without explicit approval.
- 之後接在 Chapter 1 公會據點／早期進度附近，不另開新章節；第一版 MVP 不使用 KubeJS、GameStages、配方或 loot 變更，也不加新 mod，不動 Chapter 3／4／5／9／10／11（移自舊版 `SKILL.md` 的 v0.8.x Backlog）。

## v0.9.0 Class Identity Expansion

Planned direction:

- TaCZ as Gunner foundation.
- Iron's Spells & Spellbooks as Arcanist foundation.
- Vanguard weapon identity through melee weapons, artifacts, and later boss
  materials.
- Do not rush full balancing.
- Start with install verification, JEI/item ID scan, basic starter quests, role
  identity, and safe availability.

### 開發節奏（移自舊版 `SKILL.md` 的 Roadmap Memory）

Gunner／TaCZ：

- 不要一次完成完整平衡、彈藥經濟、武器進度或大型 KubeJS logic。
- 早期階段聚焦安裝驗證、JEI／item id 掃描、基本武器取得、簡單的 FTB Quests 介紹，先不做完整 Boss 平衡。
- Gunner 的強項是守城、遠程支援、清怪與遠征安全，不是單體秒殺 Boss。

Arcanist／Iron's Spells & Spellbooks：

- 早期法術可能偏弱，需要用任務、入門引導與之後的 addon／平衡 review 支撐成長感。
- 不要太早解鎖高階法術、墨水或後期魔法材料。
- 早期階段聚焦入門法術的職業識別、Arcanist 定位說明與支援／控場／功能 fantasy，先不做完整魔法平衡。
- Arcanist 的強項是 AOE、控場、治療／支援、召喚與功能解法。

魔法後端決策：

- Botania 延後到 v1.0.x 以後；v0.8.x／v0.9.x 規劃不加入 Botania，除非另有明確指示。
- Forbidden & Arcanus 是之後禁忌材料／儀式風格的候選。若之後整合，優先以 Create 半加工作為前置條件，同時保留 F&A 的儀式特色。

## v1.0.0 Campaign Coherence

Planned direction:

- Polish Chapter 0-11 flow.
- Connect Create logistics, Ad Astra, RPG exploration, boss gates, and class
  identity.
- Improve player guides, compatibility docs, testing docs, and release
  documentation.
- Prepare a stable multiplayer campaign baseline.

## Create Logistics Full Integration

This is long-term / high-risk.

Potential areas:

- Ammo supply
- Expedition food and medicine
- Base defense supply
- Rocket preparation
- Astral outpost logistics
- Space elevator / stellar supply network

Rules:

- Do not implement in one pass.
- Each subsystem needs its own research, MVP, test, and balancing phase.

## Endgame / Postgame Direction

Long-term ideas:

- Dragon calamity
- Fusion classes
- Endgame calamity
- Divine / mythic gear identity
- Loot Hall expansion
- Archived postgame records
- Optional boss rush only after explicit approval

Rules:

- Keep postgame as placeholder/archive until approved.
- Do not implement real boss rush, title collection, postgame scaling, or
  complex reward loops without explicit approval.

## Documentation cadence

- When crossing a small or major milestone, especially v0.7.x -> v0.8.0, run a
  docs-only review.
- Review README, CHANGELOG, COMPATIBILITY, docs/releases, player guide,
  progression overview, testing guide, and this roadmap.
