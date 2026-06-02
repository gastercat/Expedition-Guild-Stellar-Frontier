# Expedition Guild Stellar Frontier v0.7.1-alpha

## Summary

v0.7.1-alpha is the Chapter 3 first hunt gate milestone.

This release adds the first verified kill-based progression gate to the Expedition Guild campaign. The control layer now has a real completion source for Chapter 3: the player must kill the configured first hunt target through an FTB Quests kill task, then claim a command reward that grants the `eg.chapter.3.first_hunt` GameStage.

This is not a full Boss system, Boss chain, Guild Threat system, or Dragon Disaster system. It is a minimal, verified first hunt completion gate for the campaign control layer.

## Added

### Chapter 3 first hunt completion gate

Added a new Chapter 3 quest:

- 公會：第一討伐目標完成確認

The quest uses an FTB Quests kill task:

```snbt
{
  title: "擊殺第一討伐目標：Blaze"
  entity: "minecraft:blaze"
  type: "kill"
  value: 1L
}
```

The quest reward grants the Chapter 3 completion stage:

```snbt
{
  auto: "disabled"
  command: "gamestage add @s eg.chapter.3.first_hunt"
  type: "command"
}
```

### Packwiz hygiene

Release notes are now excluded from packwiz exports:

- `RELEASE_NOTES_*.md`

This prevents repository documentation from being indexed into player-facing pack exports.

## Verified

Manual in-game validation passed:

- Game launches.
- World loads.
- FTB Quests opens.
- Chapter 3 displays correctly.
- New first hunt quest displays correctly.
- `/gamestage remove @s eg.chapter.3.first_hunt` works.
- Stage is absent after removal.
- `minecraft:blaze` can be summoned and killed.
- FTB Quests kill task completes after killing Blaze.
- Reward can be claimed.
- `/gamestage check @s eg.chapter.3.first_hunt` confirms the stage is granted.

## Technical Notes

FTB Quests kill task format was verified from an in-game GUI sample before implementation.

Confirmed core kill task fields:

```snbt
{
  entity: "minecraft:<entity_id>"
  type: "kill"
  value: 1L
}
```

Confirmed command reward format remains:

```snbt
{
  auto: "disabled"
  command: "gamestage add @s <stage>"
  type: "command"
}
```

No KubeJS gameplay logic was added.

## Not Implemented / Deferred

This release does not include:

- real Boss chain
- Guild Threat system
- Dragon Disaster system
- KubeJS death event listener
- new Boss mod
- defense / raid / wave event system
- Ad Astra progression enforcement
- ItemStages
- equipment locks
- class skill tree
- Palladium or Pufferfish's Skills integration
- endgame scaling
- divine gear system
- postgame boss rush

## Manual Test Coverage

Validated manually:

- Main menu loads.
- Test world loads.
- FTB Quests opens.
- Chapter 3 displays.
- First hunt quest displays.
- Blaze kill task completes.
- Reward grants `eg.chapter.3.first_hunt`.
- `latest.log` contains no:
  - FTB Quests ERROR
  - GameStages ERROR
  - KubeJS ERROR
  - FATAL

## Known Limitations

The first hunt target is currently `minecraft:blaze`.

This is intentionally an elite vanilla target MVP, not a custom boss. It gives the campaign a verified kill completion source without pretending a full Boss framework exists.

Future work may replace or extend this with a proper Boss kill source after Boss / dungeon / event system design is complete.

## Upgrade / Packwiz Notes

No mod changes are included in this release.

Packwiz metadata was synchronized with the Chapter 3 quest file change in the gameplay commit.

Release notes are excluded from packwiz exports via `.packwizignore`, so `RELEASE_NOTES_*.md` should not appear in `index.toml` or exported `.mrpack` contents.
