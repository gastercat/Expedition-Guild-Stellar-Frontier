# EG:SF Class Progression｜三職業與災厄式進度層

Status: design source / expanded
Project: Expedition Guild: Stellar Frontier / 遠征公會：星界邊境
Last Updated: 2026-07-04
Use: Guide future v0.9.x class identity, Guild Tier, class setup, transfer/subclass, and Calamity-like progression planning.
Do Not Use For: Immediate v0.8.x implementation, current installed mod list, active balance values, or complete KubeJS enforcement logic.

> Note:
> This is a design source document. It may describe intent, future plans, backlog ideas, or historical context.
> For current implementation state, check docs/PROGRESSION_OVERVIEW.md, docs/releases/, active FTB Quests files, KubeJS, and packwiz metadata.

## 0. Summary

- EG:SF should eventually support three core combat identities: Vanguard, Gunner, and Arcanist.
- These identities should support a guild-campaign progression structure, not isolated solo class builds.
- The design borrows Calamity-like progression logic: stages, boss gates, class setup, material unlocks, escalating world pressure, and postgame goals.
- It does not try to copy Terraria combat feel, bullet-hell pacing, or Infernum-style boss AI.
- Guild Tier should become the shared team progression skeleton.
- Class Setup should help players understand recommended weapons, armor, relics, supplies, and goals per phase.
- Full class restrictions, transfer systems, subclass systems, fusion classes, and deep KubeJS enforcement are future work, not v0.8.x scope.

## 1. Design Scope

- This file guides future v0.9.x Class Identity Expansion planning.
- It should help connect FTB Quests, GameStages, KubeJS, class onboarding, Boss Gates, Guild Tier progression, and Class Setup documentation.
- It should not be treated as current implementation truth.
- It should not be used to justify adding every combat mod at once.
- Current implementation truth remains active FTB Quests, KubeJS files, packwiz metadata, release notes, and `docs/PROGRESSION_OVERVIEW.md`.

## 2. Three Core Combat Lines

### Vanguard / 前鋒

- Role: high-risk close-range combat, boss pressure, armor breaking, elite handling, and melee burst.
- Strengths:
  - Shield break.
  - Execution windows.
  - Sustain.
  - Mobility.
  - Close-range burst.
  - Boss-specific mechanics.
- Risks:
  - If overtuned, Vanguard trivializes bosses.
  - If undertuned, players avoid melee entirely.
- Future mod directions may include Better Combat, Simply Swords, Celestisynth, Apotheosis, Lukas' Weapon Leveling, and Cataclysm drops.

### Gunner / 銃士

- Role: ranged safety, siege firepower, wave clearing, anti-air, ammo management, and attachment management.
- Strengths:
  - Defense events.
  - Ranged support.
  - Weak-point targeting.
  - Suppression.
  - Anti-air windows.
- Risks:
  - If unrestricted, Gunner can dominate melee and magic.
  - Ammo, access gates, and progression timing are required.
- Future mod directions may include TaCZ, TACZ Weapon Leveling Updated, Apotheosis Modern Ragnarok-style compatibility, and Create ammo logistics.

### Arcanist / 奧術師

- Role: control, AoE, support, shielding, healing, summoning, elemental answers, and utility solutions.
- Strengths:
  - Crowd control.
  - Shield removal.
  - Elemental marks.
  - Team support.
  - Ritual or material progression.
- Risks:
  - If treated only as ranged DPS, Arcanist overlaps Gunner.
  - If too broad too early, it becomes all-purpose.
- Future mod directions may include Iron's Spells, limited spell expansions, and later Ars Nouveau / Occultism / Forbidden & Arcanus candidates if approved.

## 3. Guild Tier Progression

- Guild Tier should be the shared team progression skeleton.
- Individual players may have classes, but the guild has campaign stages.
- Guild Tier should record whether the team has completed required class certifications, boss gates, defense milestones, Create logistics, and Ad Astra milestones.
- Team progress should not regress just because one player changes class later.

Example tier concept:

- Tier 0: guild onboarding / handbook / basic server systems.
- Tier 1: basic class training and first outpost readiness.
- Tier 2: first boss preparation and first formal expedition.
- Tier 3: first defense and mid-tier class equipment.
- Tier 4: Ad Astra preparation and first space license.
- Tier 5: astral outpost, cross-class material flow, and advanced gates.
- Tier 6: endgame calamity / postgame archive / godforging direction.

These tier names and numbers are design scaffolding, not final active implementation truth.

