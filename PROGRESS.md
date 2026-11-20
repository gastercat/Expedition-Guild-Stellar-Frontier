# Progress

最後同步：2026-11-21（`main` = `139f403`）

## 目前版本與階段

- 方向：`v0.8.x Friends Feedback Test`。
- 目前 release：`v0.8.1-friends-feedback-test`。
- Release 狀態：GitHub pre-release，從 commit `e12bca1` 發佈。
- Release asset：`EGSF-v0.8.1-friends-feedback-test.mrpack`（45.9 MB）。
- 階段：v0.8.1 朋友回饋收集期；同時進行協作流程、CI 與設計文件等不影響遊戲內容的整理。

## 目前狀態

- `v0.8.1-friends-feedback-test` 已從 commit `e12bca1` 發佈為 GitHub pre-release，release 文件收尾 commit `f50c331` 已在 `main`。
- 朋友回饋（早期任務手感、獎勵手感、Create／Ad Astra preview 清晰度）目前沒有任何紀錄收進 Repo，GitHub 也沒有相關 Issue。
- 2026-11-18 已 merge 的變更（PR #8–#12）：
  - `pack.toml` 的 pack version 已從 `0.1.0` 對齊為 `0.8.1`（PR #8）。
  - 協作工作流程 v0.2：[`docs/collaboration/WORKFLOW.md`](docs/collaboration/WORKFLOW.md)，定義 `STATIC`／`RUNTIME`／`RUNTIME_MODS` 任務分類與並行上限（PR #9）。
  - Pack CI：[`.github/workflows/pack-ci.yml`](.github/workflows/pack-ci.yml)，包含 packwiz index 檢查、`scripts/` 驗證、`.mrpack` export 與 dedicated server smoke test；`scripts/*.py` 已從 `index.toml` 移出，不再打包進 pack（PR #10）。
  - 設計提案 `08_EGSF_Astral_Infusion_Design.md` 與 `09_EGSF_Seven_Curses_Backlash_Design.md`，兩者皆為 proposed draft，未核准實作（PR #11、#12）。
- 2026-11-18 已 merge 的變更（PR #13–#18）：
  - 本文件同步到目前狀態並改為繁中（PR #13）。
  - 文件重新分類到 `docs/operations/`、`docs/player/`、`docs/testing/` 與 `docs/archive/`；CI 新增 `scripts/check_md_links.py`（PR #14）。
  - Agent 入口改為 [`AGENTS.md`](AGENTS.md) 與 [`CLAUDE.md`](CLAUDE.md)；執行程序與已驗證格式拆成 [`EXECUTION_GUIDE.md`](docs/collaboration/EXECUTION_GUIDE.md) 與 [`VERIFIED_FORMATS.md`](docs/collaboration/VERIFIED_FORMATS.md)（PR #15）。
  - Claude Code skills：`/release` 與 `/merge-prep`，位於 `.claude/skills/`（PR #16）。
  - Agent 規則層調整：授權來源可以是 task file 或 Project Maintainer 在對話中的明確指示，紅線改為 5 條，Tag 與 GitHub Release 經指定版本與 commit 授權後可由 Agent 建立（PR #17）。
  - CI 的 server smoke test 同時檢查 KubeJS `startup.log` 與 `server.log`（PR #18）。
- 2026-11-18～20 已 merge 的變更（PR #20–#24）：
  - `/merge-prep` post 模式把「被較新 merge 取代而取消的 CI run」視為已涵蓋（PR #20）。
  - AOCI 認知索引：骨架與 `AGENTS.md` 的 AOCI 區塊（PR #21），以及涵蓋全部 216 個受管理檔案的完整索引（PR #22）。AOCI 檔案都已列入 `.packwizignore`。
  - 修正 README 的過時版本說明、release index 漏列的 v0.7.4／v0.7.5，以及永遠通過的 `scripts/check_duplicate_mods.py`（PR #23）。
  - `eg_stages.js` 的狀態註解與現況對齊，只改註解（PR #24）。
- Incident `EGSF-v0.8.1-Render-Native-Crash`：已由 Project Maintainer 於 2026-11-18 決定以 `CLOSED_UNRESOLVED` 關閉，詳見下方「Incident 紀錄」。
- 目前沒有任何 gameplay、quest、KubeJS、mod、packwiz、export 或 release 實作獲得授權。

## Incident 紀錄

### `EGSF-v0.8.1-Render-Native-Crash`

