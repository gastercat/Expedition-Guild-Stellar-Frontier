# EG:SF System Integration｜大型系統整合設計

Status: design source / expanded
Project: Expedition Guild: Stellar Frontier / 遠征公會：星界邊境
Last Updated: 2026-07-04
Use: Guide future integration of guild engineering, weapon evolution, dragon disaster, guild core, threat systems, storage, endgame materials, and post-endgame systems.
Do Not Use For: Immediate mod installation, current implementation truth, or one-step full-system execution.

> Note:
> This is a design source document. It may describe intent, future plans, backlog ideas, or historical context.
> For current implementation state, check docs/PROGRESSION_OVERVIEW.md, docs/releases/, active FTB Quests files, KubeJS, and packwiz metadata.

## 0. Summary

- EG:SF includes several large system ideas, but they must serve the guild campaign rather than become separate competing main systems.
- Create should act as guild engineering infrastructure, not a fourth class.
- Guild armament evolution should connect bosses, class identity, materials, quests, lore, and rarity presentation.
- Dragon Disaster should be an event/guild-core defense concept, not random base-destroying dragons.
- Endgame materials and godforging-style systems must be late or post-endgame only.
- These systems are future staged design directions, not immediate v0.8.x implementation.

## 1. Design Scope

- This file organizes future large-system integration concepts.
- It should guide later planning for v0.9.x, v1.0+, endgame, and postgame.
- It should not be used as an immediate mod installation list.
- It should not override compatibility notes, release notes, active quests, KubeJS, or packwiz metadata.
- Every large system must map to Chapter, Guild Tier, class role, player experience, and test scope before implementation.

## 2. Guild Engineering / Create Logistics

- Create should be treated as Guild Engineering Division / 公會工程部.
- Create is infrastructure for the guild campaign, not a fourth combat class.
- Possible responsibilities:
  - Ammo production.
  - Food and supply processing.
  - Defense traps and gates.
  - Outpost deployment support.
  - Rocket and Ad Astra material processing.
  - Dragonsteel or endgame material preprocessing.
  - Logistics for space outposts.
- Mainline quests should require "can build and use", while deep side challenges can ask for automation and throughput.
- Avoid turning the pack into a hardcore industrial pack.

## 3. Storage and Logistics Progression

- Storage should remain understandable for friends.
- Early / mid progression can rely on physical storage and simple terminal-like systems.
- Create should handle production and logistics, not necessarily user-friendly mass storage alone.
- Late storage systems, if used, should serve astral logistics or guild-scale storage.
- Avoid adding multiple overlapping digital storage systems unless there is a clear reason.
- Storage progression should not skip exploration, Boss Gates, or Ad Astra progression.

## 4. Guild Armament Evolution

- Guild Armament Evolution / 公會兵裝進化 is a future core identity system.
- Standard design loop:
  1. Defeat boss, defense event, or expedition target.
  2. Unlock evolution task.
  3. Submit old weapon and materials.
  4. Submit class certification or guild approval material.
  5. Receive evolved weapon through quests or controlled reward logic.
  6. Attach lore, rarity, affixes, sockets, or special effects where appropriate.
- It should support weapon-line identity, not force every player into one single weapon forever.
- It can later extend to Vanguard weapons, Gunner weapons, Arcanist foci/books, and fusion armaments.
- First versions should be small and quest-oriented before deep NBT/KubeJS systems.

## 5. Dragon Disaster and Guild Core Defense

- Dragon Disaster should be a staged event or campaign milestone.
- Dragons should not be allowed to randomly destroy normal player bases.
- If Ice and Fire or similar dragon systems are used later, natural dragon generation, lairs, and griefing should be heavily controlled or disabled where possible.
- The defense objective should be Guild Core / 公會核心, not the entire player home.
- Event structure can include:
  - Warning / guild bulletin.
  - Preparation phase.
  - Enemy waves or cultist/dragonkin pressure.
  - Dragon air phase.
  - Grounded armor-break phase.
  - Elemental shield phase.
  - Team coordination / core phase.
- Vanguard, Gunner, Arcanist, and Create should each have meaningful roles.

## 6. Large-number and Rarity Presentation

