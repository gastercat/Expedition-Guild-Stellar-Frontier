# EG:SF Direction Reframe｜委託方需求與玩家體感

Status: design source / expanded
Project: Expedition Guild: Stellar Frontier / 遠征公會：星界邊境
Last Updated: 2026-07-04
Use: Guide player-feel decisions, Chapter 0 onboarding direction, requester tradeoffs, and safe batch implementation.
Do Not Use For: Installed mod list, final balance values, or active quest implementation details.

> Note:
> This is a design source document. It may describe intent, future plans, backlog ideas, or historical context.
> For current implementation state, check docs/PROGRESSION_OVERVIEW.md, docs/releases/, active FTB Quests files, KubeJS, and packwiz metadata.

## 0. Summary

- The project shifted from minimum validation toward requester needs, player feel, and controlled implementation.
- The requester wants many mods and long-term multiplayer goals.
- The correct response is not installing everything at once, but classifying, batching, testing, and integrating content into the campaign.
- Player feedback said early quests felt too much like vanilla tutorial and rewards were too weak.
- Chapter 0 should feel like expedition guild onboarding, not vanilla survival training.
- New content should be evaluated through Inventory-first and Experience-filter workflows.

## 1. Requester Needs

- Wants Create and Ad Astra as major pillars, but does not want the pack to become an overly brain-burning large industrial complexity stack.
- Wants many mods and visible content so friends can quickly feel that the pack has personality.
- Wants friends to have goals, roles, and reasons to stay engaged over time.
- Prefers RPG adventure, dimensions, bosses, artifacts, accessories, and multiplayer cooperation.
- Needs the pack to grow safely: additions should be classified, batched, tested, and integrated into the guild campaign instead of added as an uncontrolled pile.

## 2. Player Feedback

- Early quests felt too much like a vanilla survival tutorial.
- Rewards felt too weak to create momentum or excitement.
- Players did not immediately feel the modpack identity.
- This points to an onboarding and player-feel issue, not only a content quantity issue.
- The pack needs early signals that players have joined an expedition guild with shared tools, routes, supplies, and future goals.

## 3. Chapter 0 Retheme Direction

- Chapter 0 should become expedition guild onboarding.
- It should introduce the practical tools the guild expects players to use: JEI, Jade, maps, teams, claims, voice chat, waystones, supplies, and future route awareness.
- Vanilla tasks should be reframed as guild preparation, not basic Minecraft tutorial.
- Example directions:
  - Shared supply chest instead of "make a chest".
  - Guild outpost or first rally point instead of "build a starter house".
  - Expedition handbook instead of generic control tips.
  - Route marking, return planning, and supply preparation instead of isolated survival chores.
- Design intent: the first chapter should tell players what kind of server they joined.

## 4. Reward Pacing Principles

- Early rewards should reduce boring vanilla friction and help players start the guild loop.
- Safe early rewards:
  - Food.
  - Torches.
  - Bed or basic resting support.
  - Chest, barrel, or small storage support.
  - Small amounts of iron or coal.
  - Basic building blocks.
  - Small XP.
  - Utility items that help coordination or exploration.
- Avoid early rewards that skip gates:
  - High-tier weapons.
  - High-tier armor.
  - Overpowered artifacts.
  - Ad Astra progression-critical items.
  - Rocket materials.
  - Excessive diamonds.
  - Netherite.
- Rewards should create momentum without bypassing Create logistics, Boss Gate preparation, Ad Astra progression, or future class identity.

## 5. Inventory-first Workflow

Use this workflow before changing quests, adding mods, or expanding a design:

1. Scan the current repo and installed mod list.
2. Classify existing systems before adding anything.
3. Ask whether existing mods already solve the need.
4. Check current documentation, active FTB Quests, KubeJS, and packwiz metadata.
5. Add new mods only if they fill a clear gap.
6. Split additions into small tested batches.
7. Document what changed and what remains planned.

Inventory-first prevents duplicated systems, accidental compatibility drift, and designs based on mods that are not actually present.

## 6. Experience-filter

Evaluate a mod or system by the player experience it creates.

Good candidates strengthen:

- Guild cooperation.
- Class identity.
- Boss gates or defense goals.
- Create logistics.
- Ad Astra progression.
- Weapon or artifact excitement.
- Life/base content.
- Friend-facing value.

Risky candidates:

- Create confusion or too many disconnected tasks.
- Skip planned progression.
- Make one class or play style dominate.
- Overload quests with chores.
- Turn EG:SF into a generic mixed pack.
- Add technical risk without a clear campaign benefit.

Technical installability is necessary, but not enough. The content must improve the guild campaign.

## 7. Future Use

- Use this file as a decision filter before changing quests, planning docs, mod lists, or candidate-mod phases.
- Use it to keep future implementation aligned with player feel and controlled batching.
- Do not treat this file as installed-mod truth, final balance policy, or active quest implementation detail.
- For current implementation state, check `docs/PROGRESSION_OVERVIEW.md`, `docs/releases/`, active FTB Quests files, KubeJS, and packwiz metadata.
