# EG:SF Mod Integration Scope Review｜模組審核與需求方清單收束

Status: design source / skeleton
Project: Expedition Guild: Stellar Frontier / 遠征公會：星界邊境
Last Updated: 2026-07-04
Use: Guide future mod candidate decisions through Chapter, Guild Tier, class role, player experience, and implementation risk.
Do Not Use For: Current installed mod inventory, compatibility truth, or final modpack release notes.

> Note:
> This is a design source document. It may describe intent, future plans, backlog ideas, or historical context.
> For current implementation state, check docs/PROGRESSION_OVERVIEW.md, docs/releases/, active FTB Quests files, KubeJS, and packwiz metadata.

## 0. Summary

- EG:SF should not accept mods only because they are interesting, popular, or requested.
- Each mod must serve Chapter progression, Guild Tier, class identity, Boss Gate, Create logistics, Ad Astra progression, friend-facing value, or backlog purpose.
- Inventory-first means scanning current installed mods and existing project files before adding anything.
- Experience-filter means judging the player experience and design risks, not only technical installability.
- This document is a design evaluation layer and does not replace compatibility notes, mod lists, release notes, or packwiz metadata.

## 1. Design Scope

- This file guides future mod candidate review.
- It should help decide whether a mod is mainline, side content, preview content, backlog, deferred, rejected, or post-endgame only.
- It should not be used as the installed mod list.
- It should not be used as compatibility truth.
- Current installed state must be checked through packwiz metadata, release notes, and current repo files.

## 2. Review Rules

- A mod should not be added without a clear design role.
- Every accepted mod should answer:
  - Which Chapter or Guild Tier does it serve?
  - Which player experience does it improve?
  - Which class, guild function, or progression gate does it support?
  - Does it overlap with an installed system?
  - Does it require quest, config, KubeJS, loot, recipe, or balance work?
  - Can it be tested in a small batch?
- If a mod has no clear role, put it in candidate/backlog instead of installing immediately.

## 3. Inventory-first Workflow

1. Scan repo state.
2. Scan packwiz mod list and metadata.
3. Scan current FTB Quests structure.
4. Scan KubeJS / GameStages / config support.
5. Classify existing systems.
6. Identify actual gaps.
7. Only add mods that fill a gap or improve a defined experience.
8. Install in small batches with launch, log, and manual tests.
9. Commit each safe batch separately after verification.

This prevents installing duplicate or conflicting systems before understanding the current pack.

## 4. Experience-filter

Judge what player experience a mod creates.

Good candidates can strengthen:

- Guild cooperation.
- Class identity.
- Boss Gate progression.
- Defense / invasion pressure.
- Create logistics.
- Ad Astra progression.
- Weapon evolution.
- Artifacts / curios / loot excitement.
- Life/base content.
- Friend-facing fun.
- Postgame goals.

Risky candidates may:

- Let one player push progression alone.
- Make Gunner dominate Vanguard and Arcanist.
- Make Arcanist become all-purpose too early.
- Let automation, pets, turrets, or summons replace players.
- Skip Boss Gates.
- Make Create or Ad Astra irrelevant.
- Turn the pack into a generic mixed pack.
- Overload quests with checklist hell.

## 5. Accepted / Candidate Directions

These are design directions, not installed-mod truth.

Examples of accepted or candidate directions:

- Lootr for multiplayer-friendly independent loot.
- Simply Swords for Vanguard weapon variety preview.
- Artifacts / Curios for exploration rewards and build variety.
- Macaw series for guild base-life and building feel.
- Twilight Forest as side expedition, not main progression replacement.
- Terramity base mod as side abnormal/calamity-style content, no addon in first version.
- Touhou Little Maid as friend-facing life/support side content, not a fourth class.
- Farmer's Delight with limited addons for guild food/supply.
- Refined Storage as later-friendly digital storage direction if needed.
- Ad Astra structure addons as space exploration enhancement if compatible.
- SlashBlade as optional test branch if it does not dominate Vanguard.

Actual implementation must be verified through current packwiz state and release notes.