- EG:SF can use large-number feel as a presentation layer, especially in late/endgame.
- Avoid making the underlying balance depend on uncontrolled billion/trillion raw stats.
- Prefer staged scaling, multipliers, shields, displayed damage tiers, or boss phases over pure huge HP pools.
- Legendary Tooltips / Item Borders-style rarity presentation can help mark guild gear, boss gear, dragonsteel, calamity gear, and godforged gear.
- Rarity presentation should be reserved for meaningful equipment, relics, boss drops, evolution materials, and endgame items.
- Do not make every item visually legendary.

## 7. Endgame Materials and Godforging

- Allthemodium / Avaritia-style systems, if used, should be late endgame or post-endgame only.
- They should not become normal mining-to-overpowered-tools progression.
- They can serve:
  - Celestisynth or high-tier weapon awakening bases.
  - Space elevator / astral logistics infrastructure.
  - Godforged armament materials.
  - Chapter 10 / Chapter 11 goals.
- Avaritia-style infinity systems should be redesigned as boss/guild/fusion rewards, not simply JEI-checkable massive compression.
- Infinity armor or similar invulnerability rewards should be postgame collection/challenge rewards, not normal progression.

## 8. Guild Threat / Forbidden Debt / Reputation

### Guild Threat

- Future hidden or visible world-response pressure.
- Increases after bosses, defense wins, rockets, dragonsteel, forbidden artifacts, or godforging.
- Can later affect defense events, monster pools, boss phases, or calamity pressure.

### Forbidden Debt

- Future cost system for forbidden artifacts, Enigmatic-style relics, Avaritia-style power, or taboo research.
- Power should create consequences instead of being free.

### Guild Reputation

- Future department reputation system for guild engineering, armory, arcane academy, astral bureau, relic office, kitchen/logistics, or farming.
- Should unlock side tasks, discounts, titles, blueprints, or cosmetics.

All three are future design directions and should start with quests/text/checkmarks before heavy mechanical systems.

## 9. Space Elevator and Astral Logistics

- Ad Astra rockets should be the first true space progression.
- Space elevator and astral logistics should be late/endgame infrastructure, not early transport.
- Possible progression:
  1. First rocket.
  2. Moon landing.
  3. Mars outpost.
  4. Advanced planetary outposts.
  5. Orbital logistics.
  6. Space elevator.
  7. Astral supply network.
- Space elevator can later unlock:
  - Large-scale astral material transport.
  - Endgame alloy production.
  - Orbital defense support.
  - Fusion armament materials.
  - Calamity or postgame access.
- It must not replace the first exploration and outpost-building experience.

## 10. MVP Boundaries

- Do not implement all large systems at once.
- v0.8.x should not implement guild threat, forbidden debt, full weapon evolution, dragon disaster, space elevator, or godforging.
- A safe early MVP can be text/checkmark quest framing only.
- Later MVPs may add:
  - A small armament evolution prototype.
  - A small guild core concept task.
  - A limited rarity/lore reward.
  - A limited Create logistics task.
  - A staged Ad Astra outpost requirement.
- Avoid KubeJS-heavy systems until the quest and player-feel layer is stable.
- Each system should be introduced in a small tested batch.

## 11. Risks

- Create integration can become too complex and turn EG:SF into a hardcore factory pack.
- Weapon evolution can become a maintenance burden if every weapon line needs custom logic.
- Dragon Disaster can frustrate players if it damages homes or interrupts exploration without consent.
- Big-number systems can break balance, UI readability, and mod compatibility.
- Godforging can trivialize all earlier content if unlocked too early.
- Guild Threat or Forbidden Debt can feel punitive if consequences are not clearly communicated.
- Space elevator can make rockets or outposts feel obsolete if introduced too early.

Mitigation:

- Keep systems opt-in or milestone-triggered where possible.
- Protect player homes and use Guild Core as event target.
- Use quests and lore before hard mechanics.
- Gate endgame materials behind Boss Gates and team progression.
- Test every system in isolation before integration.

## 12. Future Use

- Use this file when planning future Create logistics, armament evolution, dragon disaster, guild core, rarity, endgame material, threat, reputation, or astral logistics systems.
- Use it to prevent big systems from being added without Chapter / Guild Tier / player-feel justification.
- Use it to split future implementation into safe batches.
- Do not use it as proof that these systems are already implemented.
- For implementation truth, check active FTB Quests, KubeJS, packwiz metadata, release notes, and `docs/PROGRESSION_OVERVIEW.md`.
