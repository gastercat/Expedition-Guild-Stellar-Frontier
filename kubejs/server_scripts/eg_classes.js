// Expedition Guild: class bonuses and mutual exclusion
//
// - Chapter 1 quest rewards grant eg.class.vanguard or eg.class.gunner.
// - This script keeps a player in at most one class: gaining a class stage
//   removes the other class stage.
// - It applies each class's attribute bonuses with the vanilla /attribute
//   command, and re-applies them on login and respawn (vanilla drops
//   attribute modifiers on death).
// - The Gunner arrow-damage bonus lives in startup_scripts/eg_gunner_damage.js,
//   because Forge events can only be hooked from startup scripts.
//
// Sources for the syntax used here:
// - player.stages delegates to GameStages through KubeJS's
//   integration/forge/gamestages/GameStagesWrapper (kubejs-forge-2001.6.5).
// - GameStageEvents.stageAdded / stageRemoved, PlayerEvents.loggedIn /
//   respawned and server.scheduleInTicks come from the same KubeJS jar.
// - /attribute <target> <attribute> modifier add|remove is the vanilla 1.20.1 command.

const CLASS_STAGES = ['eg.class.vanguard', 'eg.class.gunner']

// Each entry: { attribute: '<attribute id>', amount: <number>, operation: 'add' | 'multiply_base' | 'multiply' }
// 'add' adds a flat amount (max_health is in half-hearts: 2 = one heart).
// 'multiply_base' adds amount × base value (0.1 = +10%).
const CLASS_BONUSES = {
  // Vanguard holds the front: Naga's charge knocks players back, so knockback
  // resistance matters as much as raw health. No attack bonus; Simply Swords
  // weapons already carry melee damage.
  'eg.class.vanguard': [
    { attribute: 'minecraft:generic.max_health', amount: 6, operation: 'add' },
    { attribute: 'minecraft:generic.armor', amount: 4, operation: 'add' },
    { attribute: 'minecraft:generic.knockback_resistance', amount: 0.3, operation: 'add' }
  ],
  // Gunner keeps distance: a small speed bonus. Damage comes from the arrow
  // multiplier in startup_scripts/eg_gunner_damage.js.
  'eg.class.gunner': [
    { attribute: 'minecraft:generic.movement_speed', amount: 0.08, operation: 'multiply_base' }
  ]
}

// A stable UUID per (class, attribute) pair, so the same modifier can be
// removed later. Pure JS: no Java class loading needed.
function modifierUuid(key) {
  let hex = ''
  for (let seed = 1; hex.length < 32; seed++) {
    let h = seed * 7919
    for (let i = 0; i < key.length; i++) {
      // Stays below 2^53, so plain number math is exact.
      h = (h * 31 + key.charCodeAt(i)) % 4294967296
    }
    hex += ('00000000' + h.toString(16)).slice(-8)
  }
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`
}

function syncClassBonuses(player) {
  const server = player.getServer()
  if (!server) return
  const name = player.getGameProfile().getName()

  CLASS_STAGES.forEach(stage => {
    const bonuses = CLASS_BONUSES[stage] || []
    bonuses.forEach(bonus => {
      const uuid = modifierUuid(`${stage}|${bonus.attribute}`)
      server.runCommandSilent(`attribute ${name} ${bonus.attribute} modifier remove ${uuid}`)
      if (player.stages.has(stage)) {
        server.runCommandSilent(
          `attribute ${name} ${bonus.attribute} modifier add ${uuid} eg_class_bonus ${bonus.amount} ${bonus.operation}`
        )
      }
    })
  })

  // Removing a max_health bonus can leave health above the new maximum.
  if (player.getHealth() > player.getMaxHealth()) player.setHealth(player.getMaxHealth())
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
