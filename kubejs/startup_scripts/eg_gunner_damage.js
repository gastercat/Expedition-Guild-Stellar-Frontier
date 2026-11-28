// Expedition Guild: Gunner arrow-damage bonus
//
// Players with the eg.class.gunner stage deal more damage with arrows
// (bows and crossbows). Forge events can only be hooked from startup
// scripts, so this lives here instead of server_scripts/eg_classes.js.
// Changing this file needs a full game restart; /reload does not apply it.
//
// Sources: ForgeEvents.onEvent is bound by KubeJS's BuiltinKubeJSForgePlugin
// (kubejs-forge-2001.6.5); LivingHurtEvent#getAmount/setAmount is Forge 47 API;
// DamageSource#getMsgId returns "arrow" for arrow damage in vanilla 1.20.1.

const GUNNER_ARROW_MULTIPLIER = 1.25

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
  const source = event.getSource()
  if (source.getMsgId() !== 'arrow') return

  const attacker = source.getEntity()
  if (!attacker || !attacker.isPlayer()) return
  if (!attacker.stages.has('eg.class.gunner')) return

  event.setAmount(event.getAmount() * GUNNER_ARROW_MULTIPLIER)
})
