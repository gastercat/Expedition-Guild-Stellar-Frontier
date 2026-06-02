# Project Structure

This file is a low-risk map for future local agents and maintainers. It describes what each major path is for and where edits should be avoided unless the request explicitly asks for gameplay or pack metadata changes.

| Path | Purpose | Safe to edit? | Notes |
|---|---|---|---|
| `README.md` | Player-facing project overview and quick start. | Safe | Documentation only. Keep alpha status transparent. |
| `CHANGELOG.md` | Short changelog index and release summary. | Safe | Do not paste full release notes here; link to `docs/releases/`. |
| `COMPATIBILITY.md` | Compatibility strategy, risk levels, confirmed locks, and planned/deferred systems. | Safe | Base claims on repo metadata and existing notes. |
| `MODLIST.md` | Planning-oriented mod list and phase notes. | Careful | Some entries are planned, not installed. Do not treat all listed mods as present. |
| `QUEST_DESIGN.md` | Quest and progression design notes. | Careful | Documentation, but close to gameplay design. Do not rewrite quest logic from here without explicit request. |
| `SERVER_TEST_PROTOCOL.md` | Server/runtime test procedure. | Safe | Documentation only. |
| `docs/` | Project documentation, testing notes, design notes, release index, and backups. | Safe | Safe for documentation edits. Do not modify quest backups unless explicitly requested. |
| `docs/releases/` | Organized release notes. | Safe | Store versioned release note files and `INDEX.md` here. |
| `docs/PROJECT_STRUCTURE.md` | This structure and safety-boundary guide. | Safe | Update when repo layout changes. |
| `docs/design/` | Design-specific docs. | Careful | May describe planned progression; avoid claiming planned systems are implemented. |
| `docs/test-reports/` | Manual or pretest reports. | Safe | Add test reports when requested. |
| `docs/quest-backups/` | Historical FTB Quests backups. | Do not edit unless explicitly requested | Treat as archived snapshots. Do not use as active quest files. |
| `docs/reference/` | Reference or legacy notes. | Careful | Some files may describe old plans or abandoned lists. Mark context clearly. |
| `pack.toml` | packwiz pack metadata: pack name, author, pack version, pack format, Minecraft and Forge versions, index hash. | Do not edit unless explicitly requested | Changing this is pack metadata work. This task explicitly avoids it. |
| `index.toml` | packwiz file index and hashes. | Do not edit unless explicitly requested | Normally updated by `packwiz refresh`; do not manually change during docs-only passes. |
| `.packwizignore` | Files excluded from packwiz exports and index. | Careful | Changing this can affect exported packs. |
| `mods/*.pw.toml` | packwiz mod metadata for installed mods. | Do not edit unless explicitly requested | Do not add, remove, update, rename, or pin mods during documentation-only work. |
| `config/` | Minecraft/mod config files included in the pack. | Careful | Config edits can change gameplay, server behavior, or generated pack contents. |
| `config/ftbquests/` | Active FTB Quests config and quest data. | Do not edit unless explicitly requested | This is gameplay progression content. |
| `config/ftbquests/quests/` | Active quest database: chapter groups, chapter files, and quest data. | Do not edit unless explicitly requested | Do not modify task logic, rewards, command rewards, or chapter gates during docs-only passes. |
| `config/ftbquests/quests/chapters/` | Active FTB Quests chapter SNBT files. | Do not edit unless explicitly requested | Current repo has Chapter 0-11. Treat as active gameplay data. |
| `kubejs/` | KubeJS scripts and future gameplay integration logic. | Do not edit unless explicitly requested | Current script is stage naming skeleton. Do not add event logic in docs-only tasks. |
| `kubejs/server_scripts/eg_stages.js` | Existing GameStages naming skeleton. | Do not edit unless explicitly requested | Do not change gate names or gameplay hooks during documentation-only work. |
| `scripts/` | Local validation/check scripts. | Careful | Safe to run for audits. Editing scripts should be explicit. |
| `add_phase1_core_mods.sh` | Historical helper script for adding Phase 1 core mods. | Do not edit unless explicitly requested | Running it could change mod metadata. |
| `add_phase1_ad_astra_mods.sh` | Historical helper script for adding Ad Astra-related mods. | Do not edit unless explicitly requested | Running it could change mod metadata. |
| `.gitignore` | Git ignore rules. | Careful | Can affect what appears in commits. |
| root `RELEASE_NOTES_*.md` | Former scattered release note location. | Careful | During this pass, release notes were moved to `docs/releases/`. Future notes should go there. |

## Safe Boundaries for Codex / Local Agents

For documentation-only passes, safe edits are limited to:

- `README.md`
- `CHANGELOG.md`
- `COMPATIBILITY.md`
- `docs/*.md`
- `docs/releases/*.md`
- New documentation files under `docs/`

Use extra care with:

- `MODLIST.md`
- `QUEST_DESIGN.md`
- `SERVER_TEST_PROTOCOL.md`
- `docs/design/`
- `docs/reference/`
- `.packwizignore`
- `.gitignore`
- `scripts/`

Do not edit unless explicitly requested:

- `pack.toml`
- `index.toml`
- `mods/*.pw.toml`
- `config/ftbquests/`
- `config/ftbquests/quests/`
- `config/ftbquests/quests/chapters/`
- `kubejs/`
- `docs/quest-backups/`
- helper scripts that add or update mods

## Current Repo Facts From This Pass

- The pack format is packwiz.
- Minecraft is `1.20.1`.
- Forge is `47.4.10`.
- Create metadata confirms `create-1.20.1-0.5.1.j.jar` and `pin = true`.
- Ad Astra metadata confirms `ad_astra-forge-1.20.1-1.15.19.jar`.
- FTB Quests active chapters exist from `0.snbt` through `11.snbt`.
- `kubejs/server_scripts/eg_stages.js` exists.
- Release notes are now organized under `docs/releases/`.
