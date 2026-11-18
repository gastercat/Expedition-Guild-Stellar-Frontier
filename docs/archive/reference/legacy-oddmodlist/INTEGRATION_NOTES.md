# Legacy Oddmodlist Integration Notes

This document is a static reference for integrating ideas from the legacy
Oddmodlist pack into Expedition Guild: Stellar Frontier. It is not an active
FTB Quests file and should not be copied directly into the current quest data.

## 1. Source Summary

The legacy reference data was read from `~/oddmodlist`:

- `mod-jar-list.txt`: legacy jar list with roughly 254 mod entries.
- `modlist.html`: legacy mod list in HTML form.
- `quests`: first legacy FTB Quests set, including `chapter_groups.snbt`,
  `data.snbt`, chapter files, and reward tables.
- `quests2`: second legacy FTB Quests set, including `chapter_groups.snbt`,
  `data.snbt`, chapter files, and reward tables.

The legacy quest data uses several task and reward styles, including item
tasks, checkmarks, kill tasks, dimension tasks, advancements, XP rewards,
random rewards, choice tasks, command tasks, fluid tasks, biome tasks, and
custom tasks.

## 2. Legacy Pack Identity

The legacy pack is a large adventure and combat-focused modpack. Its core loop
is built around onboarding, stacked equipment growth, relics and curios,
magic progression, multi-dimension exploration, and a Boss encyclopedia.

Its gameplay identity can be summarized as:

- New player guidance through keybinds, known issues, configuration notes, and
  general pack orientation.
- Equipment growth through enchantment systems, gems, relics, accessories,
  weapon collections, and rare materials.
- Dimension exploration through Twilight Forest, Aether, Bumblezone, Deeper
  Darker, Alex's Caves, and similar content.
- Boss challenges through structured kill tasks, location hints, preparation
  notes, and trophy or material rewards.
- Relic and accessory collection through Curios-style equipment slots,
  rare drops, random rewards, and trading loops.
- Building and logistics support through construction helpers, storage,
  backpacks, teleportation, map tools, and practical base utilities.
- QoL support through maps, Waystones, inventory tools, voice chat notes,
  keybind guidance, and performance troubleshooting.

## 3. Compatible Design Elements

The following design elements can be adapted into Expedition Guild: Stellar
Frontier without importing the old data directly.

- New player guidance:
  - Rewrite the old keybind and known-issue concept as an Expedition Guild
    operations manual.
  - Focus on JEI, Jade, Xaero's maps, Waystones, FTB Teams, FTB Chunks, and
    Simple Voice Chat.

- Pre-expedition preparation:
  - Convert the old exploration prep logic into guild checklists.
  - Track food, torches, return routes, map markers, Waystones, and team roles.

- Boss encyclopedia structure:
  - Keep the structure, not the old kill tasks.
  - A future guild hunting manual can include location hints, preparation
    notes, fight confirmation, and trophy usage.

- Dimension exploration chapter structure:
  - Preserve the pattern of entry method, map or compass guidance, resource
    targets, boss order, and retreat planning.
  - Use it later for space, Twilight Forest, Aether, or other dimension content
    only after each module is tested.

- Relic and accessory compendium structure:
  - Adapt the old collection style into a guild armory or specialist handbook.
  - Use it later for explorer, warrior, and mage identity once the required
    mods exist.

- Building and logistics chapters:
  - Reframe old building and storage ideas as guild hall upgrades, supply
    stations, categorized storage, rest areas, and display walls.

- QoL operations manual:
  - Convert the old "common controls" concept into a practical in-pack manual
    for current tools only.

## 4. Do Not Directly Import

The legacy data must not be directly copied into the current pack.

- Old quest IDs:
  - They belong to a different quest graph and should not be mixed into the
    current Chapter 0-11 structure.

- Old dependencies:
  - They refer to legacy graph edges and old progression assumptions.

- Old reward tables:
  - They include legacy balance, random rewards, and modded items that do not
    exist in the current pack.

- Localization keys:
  - The second quest set heavily uses localization keys. Without the matching
    language files, direct import would produce broken text.

- Item tasks for uninstalled mods:
  - Many tasks reference Apotheosis, Curios, Artifacts, Relics, Twilight
    Forest, Aether, Cataclysm, Alex's Caves, and other unavailable content.

- Kill tasks:
  - The current pack does not include the corresponding bosses or mobs.
    Importing these tasks would create dead quests.

- Command and custom tasks:
  - These may require server permissions, extra addons, or legacy scripting.

- KubeJS custom systems:
  - The current pack should not inherit legacy custom currencies, shops,
    recipes, or scripted mechanics without a separate design pass.

- Unverified Create addons:
  - Old Create Additions, Diesel Generators, Big Cannons, Love and War, and
    related content must not be used unless separately tested against Create
    `1.20.1-0.5.1j`.

- Blue Skies:
  - Do not import Blue Skies content, dependencies, addons, configs, or quests.

- Create 6, Ad Astra 1.15.20, and Create: Ad Astra Compatibility:
  - These conflict with the current locked compatibility baseline.

## 5. Phase Mapping

### Phase 2 Candidate

Suitable for near-term rewrite using current installed mods and checkmark
tasks:

