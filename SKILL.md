# Expedition Guild: Stellar Frontier — Agent Skill Guide

This skill guide defines the safe workflow for AI coding agents working on the Minecraft 1.20.1 Forge modpack project:

Expedition Guild: Stellar Frontier

This is not a generic kitchen-sink modpack. The project is a multiplayer campaign progression modpack built around an expedition guild structure.

Core loop:

text Join guild → choose class → complete training → defeat first boss → defend guild base → build Create logistics → prepare Ad Astra expedition → encounter calamity / dragon threat → merge class paths → endgame calamity → divine gear / postgame progression 

## Project Principles

Agents must follow these principles:

1. The main character is the campaign structure, not any single mod.
2. Every feature must support the expedition guild progression.
3. Use Inventory-first:
   - inspect current files and mod list before proposing changes.
4. Use Experience-filter:
   - explain what player experience the change creates.
5. Keep every phase small and testable.
6. Do not invent FTB Quests, KubeJS, GameStages, or packwiz formats.
7. Only use formats already verified by repo diffs, existing files, or in-game tests.
8. Do not make broad edits without explicit approval.
9. Do not copy quest files from the Prism instance back into the repo.
10. Prism instance files are for testing and format discovery only.
11. Formal edits must happen in the repo.

## Repo and Instance

Repo:

text /Users/gastercat/Expedition-Guild-Stellar-Frontier 

Prism instance:

text /Users/gastercat/Library/Application Support/PrismLauncher/instances/Expedition Guild Stellar Frontier-0.1.0/minecraft 

Important:

- Repo and Prism instance are separate.
- Do not overwrite repo quest files with Prism quest files.
- Do not commit local OpenCode, Codex, export, database, or .mrpack artifacts.

## Current Safe Workflow

Every implementation phase must follow this sequence:

text Phase A: read-only research Phase B: implementation_plan + small scoped edit Phase C: validation + wait for in-game test Phase D: commit only if user explicitly approves Push / tag / release notes: user handles manually unless explicitly requested 

## Standard Phase A: Read-only Research

Use Phase A when starting a new chapter, gate, system, or mechanic.

Allowed:

- read files
- inspect git state
- inspect mod list
- inspect quest files
- inspect KubeJS files
- inspect packwiz metadata
- produce research report
- produce implementation_plan

Forbidden:

- modify files
- add quests
- edit KubeJS
- edit packwiz metadata
- run packwiz refresh
- install mods
- commit
- push
- tag

Required commands:

bash pwd git status --short -uall git status -sb git log --oneline --decorate --max-count=18 git tag --list "v0.7.*" git branch --show-current git remote -v ls RELEASE_NOTES_*.md 2>/dev/null || true packwiz list find mods -maxdepth 1 -type f | sort 

Output must include:

xml <status_before> ... </status_before>  <mod_inventory> ... </mod_inventory>  <chapter_inventory> ... </chapter_inventory>  <kubejs_gamestages_inventory> ... </kubejs_gamestages_inventory>  <solution_comparison> ... </solution_comparison>  <experience_filter> ... </experience_filter>  <recommended_direction> ... </recommended_direction>  <phase_1b_implementation_plan> ... </phase_1b_implementation_plan>  <files_modified> None. Read-only research phase. </files_modified> 

## Standard Phase B: Small Scoped Edit

Use Phase B only after the user approves Phase A.

Allowed:

- edit one target chapter file
- preserve existing rewards unless intentionally moved
- move GameStages command rewards to a new real completion quest if needed
- produce manual test plan

Usually allowed dirty files:

text config/ftbquests/quests/chapters/<chapter>.snbt 

Potentially allowed only if metadata sync is required:

text index.toml pack.toml 

Forbidden:

- commit
- push
- tag
- modify unrelated chapters
- modify KubeJS
- modify mods/.pw.toml
- install mods
- run packwiz refresh unless explicitly requested
- add ItemStages, Palladium, Pufferfish’s Skills, or other major systems without approval
- implement true wave, raid, Guild Threat, Dragon Disaster, equipment lock, or skill tree unless explicitly requested

Required validation after edit:

bash git diff --name-only git diff --stat git diff -- config/ftbquests/quests/chapters/<chapter>.snbt rg -n "<target_stage>|<target_gate>|gamestage add @s|type: \"kill\"|type: \"item\"" config/ftbquests/quests/chapters/<chapter>.snbt rg -n "<target_stage>|<target_gate>" config/ftbquests/quests/chapters git status --short -uall 

Output must include:

xml <implementation_plan> ... </implementation_plan>  <changes_made> ... </changes_made>  <stage_reward_source_analysis> Confirm each target stage has exactly one command reward source. </stage_reward_source_analysis>  <validation> ... </validation>  <manual_test_plan> ... </manual_test_plan>  <commit_policy> Do not commit yet. Wait for user in-game manual test result. </commit_policy> 

## Standard Phase C: Pre-commit Validation

Use Phase C only after the user reports in-game test PASS.

Allowed:

- run final validation
- commit only if validation passes and user requested commit

Forbidden:

- push
- tag
- release notes
- new edits
- unrelated cleanup
- packwiz refresh unless explicitly requested

Required validation:

bash pwd git status --short -uall git status -sb git diff --name-only git diff --stat git diff -- config/ftbquests/quests/chapters/<chapter>.snbt git diff -- index.toml pack.toml rg -n "<target_stage>|<target_gate>|gamestage add @s|type: \"kill\"|type: \"item\"" config/ftbquests/quests/chapters/<chapter>.snbt rg -n "<target_stage>|<target_gate>" config/ftbquests/quests/chapters rg -n 'RELEASE_NOTES|opencode|mrpack|DS_Store|opencode.db|\.opencode\.bak' index.toml pack.toml .packwizignore .gitignore || true git diff --name-only | cat 

