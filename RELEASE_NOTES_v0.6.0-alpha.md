# v0.6.0-alpha Quest Campaign Skeleton

## Version positioning

This is a quest campaign skeleton release.

This version completes the Chapter 0-11 campaign structure for the Expedition Guild multiplayer progression modpack. The focus is on FTB Quests chapter identity, campaign flow, short-term objectives, safe low-tier rewards, and explicit placeholder language.

This version does not claim to complete real class skills, Boss Gate, siege events, Guild Threat, KubeJS / GameStages progression locks, combat content, boss content, or endgame systems.

## Highlights

- Expanded Chapter 0 as a guild handbook and onboarding hub.
- Improved Chapter 1 / 2 early quest flow and reward density.
- Added early combat and defense placeholders through Chapter 3 / 4.
- Added calamity foreshadowing, Guild Threat concept notes, and mid-tier gear progression placeholders through Chapter 5 / 6.
- Improved astral expedition flow through Chapter 7 / 8.
- Added endgame and postgame placeholders through Chapter 9 / 10 / 11.
- Preserved Create as the core logistics backbone.
- Preserved Ad Astra as the astral expedition backbone.
- Added explicit placeholder language for systems not yet implemented.

## Chapter list

- Chapter 0: 第 0 章：遠征啟程
- Chapter 1: 第 1 章：三職業訓練場
- Chapter 2: 第 2 章：第一個 Boss 前準備
- Chapter 3: 第 3 章：第一討伐令
- Chapter 4: 第 4 章：第一次守城演習
- Chapter 5: 第 5 章：災變前兆
- Chapter 6: 第 6 章：中階職業裝備
- Chapter 7: 第 7 章：星界遠征準備
- Chapter 8: 第 8 章：月球 / 火星前哨站
- Chapter 9: 第 9 章：跨職業融合
- Chapter 10: 第 10 章：終局災厄
- Chapter 11: 第 11 章：後終局挑戰

## Validation summary

Validated during Phase 1F release readiness review:

- Git working tree was clean.
- packwiz list executed successfully.
- FTB Quests loaded successfully in game during prior manual checks.
- Chapter 0-11 displayed correctly during manual checks.
- Create remains locked to `create-1.20.1-0.5.1.j.jar`.
- Create 6.0.8 was not found.
- Reward safety checks passed.
- No endgame materials, boss drops, high-tier weapons, or unconfirmed mod items were intentionally distributed as rewards.
- Rough SNBT brace / bracket balance checks passed.
- Placeholder language is present for unfinished systems.

## Known incomplete systems

The following systems are not complete in this release:

- KubeJS
- GameStages
- ItemStages
- In Control
- Real class skills
- Equipment locks
- Boss Gate
- Boss kill detection
- Siege waves
- Guild Threat
- Guild core state
- Weapon memory
- Rarity frames / item borders
- Loot Integrations
- Independent player loot display
- Combat / boss / dungeon content mods
- Endgame content mods

## Recommended next phases

### A. v0.7.0 Control Layer

Recommended scope:

- KubeJS
- GameStages
- Optional ItemStages
- Class certification
- Boss Gate
- Chapter progression locks

### B. v0.7.x Exploration / Loot Batch

Recommended scope:

- Loot Integrations
- Research a mod for independent player loot display
- Twilight Forest / Terramity / dungeon loot integration
- Loot table restrictions to prevent skipping Boss Gate, Create, or Ad Astra progression

### C. v0.8.0 Combat Content Batch

Recommended scope:

- Three-class combat content
- Boss / monster / dungeon mods
- Weapon evolution
- Siege systems

## Release risk notes

This version can be treated as a v0.6.0-alpha quest campaign framework test build, not as a complete gameplay release.

Main risks:

- Many quests describe future systems, so players must understand that these are placeholders.
- Without KubeJS / GameStages, class progression, Boss Gate, siege progression, and endgame progression cannot be truly locked.
- Without combat / boss / dungeon mods, Chapters 3-6 and 9-11 mainly provide campaign direction rather than real combat pressure.
- Future loot, dungeon, and boss integrations must restrict loot tables to avoid skipping Boss Gate, Create, or Ad Astra progression.
