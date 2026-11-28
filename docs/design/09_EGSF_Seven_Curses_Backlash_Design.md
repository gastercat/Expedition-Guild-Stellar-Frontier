# EG:SF Seven Curses Backlash Design｜七詛咒世界反噬機制設計提案

Status: design source / proposed draft，第 9 節的開放決策尚待 Project Maintainer 決定，尚未核准實作
Project: Expedition Guild: Stellar Frontier / 遠征公會：星界邊境
Last Updated: 2026-11-18
Use: 評估是否以 Enigmatic Legacy 的 Ring of the Seven Curses（七詛咒之戒）作為 Forbidden Debt 的「世界反噬」懲罰，並整理需要 Project Maintainer 決定的事項。
Do Not Use For: 當前實作真相、已核准的 mod 清單、已確認的平衡數值，或 Astral Infusion（星界灌注）相關設計。

> Note:
> 這是一份設計來源文件，內容是提案，沒有任何決策已拍板，也不代表已核准實作。
> Enigmatic Legacy 目前沒有安裝在本模組包，本檔所有可行性判斷都是 static evidence（讀取 jar 內的 `mods.toml`、`LICENSE.md` 與參考實例的 config 檔），沒有任何一項經過 runtime 驗證。
> 加入 Enigmatic Legacy 必須另外取得 Project Maintainer 的指示（見 [`AGENTS.md`](../../AGENTS.md) 的「授權」一節），本檔不授權任何 mod、KubeJS、config 或 quest 變更。
> 若要確認當前實作狀態，請檢查 docs/PROGRESSION_OVERVIEW.md、docs/releases/、active FTB Quests files、KubeJS，以及 packwiz metadata。

## 0. 摘要

- Project Maintainer 在討論 08 號文件時提出一個想法，用七詛咒之戒當作世界對玩家的反噬。本檔整理這個想法的可行性、設計張力與風險，不替專案做決定。
- 七詛咒之戒在原 mod 裡是玩家自願承擔的風險換報酬道具，本檔提出的「反噬」框架則是把它改成代價，玩家動用禁忌力量後由世界強制套上，只有完成淨化任務線才能卸下。
- 反噬框架掛在 04 號文件第 8 節的 Forbidden Debt 底下，也呼應 03 號文件第 7 節「里程碑之後世界壓力升高」的災厄式進度邏輯。
- 本檔刻意不連結 08 號文件的星界灌注，因為 08 號文件明確把星界灌注定位成正常遠征里程碑，不屬於禁忌力量，也不共用代價邏輯。
- 最大的前置風險是授權，Enigmatic Legacy 使用自訂授權（Modrinth 標示為 `LicenseRef-Custom`），jar 內的 `LICENSE.md` 對再散布與依賴它的專案都有條件，加入前必須先確認。

## 1. 設計範圍

- 本檔只討論七詛咒之戒這一件道具，以及把它當作反噬懲罰的框架，不評估 Enigmatic Legacy 的其他遺物要不要開放。
- 本檔不設計 Forbidden Debt 的完整數值系統，只提出「Debt 累積到某個門檻時觸發詛咒」這一種後果的形狀。
- 本檔不是實作計畫，要進實作必須先完成第 9 節的決策，再由 Project Maintainer 另外指示實作範圍。
- 對應到 03 號文件的 Guild Tier 骨架，反噬只會出現在 Tier 6（endgame calamity / postgame archive / godforging），因為觸發它的禁忌力量本來就只屬於後期或 endgame。

## 2. 戒指本身的行為（static evidence）

以下內容來自 Enigmatic Legacy 2.30.1（Minecraft 1.20.1）的 jar 與一個參考 Prism 實例的 `enigmaticlegacy-common.omniconf`，版本號、依賴與 config 鍵都是讀檔得到的，實際遊戲效果沒有在本模組包裡驗證過。

### 2.1 七個詛咒

