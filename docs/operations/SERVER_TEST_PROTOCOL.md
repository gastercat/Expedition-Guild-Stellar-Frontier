# 伺服器與 Runtime 測試流程

> **狀態 — `ACTIVE_OPERATIONAL_PROTOCOL`**
>
> 本文件是目前 server/runtime 測試程序。`v0.8.1-friends-feedback-test` 的 Create `6.0.8`／Ad Astra `1.15.20` 基線目前只有 static metadata evidence；尚未在本文件下取得新的 runtime `PASS`。完成實際測試並保存證據前，結果必須標記為 `PARTIAL` 或 `UNVERIFIED`。

## 現行測試基線

| 項目 | 要求 |
| --- | --- |
| Release | `v0.8.1-friends-feedback-test`，測試紀錄仍須填寫實際 release tag 或 full commit。 |
| Minecraft | `1.20.1` |
| Loader | Forge `47.4.10` |
| Java target | `17` |
| Create | `create-1.20.1-6.0.8.jar` |
| Ad Astra | `ad_astra-forge-1.20.1-1.15.20.jar` |
| Create: Ad Astra Compatibility | 不在目前 packwiz metadata 中；不得作為預設安裝或測試步驟。 |
| 測試世界 | 使用可拋棄的新測試世界；不得以未備份的正式世界作為首次驗證。 |
| 測試人數 | 先完成單人 client，再依範圍執行 dedicated server、2 人與 4 人測試。 |

## Evidence 與判定規則

- 每次測試必須記錄實際 release tag 或 40 字元 full commit；不得只寫 `main`、`latest` 或 short commit。
- `pack.toml`、`index.toml`、`mods/*.pw.toml` 與 jar 名稱只能提供 static metadata evidence。
- 啟動、進入世界、放置方塊、多人連線、log 與 crash artifact 才能提供 runtime evidence。
- Static metadata 檢查成功不得單獨標記為 runtime `PASS`。
- 只有所有必測項目完成且證據可追溯時才能標記 `PASS`。
- 只完成部分階段、缺少多人／render 測試或證據不完整時標記 `PARTIAL`。
- 尚未執行測試、無法確認測試身份或缺少必要 log 時標記 `UNVERIFIED`。
- 舊 Create `0.5.1j`／Ad Astra `1.15.19` 的 `PASS`、crash 與世界紀錄是 historical evidence，不得轉用為本基線的 `PASS`。

## 每次測試必填紀錄

| 欄位 | 說明 |
| --- | --- |
| 日期與時區 | 測試日期、時間與時區。 |
| 測試者 | 參與玩家或維護者。 |
| Release identity | 實際 release tag；若不是 tag checkout，填寫 40 字元 full commit。 |
| Working tree | 記錄是否乾淨；若不乾淨，列出 diff 範圍且不得把結果當成 release `PASS`。 |
| Client／server 環境 | OS、架構、Java vendor 與完整 Java version。 |
| GPU | Vendor、完整型號，以及使用 integrated 或 discrete GPU。 |
| Driver | GPU driver version、來源與更新日期；macOS 記錄 OS build。 |
| Renderer | `latest.log` 中的 GPU／OpenGL renderer identity。 |
| Twilight Forest | 是否存在、版本與本次 `ON`／`OFF` 狀態。 |
| Embeddium | 是否存在、版本、本次 `ON`／`OFF` 狀態與相關設定差異。 |
| 其他 render 變因 | Shader、resource pack、JVM argument、視窗模式與其他 render mod。 |
| 世界 | 新測試世界名稱、seed（若相關）與建立方式。 |
| 測試階段 | 已完成及未完成的階段。 |
| Log／crash evidence | `latest.log`、server log、crash report、`hs_err_pid*.log` 或 native crash report 的保存位置。 |
| Render incident A/B | A 與 B 僅改變哪一個變因、各自結果、重現步驟與 crash signature。 |
| 判定 | `PASS`、`PARTIAL`、`UNVERIFIED` 或失敗；附上理由。 |

## Stage 0：Static metadata 檢查

1. 記錄 release tag 或 full commit。
2. 從 `pack.toml`、`index.toml` 與 `mods/*.pw.toml` 核對 Minecraft、Forge、Create、Ad Astra 與依賴 metadata。
3. 確認 Create: Ad Astra Compatibility 未被當成預設安裝或測試前置條件。
4. 記錄核對結果為 static metadata evidence；此階段本身不能產生 runtime `PASS`。

## Stage 1：Client 啟動

必測：

- 使用 Java `17` 啟動 client。
- 成功到達主選單並開啟 Mods 頁面。
- 確認 Create 與 Ad Astra 顯示版本符合測試紀錄。
- 保存 `latest.log`，檢查 missing dependency、mod loading error、`ERROR` 與 `FATAL`。

## Stage 2：新世界與核心功能

必測：

- 建立全新、可拋棄的測試世界並成功進入。
- 放置及操作最小 Create 基礎方塊。
- 放置及操作最小 Ad Astra 基礎機器或火箭相關方塊。
- 使用 JEI 查詢 Create 與 Ad Astra 物品／配方。
- 儲存、退出並重新進入世界。
- 保存 client log；若失敗，保存 crash report 或 native crash artifact。

## Stage 3：Dedicated server 與多人

必測：

- Dedicated server 成功啟動，client 可使用相同 baseline 連線。
- 依任務範圍執行 2 人測試；需要容量證據時再執行 4 人測試。
- 驗證玩家登入、世界同步、FTB Teams／FTB Chunks、任務進度與 Simple Voice Chat。
- Simple Voice Chat 測試須記錄 UDP port 與連線結果，但不得在文件中暴露敏感憑證。
- 保存 server log 與相關 client log，記錄 disconnect、sync error、`ERROR`、`FATAL` 與 TPS 異常。

## Stage 4：Render incident A/B

當任務涉及 render 或 native crash 時：

1. 先記錄 GPU、driver／OS build、renderer、Twilight Forest、Embeddium 與其他 render 變因。
2. 建立 A/B pair；每一組只改變一個變因，分別記錄 `ON`／`OFF` 與結果。
3. 使用相同 release/full commit、世界、重現步驟與觀察時間。
4. 保存兩組 `latest.log`，以及任何 crash report、`hs_err_pid*.log` 或 native crash report。
5. 沒有完成所需 A/B pair 或缺少 artifact 時，結果只能是 `PARTIAL` 或 `UNVERIFIED`。

## 停止與回退條件

- Client 或 dedicated server 無法啟動。
- 進入新世界或重新載入世界時崩潰。
- 發生 missing dependency、mod loading error、持續 `ERROR`／`FATAL` 或 native crash。
- Client 與 server 的 release/full commit、mod metadata 或設定不一致。
- 測試需要臨時加入 Create: Ad Astra Compatibility 或修改 packwiz metadata；此情況應停止並另行取得授權。
- Render A/B 無法維持單一變因，或必要 evidence 未保存。

停止後保留所有 log 與 crash artifact，將結果標記為失敗、`PARTIAL` 或 `UNVERIFIED`；不得沿用舊基線 `PASS`，也不得宣稱 `v0.8.1-friends-feedback-test` 已完成 runtime verification。
