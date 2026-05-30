# Phase Status

## Current Phase

Phase 1: Frontier Demo

## Completed

### Phase 1 Batch 1 - Core Foundation

- Create
- JEI
- Embeddium
- ModernFix
- FerriteCore
- Entity Culling
- Clumps

### Phase 1 Batch 2 - Ad Astra Compatibility Layer

- Ad Astra 1.15.19
- Botarium
- Cloth Config API
- Resourceful Lib
- Resourceful Config

Removed / Deferred:
- Create: Ad Astra Compatibility

### Phase 1 Batch 3A - Multiplayer Foundation

- Simple Voice Chat
- FTB Teams
- FTB Chunks

Automatic dependencies:
- Architectury API
- FTB Library

Test result:
- PASS
- Test world: `EGSF_Phase1_Batch3A_MultiplayerT`
- Simple Voice Chat client/server initialized successfully.
- Voice Chat server started successfully in integrated single-player test.
- Voice Chat authentication / validation completed.
- FTB Teams network receivers registered successfully.
- FTB Chunks network receivers registered successfully.
- New world saved and exited successfully.
- Ad Astra dimension still saved correctly.
- Create / JEI still loaded correctly.
- No `CreateRegistries` / `NoClassDefFoundError`.
- No `create_ad_astra_compat`.
- No missing dependency / mod loading error / FATAL.

### Phase 1 Batch 3B - Quest Foundation

- FTB Quests
- Item Filters

Test result:
- PASS
- Test world: `EGSF_Phase1_Batch3B_QuestTest`
- FTB Quests network receiver registered successfully.
- Item Filters network receiver registered successfully.
- FTB Teams / FTB Chunks still work correctly.
- Simple Voice Chat still works correctly.
- Create / JEI still loaded correctly.
- Ad Astra dimension still saved correctly.
- No `CreateRegistries` / `NoClassDefFoundError`.
- No `create_ad_astra_compat`.
- No missing dependency / mod loading error / FATAL.

Scope note:
- FTB Quests currently provides the quest system foundation only.
- Formal questline content has not started yet.

### Phase 1 Batch 3C - Exploration Utility

- Xaero's Minimap
- Xaero's World Map
- Waystones

Automatic dependency:
- Balm

Test result:
- PASS
- Test world: `EGSF_Phase1_Batch3C_ExploreTest`
- Xaero's Minimap loaded successfully.
- Xaero's World Map loaded successfully.
- Waystones loaded successfully.
- Balm loaded successfully as Waystones dependency.
- FTB Quests still works correctly.
- FTB Teams / FTB Chunks still work correctly.
- Simple Voice Chat still works correctly.
- Create / JEI still loaded correctly.
- Ad Astra dimension still saved correctly.
- No `CreateRegistries` / `NoClassDefFoundError`.
- No `create_ad_astra_compat`.
- No missing dependency / mod loading error / FATAL.

Accepted notes:
- Waystones may auto-correct `waystones-common.toml` on first launch.
- Xaero online version check expired can be ignored.

## Current Locks

- Minecraft: 1.20.1
- Loader: Forge
- Forge: 47.4.10
- Java: 17
- Create: create-1.20.1-0.5.1.j.jar
- Create pin: true
- Create CurseForge file-id: 5838779
- Create CurseForge project-id: 328085
- Ad Astra: ad_astra-forge-1.20.1-1.15.19.jar
- Ad Astra Modrinth version ID: ZXcgZ31q

## Compatibility Fixes

### Ad Astra 1.15.20 / Create 0.5.1j Startup Crash

- Problem: Ad Astra 1.15.20 crashed during Forge startup with Create 0.5.1j.
- Root cause: Ad Astra 1.15.20 CreateCompat called `com/simibubi/create/api/registry/CreateRegistries`.
- Compatibility direction: that API is for the Create 0.6.x direction, while this pack is locked to Create 0.5.1j.
- Fix: Ad Astra downgraded to 1.15.19.
- Result: Prism Launcher test instance reached the main menu.
- Clean test world: `EGSF_Phase1_CleanSmokeTest`.
- New world smoke test: PASS.
- Create loaded successfully.
- JEI loaded Create recipes successfully.
- Ad Astra dimension loaded and saved successfully.
- `latest.log` no longer contains `CreateRegistries` / `NoClassDefFoundError`.
- `latest.log` no longer contains `Couldn't load tag create:crushed_ores`.
- `latest.log` no longer contains `create_ad_astra_compat`.

### Create: Ad Astra Compatibility Deferred

- Reason: current Phase 1 combination produced `create:crushed_ores` tag errors.
- Decision: remove from Phase 1 for demo stability.
- Future recipe path: use KubeJS or datapack for explicit Ad Astra x Create processing recipes.

## Hard Rules

- Do not use Create 6
- Do not use Ad Astra 1.15.20 unless the whole pack migrates to Create 6
- Do not re-add Create: Ad Astra Compatibility to Phase 1 unless the crushed ore tag issue is resolved
- Do not use Fabric
- Do not use NeoForge
- Do not use Minecraft 1.21.x
- Do not manually place jar files into mods/
- Do not remove Ad Astra from a formal world after launch
- Do not add maps, Waystones, world generation, or structure mods in Phase 1 Batch 3B
- Do not add world generation, structure, backpack, food, decoration, or combat mods in Phase 1 Batch 3C
- Do not continue directly into world generation, structure, RPG, or combat content before Phase 1 Baseline Freeze

## Notes

- Simple Voice Chat requires UDP port verification on a formal multiplayer server.
- FTB Library / Teams / Chunks may show `NeoForge` in display names, but the current actual jars are Forge:
  - `ftb-library-forge-2001.2.12.jar`
  - `ftb-teams-forge-2001.3.2.jar`
  - `ftb-chunks-forge-2001.3.7.jar`
- Ad Astra 1.15.19 may show as outdated; ignore it unless the whole pack migrates to Create 6.

## Next Step

Runtime Test Environment:
- packwiz serve
- Prism Launcher test instance
- Create + Ad Astra + JEI verification

Completed runtime check:
- main menu test
- new world smoke test
- Phase 1 Batch 2 Clean Smoke Test PASS
- Phase 1 Batch 3A Multiplayer Foundation PASS
- Phase 1 Batch 3B Quest Foundation PASS
- Phase 1 Batch 3C Exploration Utility PASS

Next batch:
- Phase 1 Baseline Freeze

Baseline Freeze tasks:
- Freeze current playable version.
- Create commit.
- Prepare server testing.

## Later

Phase 1 Batch 3:
- Complete
