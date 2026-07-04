# EG:SF Friends Content Preview｜v0.8.x 內容展示層

Status: design source / skeleton
Project: Expedition Guild: Stellar Frontier / 遠征公會：星界邊境
Last Updated: 2026-07-04
Use: Guide v0.8.x Friends Content Preview planning and pacing.
Do Not Use For: Full class implementation, TaCZ/Iron's full integration, weapon evolution, or v1.0 deep systems.

> Note:
> This is a design source document. It may describe intent, future plans, backlog ideas, or historical context.
> For current implementation state, check docs/PROGRESSION_OVERVIEW.md, docs/releases/, active FTB Quests files, KubeJS, and packwiz metadata.

## 0. Summary

- v0.8.x Friends Content Preview is a content-visibility layer, not the full EG:SF class or endgame system.
- Its purpose is to show friends that EG:SF is not only Create + Ad Astra.
- It should expose exploration, combat, life/base content, weapon variety, artifacts, and multiplayer-friendly loot.
- It must remain batch-based and testable.
- TaCZ, Iron's Spells, full weapon evolution, and v1.0 deep systems are outside this preview layer.

## 1. Version Purpose

- v0.8.x exists to improve first impression and early engagement.
- It should make the pack feel alive before deeper class systems are complete.
- It should demonstrate that EG:SF can support exploration, loot, weapons, base life, and friend-visible moments without abandoning its guild campaign identity.
- It should not attempt to finish TaCZ, Iron's Spells, full weapon evolution, or v1.0 deep systems.
- Design intent: use v0.8.x as a preview and bridge layer between the stable baseline and future v0.9.x class identity work.

## 2. Player Experience Goals

- Exploration players should have places to go and reasons to report discoveries back to the guild.
- Combat players should have enemies, dungeons, or weapons to try without requiring a complete class system.
- Life/base players should have decoration, guild-base, or support content that makes the shared base feel alive.
- Collection players should see artifacts, curios, rare drops, or loot goals worth remembering.
- Multiplayer groups should avoid loot conflict and have shared objectives.
- The intended feeling is: leave the guild base together, find something interesting, survive the trip, bring rewards home, and make the guild feel more complete.

## 3. Preview Content Buckets

- Exploration / dungeons:
  - Optional routes, side contracts, abnormal nests, underground spaces, and side expedition areas.
- Weapon variety:
  - More early and midgame combat toys, especially for Vanguard-like identity previews.
- Artifacts / curios / relic-like rewards:
  - Collectible items that create stories and build variety without becoming unchecked power spikes.
- Base-life and building content:
  - Furniture, doors, lights, windows, food, guild hall presentation, and shared living spaces.
- Multiplayer loot support:
  - Systems that reduce conflict when several players explore together.
- Friend-facing life/support content:
  - Companions, support NPCs, supply flavor, or social features that are visible to a group.
- Optional side expeditions:
  - Content that can sit beside the main progression without replacing Create, Ad Astra, or future class work.

## 4. Confirmed / Candidate Content

This section records design relevance only. Some entries may already be implemented and some may still be candidates. This file is not installed-mod truth.

- Lootr:
  - Role: multiplayer-friendly independent loot.
  - Preview value: reduces "one player opened the chest and everyone else got nothing" friction.
- Simply Swords:
  - Role: Vanguard weapon variety preview.
  - Preview value: gives combat players more visible weapon flavor before full class systems.
- Artifacts and Curios:
  - Role: exploration rewards and build variety.
  - Preview value: makes discoveries feel memorable and gives players collectible identity hooks.
- Macaw series:
  - Role: base-life and guild-building feel.
  - Preview value: helps the guild base look and feel like a shared place, not only machines and chests.
- Dungeon Crawl:
  - Candidate role: underground guild contracts / abnormal nests.
  - Preview value: gives exploration and combat players somewhere to go.
- Twilight Forest:
  - Candidate role: side expedition.
  - Boundary: not a main progression replacement.
- Terramity:
  - Candidate role: side content, abnormal threats, or calamity-style material source.
  - Boundary: base mod only if used; no addon in the first version.
- Touhou Little Maid:
  - Candidate role: friend-facing life/support side content.
  - Boundary: not a fourth class.
- Farmer's Delight limited addons:
  - Candidate role: guild food/supply layer.
  - Boundary: limited selection only; avoid broad food-stack sprawl.

## 5. Deferred Content

- Deferred: TaCZ full Gunner system should not be folded into v0.8.0 all at once.
- Deferred: Iron's Spells full Arcanist system should be staged as a technical test or later class work.
- Deferred: full weapon evolution, essence, gem, and affix systems.
- Deferred: Apotheosis deep integration.
- Deferred: Forbidden & Arcanus deep integration.
- Deferred: Botania.
- Deferred: full Create logistics integration.
- Deferred: full Guild Tier, class restriction, transfer, subclass, or fusion class systems.

These deferred systems may still be valuable later, but v0.8.x should not become the place where every v0.9.x or v1.0 system is forced in early.

## 6. Implementation Pacing

- Use small batches.
- Each batch should have:
  - packwiz install or metadata check when relevant.
  - Launch test.
  - Mod list check.
  - Relevant JEI or creative checks.
  - Log check.
  - Documentation of what changed.
  - Commit after validation, when implementation work is approved.
- Do not install many high-risk systems together.
- Suggested preview pacing can include:
  - Lootr / dungeon or exploration batch.
  - Weapon + artifacts batch.
  - Base-life / building batch.
  - Side expedition batch.
  - Friend-facing support content batch.
  - Quest entry / guild contract text batch.
- Actual order must follow current repo scan, installed mod state, compatibility notes, and release notes.

## 7. Future Use

- Use this file when deciding whether v0.8.x content belongs in the preview layer.
- Use it to prevent v0.8.x from becoming overloaded with v0.9.x or v1.0 systems.
- Use it to keep preview content visible, testable, and friend-facing.
- For current installed mods, check packwiz metadata and release notes.
- For current quest state, check active FTB Quests and `docs/PROGRESSION_OVERVIEW.md`.
