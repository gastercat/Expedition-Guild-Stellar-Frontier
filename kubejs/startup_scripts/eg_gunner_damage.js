// Expedition Guild: Gunner arrow-damage bonus
//
// Players with the eg.class.gunner stage deal more damage with arrows
// (bows and crossbows). Forge events can only be hooked from startup
// scripts, so this lives here instead of server_scripts/eg_classes.js.
// Changing this file needs a full game restart; /reload does not apply it.
//
// Method names: in game, source.getMsgId() was not found inside this raw
// Forge event and crashed the server. callVanilla() tries the Mojang name
// first and falls back to the 1.20.1 SRG name (resolved from Mojang's
// client-1.20.1 mappings and mcp_config-1.20.1):
//   DamageSource#getMsgId -> m_19385_
//   DamageSource#getEntity -> m_7639_
// LivingHurtEvent is a Forge class, so getSource/getAmount/setAmount keep
// their names; isPlayer() and stages are KubeJS helpers.
//
// Rhino note: a `const` declared inside a try block of a repeatedly called
// arrow function failed with "redeclaration of var", so the logic lives in a
// plain function and the try/catch only wraps the call.
//
// An exception thrown inside a Forge event listener crashes the server, so a
// script bug here must only log an error.

const GUNNER_ARROW_MULTIPLIER = 1.25
let gunnerErrorLogged = false

function callVanilla(obj, mojangName, srgName) {
  if (typeof obj[mojangName] === 'function') return obj[mojangName]()
  if (typeof obj[srgName] === 'function') return obj[srgName]()
  throw new Error(`no ${mojangName}/${srgName} on ${obj}`)
}

function applyGunnerBonus(event) {
  const source = event.getSource()
  if (callVanilla(source, 'getMsgId', 'm_19385_') !== 'arrow') return

  const attacker = callVanilla(source, 'getEntity', 'm_7639_')
  if (!attacker || !attacker.isPlayer()) return
  if (!attacker.stages.has('eg.class.gunner')) return

  event.setAmount(event.getAmount() * GUNNER_ARROW_MULTIPLIER)
}

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
  try {
    applyGunnerBonus(event)
  } catch (e) {
    if (!gunnerErrorLogged) {
      gunnerErrorLogged = true
      console.error(`[Expedition Guild] Gunner damage bonus error (later errors are not logged): ${e}`)
    }
  }
})
