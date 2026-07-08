# Changelog

This changelog is a short project overview. Full release notes are organized in [docs/releases/INDEX.md](docs/releases/INDEX.md).

## Unreleased

- Documentation pass for README, compatibility strategy, release note organization, and project structure.
- Added clearer distinction between implemented systems, installed foundations, planned systems, and deferred content.
- Moved root release notes into `docs/releases/`.

## v0.8.1 Friends Feedback Test

- Released GitHub pre-release `v0.8.1-friends-feedback-test` from commit `e12bca1`.
- Published `EGSF-v0.8.1-friends-feedback-test.mrpack` as the release asset.
- Polished Chapter 0 into stronger guild onboarding and expedition preparation.
- Polished Chapter 1 to preview Create engineering, Ad Astra foreshadowing, and Vanguard / Gunner / Arcanist class fantasy.
- Updated quest text to match the v0.8.x baseline: Create `1.20.1-6.0.8` and Ad Astra `1.20.1-1.15.20`.
- Tuned early quest rewards into low-risk guild supply rewards.
- Refreshed packwiz index / pack hash during implementation and improved `.packwizignore` to avoid Python cache pollution.
- RC smoke test passed for import, main menu, mod list, new world, FTB Quests, Chapter 0 / 1 / 2 / 7 visibility, Create, Ad Astra, JEI, Sophisticated Storage / Backpacks, Twilight Forest, Terramity, Dungeon Crawl, and packaging cleanliness.
- Did not include TaCZ full integration, Iron's Spells full integration, Better Combat, full class skills, Dragon Disaster, Guild Threat, Create Aeronautics, Tom's Simple Storage, or Touhou Little Maid.

## v0.7.3-alpha

- Added Chapter 5 calamity foreshadowing MVP gate release notes.
- Added a Chapter 5 investigation completion task using vanilla item submissions and kill tasks.
- Added command rewards for `eg.chapter.5.calamity_foreshadowing` and `eg.gate.calamity_reported`.
- Confirmed no new KubeJS gameplay logic, Guild Threat, Dragon Disaster, raid/wave system, mob escalation, or new Boss/calamity mods in this release.

## v0.7.2-alpha

- Added Chapter 4 first defense MVP gate.
- Added a Chapter 4 completion quest using defense supply submissions and vanilla zombie/skeleton kill tasks.
- Moved the `eg.chapter.4.first_defense` command reward to the real completion quest to avoid multiple sources for the same completion stage.
- Verified the Chapter 4 FTB Quests task and GameStages reward flow manually.
- No new defense, raid, wave, Boss, or KubeJS gameplay system was added.

## v0.7.1-alpha

- Added the first verified kill-based progression gate for Chapter 3.
- Added a Chapter 3 Blaze kill task and command reward for `eg.chapter.3.first_hunt`.
- Verified FTB Quests kill task behavior and GameStages reward claim manually.
- Kept the scope to a minimal first hunt gate, not a full Boss chain or combat system.

## v0.7.0-alpha

- Added the first semantic control layer milestone.
- Added KubeJS, Rhino, Game Stages, and Bookshelf.
- Added `kubejs/server_scripts/eg_stages.js` as a passive stage naming skeleton.
- Connected most FTB Quests Chapter 0-11 milestones to GameStages command rewards.
- Established Vanguard / Gunner / Arcanist class stage foundation.
- Added semantic Boss Gate, Defense Gate, Calamity Gate, Astral Gate, Fusion Gate, Endgame Gate, and Postgame Archive stage names.
- Added artifact hygiene for local backup and `.mrpack` export files.

## v0.6.0-alpha

- Completed the Chapter 0-11 quest campaign skeleton.
- Expanded Chapter 0 as guild handbook and onboarding hub.
- Added early combat, defense, calamity, astral expedition, endgame, and postgame chapter direction.
- Preserved Create as the logistics backbone and Ad Astra as the stellar expedition backbone.
- Explicitly marked unfinished systems as placeholders.

## v0.1.0-alpha

- Established initial alpha playable pack direction for Minecraft 1.20.1 Forge.
- Confirmed Create `0.5.1j` and Ad Astra `1.15.19` baseline.
- Added core QoL, map, Waystones, FTB, voice chat, Create, Ad Astra, and performance foundation.
- Completed early Traditional Chinese FTB Quests Chapter 0-7 mainline at the time of that release.
- Confirmed launch, new world, and quest display smoke testing for the early alpha.

## Earlier Tags Without Root Release Notes

The repo also contains earlier git tags such as `v0.2.0-alpha`, `v0.4.x-alpha-pretest`, and `v0.5.0-alpha-pretest`. No root `RELEASE_NOTES_v*.md` files were found for those during this documentation pass, so they are not expanded here.
