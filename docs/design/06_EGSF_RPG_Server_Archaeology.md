# EG:SF RPG Server Archaeology｜RPG 服考古與可吸收設計

Status: design source / skeleton
Project: Expedition Guild: Stellar Frontier / 遠征公會：星界邊境
Last Updated: 2026-07-04
Use: Preserve reference lessons from past Minecraft RPG servers and convert them into EG:SF-safe design principles.
Do Not Use For: Copying old server systems directly, verifying live server status, or treating reference servers as current factual sources.

> Note:
> This is a design source document. It may describe intent, future plans, backlog ideas, or historical context.
> For current implementation state, check docs/PROGRESSION_OVERVIEW.md, docs/releases/, active FTB Quests files, KubeJS, and packwiz metadata.

## 0. Summary

- EG:SF can learn from RPG server design patterns without copying old servers directly.
- Useful lessons include weapon progression feel, visible growth, boss loot goals, class identity, dungeon rhythm, and long-term collection pressure.
- Dangerous patterns include pure grind, safe-spot farming, CPS-heavy combat, meaningless stat inflation, unclear upgrade paths, and economy systems that overpower progression.
- This file is a design reference layer, not historical proof and not current implementation truth.

## 1. Design Scope

- This file translates RPG server archaeology into reusable EG:SF principles.
- It can reference legacy notes and old modlist archaeology, but should not duplicate or revive old systems blindly.
- It should guide future weapon evolution, class identity, loot, boss, dungeon, and progression feel decisions.
- It should not be used as a mod installation list.
- It should not be used as proof that any old server mechanics are implemented in EG:SF.
- Current implementation truth remains active FTB Quests, KubeJS, packwiz metadata, release notes, and `docs/PROGRESSION_OVERVIEW.md`.

## 2. Reference Pattern Categories

Old RPG servers often created retention through:

- Visible weapon tiers.
- Upgrade materials.
- Boss drops.
- Rare suffixes or affixes.
- Gem/socket-like growth.
- Dungeon access gates.
- Class or weapon identity.
- Trophy/status items.
- Repeated but meaningful boss attempts.

EG:SF should evaluate these as design patterns, not as systems to copy verbatim.

## 3. Absorb: Weapon Growth Feel

- Weapons should feel like they have a history.
- A good weapon line can record:
  - First acquisition source.
  - Boss or expedition material used.
  - Class certification.
  - Upgrade milestones.
  - Rarity or lore shift.
  - Final evolution branch.
- EG:SF should avoid forcing every player into one weapon forever.
- Multiple weapon lines can exist for different class identities and playstyles.
- First versions should use quests, lore text, reward naming, and controlled rewards before deep NBT or custom upgrade systems.

## 4. Absorb: Essence / Gem / Affix Logic

- Essence, gem, and affix systems are useful because they make progress visible.
- EG:SF can reinterpret them as:
  - Boss essence.
  - Dragon fragments.
  - Astral cores.
  - Guild certification seals.
  - Class relic components.
  - Calamity marks.
  - Forbidden debt materials.
- Avoid unlimited random affix rerolling unless there is clear balance control.
- Avoid excessive RNG that makes players feel their time was wasted.
- Prefer milestone-based or semi-deterministic upgrades for first versions.

## 5. Absorb: Boss and Dungeon Goals

- Bosses should unlock meaningful next steps, not only give generic loot.
- Dungeons should offer:
  - Preparation requirement.
  - Class role moments.
  - Loot reason.
  - Return reason.
  - Future upgrade material.
- Boss Gates can connect boss kills, class setup, Guild Tier, Create logistics, and Ad Astra progress.
- Repeated boss attempts should have visible purpose such as trophies, fragments, class gear, or archive completion.

## 6. Absorb: Class Armory and Identity

- RPG servers often make players feel attached to a role through gear identity.
- EG:SF can use a guild armory concept:
  - Vanguard weapon wall.
  - Gunner ammo/attachment rack.
  - Arcanist spell/focus archive.
  - Relic hall.
  - Boss trophy shelf.
  - Class setup guide.