Confirm:

1. Dirty files are expected.
2. No KubeJS changes.
3. No unrelated chapter changes.
4. No mods/.pw.toml changes.
5. No artifact pollution.
6. Each target GameStage has only one command reward source.
7. Command rewards use verified format:

snbt {   auto: "disabled"   command: "gamestage add @s <stage>"   type: "command" } 

Commit only if all checks pass.

Default commit message format:

text Add Chapter <N> <feature name> MVP gate 

After commit:

bash git status --short -uall git status -sb git log --oneline --decorate --max-count=8 git show --stat --oneline --decorate --max-count=1 

Output must include:

xml <pre_commit_validation> ... </pre_commit_validation>  <metadata_diff_analysis> ... </metadata_diff_analysis>  <stage_reward_source_analysis> ... </stage_reward_source_analysis>  <commit_result> ... </commit_result>  <status_after> ... </status_after>  <files_committed> ... </files_committed>  <next_step> If commit succeeded and repo is clean, user will handle push / release notes / tag manually unless explicitly requested. </next_step> 

## Push / Tag / Release Notes Policy

By default, agents must not push, tag, or create release notes unless the user explicitly asks.

Default policy:

text Commit may be prepared by agent after user test PASS. Push is handled by user. Release notes are handled by user. Tags are handled by user. 

If the user explicitly asks the agent to push:

- verify clean repo
- verify branch is main
- verify HEAD commit
- push only main
- do not tag

If the user explicitly asks the agent to tag:

- verify release notes commit exists
- verify repo clean
- create annotated tag only
- push tag only

## Packwiz Metadata Rules

Expected metadata files:

text index.toml pack.toml 

Allowed metadata changes:

- index.toml hash for the edited quest file
- pack.toml [index].hash

If index.toml also changes hashes for already committed docs such as:

text README.md CHANGELOG.md COMPATIBILITY.md 

then this is treated as packwiz metadata debt only if:

1. those documentation files are not dirty
2. index.toml changes are hash-only
3. pack.toml only changes [index].hash
4. no artifact pollution exists
5. user explicitly approves scope relaxation

The commit report must say:

text Includes documentation packwiz metadata debt for README.md / CHANGELOG.md / COMPATIBILITY.md hashes. Documentation files themselves were not modified in this commit. 

Forbidden artifact entries in index.toml / pack.toml:

text .opencode.bak opencode.db opencode.db-shm opencode.db-wal *.mrpack .DS_Store RELEASE_NOTES_*.md 

## Verified Formats

### GameStages command root

Verified in-game:

mcfunction /gamestage add @s <stage> /gamestage check @s <stage> /gamestage remove @s <stage> 

### FTB Quests command reward

Verified SNBT format:

snbt rewards: [{   auto: "disabled"   command: "gamestage add @s eg.test.ftb_reward"   id: "UNIQUE_ID"   type: "command" }] 

Rules:

- no leading slash in command
- @s correctly targets reward claimer
- reward id must be unique
- multiple command rewards in one quest are allowed
- remove nonexistent stage is safe

### FTB Quests kill task

Verified in previous chapters:

snbt {   entity: "minecraft:zombie"   type: "kill"   value: 3L } 

Use only known working vanilla mobs unless explicitly approved.

## Completed v0.7.x Milestones

### v0.7.1-alpha

Chapter 3 first hunt kill gate.

Verified:

text Blaze kill task → claim reward → eg.chapter.3.first_hunt 

### v0.7.2-alpha

Chapter 4 first defense MVP gate.

Verified:

text torch / bread / arrow supply + zombie / skeleton kill tasks → eg.chapter.4.first_defense 

Not a full wave system.

### v0.7.3-alpha

Chapter 5 calamity foreshadowing MVP gate.

Verified:

text rotten_flesh / bone / spider_eye / paper samples + zombie / skeleton / spider kill tasks → eg.chapter.5.calamity_foreshadowing → eg.gate.calamity_reported 

Not Guild Threat, Dragon Disaster, raid, wave, or invasion system.

### v0.7.4-alpha current work

Chapter 6 mid gear certification MVP gate.

Expected verified chain:

text shield / iron_ingot / bow / arrow / lapis_lazuli / paper + zombie / skeleton kill tasks → eg.chapter.6.mid_gear → eg.gate.mid_gear_certified 

Not ItemStages, equipment lock, KubeJS equipment check, class skill system, Palladium, Pufferfish’s Skills, or weapon specialization.

## v0.8.x Backlog Only

Do not implement these during v0.7.4 work.

Future v0.8.x lightweight Hypixel SkyBlock-style systems:

1. 公會研究圖鑑
2. 公會後勤設施
3. 女僕 / 遺物夥伴 / 職業輔助
4. 公會戰利品殿堂

Backlog rules:

- attach near Chapter 1 guild base / early progression later
- do not create a separate chapter now
- first MVP should use only FTB Quests checkmark / item / text tasks
- no real skill XP
- no real pet system
- no real minion system
- no auction / economy system
- no KubeJS
- no GameStages
- no recipes
- no loot changes
- no new mods
- do not touch Chapter 3 / 4 / 5 / 9 / 10 / 11 for this backlog

## Agent Behavior Rules

Before modifying files, always produce:

xml <implementation_plan> ... </implementation_plan> 

After modifying files, always report:

bash git status --short -uall git status -sb git diff --name-only git diff --stat 

Never do these without explicit user approval:

text push tag release notes new mod install packwiz refresh large refactor KubeJS gameplay logic GameStages schema redesign ItemStages integration Palladium integration Pufferfish’s Skills integration 

If validation fails:

1. stop
2. do not commit
3. explain the blocker
4. propose options
5. wait for user approval
