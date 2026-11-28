// Expedition Guild: Gunner arrow-damage bonus
//
// Players with the eg.class.gunner stage deal more damage with arrows
// (bows and crossbows). Forge events can only be hooked from startup
// scripts, so this lives here instead of server_scripts/eg_classes.js.
// Changing this file needs a full game restart; /reload does not apply it.
//
// What was confirmed in game (kubejs-forge-2001.6.5, rhino-forge-2001.2.3):
// inside this raw Forge event, DamageSource exposes neither getMsgId() nor its
// SRG name m_19385_. Its toString() does work and prints
// "DamageSource (<msgId>)", e.g. "DamageSource (inWall)", so the damage type
// is read from that string. java.lang.Object#toString is never obfuscated.
//
// For the attacker, getEntity() is tried with its SRG fallback m_7639_. The
// first hurt event logs which DamageSource members are visible, so the next
// test tells us whether that works.
//
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
let gunnerProbeLogged = false
let gunnerHitLogged = false

function damageTypeOf(source) {
  const match = /^DamageSource \((.+)\)$/.exec(String(source))
  return match ? match[1] : null
}

function attackerOf(source) {
  if (typeof source.getEntity === 'function') return source.getEntity()
  if (typeof source.m_7639_ === 'function') return source.m_7639_()
  throw new Error(`no getEntity/m_7639_ on ${source}`)
}

function probeOnce(source) {
  if (gunnerProbeLogged) return
  gunnerProbeLogged = true
  console.info(
    `[Expedition Guild] DamageSource probe: toString=${String(source)}, ` +
    `getEntity=${typeof source.getEntity}, m_7639_=${typeof source.m_7639_}, ` +
    `getMsgId=${typeof source.getMsgId}, m_19385_=${typeof source.m_19385_}`
  )
}

function applyGunnerBonus(event) {
  const source = event.getSource()
  probeOnce(source)
  if (damageTypeOf(source) !== 'arrow') return

  const attacker = attackerOf(source)
  if (!attacker || !attacker.isPlayer()) return
  if (!attacker.stages.has('eg.class.gunner')) return

  const before = event.getAmount()
  event.setAmount(before * GUNNER_ARROW_MULTIPLIER)
  if (!gunnerHitLogged) {
    gunnerHitLogged = true
    console.info(`[Expedition Guild] Gunner arrow bonus applied: ${before} -> ${event.getAmount()}`)
  }
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