## 4. Class Setup Format

- Class Setup should be used to help players understand what to prepare for each stage.
- Each major stage can include:
  - Guild briefing.
  - Recommended Vanguard weapons, armor, and relics.
  - Recommended Gunner weapons, ammo, and attachments.
  - Recommended Arcanist spells, robes, and foci.
  - Shared supplies.
  - Create / logistics preparation.
  - Boss, defense, or dungeon objective.
  - Unlocks after completion.
  - Next-stage preview.
- The purpose is guidance, not a strict wiki-dump.
- Avoid turning quests into a giant checklist that feels like homework.

## 5. Transfer / Subclass Direction

- Early stages may allow testing or limited class switching.
- Midgame transfer should require tasks, materials, or cooldowns.
- A transferred class may start from lower-tier access while preserving some previous role history.
- Subclasses should be limited and should not let one player become all three roles at full strength.
- High-tier weapons should remain bound to main class identity or late-game dual-specialization rules.
- This system is future work and should not be implemented before the base class identity is stable.

## 6. Fusion Class Direction

- Fusion class concepts should be mid/late-game or endgame, not early-game.
- Possible future directions:
  - Spellblade: Vanguard + Arcanist.
  - Arcane Ballistics: Gunner + Arcanist.
  - Assault Vanguard / Breachguard: Vanguard + Gunner.
  - Three-line godforged armaments: post-endgame or Chapter 11 direction.
- First versions should prefer quest/lore/setup framing over deep mechanical enforcement.
- Full fusion mechanics require careful balance and should be deferred.

## 7. Boss Gate and Calamity-like Progression

Calamity-like progression means:

- Bosses unlock next-stage materials.
- Class setup changes after major bosses.
- World pressure escalates after milestones.
- Defense events and expedition milestones become campaign beats.
- Postgame keeps goals alive through trophies, archives, godforging, and challenge loops.

It does not mean:

- Copying Terraria combat.
- Bullet-hell boss expectations.
- Endless grind without meaningful progression.
- Boss rush as the only gameplay.

Boss Gates should connect:

- Three class readiness.
- Shared guild supplies.
- Create logistics.
- Defense or dungeon milestones.
- Ad Astra stage unlocks.

Later bosses can use layered defense concepts:

- Armor layer for Vanguard.
- Flying / weak-point layer for Gunner.
- Elemental / shield layer for Arcanist.
- Core phase for team coordination.

These mechanics are future design direction and may require KubeJS, GameStages, In Control, custom quests, or mod configuration later.

## 8. MVP Boundaries

- v0.8.x should not implement the full three-class system.
- v0.8.x may show previews of weapons, artifacts, content variety, and player-facing goals.
- v0.9.x is the more appropriate target for Class Identity Expansion.

First MVP can be:

- FTB Quests class selection or class training tasks.
- Basic GameStages names.
- Class setup text pages.
- Starter weapon or starter role framing.
- Small number of class-specific tasks.

First MVP should not include:

- Full item locks.
- Full damage rewriting.
- Complete transfer system.
- Full subclass system.
- Fusion class mechanics.
- All TaCZ / Iron's / Better Combat systems at once.
- Endgame godforging.

Always keep batch size small and testable.

## 9. Risks

- Gunner can dominate if firearms are too strong, too cheap, or unlocked too early.
- Vanguard can feel bad if melee risk is not rewarded.
- Arcanist can become either too weak early or too universal later.
- Class restrictions can frustrate players if introduced before the content is fun.
- Too many systems at once can turn EG:SF into a confusing mixed pack.
- Calamity-like progression can become grindy if rewards are only numbers.
- Boss Gates can feel artificial if they do not connect to visible player goals.

Mitigation:

- Introduce class identity gradually.
- Use quests and guidance before hard restrictions.
- Gate high-tier tools and weapons carefully.
- Keep each stage readable for friends.
- Validate with manual testing and player feedback.

## 10. Future Use

- Use this file when planning v0.9.x Class Identity Expansion.
- Use it when deciding how TaCZ, Iron's Spells, Better Combat, Simply Swords, Artifacts, Curios, and future combat systems should fit.
- Use it when designing Guild Tier, Class Setup, Boss Gate, transfer, subclass, or fusion class documents.
- Do not use it as proof that class systems are already implemented.
- For implementation truth, check active FTB Quests, KubeJS, packwiz metadata, release notes, and `docs/PROGRESSION_OVERVIEW.md`.
