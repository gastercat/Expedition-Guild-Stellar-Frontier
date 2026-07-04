# EG:SF Design Source Index

`docs/design/` contains design source documents for Expedition Guild: Stellar Frontier. These files are allowed to include design intent, future plans, rejected ideas, backlog items, historical context, and exploratory notes. They are not current implementation truth.

For current implementation and progression truth, check these sources first:

- `docs/PROGRESSION_OVERVIEW.md`
- `docs/releases/`
- Active FTB Quests files under `config/ftbquests/quests/`
- KubeJS files under `kubejs/`
- Packwiz metadata such as `pack.toml`, `index.toml`, and `mods/*.pw.toml`
- Compatibility notes such as `COMPATIBILITY.md`

Design documents should be read as source material for decisions, not as proof that a system is installed, implemented, balanced, or active in-game. They should not override release notes, packwiz metadata, active quest files, KubeJS files, or compatibility documentation.

## Design Source Corpus

Phase 1 and Phase 2 created the initial corpus structure. Phase 3A-3F completed the first expansion pass. Phase 4B updated individual file status headers from skeleton status to expanded status.

- `01_EGSF_Genesis_Design.md` - project identity, original loop, technical baseline, and guild campaign direction.
- `02_EGSF_Direction_Reframe_Player_Feel.md` - requester needs, player-feel correction, Chapter 0 onboarding, reward pacing, Inventory-first, and Experience-filter framing.
- `03_EGSF_Class_Progression_Calamity_Layer.md` - Vanguard / Gunner / Arcanist, Guild Tier, Class Setup, Boss Gate, Calamity-like progression, and future v0.9.x class identity reference.
- `04_EGSF_System_Integration.md` - Create guild engineering, storage/logistics, armament evolution, Dragon Disaster, Guild Core, rarity presentation, endgame/godforging, and astral logistics.
- `05_EGSF_Mod_Integration_Scope_Review.md` - mod candidate evaluation layer, Inventory-first, Experience-filter, and accepted/candidate/deferred/rejected direction rules.
- `06_EGSF_RPG_Server_Archaeology.md` - RPG server archaeology translated into reusable EG:SF design principles, not old-system copying.
- `07_EGSF_Friends_Content_Preview.md` - v0.8.x Friends Content Preview / content visibility layer, not a full class or endgame system.
- `backlog/EGSF_Hypixel_Style_Life_RPG_Backlog.md` - backlog-only lightweight Hypixel-style life/RPG systems; not implemented.

## Which File To Use

- Project identity, original concept, and technical baseline: `01_EGSF_Genesis_Design.md`
- Player feel, onboarding, rewards, and safe implementation framing: `02_EGSF_Direction_Reframe_Player_Feel.md`
- Class roles, Guild Tier, Class Setup, Boss Gate, transfer/subclass/fusion direction: `03_EGSF_Class_Progression_Calamity_Layer.md`
- Create logistics, Dragon Disaster, Guild Core, godforging, large systems, and astral logistics: `04_EGSF_System_Integration.md`
- Mod add/remove decisions, candidate classification, and scope review: `05_EGSF_Mod_Integration_Scope_Review.md`
- Old RPG server inspiration and reusable progression/loot/armory principles: `06_EGSF_RPG_Server_Archaeology.md`
- v0.8.x friend-facing content preview decisions: `07_EGSF_Friends_Content_Preview.md`
- Lightweight life/RPG side-system ideas that must stay parked: `backlog/EGSF_Hypixel_Style_Life_RPG_Backlog.md`
- Current implementation truth: use `docs/PROGRESSION_OVERVIEW.md`, `docs/releases/`, active FTB Quests files, KubeJS files, packwiz metadata, and compatibility docs outside `docs/design/`.

## Legacy Notes

The following files are early quest design drafts:

- `QUEST_DESIGN.md`
- `docs/design/questline.md`

`docs/design/questline.md` remains useful as historical reference only. It may describe older Chapter 0-7 planning and should not override the current Chapter 0-11 FTB Quests implementation.

Use active FTB Quests files under `config/ftbquests/quests/` and `docs/PROGRESSION_OVERVIEW.md` when checking current quest truth.
