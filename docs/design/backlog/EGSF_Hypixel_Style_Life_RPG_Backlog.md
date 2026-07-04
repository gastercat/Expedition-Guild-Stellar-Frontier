# EG:SF Hypixel-style Life RPG Backlog｜輕量生活 RPG 系統暫存

Status: design source / backlog / expanded
Project: Expedition Guild: Stellar Frontier / 遠征公會：星界邊境
Last Updated: 2026-07-04
Use: Preserve the v0.8.x backlog idea for lightweight Hypixel SkyBlock-inspired guild systems.
Do Not Use For: Immediate v0.7.4 implementation, current v0.8.0 patch scope, real XP/pet/minion/economy systems.

> Note:
> This is a design source document. It may describe intent, future plans, backlog ideas, or historical context.
> For current implementation state, check docs/PROGRESSION_OVERVIEW.md, docs/releases/, active FTB Quests files, KubeJS, and packwiz metadata.

## 0. Summary

- This is a backlog-only design source for lightweight Hypixel SkyBlock-inspired guild life/RPG systems.
- It should not interrupt v0.7.4 work or current v0.8.x implementation.
- The four systems are Guild Research Codex, Guild Logistics Facilities, Maid/Artifact/Class Support, and Guild Loot Hall.
- The first implementation, if approved later, should be small and FTB Quests-only.
- First MVP should attach near Chapter 1 guild base / early progression, not a new independent chapter.
- Do not implement real skill XP, pets, minions, auction/economy, KubeJS, GameStages, recipes, loot changes, or new mods in the MVP.

## 1. Backlog Status

- Status: backlog / not implemented.
- No files should be changed for these systems until an explicit future phase starts.
- No commit is needed for the original scan-only decision.
- These ideas should stay parked until after higher-priority v0.8.x or v0.9.x work is ready.
- This file preserves the idea so it does not leak into current implementation scope by accident.

## 2. Four Lightweight Systems

- Guild Research Codex / 公會研究圖鑑:
  - Lightweight checklist-style record of discoveries, materials, bosses, artifacts, or routes.
  - Design intent: make progress feel recorded by the guild without building a real research system.
- Guild Logistics Facilities / 公會後勤設施:
  - Lightweight quest representation of guild kitchen, storage, workshop, armory, or supply areas.
  - Design intent: make the base feel like a working guild facility through simple tasks.
- Maid / Artifact / Class Support / 女僕・遺物夥伴・職業輔助:
  - Lightweight support role framing for Touhou Little Maid, artifacts, relics, or class helper concepts.
  - Design intent: preserve support/life flavor without making a fourth class or pet system.
- Guild Loot Hall / 公會戰利品殿堂:
  - Lightweight showcase/checklist for boss trophies, rare drops, artifacts, and expedition memories.
  - Design intent: make loot and victories visible to the group.

## 3. MVP Boundaries

- First MVP should attach near Chapter 1 guild base / early progression.
- Do not create a new independent chapter for the MVP.
- Use FTB Quests checkmark tasks, item tasks, and text/lore tasks only.
- Keep each system small.
- Avoid making the player learn a new major system.
- Keep the MVP as a lightweight guild-base flavor layer, not a new progression backbone.

## 4. Deferred Implementation Phases

- Phase A:
  - Chapter 1 adds four checkmark/text entry tasks.
- Phase B:
  - Each system gains 2-3 low-risk item tasks.
- Phase C:
  - Consider passive GameStages only after stable testing.
- Phase D:
  - Connect v0.8 content such as Twilight Forest, Terramity, Touhou Little Maid, Artifacts, and Simply Swords if still appropriate.

These phases are not approved implementation tasks. They are a parking structure for future planning.

## 5. Explicit Non-goals

- Do not implement real skill XP.
- Do not implement a real pet system.
- Do not implement a real minion system.
- Do not implement auction/economy systems.
- Do not touch KubeJS in the MVP.
- Do not touch GameStages in the MVP.
- Do not change recipes.
- Do not change loot.
- Do not add new mods for the MVP.
- Do not modify Chapter 3, 4, 5, 9, 10, or 11 for the MVP.

## 6. Future Integration Targets

- Twilight Forest as side expedition discoveries.
- Terramity as abnormal samples / calamity-like side content.
- Touhou Little Maid as support/life content.
- Artifacts and Curios as artifact collection and build variety.
- Simply Swords as weapon display or armory progression reference.
- Lootr and dungeon content as loot hall or expedition memory support.
- Guild base and Chapter 1 as the safest first attachment point if implementation is explicitly approved later.

## 7. Future Use

- Use this file to keep these systems parked until explicitly scheduled.
- Use it to prevent scope creep during current implementation work.
- Do not treat it as an approved immediate task list.
- Before implementation, re-scan current Chapter 1, current quests, current installed mods, and latest release notes.
- If later approved, start with a minimal docs/quest design proposal before touching FTB Quests data.
