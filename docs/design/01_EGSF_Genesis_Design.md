# EG:SF Genesis Design｜初版世界觀與主題

Status: design source / expanded
Project: Expedition Guild: Stellar Frontier / 遠征公會：星界邊境
Last Updated: 2026-07-04
Use: Preserve the original EG:SF identity, world concept, and core design sentence.
Do Not Use For: Current mod inventory, active quest state, or final implementation truth.

> Note:
> This is a design source document. It may describe intent, future plans, backlog ideas, or historical context.
> For current implementation state, check docs/PROGRESSION_OVERVIEW.md, docs/releases/, active FTB Quests files, KubeJS, and packwiz metadata.

## 0. Summary

- EG:SF began as a long-term multiplayer Minecraft modpack concept for friends.
- The project identity became Expedition Guild: Stellar Frontier / 遠征公會：星界邊境.
- The core fusion is Create guild infrastructure, RPG role division, and Ad Astra space expedition.
- The pack should be treated as a guild campaign, not a random mod collection.
- Create is infrastructure, RPG is role division, and Ad Astra is the mid/late-game expedition goal.
- Create must remain 1.20.1-0.5.1.j and not Create 6.x under the current baseline.

## 1. Core Identity

- Project name: Expedition Guild: Stellar Frontier.
- Chinese name: 遠征公會：星界邊境.
- Short identity sentence: EG:SF is a multiplayer expedition-guild campaign where friends build shared infrastructure, divide into roles, explore dangerous worlds, and push toward space.
- What EG:SF is:
  - A long-term friend-server modpack with shared campaign goals.
  - A guild-centered progression pack where infrastructure, roles, exploration, combat, and space travel support one another.
  - A pack where Create supports the guild, RPG systems give players identity, and Ad Astra gives the campaign a larger frontier.
- What EG:SF is not:
  - Not a random kitchen-sink collection.
  - Not a pure Create engineering challenge.
  - Not a pure RPG adventure pack.
  - Not a one-time mod dump where every requested mod is installed before the campaign has a stable shape.

## 2. Original Design Intent

- Design intent: create a long-term multiplayer world where friends have different responsibilities, goals, and reasons to return.
- The server should support multiple play styles: exploration, building, logistics, combat, storage, supply, and space preparation.
- Exploration, building, logistics, combat, and space should all serve the guild campaign instead of becoming disconnected side activities.
- Progression should expand gradually through tested phases. The pack should grow by adding content that strengthens the campaign, not by installing every interesting mod at once.
- The tone should feel like a guild preparing expeditions: players gather supplies, upgrade the base, take on danger, recover loot, and bring discoveries back for the team.

## 3. Core Gameplay Loop

Design intent for the core loop:

1. Join the guild and learn the current expedition goals.
2. Build a shared base, outpost, or guild hall.
3. Explore the world, dungeons, structures, and later off-world destinations.
4. Bring back resources, loot, samples, and information.
5. Upgrade guild infrastructure with Create, farming, storage, transport, and logistics.
6. Form role division so players naturally become explorers, engineers, builders, suppliers, fighters, mages, storage managers, or space specialists.
7. Unlock stronger gear, magic, technology, and expedition preparation through staged progression.
8. Build rockets, launch infrastructure, and off-world outposts.
9. Return space resources and expedition results to upgrade the guild and unlock later campaign goals.

This loop is a design source. Current implementation may only cover parts of it.

## 4. Player Roles

Early design roles:

- Explorer: scouts terrain, structures, resources, and routes.
- Engineer: builds Create machines and practical automation.
- Builder: makes the guild base, outposts, roads, and presentation areas.
- Supplier: prepares food, torches, beds, fuel, and expedition kits.
- Fighter: protects the team and handles dangerous encounters.
- Storage manager: organizes shared resources and keeps the guild usable.

Later design roles:

- Chief engineer: plans larger Create infrastructure and guild facilities.
- Railway/logistics engineer: connects bases, resource points, and expedition sites.
- Space engineer: prepares rockets, launch sites, oxygen, and astral infrastructure.
- Fighter: develops toward Vanguard or other combat identities.
- Mage: develops toward Arcanist and utility/control identity.
- City planner: shapes the guild hall, districts, roads, and long-term base feel.
- Astral expedition member: supports off-world exploration, outposts, and return logistics.

These are design roles. They are not necessarily enforced classes yet, and they should not be treated as current active restrictions.

## 5. Technical Baseline

Current design baseline:

- Minecraft: 1.20.1.
- Loader: Forge.
- Java target: 17.
- Pack manager: packwiz.
- Launcher target: Prism Launcher.
- Create baseline: Create 1.20.1-0.5.1.j.
- Do not use Create 6.x under the current baseline.
- Do not switch the current baseline to Fabric, NeoForge, or Minecraft 1.21.x.

This baseline exists because EG:SF needs a stable multiplayer foundation before adding larger systems. Compatibility truth should still be checked in packwiz metadata and compatibility documentation before any implementation work.

## 6. Historical Notes

- Early planning explored expedition themes, seasonal/chapter progression, role-based play, gentle hardcore adventure, and theme-park-like areas.
- The project identity gradually moved toward a guild campaign rather than a generic modded survival server.
- Create, RPG role division, and Ad Astra became the stable conceptual triangle.
- These notes are historical design roots. They may be superseded by current implementation docs, release notes, active quest files, or future approved design passes.

## 7. Future Use

- Use this file to preserve the project identity when future design work becomes large or fragmented.
- Use it to check whether a new idea strengthens the guild campaign, shared infrastructure, role division, exploration, and space frontier direction.
- Do not use this file to verify installed mods, active quest state, active GameStages, KubeJS logic, or packwiz metadata.
- For current implementation state, check `docs/PROGRESSION_OVERVIEW.md`, `docs/releases/`, active FTB Quests files under `config/ftbquests/quests/`, KubeJS files, and packwiz metadata.