- This should support identity and preparation, not become a mandatory spreadsheet.
- Early versions can be quest text, item frames, storage labels, trophies, or base-building prompts.

## 7. Avoid: Pure Grind and Safe-spot Farming

- EG:SF should not reward standing in one safe place killing mobs for hours.
- Avoid systems where optimal play is:
  - AFK farming.
  - Safe-spot boss cheesing.
  - Repetitive mob grinding without new decisions.
  - Low-risk high-reward loot loops.
- If repeated content exists, it should rotate objectives, require preparation, or serve visible collection/progression goals.
- Loot and XP should not bypass Boss Gates or Guild Tier progression.

## 8. Avoid: CPS and Mechanical Skill Traps

- EG:SF should not be balanced around click speed or PvP-style combo mechanics.
- Better melee feel can come from positioning, shields, stamina-like pacing, armor breaks, boss windows, and team coordination.
- Gunner and Arcanist should not become pure ranged DPS replacements for melee.
- Combat design should be readable for friends and multiplayer groups.

## 9. Avoid: Meaningless Stat Inflation

- Large numbers can be used as presentation, but not as uncontrolled balance.
- Avoid weapons that only grow by Sharpness level or raw attack number.
- Avoid HP bloat without phase design.
- Better scaling can use:
  - Phase mechanics.
  - Armor/shield layers.
  - Elemental counters.
  - Class-specific windows.
  - Material gates.
  - Rarity presentation.
  - Visible unlocks.
- Rewards should change what players can do, not only add bigger numbers.

## 10. Avoid: Economy and Upgrade Overload

- Old RPG servers often rely on economies, market pressure, upgrade casinos, and heavy trading loops.
- EG:SF should be careful with economy-like systems because multiplayer friends may not want spreadsheet play.
- Avoid early auction, market, currency sink, random upgrade failure, or repair-tax systems.
- If currency or reputation exists later, it should support guild progression and side rewards rather than replace exploration and boss progression.

## 11. Connection to EG:SF Systems

- Weapon growth lessons connect to Guild Armament Evolution.
- Essence/gem/affix lessons connect to boss materials, dragon materials, astral cores, and rarity presentation.
- Dungeon lessons connect to Boss Gates, side expeditions, Twilight Forest-style content, Terramity-style abnormal threats, and Dungeon Crawl-style content.
- Class armory lessons connect to Vanguard/Gunner/Arcanist setup pages.
- Collection lessons connect to Guild Loot Hall and postgame archive.
- Risk lessons connect to Inventory-first, Experience-filter, and small-batch implementation.

## 12. Legacy Notes Relationship

- Legacy oddmodlist notes can remain historical reference material.
- They should not be treated as current design truth.
- They should not automatically authorize old mod additions.
- Useful information from legacy notes should be filtered through:
  - Current Minecraft / Forge baseline.
  - Create 0.5.1j constraint.
  - Packwiz state.
  - Chapter / Guild Tier fit.
  - Player-feel value.
  - Implementation risk.
- If a specific legacy note becomes useful, cite or summarize it in a future focused design patch rather than copying everything here.

## 13. Future Use

- Use this file when designing weapon evolution, boss drops, dungeon loops, class armory, rarity, trophies, and postgame goals.
- Use it to avoid turning EG:SF into a grind-heavy RPG server clone.
- Use it with `docs/design/03_EGSF_Class_Progression_Calamity_Layer.md`, `docs/design/04_EGSF_System_Integration.md`, `docs/design/05_EGSF_Mod_Integration_Scope_Review.md`, and the Hypixel-style backlog file.
- Do not use it as installed-mod truth.
- Do not use it as proof of any external server's historical implementation.
- For current implementation truth, check active FTB Quests, KubeJS, packwiz metadata, release notes, and `docs/PROGRESSION_OVERVIEW.md`.
