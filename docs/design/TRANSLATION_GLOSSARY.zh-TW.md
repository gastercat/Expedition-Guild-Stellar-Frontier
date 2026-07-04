# EG:SF Design Source Translation Glossary zh-TW

Project: Expedition Guild: Stellar Frontier / 遠征公會：星界邊境
Status: translation glossary / active
Purpose: Standardize Traditional Chinese terminology for docs/design localization.
Scope: Documentation terminology only. This file does not define implementation truth.

## 1. Translation Principles

- Use Traditional Chinese as the primary documentation language.
- Keep Minecraft mod names, tool names, file paths, commands, and code identifiers in English.
- Preserve EG:SF scope boundaries such as future, deferred, not implemented, backlog-only, and not implementation truth.
- Do not change design meaning during translation.
- Do not translate current implementation truth into current implementation if the source says future or planned.
- Keep technical terms readable for non-engineering readers where possible.

## 2. Terms To Keep In English

- EG:SF
- Create
- Ad Astra
- FTB Quests
- GameStages
- KubeJS
- packwiz
- Prism Launcher
- JEI
- Jade
- Lootr
- Curios
- Artifacts
- Simply Swords
- TaCZ
- Iron's Spells
- Better Combat
- Twilight Forest
- Terramity
- Touhou Little Maid
- Refined Storage
- Allthemodium
- Avaritia
- file paths and commands

## 3. Core Project Terms

| English Term | zh-TW Term | Usage Notes |
| --- | --- | --- |
| Expedition Guild: Stellar Frontier | 遠征公會：星界邊境 | Official Chinese project name. |
| Design source | 設計來源文件 | Design reference, not implementation truth. |
| Implementation truth | 當前實作真相 | Actual current state. |
| Current implementation truth | 當前實作真相 | Same canonical zh-TW wording. |
| Installed-mod truth | 已安裝模組真相 | Actual installed mod state from packwiz/release notes. |
| Friends Content Preview | 朋友內容預覽 | v0.8.x content visibility layer. |
| Inventory-first | Inventory-first（現況盤點優先） | Keep English plus zh-TW explanation. |
| Experience-filter | Experience-filter（體驗篩選） | Keep English plus zh-TW explanation. |
| Backlog-only | 僅列入 backlog / 尚未實作 | Use when not immediate scope. |
| Deferred | 延後 / 暫緩 | Not current scope. |
| MVP | MVP（最小可行版本） | Keep MVP plus zh-TW explanation. |

## 4. Progression and Class Terms

| English Term | zh-TW Term | Usage Notes |
| --- | --- | --- |
| Guild Tier | 公會階級 | Team progression skeleton, not personal level. |
| Boss Gate | Boss Gate（Boss 關卡門檻） | Progression gate around boss readiness/completion. |
| Class Setup | 職業配置指引 | Player-facing preparation guide. |
| Vanguard | Vanguard / 前鋒 | Keep both English and zh-TW. |
| Gunner | Gunner / 銃士 | Keep both English and zh-TW. |
| Arcanist | Arcanist / 奧術師 | Keep both English and zh-TW. |
| Class Identity Expansion | 職業定位擴展 | likely v0.9.x target. |
| Transfer | 轉職 | Future system. |
| Subclass | 副職 | Future system. |
| Fusion Class | 融合職業 | Future system. |
| Calamity-like progression | 類 Calamity 進度設計 | Progression logic, not Terraria combat copy. |

## 5. System Integration Terms

| English Term | zh-TW Term | Usage Notes |
| --- | --- | --- |
| Guild Engineering | 公會工程部 | Create role. |
| Create logistics | Create 後勤 | Logistics, production, supply. |
| Guild Armament Evolution | 公會兵裝進化 | Future weapon progression system. |
| Dragon Disaster | 龍災 | Controlled event / Guild Core defense. |
| Guild Core | 公會核心 | Defense event target. |
| Guild Threat | 公會威脅 | Future world-response pressure. |
| Forbidden Debt | 禁忌代價 | Future cost/consequence system. |
| Guild Reputation | 公會聲望 | Future department reputation system. |
| Godforging | 神格鍛造 | Late/post-endgame concept. |
| Postgame | 後終局 | After main endgame. |
| Space Elevator | 太空電梯 | Late/endgame astral logistics concept. |
| Astral logistics | 星界後勤 | Ad Astra / space logistics. |

## 6. Review and Boundary Terms

| English Term | zh-TW Term | Usage Notes |
| --- | --- | --- |
| Candidate | 候選 | Not necessarily installed. |
| Accepted direction | 已接受方向 | Design direction, not installed truth. |
| Rejected | 拒絕 / 不採用 | Do not add unless reopened. |
| Post-endgame only | 僅限後終局 | Not normal progression. |
| Not implemented | 尚未實作 | Must not be implied as current. |
| Not installed-mod truth | 不是已安裝模組真相 | Use in design docs. |
| Historical reference only | 僅作歷史參考 | For legacy notes. |
| Small-batch implementation | 小批次實作 | Safe implementation workflow. |
| Player-feel | 玩家體感 | How the experience feels to players. |
| Friend-facing | 朋友可見 / 面向朋友體驗 | Prefer readable phrasing by context. |

## 7. Translation Rules for Future Patches

- Prefer translating full prose into Traditional Chinese.
- Keep headings readable and concise.
- Keep canonical English terms where they are project keywords.
- Use English + zh-TW on first important mention when helpful.
- Do not translate file paths, commands, mod IDs, config keys, or code identifiers.
- Do not change future/deferred/backlog wording into immediate implementation.
- Do not add new design content while translating.
- Each translation patch should be small and reviewable.
- After translation, run a terminology scan.
