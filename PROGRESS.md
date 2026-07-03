# Progress

## Current Version And Phase

- Direction: `v0.8.0 Friends Content Preview`.
- Phase: v0.8.0 Friends Preview minimum playable checkpoint.
- Recent infra work: `AGENT.md` and `PROGRESS.md` were added to support future agent sessions.
- Git branch observed before this task: `main`, ahead of `origin/main` by 1.

## Last Known Good State

- Working tree was clean before this task.
- Current baseline remains Minecraft `1.20.1`, Forge `47.4.10`, Java `17`,
  packwiz, and Create pinned to `1.20.1-0.5.1.j`.
- Existing v0.8.0 preview notes record Lootr, Simply Swords, Artifacts, and
  selected Macaw/base-life content as installed and manually smoke-tested.

## Current Goal

Create minimal repo-level agent context files only:

- `AGENT.md`
- `PROGRESS.md`

No gameplay, quest, KubeJS, mod, packwiz, docs, README, changelog, or
compatibility files should change in this task.

## Next Allowed Tasks

- Review these new context files.
- Optionally ask for wording adjustments in `AGENT.md` or `PROGRESS.md`.
- Start a separate approved research phase for the next v0.8.0 candidate.
- Retest Simply Swords natural/Lootr loot availability.
- Continue monitoring Artifacts loot power and frequency in multiplayer.

## Blocked Items

- Better Combat integration is blocked from v0.8.0 and postponed to `v0.9.0`.
- Dungeon Crawl, Touhou Little Maid, Twilight Forest, and Terramity need
  separate Inventory-first and Experience-filter research before installation.
- Create 6 and Ad Astra `1.15.20` remain blocked under the current baseline.

## Deferred Items

- Full class skill systems.
- Real Guild Threat, Dragon Disaster, wave, raid, or invasion systems.
- KubeJS gameplay logic, recipe rewrites, loot rewrites, and GameStages schema
  redesign.
- Botania and deeper magic backend work.
- Postgame boss rush, divine gear loop, title collection, and large endgame
  reward systems.

## Stop Point

Stop after creating `AGENT.md` and `PROGRESS.md`, running the requested
post-checks, and reporting results. Do not commit yet.