| # | 詛咒 | 對應 config 鍵 | 預設值 |
| --- | --- | --- | --- |
| 1 | 受到任何來源的傷害加倍 | `CursedRingPainModifier` | 200（%） |
| 2 | 中立生物對配戴者懷有敵意 | `CursedRingNeutralAngerRange`、`CursedRingNeutralAngerBlacklist` | 24 格，黑名單預設空白 |
| 3 | 護甲效果降低 | `CursedRingArmorDebuff` | 30（%） |
| 4 | 對怪物造成的傷害降低 | `CursedRingMonsterDamageDebuff` | 50（%） |
| 5 | 著火不會自行熄滅 | 參考實例的 config 裡沒有找到對應鍵 | 不明 |
| 6 | 死亡時撕裂靈魂（Soul Crystal 機制） | `MaxSoulCrystalLoss`、`SoulCrystalsMode` | 9、0 |
| 7 | 無法治癒的失眠 | `CursedRingdisableInsomnia` | false |

config 裡另外還有 `CursedRingKnockbackDebuff`（擊退加重，預設 200%）與 `CursedRingEndermenRandomportRange`（Enderman 主動傳送到配戴者附近的範圍，預設 32 格，下限 8 格），兩者不在七個詛咒的標題裡，但同樣是配戴者要承受的負面效果。

### 2.2 七個祝福

| # | 祝福 | 對應 config 鍵 | 預設值 |
| --- | --- | --- | --- |
| 1 | Looting +1 | `CursedRingLootingBonus` | 1 |
| 2 | Fortune +1 | `CursedRingFortuneBonus` | 1 |
| 3 | 怪物掉落額外經驗 | `CursedRingExperienceBonus` | 400（%） |
| 4 | 附魔台的附魔能量提高 | `CursedRingEnchantingBonus` | 10 |
| 5 | 原版生物的特殊掉落物 | `CursedRingEnableSpecialDrops` | true |
| 6 | 具備 Ring of Ender 的功能 | 無獨立鍵 | 不適用 |
| 7 | 可以使用獨特遺物（Abyssal Artifacts 等） | `CursedRingSuperCursedTime` | 0.995 |

第 7 項的意思是，玩家配戴詛咒的時間比例要達到 99.5% 才能使用 Abyssal Artifacts，這個設計假設玩家從頭到尾都戴著戒指，與本檔「強制套上、之後淨化卸下」的框架有衝突，見第 7 節。

### 2.3 配戴方式相關的 config

| config 鍵 | 預設值 | 參考實例的值 | 說明 |
| --- | --- | --- | --- |
| `CursedRingAutoEquip` | false | true | 戒指進入背包時自動裝進戒指欄位，不論戒指從哪裡來。 |
| `CursedRingUltraHardcore` | false | false | 進入新世界時直接裝上戒指，而不是只放進背包。 |
| `RingoftheSevenCursesEnabled` | true | true | 關閉時會停用戒指的預設取得方式，包括出生時給予。 |

參考實例把戒指調得比較溫和，`CursedRingArmorDebuff` 是 10、`CursedRingMonsterDamageDebuff` 是 20、`CursedRingPainModifier` 是 150、`CursedRingEndermenRandomportRange` 是 8，另外開啟 `CursedRingdisableInsomnia` 關掉失眠，`MaxSoulCrystalLoss` 設為 1，同時開啟 `CursedRingAutoEquip`。這組數值可以當作「反噬但不至於讓人放棄」的起點參考，但它是另一個模組包的平衡，不能直接當成本模組包的數值。

### 2.4 依賴

jar 的 `mods.toml` 列出四個必要依賴：Forge、Curios、Patchouli 與 Caelus。本模組包的 `mods/` 裡已經有 `curios.pw.toml`、`patchouli.pw.toml` 與 `caelus.pw.toml`，所以依賴本身看起來不需要再加 mod，但版本範圍是否相容仍要在加入時用 `packwiz` 與 server smoke test 確認。

## 3. 設計張力

原 mod 的定位是自願的風險換報酬，Enigmatic Legacy 預設在玩家出生時給予戒指，玩家選擇戴上，用更高的死亡風險換取更好的掉落與經驗。這套邏輯在 Hardcore 風格的模組包裡很自然，但它是玩家對自己做的選擇，不是世界對玩家做的事。

EG:SF 想要的是另一種東西，04 號文件第 8 節寫明 Forbidden Debt 的原則是「力量要帶來後果，而不是免費」，03 號文件第 7 節則把「里程碑之後世界壓力升高」列為災厄式進度的一部分，因此把七詛咒之戒放進這個框架，等於把原本可以拒絕的選擇改成不能拒絕的後果，這會帶來兩個問題。

