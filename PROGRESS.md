# Progress

## Current Version And Phase

- Direction: `v0.8.x Friends Feedback Test`.
- Current release: `v0.8.1-friends-feedback-test`.
- Release status: GitHub pre-release published from commit `e12bca1`.
- Release asset: `EGSF-v0.8.1-friends-feedback-test.mrpack` (45.9 MB).
- Phase: waiting for friends feedback on early quest feel, reward feel, and Create / Ad Astra preview clarity.

## Last Known Good State

- RC smoke test for `v0.8.1-friends-feedback-test` passed.
- Current technical baseline:
  - Minecraft `1.20.1`
  - Forge `47.4.10`
  - Java `17`
  - Create `1.20.1-6.0.8`
  - Ad Astra `1.20.1-1.15.20`
- Chapter 0 guild onboarding / expedition preparation polish is released.
- Chapter 1 Create engineering, Ad Astra foreshadowing, and class fantasy preview polish is released.
- Packwiz index / pack hash were refreshed during implementation.
- `.packwizignore` was improved to avoid Python cache pollution.

## Current Goal

Documentation closeout for the v0.8.1 Friends Feedback Test release.

No gameplay, quest, KubeJS, mod, packwiz metadata, or exported `.mrpack`
changes should happen in this closeout task.

## Next Allowed Tasks

- Collect friends feedback from the v0.8.1 pre-release.
- Triage whether early rewards feel better without skipping progression.
- Triage whether Create feels visible before Chapter 2.
- Triage whether Ad Astra feels foreshadowed before Chapter 7.
- Keep any follow-up patch small and separate.

## Blocked Items

- TaCZ full integration.
- Iron's Spells full integration.
- Better Combat.
- Full class skill system.
- Dragon Disaster.
- Guild Threat system.
- Create Aeronautics.
- Tom's Simple Storage.
- Touhou Little Maid.
- v0.9.0 class / stress-test planning unless explicitly opened in a separate task.

## Deferred Items

- Full class skill systems and real class gear locks.
- Real Guild Threat, Dragon Disaster, wave, raid, or invasion systems.
- KubeJS gameplay logic, recipe rewrites, loot rewrites, and GameStages schema
  redesign.
- Botania and deeper magic backend work.
- Postgame boss rush, divine gear loop, title collection, and large endgame
  reward systems.

## Stop Point

Stop after updating release documentation, changelog, progress/status, and any
small current-version README references. Do not commit yet.