- Chapter 0 / Chapter 1 guidance for JEI, Jade, Xaero's Minimap, Xaero's World
  Map, Waystones, FTB Teams, FTB Chunks, and Simple Voice Chat.
- Base setup, shared storage, map markers, Waystone placement, and notice board
  tasks.
- Guild Specialization basics:
  - Quartermaster
  - Storekeeper
  - Architect
  - Engineer
  - Explorer
  - Space engineer
- Macaw's Furniture guild hall tasks:
  - Rest area
  - Quest counter
  - Display wall
  - Workshop furnishing
- Lightweight profession certifications using checkmarks where exact item IDs
  are fragile or not currently available.

### Phase 3 Candidate

Suitable after focused single-mod testing:

- Farmer's Delight supply and cooking line.
- Sophisticated Backpacks or storage-focused logistics upgrades.
- Better Combat and Simply Swords warrior specialization.
- Iron's Spells, Curios, Artifacts, and Relics mage or accessory progression.
- YUNG's structure exploration routes.
- Create addons that are confirmed compatible with Create `1.20.1-0.5.1j`.

### Phase 4 Candidate

Suitable for late-game large adventure, Boss, and dimension content:

- Twilight Forest structured dimension chapter.
- Aether, Bumblezone, Deeper Darker, Alex's Caves, or similar large exploration
  modules.
- Cataclysm, Mowzie's Mobs, Ice and Fire, or other major Boss lines.
- High-tier relic, enchantment, gem, and endgame equipment collections.
- Cross-dimension guild expeditions and the final Stellar Frontier arc.

### Archive Only

Reference only; not recommended for direct adoption:

- Backpack pet loops, random gacha shops, command-based trading, and custom
  currencies.
- High-risk UI, resource pack, or texture pack assumptions.
- Large combat difficulty rewrites and Boss stat overhauls.
- Create 6 or Ad Astra 1.15.20 dependent routes.
- Create: Ad Astra Compatibility.
- Unverified Forge / NeoForge mixed-source assumptions.

## 6. New Quest Design Brief

The following is a rewritten Expedition Guild questbook direction inspired by
the legacy structure, but adapted to the current pack identity.

- Chapter 0: 遠征者手冊
  - Quest book basics, JEI, Jade, Xaero maps, Waystones, FTB Teams, FTB Chunks,
    and Simple Voice Chat.
  - Use operation guidance and checkmark tasks.

- Chapter 1: 公會據點
  - Base selection, crafting station, shared storage, Waystone, map marker, and
    notice board.
  - Keep the tone focused on guild coordination.

- Chapter 2: Create 工坊
  - Water wheels, shafts, cogwheels, Mechanical Press, belts, and the first
    production line.
  - Stay inside Create `1.20.1-0.5.1j`.

- Chapter 3: 公會後勤
  - Cauldron supply route, supply chest, food, torches, return planning, and
    categorized storage.
  - Avoid Farmer's Delight-specific tasks until that mod is actually present.

- Chapter 4: 建築師委託
  - Macaw's Furniture workshop, guild rest area, quest counter, display wall,
    and public hall upgrades.
  - Prefer checkmarks when specific furniture IDs may vary by wood type.

- Chapter 5: 探險家手冊
  - Map marking, Jade surveys, resource reports, safe travel routes, and return
    plans.
  - Avoid structure or dimension-specific requirements until those modules are
    installed.

- Chapter 6: 太空工程準備
  - Ad Astra JEI review, material list, launch site plan, oxygen checklist,
    fuel checklist, and spacesuit checklist.
  - Keep Ad Astra at `1.20.1-1.15.19`.

- Chapter 7: 公會狩獵手冊（預留）
  - Placeholder for future combat and Boss progression.
  - Do not add kill tasks until the required mobs and Boss mods are installed
    and tested.

- Chapter 8: 維度遠征手冊（預留）
  - Future dimension expedition format: entry method, guide item, resource
    targets, Boss route, exit plan, and guild report.
  - Keep as a design brief until a dimension module is explicitly approved.

## 7. File Organization

Recommended location for legacy reference materials:

- `docs/reference/legacy-oddmodlist/`

Recommended contents:

- `docs/reference/legacy-oddmodlist/mod-jar-list.txt`
- `docs/reference/legacy-oddmodlist/modlist.html`
- `docs/reference/legacy-oddmodlist/quests/`
- `docs/reference/legacy-oddmodlist/quests2/`
- `docs/reference/legacy-oddmodlist/INTEGRATION_NOTES.md`

Do not place legacy materials into:

- `config/ftbquests/quests/`
- `mods/`
- packwiz index collection scope

The `docs/` directory is excluded by `.packwizignore`, which makes it the
right place for reference and archive material.

## 8. Next Small Step

The next small implementation step should be one of these, not both at once:

- Chapter 0 operation manual polish:
  - Add or refine current-tool guidance for JEI, Jade, Xaero, Waystones, FTB
    Teams, FTB Chunks, and Simple Voice Chat.

- Chapter 1 guild base explanation polish:
  - Strengthen base setup text around shared storage, map markers, notice
    boards, and return routes.

Use only current installed mods and avoid importing old task IDs, dependencies,
item requirements, reward tables, localization keys, or scripted systems.
