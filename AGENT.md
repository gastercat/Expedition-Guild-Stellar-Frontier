# Agent Context

## Project Identity

Expedition Guild: Stellar Frontier is a Minecraft Forge modpack built as a
multiplayer expedition-guild campaign, not a generic kitchen-sink pack.

The campaign loop is:

Join guild -> choose class -> train -> defeat first boss -> defend guild base
-> build Create logistics -> prepare Ad Astra expedition -> face calamity and
dragon threats -> merge class paths -> endgame calamity -> divine/postgame gear.

## Non-Negotiable Red Lines

- Do not modify `mods/**` unless the user explicitly approves a mod phase.
- Do not modify `config/ftbquests/**` without an approved scoped quest phase.
- Do not modify `kubejs/**` without explicit approval.
- Do not copy Prism instance quest files back into the repo.
- Do not invent FTB Quests, KubeJS, GameStages, or packwiz formats.
- Do not run `packwiz install` unless explicitly asked.
- Do not add or remove mods unless explicitly asked.
- Do not push, tag, publish release notes, or make broad refactors without
  explicit approval.
- Do not commit unless explicitly asked.
- Do not commit `.mrpack` artifacts.

## Technical Baseline

- Minecraft: `1.20.1`
- Loader: Forge
- Forge: `47.4.10`
- Java target: `17` (documentation target)
- Pack format/tooling: packwiz (`packwiz:1.1.0`)
- Create metadata: `create-1.20.1-6.0.8.jar`
- Ad Astra metadata: `ad_astra-forge-1.20.1-1.15.20.jar`
- Determine current installed versions from `pack.toml`, `index.toml`, and
  `mods/*.pw.toml`.
- Do not claim a mod is pinned unless its current metadata explicitly contains
  a pin field.
- Create: Ad Astra Compatibility is not present in current packwiz metadata.
  Do not add it without a separately approved compatibility phase.

## Design Frameworks

- Inventory-first: inspect repo files, mod list, quest files, metadata, and
  existing patterns before proposing changes.
- Experience-filter: explain the player experience created by the change.
- Three-class structure:
  - Vanguard: front-line defense, shields, melee pressure, boss safety.
  - Gunner: ranged support, defense, wave clearing, expedition safety.
  - Arcanist: AOE, control, healing/support, summons, utility.

## Chapter Roadmap Summary

- Chapter 0: expedition onboarding, handbook, JEI/Jade/maps/teams/voice checks.
- Chapter 1: guild base setup and Vanguard/Gunner/Arcanist training ground.
- Chapter 2: first boss preparation through Create logistics and supplies.
- Chapter 3: first hunt direction; true boss kill detection and full boss chain remain deferred.
- Chapter 4: first defense MVP gate with supplies and vanilla mob defense.
- Chapter 5: calamity foreshadowing MVP gate and Guild Threat framework.
- Chapter 6: mid-gear certification and class equipment direction.
- Chapter 7: Ad Astra expedition preparation and launch-readiness framework.
- Chapter 8: Moon/Mars outpost rating and early astral base standards.
- Chapter 9: hybrid class directions and fusion certification placeholder.
- Chapter 10: endgame calamity direction and forbidden research placeholders.
- Chapter 11: postgame archive, divine gear, space elevator, and future trials.

## Current Version Direction

- Current release: `v0.8.1-friends-feedback-test`.
- Current state: the pre-release is published and the project is waiting for
  friends feedback on early quest feel, reward feel, and Create / Ad Astra
  preview clarity.
- Current installation truth must be read from packwiz metadata. Do not classify
  a mod as installed, absent, or planned from this summary alone.
- Keep follow-up work small, evidence-backed, and separately authorized.
- No active gameplay, quest, KubeJS, mod, or packwiz implementation is open by
  default.
- Better Combat, Touhou Little Maid, full class systems, Guild Threat, and
  Dragon Disaster remain outside the current authorized scope.

## Work Protocol

Use this sequence for implementation work:

1. Inspect.
2. Plan.
3. Wait for approval.
4. Implement.
5. Validate.
6. Report.

For read-only research, do not modify files. For scoped edits, keep the blast
radius small and preserve existing rewards, stages, and metadata unless the user
approved the change.

## Validation Expectations

At minimum, report git state before and after scoped work:

- `git status -sb`
- `git status --short -uall`
- `git diff --name-only`
- `git diff --stat`

For quest changes, also inspect the exact chapter diff and verify relevant stage
reward sources. For mod changes, use packwiz metadata checks, launch testing,
world entry, FTB Quests, JEI search, and log review for `ERROR`/`FATAL`.

- Do not report PASS without file, command, or runtime evidence appropriate to
  the claim.
- Static metadata checks are not runtime verification.
- If required validation was not executed, report `PARTIAL` or `UNVERIFIED` and
  state what evidence is missing.

## Git Rules

- Do not commit, push, or tag unless explicitly asked.
- If docs are modified, remind the user to `git add docs`.
- Do not commit `.mrpack` files.
- Do not stage local Codex/OpenCode/export/database artifacts.
- If committing after approval, keep the commit scope limited to the validated
  phase.

## Detailed Docs

Prefer these sources instead of duplicating details here:

- `SKILL.md` for mandatory agent workflow and verified formats.
- `README.md` for player-facing project overview.
- `COMPATIBILITY.md` for version locks and compatibility policy.
- `docs/ROADMAP.md` for release direction.
- `docs/PROGRESSION_OVERVIEW.md` for Chapter 0-11 status.
- `docs/planning/v0.8.0-friends-content-preview.md` for v0.8.0 preview scope.
- `docs/PHASE_STATUS.md` for baseline lock history.
