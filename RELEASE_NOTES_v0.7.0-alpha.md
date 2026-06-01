# Expedition Guild Stellar Frontier v0.7.0-alpha

## Release type

- Alpha control layer milestone
- This is a Control Layer semantic progression lock release.
- This is not a complete gameplay release.

## Summary

v0.7.0-alpha establishes the first semantic Control Layer for the Expedition Guild campaign.

This release:

- Adds KubeJS, Rhino, Game Stages, and Bookshelf.
- Adds `kubejs/server_scripts/eg_stages.js` as the stage naming skeleton.
- Connects most FTB Quests Chapter 0-11 milestones to GameStages command rewards.
- Establishes the GameStages foundation for mutually exclusive Vanguard / Gunner / Arcanist class selection.
- Adds semantic Boss Gate, Defense Gate, Calamity Gate, Astral Gate, Fusion Gate, Endgame Gate, and Postgame Archive stages.
- Adds artifact hygiene to keep `.opencode.bak` and `.mrpack` exports out of git commits and the packwiz index.

## What changed

### Control layer mods

- KubeJS
- Rhino
- Game Stages
- Bookshelf

### KubeJS stage naming skeleton

- `kubejs/server_scripts/eg_stages.js`
- Passive naming skeleton only
- No event listener
- No gameplay logic
- No player data modification

### FTB Quests GameStages rewards

Chapter 0:

- `eg.guild.joined`
- `eg.chapter.0.handbook`

Chapter 1:

- `eg.class.vanguard`
- `eg.class.gunner`
- `eg.class.arcanist`
- `eg.chapter.1.class_training`

Chapter 2:

- `eg.chapter.2.boss_prep`
- `eg.gate.first_hunt_ready`

Chapter 3:

- `eg.chapter.3.first_hunt` deferred
- Reason: no real Boss kill detection yet

Chapter 4:

- `eg.gate.first_defense_ready`
- `eg.chapter.4.first_defense`

Chapter 5:

- `eg.chapter.5.calamity_foreshadowing`
- `eg.gate.calamity_reported`

Chapter 6:

- `eg.chapter.6.mid_gear`
- `eg.gate.mid_gear_certified`

Chapter 7:

- `eg.chapter.7.astral_prep`
- `eg.gate.astral_license_preapproved`

Chapter 8:

- `eg.chapter.8.outpost_rating`

Chapter 9:

- `eg.chapter.9.hybridization`
- `eg.gate.fusion_certified`

Chapter 10:

- `eg.chapter.10.endgame_calamity`
- `eg.gate.endgame_preapproved`

Chapter 11:

- `eg.chapter.11.postgame`
- `eg.gate.postgame_archived`

### Class selection foundation

- Vanguard / Gunner / Arcanist class stages can be granted through FTB Quests command rewards.
- Chapter 1 has tested mutually exclusive remove / add command reward flow for the three class stages.
- This is a class identity foundation, not a real skill tree.
- Future hybrid class stages are not granted yet:
  - `eg.class.spellblade`
  - `eg.class.arcane_ballistics`
  - `eg.class.assault_vanguard`

### Artifact hygiene

- `.gitignore` now includes `.opencode.bak/`.
- `.packwizignore` now includes:
  - `.opencode.bak/`
  - `*.mrpack`
  - `Expedition Guild Stellar Frontier-0.1.0.mrpack`
  - `.DS_Store`
- `packwiz refresh` has been verified to avoid adding `.opencode.bak` / `.mrpack` entries to `index.toml`.

## Manual validation summary

Manual validation confirmed:

- Game launches.
- World loads.
- FTB Quests opens.
- Chapter 0 / 1 / 2 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 11 stage rewards tested.
- `/gamestage add @s ...` works.
- `/gamestage check @s ...` works.
- `/gamestage remove @s ...` works.
- FTB Quests command reward format confirmed:
  - `type: "command"`
  - `command: "gamestage add @s <stage>"`
  - no leading `/`
  - `@s` points to the reward claimer
- `latest.log` checked during manual tests:
  - no FTB Quests ERROR
  - no GameStages ERROR
  - no KubeJS ERROR
  - no FATAL

## Deferred / not implemented

- `eg.chapter.3.first_hunt` deferred:
  - no real Boss kill detection yet
- No real Boss kill detection
- No real boss chain
- No raid / wave / defense event system
- No Guild Threat system
- No Dragon Disaster system
- No Ad Astra planet / rocket / oxygen / spacesuit enforcement
- No Create / Ad Astra recipe lock
- No ItemStages
- No equipment lock
- No class skill tree
- No Palladium / Pufferfish's Skills integration
- No hybrid class gameplay
- No endgame scaling
- No divine gear system
- No postgame boss rush
- No title collection
- No high-tier loot pool enforcement
- No KubeJS gameplay logic beyond the passive stage naming skeleton

## Known notes

- v0.7.0-alpha is a semantic control layer milestone.
- Some stages are semantic gates, semantic preapprovals, or semantic archives; they do not mean the related gameplay systems are active.
- Chapter 3 still needs future Boss kill detection or another verifiable Boss completion source.
- `eg_stages.js` is still a passive naming skeleton.
- These release notes describe the current implementation state.

## Next recommended phases

- Boss kill detection research / implementation plan
- Chapter 3 first hunt real completion gate
- FTB Quests dependency / GameStages visibility gating review
- ItemStages / equipment lock feasibility research
- Class skill system research: Palladium or Pufferfish's Skills
- Ad Astra progression enforcement research
- Guild Threat / defense event system design
- v0.7.x polishing before v0.8.0 real gameplay control
