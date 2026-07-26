# Compatibility

This document summarizes the current compatibility strategy for Expedition Guild: Stellar Frontier. It is based on the repo state during this documentation pass, especially `pack.toml`, `mods/*.pw.toml`, release notes, and existing docs.

## Evidence And Status Labels

- `CURRENTLY_INSTALLED`: present in current `index.toml` and the corresponding
  `mods/*.pw.toml` metadata.
- `TESTED`: supported by a named runtime test or release record; metadata
  presence alone is not runtime evidence.
- `PLANNED`: a design or roadmap direction, not current installation truth.
- `DEFERRED`: intentionally outside the current authorized scope.
- `HISTORICAL`: retained evidence for an earlier baseline, not current
  compatibility authority.

Current installation authority is `pack.toml`, `index.toml`, and
`mods/*.pw.toml`. Historical notes and design documents do not override those
files. `CURRENTLY_INSTALLED` does not mean fully integrated, balanced, or
runtime-verified.

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

- Status: `CURRENTLY_INSTALLED`
- Metadata: `create-1.20.1-6.0.8.jar`
- Modrinth project / version: `LNytGWDc` / `8amzvn9x`
- No explicit pin field is present in the current metadata.
- Test status: `TESTED` in the v0.8.1 RC smoke-test record.

### Space Exploration

- Status: `CURRENTLY_INSTALLED`
- Ad Astra
- Botarium
- Resourceful Lib
- Resourceful Config
- Cloth Config API

- Metadata: `ad_astra-forge-1.20.1-1.15.20.jar`
- Modrinth project / version: `3ufwT9JF` / `Qf7QFXk2`
- No explicit pin field is present in the current metadata.
- Test status: `TESTED` in the v0.8.1 RC smoke-test record.

### Building / Furniture

- Status: `CURRENTLY_INSTALLED`
- Macaw's Furniture, Bridges, Doors, Fences and Walls, Lights and Lamps, Paths
  and Pavings, Roofs, Trapdoors, and Windows are present in current metadata.
- Metadata presence does not establish final building balance or complete
  player-facing integration.

### Storage

- Status: `CURRENTLY_INSTALLED`
- Sophisticated Backpacks, Sophisticated Core, and Sophisticated Storage are
  present in current metadata.
- Test status: Sophisticated Storage / Backpacks are `TESTED` in the v0.8.1 RC
  smoke-test record.
- Refined Storage, Applied Energistics 2, and Storage Drawers are not present in
  current metadata.

### Food / Farming

- Status: `CURRENTLY_INSTALLED`
- AppleSkin and Farmer's Delight are present in current metadata.
- This metadata evidence does not establish current-release runtime validation
  or final food progression balance for Farmer's Delight.

### Combat / RPG

The current metadata includes a small RPG and exploration content layer:

- Lootr, Simply Swords, Artifacts, and Curios API are `CURRENTLY_INSTALLED`.
- Existing project records describe earlier Lootr, Simply Swords, and Artifacts
  tests, but installation status alone does not extend those results to every
  current configuration.
- Dungeon Crawl, Twilight Forest, and Terramity are `CURRENTLY_INSTALLED` and
  separately `TESTED` in the v0.8.1 RC smoke-test record.

This is preview compatibility, not final balance or full integration. Better
Combat and Touhou Little Maid are not present in current metadata and remain
`DEFERRED` under the current project state.

Vanguard / Gunner / Arcanist are still design direction and quest/stage framework, not completed class skill systems.

### Dimensions / Structures

Ad Astra and Twilight Forest are `CURRENTLY_INSTALLED`. Dungeon Crawl is also
present as structure content. Blue Skies, Cataclysm, Terralith, YUNG's series,
and When Dungeons Arise are not present in current metadata. Do not infer final
dimension progression or balance from metadata presence.

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
- Forge metadata is `47.4.10`.
- Java `17` is the documented runtime target.
- Create metadata is `create-1.20.1-6.0.8.jar` with no explicit pin field.
- Ad Astra metadata is `ad_astra-forge-1.20.1-1.15.20.jar` with no explicit pin
  field.
- Create: Ad Astra Compatibility is not present in current metadata and was deferred from Phase 1 after compatibility issues.
- KubeJS is present, but current release notes say no new KubeJS gameplay logic was added for the Chapter 3-5 MVP gates.
- Refined Storage is not present in the current pack metadata.
- Applied Energistics 2 is not present in the current pack metadata.
- Botania is not present in the current pack metadata.

## Historical Create / Ad Astra Compatibility Record

Status: `HISTORICAL`

- Under the earlier Create `0.5.1j` baseline, Ad Astra `1.15.20` produced a
  startup crash involving `com/simibubi/create/api/registry/CreateRegistries`.
- The historical mitigation downgraded Ad Astra to `1.15.19` and removed
  Create: Ad Astra Compatibility from that Phase 1 combination.
- The old crash, error class, and downgrade remain relevant historical
  evidence, but they do not override the current Create `6.0.8` / Ad Astra
  `1.15.20` packwiz metadata.

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
