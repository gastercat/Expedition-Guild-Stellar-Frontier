// Expedition Guild: class bonuses and mutual exclusion
//
// - Chapter 1 quest rewards grant eg.class.vanguard or eg.class.gunner.
// - This script keeps a player in at most one class: gaining a class stage
//   removes the other class stage.
// - It applies each class's attribute bonuses and re-applies them on login,
//   respawn and every class change. The modifiers are transient (not saved),
//   so re-applying is what keeps them.
// - The Gunner arrow-damage bonus lives in startup_scripts/eg_gunner_damage.js,
//   because Forge events can only be hooked from startup scripts.
//
// Sources for the syntax used here (kubejs-forge-2001.6.5):
// - player.stages delegates to GameStages (integration/forge/gamestages/GameStagesWrapper).
// - GameStageEvents.stageAdded / stageRemoved, PlayerEvents.loggedIn / respawned,
//   server.scheduleInTicks.
// - player.modifyAttribute(attribute, id, amount, operation) and
//   player.removeAttribute(attribute, id) from core/LivingEntityKJS. KubeJS
//   turns the attribute id string into an Attribute (RegistryInfo.ATTRIBUTE is
//   auto-wrapped in ScriptManager) and derives a stable modifier UUID from id.
//
// History: v1 used the vanilla /attribute command through runCommandSilent;
// in game it applied nothing (no modifiers in the player data), so it was
// replaced with modifyAttribute.

const CLASS_STAGES = ['eg.class.vanguard', 'eg.class.gunner']

// Each entry: { attribute: '<attribute id>', amount: <number>, operation: 'addition' | 'multiply_base' | 'multiply_total' }
// 'addition' adds a flat amount (max_health is in half-hearts: 2 = one heart).
// 'multiply_base' adds amount × base value (0.1 = +10%).
const CLASS_BONUSES = {
  // Vanguard holds the front: Naga's charge knocks players back, so knockback
  // resistance matters as much as raw health. No attack bonus; Simply Swords
  // weapons already carry melee damage.
  'eg.class.vanguard': [
    { attribute: 'minecraft:generic.max_health', amount: 6, operation: 'addition' },
    { attribute: 'minecraft:generic.armor', amount: 4, operation: 'addition' },
    { attribute: 'minecraft:generic.knockback_resistance', amount: 0.3, operation: 'addition' }
  ],
  // Gunner keeps distance: a small speed bonus. Damage comes from the arrow
  // multiplier in startup_scripts/eg_gunner_damage.js.
  'eg.class.gunner': [
    { attribute: 'minecraft:generic.movement_speed', amount: 0.08, operation: 'multiply_base' }
  ]
}

function modifierId(stage, attribute) {
  return `eg_class_bonus|${stage}|${attribute}`
}

function syncClassBonuses(player) {
  try {
    applyClassBonuses(player)
  } catch (e) {
    console.error(`[Expedition Guild] Failed to sync class bonuses: ${e}`)
  }
}

function applyClassBonuses(player) {
  const applied = []
  CLASS_STAGES.forEach(stage => {
    const active = player.stages.has(stage)
    const bonuses = CLASS_BONUSES[stage] || []
    bonuses.forEach(bonus => {
      const id = modifierId(stage, bonus.attribute)
      player.removeAttribute(bonus.attribute, id)
      if (active) {
        player.modifyAttribute(bonus.attribute, id, bonus.amount, bonus.operation)
        applied.push(`${bonus.attribute} ${bonus.amount}`)
      }
    })
  })

  // Removing a max_health bonus can leave health above the new maximum.
  // Mojang names work here: KubeJS remaps them in server scripts.
  const maxHealth = player.getMaxHealth()
  if (player.getHealth() > maxHealth) player.setHealth(maxHealth)

  console.info(`[Expedition Guild] Class bonuses synced for ${player.getProfile().getName()}: ${applied.length ? applied.join(', ') : 'none'}`)
}

GameStageEvents.stageAdded(event => {
  const player = event.player
  const added = event.stage
  if (!CLASS_STAGES.includes(added)) return

  CLASS_STAGES.forEach(stage => {
    if (stage !== added && player.stages.has(stage)) player.stages.remove(stage)
  })
  // Run on the next tick so the stage change is fully stored first.
  player.getServer().scheduleInTicks(1, () => syncClassBonuses(player))
})

GameStageEvents.stageRemoved(event => {
  if (!CLASS_STAGES.includes(event.stage)) return
  const player = event.player
  player.getServer().scheduleInTicks(1, () => syncClassBonuses(player))
})

PlayerEvents.loggedIn(event => syncClassBonuses(event.player))
PlayerEvents.respawned(event => syncClassBonuses(event.player))