第一，祝福仍然存在。被強制套上詛咒的玩家同時拿到 Looting、Fortune 與大量經驗，懲罰會變得一半是獎勵，玩家甚至可能故意觸發反噬來刷資源，因此要決定祝福是保留、削弱，還是用 config 關掉一部分（見第 9 節決策 3）。

第二，04 號文件第 11 節已經點出 Forbidden Debt 若沒有清楚說明後果，會讓人覺得被懲罰。強制配戴比自願配戴更容易讓玩家覺得不公平，因此觸發條件必須事先寫在任務文字裡，讓玩家在動用禁忌力量之前就知道代價。

## 4. 反噬框架提案

### 4.1 觸發

候選的觸發來源都來自 04 號文件已列出的禁忌力量，本檔不新增新的禁忌項目：

- 完成 godforging 類的神格化鍛造。
- 使用 Forbidden Debt 定義裡的禁忌遺物、Avaritia 式力量或禁忌研究。
- Forbidden Debt 累積到某個門檻，門檻數值留給 Forbidden Debt 本身的設計文件決定。

觸發應該是玩家主動行為的結果，而不是隨機事件，這樣才能維持「先告知、玩家選擇、承擔後果」的順序。

### 4.2 強制配戴

技術上有兩條路，兩條都只是 static 推論，沒有驗證過：

- Config 路線：開啟 `CursedRingAutoEquip`，再用 KubeJS 在觸發時把戒指放進玩家背包，戒指進入背包後由 mod 自己裝進戒指欄位。這條路只需要 KubeJS 的給予物品功能，不必直接操作 Curios 欄位，是比較單純的做法。
- 直接裝備路線：用 KubeJS 呼叫 Curios API 把戒指寫進欄位。本模組包沒有 KubeJS 的 Curios 附加模組，這條路可能要透過 Java 類別存取，維護成本較高。

不論哪一條，都要關掉戒指在出生時的預設給予，否則所有玩家一進世界就會拿到戒指，反噬框架就失去意義。參考實例的 config 註解指出這類「起始道具」的開關存在，但本檔沒有找到戒指專屬的確切鍵名，要在實作任務裡確認。

### 4.3 淨化任務線

戒指只能透過淨化任務線卸下，任務線設計留給第 9 節決策 4，本檔只列出形狀：

- 由 FTB Quests 承載，起點在觸發反噬時解鎖，讓玩家立刻看到出路。
- 內容要求玩家為禁忌力量付出代價，例如上繳 Boss 素材、完成公會防禦或替其他部門出任務，而不是單純等待時間經過。
- 完成後由 KubeJS 移除戒指，並可用 GameStages 記錄玩家曾經被反噬，供日後 Guild Threat 或稱號使用。

Enigmatic Legacy 一般不允許玩家自己取下戒指（本檔根據對這個 mod 的既有認識推論，沒有在 1.20.1 版本驗證），KubeJS 能否從 Curios 欄位強制移除也沒有驗證，這是整個框架最需要 runtime 證據的一環。

## 5. 與既有設計文件的關係

- 04 號文件第 8 節：反噬是 Forbidden Debt 的一種具體後果，04 號文件本來就把「Enigmatic-style relics」列為 Forbidden Debt 的對象之一，本檔沿用同一條線。
- 04 號文件第 10 節：v0.8.x 不實作 Forbidden Debt，本檔同樣只適用於 Forbidden Debt 正式設計之後的版本。
- 03 號文件第 7 節：反噬可以視為「世界壓力隨里程碑升高」的個人層級版本，與 Guild Threat 的公會層級壓力互補。
- 08 號文件：不連結。星界灌注是正常遠征成就，08 號文件第 0 節與第 4 節都明確排除 Guild Threat 與 Forbidden Debt，本檔不把灌注、Astral-Witnessed 或任何太空進度列為觸發來源。

## 6. 技術可行性（static evidence）

| 項目 | 判斷 | 證據等級 |
| --- | --- | --- |
| mod 支援 1.20.1 Forge | 參考實例使用 2.30.1，`mods.toml` 的 Minecraft 範圍是 `[1.20,1.21)` | static |
| 依賴已在本模組包 | Curios、Patchouli、Caelus 都有 `.pw.toml` | static，版本相容性未驗證 |
| 自動裝備 | `CursedRingAutoEquip` 存在 | static，config 鍵存在，效果未驗證 |
| 數值可調 | 第 2 節列出的 config 鍵都有範圍說明 | static |
| KubeJS 給予戒指 | KubeJS 2001.6.5 可以給予任意物品 | static 推論，未驗證 |
| KubeJS 移除戒指 | 需要存取 Curios 欄位 | 未驗證，風險最高 |
| 與 GameStages 搭配 | GameStages 已安裝 | static 推論，未驗證 |

