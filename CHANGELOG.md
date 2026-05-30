# Changelog

## v0.1.0-alpha

完成：
- 初版 alpha 可啟動模組包。
- Minecraft 版本固定為 1.20.1。
- Create 固定在 `create-1.20.1-0.5.1.j.jar`。
- Ad Astra 固定在 `ad_astra-forge-1.20.1-1.15.19.jar`。
- 移除 Create: Ad Astra Compatibility，避免與目前 Create 0.5.1j / Ad Astra 1.15.19 組合衝突。
- 加入地圖、Waystones、Jade、AppleSkin、FTB Quests、FTB Chunks、FTB Teams、Simple Voice Chat 等基礎層。
- 完成繁體中文 FTB Quests Chapter 0～7 主線。
- 通過新 Prism instance 啟動與任務顯示測試。

已知限制：
- 目前仍為 alpha。
- 尚未完成多人伺服器長時間測試。
- 尚未加入更多 Create / Ad Astra addon。
- 任務獎勵維持保守，後續需要依生存測試結果微調。

## Phase 1 Batch 3C - Exploration Utility

完成：
- Added Xaero's Minimap
- Added Xaero's World Map
- Added Waystones
- Added dependency Balm
- Phase 1 Batch 3C Exploration Utility PASS
- Test world: `EGSF_Phase1_Batch3C_ExploreTest`
- Xaero's Minimap loaded successfully
- Xaero's World Map loaded successfully
- Waystones loaded successfully
- Balm loaded successfully as Waystones dependency
- FTB Quests still works correctly
- FTB Teams / FTB Chunks still work correctly
- Simple Voice Chat still works correctly
- Create / JEI still work correctly
- Ad Astra dimension still saves correctly
- No `CreateRegistries` / `NoClassDefFoundError`
- No `create_ad_astra_compat`
- No missing dependency / mod loading error / FATAL

注意：
- Waystones may auto-correct `waystones-common.toml` on first launch; this is acceptable.
- Xaero online version check expired can be ignored.
- Ad Astra 1.15.19 may show as outdated; do not upgrade to 1.15.20 unless the whole pack migrates to Create 6.

下一步：
- Phase 1 Baseline Freeze
- Freeze the current playable version, create a commit, and prepare server testing
- Do not continue directly into world generation, structure, RPG, or combat content mods

## Phase 1 Batch 3B - Quest Foundation

完成：
- Added FTB Quests
- Added Item Filters
- Phase 1 Batch 3B Quest Foundation PASS
- Test world: `EGSF_Phase1_Batch3B_QuestTest`
- FTB Quests network receiver registered successfully
- Item Filters network receiver registered successfully
- FTB Teams / FTB Chunks still work correctly
- Simple Voice Chat still works correctly
- Create / JEI still load correctly
- Ad Astra dimension still saves correctly
- No `CreateRegistries` / `NoClassDefFoundError`
- No `create_ad_astra_compat`
- No missing dependency / mod loading error / FATAL

注意：
- FTB display names may include `NeoForge`, but the actual jars are Forge.
- Ad Astra 1.15.19 may show as outdated; do not upgrade to 1.15.20 unless the whole pack migrates to Create 6.
- FTB Quests currently provides the quest system foundation only; formal questline content has not started yet.

下一步：
- Phase 1 Batch 3C: Exploration Convenience Layer
- Do not add world generation, structure, backpack, food, decoration, or combat mods in the next batch.

## Phase 1 Batch 3A - Multiplayer Foundation

完成：
- Added Simple Voice Chat
- Added FTB Teams
- Added FTB Chunks
- Added dependency Architectury API
- Added dependency FTB Library
- Phase 1 Batch 3A Multiplayer Foundation PASS
- Test world: `EGSF_Phase1_Batch3A_MultiplayerT`
- Simple Voice Chat client/server initialized successfully
- Voice Chat server started successfully in integrated single-player test
- Voice Chat completed authentication / validation
- FTB Teams network receivers registered successfully
- FTB Chunks network receivers registered successfully
- New world saved and exited successfully
- Ad Astra dimension still saved correctly
- Create / JEI still loaded correctly
- No `CreateRegistries` / `NoClassDefFoundError`
- No `create_ad_astra_compat`
- No missing dependency / mod loading error / FATAL

注意：
- FTB Library / Teams / Chunks may show `NeoForge` in display names, but the actual jars are Forge:
  - `ftb-library-forge-2001.2.12.jar`
  - `ftb-teams-forge-2001.3.2.jar`
  - `ftb-chunks-forge-2001.3.7.jar`
- Simple Voice Chat requires UDP port verification on a formal multiplayer server.
- Ad Astra 1.15.19 may show as outdated; do not upgrade to 1.15.20 unless the whole pack migrates to Create 6.

下一步：
- Phase 1 Batch 3B: FTB Quests / Item Filters
- Do not add maps, Waystones, world generation, or structure mods in the same batch.

## Phase 1 Compatibility Fix - Ad Astra 1.15.19

完成：
- Fixed Forge 1.20.1 startup crash caused by Ad Astra 1.15.20 with Create 0.5.1j
- Root cause: Ad Astra 1.15.20 CreateCompat called `com/simibubi/create/api/registry/CreateRegistries`
- Confirmed that API belongs to the Create 0.6.x direction, while this pack is locked to Create 0.5.1j
- Downgraded Ad Astra to 1.15.19
- Recorded Modrinth version ID: `ZXcgZ31q`
- Recorded filename: `ad_astra-forge-1.20.1-1.15.19.jar`
- Verified Create remains `create-1.20.1-0.5.1.j.jar`
- Verified Create pin remains `true`
- Prism Launcher test instance reached the main menu
- Phase 1 Batch 2 Clean Smoke Test PASS
- Clean test world: `EGSF_Phase1_CleanSmokeTest`
- New world successfully created
- Create loaded successfully
- JEI loaded Create recipes successfully
- Ad Astra dimension loaded and saved successfully
- `latest.log` no longer contains `CreateRegistries` / `NoClassDefFoundError`
- `latest.log` no longer contains `Couldn't load tag create:crushed_ores`
- `latest.log` no longer contains `create_ad_astra_compat`

限制：
- Do not upgrade to Create 6
- Do not use Ad Astra 1.15.20 unless the whole pack migrates to Create 6
- Do not remove Ad Astra from a formal world after launch
- Create: Ad Astra Compatibility is removed from Phase 1
- Future Ad Astra x Create processing recipes should be handled by KubeJS or datapack

下一步：
- Phase 1 Batch 2 can be finalized
- Proceed to Phase 1 Batch 3

## Phase 1 Batch 2 - Ad Astra Compatibility Layer

完成：
- Added Ad Astra
- Added Botarium
- Added Resourceful Lib
- Added Resourceful Config
- Added Cloth Config API
- Verified packwiz refresh
- Verified Create remains locked to 1.20.1-0.5.1.j
- Updated active Ad Astra target to 1.15.19 after compatibility testing
- Removed Create: Ad Astra Compatibility from Phase 1 for clean smoke test stability

限制：
- Do not upgrade to Create 6
- Do not use Ad Astra 1.15.20 with Create 0.5.1j
- Do not use Fabric
- Do not use NeoForge
- Do not use Minecraft 1.21.x
- Do not manually place jar files into mods/

## Phase 1 Batch 1 - Core Foundation

完成：
- Added Create
- Added JEI
- Added Embeddium
- Added ModernFix
- Added FerriteCore
- Added Entity Culling
- Added Clumps
- Locked Create to create-1.20.1-0.5.1.j.jar
