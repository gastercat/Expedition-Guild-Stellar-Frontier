# Expedition Guild: Stellar Frontier Questline Design

> Legacy notice:
> This is an early EG:SF quest design draft. It may describe older Chapter 0-7 planning and does not fully represent the current Chapter 0-11 FTB Quests implementation.
> For current progression structure, check docs/PROGRESSION_OVERVIEW.md, docs/releases/, and active files under config/ftbquests/quests/.

本文件是任務線設計草稿，只描述章節目標、節奏與驗收方向。正式 FTB Quests 資料尚未建立，避免在基準穩定前直接修改遊戲任務資料。

## Design Principles

- 以多人公會合作為核心，而不是單人速通。
- 每個章節都要讓玩家理解下一階段需要的基地、資源與角色分工。
- Create 與 Ad Astra 是主軸，其他 QoL 模組只作為輔助。
- 任務獎勵以補給、引導與團隊資源為主，避免過早跳過工業與太空進程。
- Phase 1 只做穩定可玩基礎，不導入大型世界生成、維度或科技擴充。

## Chapter 0: Expedition Start

| Field | Content |
| --- | --- |
| Goal | 讓玩家進入世界後完成集合、基礎工具、地圖與隊伍建立。 |
| Key Mods | FTB Teams, FTB Chunks, FTB Quests, Xaero's Minimap, Xaero's World Map, Jade, AppleSkin |
| Core Tasks | 建立或加入公會隊伍、確認地圖功能、標記集合點、領取起始補給、確認食物資訊、使用 Jade 辨識方塊。 |
| Design Notes | 這章應該短而明確，重點是讓多人玩家同步進度。不要給太強裝備，只給基礎食物、火把與少量建材。 |

## Chapter 1: Base Camp

| Field | Content |
| --- | --- |
| Goal | 建立第一個可長時間停留的基地營地。 |
| Key Mods | FTB Chunks, Waystones, Jade, AppleSkin, Xaero's Minimap, Xaero's World Map |
| Core Tasks | 選定基地位置、claim 基地區塊、放置 Waystone、建立床位、建立基礎倉庫、建立農田、建立公告區。 |
| Design Notes | 任務應鼓勵玩家把基地集中，而不是每人分散太遠。Waystone 只作為團隊移動便利，不應取代未來 Create 交通設計。 |

## Chapter 2: Mechanical Age

| Field | Content |
| --- | --- |
| Goal | 讓玩家理解 Create 的早期機械動力與基礎加工。 |
| Key Mods | Create, JEI, Jade |
| Core Tasks | 取得安山岩合金、製作 cogwheel、建立水車、建立 shaft 傳動、製作 mechanical press、製作 basin、完成第一個壓製或混合流程。 |
| Design Notes | 任務描述要引導玩家用 JEI 查配方與用 Create Ponder 學機械結構。獎勵可以給少量安山岩合金或銅鋅材料，但不要直接送完整機械線。 |

## Chapter 3: Industrial Automation

| Field | Content |
| --- | --- |
| Goal | 從單機械方塊進入可重複運作的自動產線。 |
| Key Mods | Create, JEI, FTB Chunks |
| Core Tasks | 建立 conveyor belt、建立 depot 或 chute 流程、製作 mechanical mixer、製作 mechanical saw、建立第一條自動加工線、為工業區 claim chunks。 |
| Design Notes | 這章應要求玩家展示穩定輸入、輸出與暫存。任務不應要求過高產能，重點是把 Create 從工具變成基地基礎設施。 |

## Chapter 4: Space Preparation

| Field | Content |
| --- | --- |
| Goal | 開始將基地工業轉向 Ad Astra 太空計畫需求。 |
| Key Mods | Ad Astra, Botarium, Resourceful Lib, Resourceful Config, JEI, Create |
| Core Tasks | 搜尋 Ad Astra rocket、oxygen、launch pad 相關配方、建立基礎能源與氧氣準備區、收集太空裝備材料、規劃發射場、建立太空物資倉。 |
| Design Notes | Ad Astra 1.15.19 是目前穩定版本。不要要求 Create: Ad Astra Compatibility 配方，未來若需要礦物加工整合，應由 KubeJS 或 datapack 明確補配方。 |

## Chapter 5: First Launch

| Field | Content |
| --- | --- |
| Goal | 完成首次火箭發射前檢查，並進行第一次離開主世界的遠征。 |
| Key Mods | Ad Astra, JEI, Xaero's Minimap, Xaero's World Map, Simple Voice Chat |
| Core Tasks | 完成火箭、完成 launch pad、穿戴必要太空裝備、準備氧氣與燃料、多人語音確認發射流程、執行首次發射。 |
| Design Notes | 任務要包含發射前檢查清單，避免玩家因缺氧氣或裝備造成挫折。獎勵應偏向返航補給、旗幟、標記物與少量太空基地材料。 |

## Chapter 6: Lunar Outpost

| Field | Content |
| --- | --- |
| Goal | 在月球建立第一個可辨識、可返回、可擴建的前哨站。 |
| Key Mods | Ad Astra, Waystones, Xaero's Minimap, Xaero's World Map, FTB Teams, FTB Chunks |
| Core Tasks | 登月後標記座標、建立臨時庇護所、放置照明與儲物、建立氧氣或生存支援區、記錄返航路線、建立月球前哨站名稱。 |
| Design Notes | 若 Waystone 在跨維度使用上需要限制，正式任務實作時應依伺服器規則決定。這章的重點是讓太空遠征變成團隊據點，而不只是一次性旅遊。 |

## Chapter 7: Guild Expansion

| Field | Content |
| --- | --- |
| Goal | 將公會從單一基地擴展成工業、補給、探索與太空任務並行的長期玩法。 |
| Key Mods | FTB Quests, FTB Teams, FTB Chunks, Create, Ad Astra, Simple Voice Chat, Waystones, Xaero's Minimap, Xaero's World Map |
| Core Tasks | 分配工程、補給、探索、倉儲與太空工程職責、建立公會公告板、建立長期材料清單、規劃下一批 Phase 1 或 Phase 2 內容、完成第一次公會會議紀錄。 |
| Design Notes | 這章作為 Phase 1 基準版的收束。任務應鼓勵玩家提出下一階段需求，但不直接要求大型內容模組。進入後續內容前應先完成 Baseline Freeze 與伺服器測試。 |
