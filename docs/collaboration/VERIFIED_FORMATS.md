# 已驗證格式（Verified Formats）

本文件收錄已經由 Repo diff、既有檔案或遊戲內測試證實可用的格式。Agent 撰寫 FTB Quests、KubeJS、GameStages 相關內容時，優先使用這裡或既有檔案中出現過的格式；第一次使用的新語法，在 PR 中註明來源（官方文件或 mod 原始碼），在遊戲裡確認可用後再補進本文件。

## GameStages command root

遊戲內驗證過：

```mcfunction
/gamestage add @s <stage>
/gamestage check @s <stage>
/gamestage remove @s <stage>
```

## FTB Quests command reward

驗證過的 SNBT 格式：

```snbt
rewards: [{
  auto: "disabled"
  command: "gamestage add @s eg.test.ftb_reward"
  id: "UNIQUE_ID"
  type: "command"
}]
```

規則：

- `command` 不加開頭的斜線。
- `@s` 會正確指向領取獎勵的玩家。
- 每個 reward 的 `id` 必須唯一。
- 一個 quest 可以有多個 command reward。
- `remove` 一個不存在的 stage 是安全的。
- 每個 GameStage 只能有一個 command reward 來源，避免同一個 stage 從多個任務取得。

## FTB Quests kill task

在先前的章節驗證過：

```snbt
{
  entity: "minecraft:zombie"
  type: "kill"
  value: 3L
}
```

除非另外核准，只使用已知可用的原版生物。

## 已驗證的實例（v0.7.x）

以下 gate 曾以上述格式完成，可作為撰寫新 gate 的參考：

| 版本 | Chapter | 驗證過的流程 |
| --- | --- | --- |
| v0.7.1-alpha | 3 | Blaze kill task → 領取獎勵 → `eg.chapter.3.first_hunt` |
| v0.7.2-alpha | 4 | torch／bread／arrow 補給 + zombie／skeleton kill tasks → `eg.chapter.4.first_defense` |
| v0.7.3-alpha | 5 | rotten_flesh／bone／spider_eye／paper 樣本 + zombie／skeleton／spider kill tasks → `eg.chapter.5.calamity_foreshadowing` → `eg.gate.calamity_reported` |

這些都是 FTB Quests 任務層的 MVP gate，不是 wave、raid、Guild Threat、Dragon Disaster 或裝備鎖系統。各版本的完整說明見 [`docs/releases/`](../releases/INDEX.md)。

## KubeJS 呼叫原版方法的陷阱

遊戲內已確認（2026-11-29，kubejs-forge-2001.6.5、rhino-forge-2001.2.3）：在 `ForgeEvents.onEvent` 的 handler 裡呼叫原版 `DamageSource#getMsgId()`，執行時會丟出 `TypeError: Cannot find function getMsgId`。Forge event listener 裡沒有被攔下的例外會讓 server 直接 crash。

規則：

- KubeJS 自己的方法（`player.stages`、`getProfile()`、`getServer()`、`isPlayer()`、`runCommandSilent`）可以直接用。
- 原版 Minecraft 類別的方法改用 1.20.1 的 SRG 名稱呼叫，例如 `DamageSource#getMsgId` → `m_19385_`、`#getEntity` → `m_7639_`。SRG 名稱可以用 Prism 的 `client-1.20.1-*-mappings.txt`（Mojang → 混淆）對照 `mcp_config-1.20.1-*-mappings-merged.txt`（混淆 → SRG）查到。
- Forge 類別（例如 `LivingHurtEvent`）沒有混淆，方法名稱照原樣用。
- Forge event handler 一律整段包進 `try/catch`，出錯時只寫 log。

SRG 名稱這個做法本身還需要遊戲內確認，確認後把這一段的「規則」改成已驗證。