## 7. 風險

- 授權：Modrinth 把 Enigmatic Legacy 標示為 `LicenseRef-Custom`，jar 內是「Enigmatic Legacy License, II Edition」，授權允許非商業的原樣再散布，條件包含註明作者與附上官方下載連結。另一段條款要求依賴或延伸其作品的專案部分必須開源，由於本 repo 目前沒有 LICENSE 檔，KubeJS 腳本若依賴這個 mod，會不會落入這一條需要 Project Maintainer 判斷，packwiz 匯出的 `.mrpack` 是否算再散布 jar，也要一併確認。
- 範圍膨脹：Enigmatic Legacy 會加入大量遺物、護身符與 Abyssal Artifacts，裝上之後不只是一枚戒指，可能打亂 03 號文件的職業配置與 04 號文件的 rarity presentation。若只想要戒指，要決定其他內容是關掉、保留，還是納入 Forbidden Debt（見第 9 節決策 5）。
- 機制衝突：獨特遺物要求 99.5% 的配戴時間，強制套上又淨化卸下的玩家永遠達不到，這部分祝福在反噬框架下等於失效，要決定是否接受。
- 懲罰感：傷害加倍搭配靈魂撕裂可能讓一次死亡就造成永久損失，`MaxSoulCrystalLoss` 若設為 10 甚至會導致永久死亡，朋友測試的體驗很容易變成挫折。
- 多人公平性：EG:SF 以公會合作為主，一名玩家被反噬時，其他隊友要不要分擔代價，會影響團隊氣氛。

## 8. MVP 邊界

- v0.8.x 不實作，原因與 04 號文件第 10 節相同。
- 第一個可行的 MVP 是純文字版，只在 FTB Quests 裡寫出「動用禁忌力量會招來詛咒」的世界觀警告，不安裝 mod，不寫 KubeJS。
- 第二階段才在單一觸發點（例如第一次 godforging）測試強制配戴與淨化，數值從保守的設定開始，並先在 Project Maintainer 的 client 驗證移除流程可行。
- 不在第一版開放 Enigmatic Legacy 的其他遺物。

## 9. 開放決策

以下事項留給 Project Maintainer 決定，本檔不預設答案。

1. 是否採用反噬框架。可以完全不用七詛咒之戒，也可以維持原 mod 的自願配戴，或改成本檔的強制配戴。
2. 觸發來源。godforging、禁忌遺物、Forbidden Debt 門檻，要選哪一個或哪幾個，以及是個人觸發還是全公會共同承擔。
3. 祝福怎麼處理。保留全部、只保留部分，或用 config 關掉，避免玩家故意觸發反噬來刷資源。
4. 淨化任務線的內容與長度，以及卸下後要不要留下永久紀錄（GameStage、稱號）。
5. Enigmatic Legacy 的其他內容。只用戒指、部分開放，或把其他遺物也納入 Forbidden Debt。
6. 數值基準。參考實例的溫和數值、mod 預設值，或另外設定，特別是 `CursedRingPainModifier`、`MaxSoulCrystalLoss` 與失眠是否停用。
7. 授權判斷。確認 `.mrpack` 散布方式與本 repo 沒有 LICENSE 檔，是否符合 Enigmatic Legacy License 的條件，必要時是否詢問作者。
8. 版本目標。這個機制應該跟 Forbidden Debt 一起排在哪個版本，以及是否等 godforging 設計完成後再評估。

## 10. 證據來源

- Enigmatic Legacy 2.30.1 jar 內的 `META-INF/mods.toml` 與 `LICENSE.md`，從一個參考 Prism 實例唯讀取得。
- 同一個參考實例的 `config/enigmaticlegacy-common.omniconf`，第 2 節的預設值取自 config 註解，參考值取自實際設定。
- 本 repo 的 `mods/*.pw.toml`，用來確認依賴是否已安裝。
- 本 repo 的 03、04 號設計文件，以及 PR #11 分支上的 08 號文件。
- Modrinth 的授權標示由啟動本任務的 session 提供，本檔沒有另外查證。
