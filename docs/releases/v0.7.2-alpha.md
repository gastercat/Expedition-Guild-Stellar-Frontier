# Expedition Guild Stellar Frontier v0.7.2-alpha

## Summary

v0.7.2-alpha is the Chapter 4 first defense MVP gate milestone.

This release adds a verified supply + kill hybrid completion source for Chapter 4. The first defense step now requires players to prepare basic defense supplies, defeat a small vanilla mob group, and then claim a command reward that grants the `eg.chapter.4.first_defense` GameStage.

This is not a full wave system, Guild Threat system, Dragon Disaster system, raid system, or invasion system. It is a low-risk FTB Quests based MVP gate for the campaign control layer.

## Added

### Chapter 4 first defense MVP gate

Added a new Chapter 4 quest:

- 公會：第一次守城演習完成確認

The quest uses supply item tasks:

minecraft:torch x8
minecraft:bread x3
minecraft:arrow x8
The quest also uses FTB Quests kill tasks:
{
  entity: "minecraft:zombie"
  type: "kill"
  value: 3L
}
{
  entity: "minecraft:skeleton"
  type: "kill"
  value: 2L
}
The quest reward grants the Chapter 4 completion stage:
{
  auto: "disabled"
  command: "gamestage add @s eg.chapter.4.first_defense"
  type: "command"
}
Changed
The eg.chapter.4.first_defense command reward was moved from the earlier semantic completion quest to the new real completion quest.
This avoids multiple reward sources for the same Chapter 4 completion stage.
Existing item rewards were preserved:
* minecraft:item_frame
* minecraft:emerald
* create:shaft
Verified
Manual in-game validation passed:
* Game launches.
* World loads.
* FTB Quests opens.
* Chapter 4 displays correctly.
* New first defense quest displays correctly.
* /gamestage remove @s eg.chapter.4.first_defense works.
* Stage is absent after removal.
* Supply tasks complete:
    * minecraft:torch x8
    * minecraft:bread x3
    * minecraft:arrow x8
* minecraft:zombie can be summoned and killed.
* Zombie kill task completes after killing 3 zombies.
* minecraft:skeleton can be summoned and killed.
* Skeleton kill task completes after killing 2 skeletons.
* Reward can be claimed.
* /gamestage check @s eg.chapter.4.first_defense confirms the stage is granted.
Technical Notes
This release uses existing FTB Quests item tasks, FTB Quests kill tasks, and GameStages command rewards.
No KubeJS gameplay logic was added.
No new defense, raid, wave, or boss mod was added.
Packwiz metadata was synchronized with the Chapter 4 quest file change in the gameplay commit:
* config/ftbquests/quests/chapters/4.snbt
* index.toml
* pack.toml
Not Implemented / Deferred
This release does not include:
* full wave system
* Guild Threat system
* Dragon Disaster system
* raid / invasion system
* KubeJS wave spawning
* KubeJS entity death counter
* automatic mob wave scheduler
* new defense mod
* new Boss mod
* structure-based defense validation
* server-side defense arena logic
Manual Test Coverage
Validated manually:
* Main menu loads.
* Test world loads.
* FTB Quests opens.
* Chapter 4 displays.
* First defense quest displays.
* Supply tasks complete.
* Zombie kill task completes.
* Skeleton kill task completes.
* Reward grants eg.chapter.4.first_defense.
* latest.log contains no:
    * FTB Quests ERROR
    * GameStages ERROR
    * KubeJS ERROR
    * FATAL
Known Limitations
The first defense MVP currently uses vanilla mobs and item submission tasks.
This is intentionally a controlled E-rank defense drill, not a real invasion system. It gives the campaign a verified Chapter 4 completion source without pretending that a full defense framework exists.
Future work may replace or extend this with real wave spawning, defense arenas, Guild Threat escalation, or Dragon Disaster systems after those systems are designed and tested separately.
Upgrade / Packwiz Notes
No mod changes are included in this release.
Release notes are excluded from packwiz exports via .packwizignore, so RELEASE_NOTES_*.md should not appear in index.toml or exported .mrpack contents.