- 狀態：`CLOSED_UNRESOLVED`。
- 歷史：2026-07-26 的 project-owner handoff 記錄此 incident 為 `WAITING_FOR_SECOND_AB_TEST`，下一步為 Twilight Forest ON／Embeddium OFF 的 A/B 測試。該 handoff、crash log 與第一次 A/B 測試結果都沒有收進 Repo。
- 關閉原因：Project Maintainer 於 2026-11-18 確認原始證據已無法追回，決定不再追查。
- 關閉不代表已修復：根因未知，第二次 A/B 測試未執行，不得把此 incident 當成已解決或已排除的證據。
- 未驗證的推論（`UNVERIFIED`）：朋友測試者推測 Twilight Forest 的 Naga（納迦）Boss 可能讓部分電腦（推測為 Windows 筆電搭配內顯）在開啟實例時閃退。Project Maintainer 沒有對應硬體可重現，此推論沒有 log 或測試支持，只能作為日後重開 incident 時的優先懷疑方向。
- 若再次發生 render 相關的 native crash，應另開新 incident，並在 Repo 內保存 crash report、`latest.log`、mod 組合與重現步驟。

## 最後已知的良好狀態

- `v0.8.1-friends-feedback-test` 的 RC smoke test 已通過。
- Pack CI 在 `main` 上通過（2026-11-20，最新為 PR #24 merge 後的 `139f403`）。CI 通過只代表 dedicated server 啟動 `PASS`，不等於 client runtime `PASS`。
- 目前技術基線：
  - Minecraft `1.20.1`
  - Forge `47.4.10`
  - Java `17`
  - Create `1.20.1-6.0.8`
  - Ad Astra `1.20.1-1.15.20`
- Chapter 0 公會 onboarding／遠征準備 polish 已發佈。
- Chapter 1 Create 工程、Ad Astra 伏筆與職業 fantasy preview polish 已發佈。
- `.packwizignore` 已排除 `docs/`、根目錄文件（含 `AGENTS.md`、`CLAUDE.md`）、Python cache、`.github/`、`.claude/`、`scripts/` 與 AOCI 相關檔案（`aoci.txt`、`aoci.*.txt`、`.aoci/`、`.gitattributes`、`.mcp.json`）。

## 目前目標

- 收集並整理 `v0.8.1-friends-feedback-test` 的朋友回饋。
- 讓 authority 與狀態文件與 `main` 的實際內容保持一致。
- 依 [`WORKFLOW.md`](docs/collaboration/WORKFLOW.md) 的分類與流程進行後續任務。
- 後續提案保持小範圍、彼此獨立，並附上 evidence。
- 在新的 scoped task 明確授權之前，維持 `no-active-implementation`。

## 下一步允許的任務

- 收集 v0.8.1 pre-release 的朋友回饋。
- 判斷早期獎勵是否在不跳過進度的前提下手感更好。
- 判斷 Create 在 Chapter 2 之前是否足夠可見。
- 判斷 Ad Astra 在 Chapter 7 之前的伏筆是否足夠。
- Doc-only 的 authority 修正、文件結構整理與協作文件更新（`STATIC`）。
- 起草新的 task file 或設計提案，交由 Project Maintainer 核准。
- 後續 patch 保持小範圍且彼此分開。

## Blocked Items

- TaCZ full integration。
- Iron's Spells full integration。
- Better Combat。
- Full class skill system。
- Dragon Disaster。
- Guild Threat system。
- Create Aeronautics。
- Tom's Simple Storage。
- Touhou Little Maid。
- v0.9.0 class／stress-test planning，除非另外以獨立任務開啟。
- 實作設計提案 `08`（Astral Infusion）與 `09`（Seven Curses Backlash），包含加入 Celestisynth 或 Enigmatic Legacy，除非另外取得授權（task file 或 Project Maintainer 的明確指示）。

## Deferred Items

- 完整職業技能系統與真正的職業裝備鎖。
- 真正的 Guild Threat、Dragon Disaster、wave、raid 或 invasion 系統。
- KubeJS gameplay logic、recipe rewrites、loot rewrites 與 GameStages schema 重新設計。
- Botania 與更深入的魔法後端工作。
- Postgame boss rush、divine gear loop、稱號收集與大型 endgame 獎勵系統。
- 互補型 client 效能優化 mod（與 Embeddium 並用，不取代它）：Project Maintainer 於 2026-11-18 決定 Embeddium 維持不變，之後另開 `RUNTIME_MODS` task 評估。

## Stop Point

在任何 gameplay、quest、KubeJS、mod、packwiz metadata、export 或 release 工作之前停止。

下一步允許的工作僅限：有範圍的朋友回饋收集或整理、doc-only 的 authority 修正與文件整理、task file 或設計提案的起草，以及另外經 Project Maintainer 授權的工作（task file 或直接指示，見 `AGENTS.md` 的「授權」一節）。

`CLOSED_UNRESOLVED` 的 incident 不得當成問題已解決的證據。沒有新的 scoped authorization，不得開始任何實作。