## 6. Deferred / Rejected Directions

Deferred or rejected directions can change only after explicit review.

Examples:

- Create 6.x: do not use; Create should remain 1.20.1-0.5.1.j unless a future full migration is explicitly planned.
- Fabric / NeoForge / Minecraft 1.21.x versions: do not use for this pack baseline.
- Mekanism / MekaSuit: rejected for current direction because it risks turning EG:SF into a large tech pack.
- AE2 and large AE2 addon stacks: rejected/deferred; avoid overlapping digital storage complexity.
- Alex's Mobs: deferred/rejected for first version unless a future review reopens it.
- Large Delight addon stacks: rejected; use limited selection only.
- Terramity addons: do not add in first version.
- Botania: deferred to later v1.0+ review.
- Forbidden & Arcanus deep integration: deferred to later magic/forbidden material planning.
- TaCZ full Gunner system: not all at once in v0.8.x; stage as technical test and later class work.
- Iron's Spells full Arcanist system: stage as technical test and later class work.

Do not convert deferred items into implementation tasks without a new review.

## 7. Boss / Monster / Dimension Candidates

- Boss and monster mods should serve staged campaign beats, not random difficulty spikes.
- Cataclysm-style content is better suited to endgame/calamity roles.
- Mowzie's Mobs / Meet Your Fight / Bosses of Mass Destruction-style content can serve high-quality boss or certification encounters if compatible.
- Born in Chaos / Mutant Monsters / The Graveyard-style content can serve monster pool, invasion, or side dungeon roles if controlled.
- Twilight Forest should remain side expedition / sample recovery / training ground, not full mainline takeover.
- Ice and Fire-style dragon content, if used later, should be Dragon Disaster event content with controlled generation and griefing.
- Boss/dimension additions require worldgen, spawn, loot, quest, and manual test planning.

## 8. Logistics / Farming / Storage / Transport Candidates

- Logistics systems should support guild progression without replacing player roles.
- Farmer's Delight should serve guild food, expedition meals, and defense/Boss prep supplies.
- Mystical Agriculture, if used, must be gated and should not farm Boss, dragonsteel, Allthemodium, Avaritia, or other gate-breaking materials freely.
- Storage should stay understandable and avoid overlapping full digital systems.
- Create trains, Waystones, aircraft, ships, rockets, and later Tempad / space elevator-style transport should be staged.
- Avoid early unrestricted flight or teleportation that trivializes exploration and Ad Astra progression.

## 9. Life / Friend-facing Content Candidates

- Life/base content can improve retention and friend engagement.
- Touhou Little Maid should be framed as life/support side content, not a fourth class or auto-combat army.
- Macaw/building content can support guild base identity, dorms, outposts, and building motivation.
- Artifacts, curios, trophies, and loot hall concepts can support collection and identity.
- Friend-facing content should not replace core progression or automate the main combat loop.

## 10. Risk Controls

- Use small batches.
- Separate high-risk mods from each other.
- After each batch:
  - Check packwiz list.
  - Inspect changed metadata.
  - Launch test.
  - Check JEI/creative where relevant.
  - Check latest.log for errors.
  - Manually test major interactions.
  - Commit only after verification.
- Avoid mixing:
  - Worldgen + combat + KubeJS + quest rewrite in one batch.
  - TaCZ + Iron's + full class system in one batch.
  - Storage overhaul + logistics overhaul + Ad Astra gates in one batch.
  - Boss mods + invasion mods + loot rewrite in one batch.
- Design docs may propose directions, but implementation must stay batch-based and testable.

## 11. Future Use

- Use this file before deciding whether to add a mod.
- Use it to classify candidates as mainline, side content, preview, backlog, deferred, rejected, or post-endgame only.
- Use it with `docs/PROGRESSION_OVERVIEW.md`, `COMPATIBILITY.md`, `MODLIST.md`, `docs/releases/`, and packwiz metadata.
- Do not use it as installed-mod truth.
- Do not use it as a substitute for compatibility checks or release notes.
