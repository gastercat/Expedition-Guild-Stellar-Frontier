# Progress

## Current Version And Phase

- Direction: `v0.8.x Friends Feedback Test`.
- Current release: `v0.8.1-friends-feedback-test`.
- Release status: GitHub pre-release published from commit `e12bca1`.
- Release asset: `EGSF-v0.8.1-friends-feedback-test.mrpack` (45.9 MB).
- Phase: waiting for friends feedback on early quest feel, reward feel, and Create / Ad Astra preview clarity.

## Current State

- `v0.8.1-friends-feedback-test` is published as a GitHub pre-release from
  commit `e12bca1`.
- Release documentation closeout commit `f50c331` is on current `main`.
- The project is waiting for friends feedback on early quest feel, reward feel,
  and Create / Ad Astra preview clarity.
- The project-owner handoff dated 2026-07-26 records incident
  `EGSF-v0.8.1-Render-Native-Crash` as `WAITING_FOR_SECOND_AB_TEST`.
- The required next test is Twilight Forest ON / Embeddium OFF.
- No tracked incident document or second A/B test result exists in this repo.
  Missing repo evidence is not proof that the incident is resolved.
- No active gameplay, quest, KubeJS, mod, packwiz, export, or release
  implementation is currently authorized.

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

- Collect and triage friends feedback for `v0.8.1-friends-feedback-test`.
- Preserve the required Twilight Forest ON / Embeddium OFF A/B test as the next
  unresolved Render Native Crash investigation step.
- Keep authority and status documentation aligned while feedback and incident
  evidence are pending.
- Keep any follow-up proposal small, separate, and evidence-backed.
- Maintain `no-active-implementation` until a new scoped task is explicitly
  authorized.

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

Stop before any gameplay, quest, KubeJS, mod, packwiz metadata, export, release,
or Render Incident remediation work.

Allowed next work is limited to bounded friends-feedback collection or triage,
the required Twilight Forest ON / Embeddium OFF A/B test under a separately
authorized runtime task, doc-only authority repair, or a separate proposal to
preserve Render Incident evidence in the repo.

Do not treat the missing repo incident record as proof of resolution. Do not
begin active implementation without a new scoped authorization.
