// Expedition Guild: Gunner arrow-damage bonus
//
// Players with the eg.class.gunner stage deal more damage with arrows
// (bows and crossbows). Forge events can only be hooked from startup
// scripts, so this lives here instead of server_scripts/eg_classes.js.
// Changing this file needs a full game restart; /reload does not apply it.
//
// Why the odd method names: KubeJS does not remap vanilla DamageSource
// methods inside a raw Forge event, so source.getMsgId() fails at runtime
// ("Cannot find function getMsgId") and crashed the server on any damage.
// Vanilla methods are called by their 1.20.1 SRG names instead:
//   DamageSource#getMsgId -> m_19385_
//   DamageSource#getEntity -> m_7639_
// (resolved from Mojang's client-1.20.1 mappings and mcp_config-1.20.1).
// LivingHurtEvent is a Forge class, so getSource/getAmount/setAmount keep
// their names; isPlayer() and stages are KubeJS helpers.
//
// The whole handler is wrapped in try/catch: an exception thrown inside a
// Forge event listener crashes the server, so a script bug here must only
// log an error.

const GUNNER_ARROW_MULTIPLIER = 1.25
let gunnerErrorLogged = false

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
  try {
    const source = event.getSource()
    if (source.m_19385_() !== 'arrow') return

    const attacker = source.m_7639_()
    if (!attacker || !attacker.isPlayer()) return
    if (!attacker.stages.has('eg.class.gunner')) return

    event.setAmount(event.getAmount() * GUNNER_ARROW_MULTIPLIER)
  } catch (e) {
    if (!gunnerErrorLogged) {
      gunnerErrorLogged = true
      console.error(`[Expedition Guild] Gunner damage bonus disabled after error: ${e}`)
    }
  }
})
