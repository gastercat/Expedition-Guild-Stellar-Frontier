// Expedition Guild: stage naming skeleton
//
// Purpose:
// - Centralize planned GameStages names for the Expedition Guild campaign.
// - Keep the current script passive and safe.
// - Do not grant, remove, check, or enforce stages in this file yet.
//
// Current status:
// - GameStages command syntax is still pending in-game confirmation.
// - FTB Quests command reward integration is not implemented yet.
// - Class mutual exclusion is planned but not implemented yet.
// - Equipment locks, Boss Gate checks, siege triggers, and damage changes are not implemented here.
//
// Naming rules:
// - Use lowercase.
// - Use dot-separated names.
// - Use the "eg" namespace.
// - Avoid spaces, slashes, and non-ASCII identifiers for stage ids.

const EG_STAGES = Object.freeze({
  guild: {
    joined: 'eg.guild.joined'
  },

  chapter: {
    handbook: 'eg.chapter.0.handbook',
    classTraining: 'eg.chapter.1.class_training',
    bossPrep: 'eg.chapter.2.boss_prep',
    firstHunt: 'eg.chapter.3.first_hunt',
    firstDefense: 'eg.chapter.4.first_defense',
    calamityForeshadowing: 'eg.chapter.5.calamity_foreshadowing',
    midGear: 'eg.chapter.6.mid_gear',
    astralPrep: 'eg.chapter.7.astral_prep',
    outpostRating: 'eg.chapter.8.outpost_rating',
    hybridization: 'eg.chapter.9.hybridization',
    endgameCalamity: 'eg.chapter.10.endgame_calamity',
    postgame: 'eg.chapter.11.postgame'
  },

  class: {
    vanguard: 'eg.class.vanguard',
    gunner: 'eg.class.gunner',
    arcanist: 'eg.class.arcanist',

    // Future hybrid class stages.
    spellblade: 'eg.class.spellblade',
    arcaneBallistics: 'eg.class.arcane_ballistics',
    assaultVanguard: 'eg.class.assault_vanguard'
  },

  gate: {
    firstHuntReady: 'eg.gate.first_hunt_ready',
    firstDefenseReady: 'eg.gate.first_defense_ready',
    calamityReported: 'eg.gate.calamity_reported',
    midGearCertified: 'eg.gate.mid_gear_certified',
    astralLicensePreapproved: 'eg.gate.astral_license_preapproved',
    fusionCertified: 'eg.gate.fusion_certified',
    endgamePreapproved: 'eg.gate.endgame_preapproved',
    postgameArchived: 'eg.gate.postgame_archived'
  },

  system: {
    guildThreatKnown: 'eg.system.guild_threat_known',
    weaponMemoryKnown: 'eg.system.weapon_memory_known',
    lootIntegrationKnown: 'eg.system.loot_integration_known',
    astralOutpostKnown: 'eg.system.astral_outpost_known'
  }
})

// Passive load message only. This confirms the skeleton script loaded without
// changing gameplay or player data.
console.info('[Expedition Guild] Loaded EG_STAGES naming skeleton.')
