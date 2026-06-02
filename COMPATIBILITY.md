# Compatibility

This document summarizes the current compatibility strategy for Expedition Guild: Stellar Frontier. It is based on the repo state during this documentation pass, especially `pack.toml`, `mods/*.pw.toml`, release notes, and existing docs.

## Minecraft / Loader

- Minecraft: `1.20.1`
- Loader: Forge
- Forge: `47.4.10`
- Java target: 17
- Mod manager / pack format: packwiz (`packwiz:1.1.0`)

## Core Compatibility Principles

- Prioritize Minecraft 1.20.1 Forge compatibility.
- Keep Create as the logistics backbone, not a full industrial overload path.
- Avoid large high-complexity industry stacks that push Create out of its intended role.
- Avoid early loot that skips Boss Gate, defense gate, Create logistics, or Ad Astra progression.
- Avoid one mod's equipment stats overpowering the main progression.
- Prefer mods that can be explained and paced through FTB Quests, KubeJS, and GameStages.
- Add risky content in small batches with smoke tests instead of broad mod dumps.

## Known Core Systems

### Quest / Progression

- FTB Quests
- Item Filters
- Game Stages
- KubeJS
- Rhino
- Bookshelf

Current note: FTB Quests Chapter 0-11 exists. GameStages rewards and class stage foundations exist. KubeJS is currently a passive stage naming skeleton, not a full gameplay automation layer.

### Performance

- Embeddium
- ModernFix
- FerriteCore
- Entity Culling
- Clumps

### Utility / Map / Multiplayer

- JEI
- Jade
- AppleSkin
- Xaero's Minimap
- Xaero's World Map
- Waystones
- Balm
- Simple Voice Chat
- FTB Teams
- FTB Chunks
- FTB Library
- Architectury API

### Create Logistics

- Create

Current metadata confirms `create-1.20.1-0.5.1.j.jar` and `pin = true`.

### Space Exploration

- Ad Astra
- Botarium
- Resourceful Lib
- Resourceful Config
- Cloth Config API

Current metadata confirms `ad_astra-forge-1.20.1-1.15.19.jar`.

### Building / Furniture

- Macaw's Furniture

### Storage

No dedicated storage system such as Refined Storage, Applied Energistics 2, Sophisticated Storage, or Storage Drawers is present in the current `mods/*.pw.toml` metadata.

### Food / Farming

AppleSkin is present as food information QoL. Farmer's Delight is mentioned in planning docs but is not present in current `mods/*.pw.toml` metadata.

### Combat / RPG

The current metadata does not include dedicated combat, spell, guns, relic, Curios, dungeon, or Boss content mods. Vanguard / Gunner / Arcanist are currently design direction and quest/stage framework, not completed class skill systems.

### Dimensions / Structures

Ad Astra is the confirmed space / planet exploration system. Other dimension or structure mods such as Twilight Forest, Blue Skies, Cataclysm, Terralith, YUNG's series, or When Dungeons Arise are not present in current `mods/*.pw.toml` metadata.

## Integration Risk Levels

| Category | Risk | Reason | Notes |
|---|---|---|---|
| Major industry systems | High | Can overwhelm Create, add recipe complexity, or shift the pack away from guild expedition pacing. | Add only with explicit progression design. |
| High-stat gear / endgame equipment | High | Can skip Boss Gate, defense gate, and Ad Astra preparation. | Needs loot and stage control. |
| Loot table overhauls | High | Early structure loot can bypass planned progression. | Requires FTB Quests / KubeJS / GameStages review. |
| Dimensions / Boss mega-mods | High | Adds worldgen, loot, scaling, and progression conflicts. | Test in separate batches. |
| Weapons / relics / accessories | Medium | Supports RPG goals but can distort balance quickly. | Needs class identity and loot pacing. |
| Dungeon / structure content | Medium | Good for exploration, but loot density and generation load must be checked. | New-world tests required. |
| Food / farming addons | Medium | Usually safe, but can affect survival pressure and Create automation. | Keep rewards conservative. |
| QoL / map / information mods | Low | Usually low progression risk. | Still verify client/server side requirements. |
| Performance mods | Low | Important baseline, but mixin conflicts can happen. | Smoke test after changes. |
| Furniture / building content | Low | Supports base identity with low progression impact. | Watch recipe conflicts and block count. |

## Explicit Design Decisions

Confirmed by current repo metadata or docs:

- Minecraft is locked to `1.20.1`.
- Loader is Forge.
- Create is locked to `create-1.20.1-0.5.1.j.jar` with `pin = true`.
- Ad Astra is locked to `ad_astra-forge-1.20.1-1.15.19.jar`.
- Ad Astra `1.15.20` is avoided with Create `0.5.1j` because release notes and compatibility docs record a startup crash involving `CreateRegistries`.
- Create: Ad Astra Compatibility is not present in current metadata and was deferred from Phase 1 after compatibility issues.
- KubeJS is present, but current release notes say no new KubeJS gameplay logic was added for the Chapter 3-5 MVP gates.
- Refined Storage is not present in the current pack metadata.
- Applied Energistics 2 is not present in the current pack metadata.
- Botania is not present in the current pack metadata.

## Planned / Deferred Content

These are roadmap or planning references, not currently installed systems unless future metadata says otherwise:

- Formal class skill tree, class gear locks, and active class skills.
- Palladium or Pufferfish's Skills evaluation.
- Gunner firearm line.
- Arcanist spell curve and magic expansion.
- Full Boss chain and Boss Gate enforcement.
- Full defense / wave / invasion system.
- Guild Threat and Dragon Disaster systems.
- Endgame calamity, divine gear, and postgame boss rush.
- Additional dimensions, large structure mods, and major combat content.

## Testing Policy

For mod additions, removals, or version changes, use a clean test flow:

1. Client reaches main menu.
2. Dedicated server can start.
3. New world can generate.
4. Player can enter and remain connected.
5. JEI shows core recipes.
6. FTB Quests opens and relevant chapters parse.
7. GameStages rewards can be granted where expected.
8. Create and Ad Astra core interactions still load.
9. Save, exit, restart, and re-enter world.
10. Check logs for mod loading errors, FTB Quests errors, GameStages errors, KubeJS errors, and fatal crashes.
