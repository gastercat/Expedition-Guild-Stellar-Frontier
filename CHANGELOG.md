# Changelog

This changelog is a short project overview. Full release notes are organized in [docs/releases/INDEX.md](docs/releases/INDEX.md).

## Unreleased

- 精簡治理層：移除 AOCI 認知索引、`docs/collaboration/` 的流程文件（保留 `VERIFIED_FORMATS.md`）、task files、`/merge-prep` skill、merge-sync reminder workflow、`docs/archive/quest-backups/` 與 `docs/archive/agent-guides/`；重寫 `AGENTS.md`、`PROGRESS.md`、PR template 與 `docs/operations/PROJECT_STRUCTURE.md`。CI 通過且 Project Maintainer 在對話中同意時，Agent 可以代為 merge PR。
- 新增 Pack CI：packwiz index 檢查、`scripts/` 驗證、`.mrpack` export 與 dedicated server smoke test；每個 PR 都能下載 `.mrpack` artifact 測試（PR #10）。
- 新增設計提案 `08` Astral Infusion 與 `09` Seven Curses Backlash，皆為 proposed draft，未核准實作（PR #11、#12）。
- `PROGRESS.md` 同步到目前狀態並改為繁中；Render Native Crash incident 以 `CLOSED_UNRESOLVED` 關閉，保留原始歷史（PR #13）。
- 文件重新分類：現行文件移到 `docs/operations/`、`docs/player/`、`docs/testing/`，歷史文件收進 `docs/archive/`；CI 新增 Markdown 連結檢查，移除只檢查歷史文件的 `check_modlist.py`（PR #14）。
- Agent 入口改為 `AGENTS.md`（所有 Agent 共用）與 `CLAUDE.md`；`SKILL.md` 拆成 `EXECUTION_GUIDE.md` 與 `VERIFIED_FORMATS.md`，舊檔原文保存在 archive（PR #15）。
- 新增 Claude Code skills：`/release`（版本發佈流程）與 `/merge-prep`（merge 前檢查與 merge 後同步）（PR #16）。
- Agent 規則層調整：必讀文件減為 `AGENTS.md` 與 `PROGRESS.md`；對話中的明確指示可作為授權來源；紅線改為 5 條；Tag 與 GitHub Release 經指定版本與 commit 授權後可由 Agent 建立；交叉 Review 只對 `RUNTIME` 類任務強制（PR #17）。
- CI 的 server smoke test 新增 KubeJS `startup.log` 檢查，startup scripts（例如自訂物品）的錯誤會讓 CI 失敗（PR #18）。
- `/merge-prep` 的 post 模式：`main` 上被 `cancel-in-progress` 取消的 CI run，只要之後的 merge commit run 成功就視為通過（PR #20）。
- 導入 AOCI-CODE 索引骨架：`aoci.txt`、`aoci.*.txt`、`.aoci/` 與 `AGENTS.md` 的 AOCI 區塊，`.gitattributes` 強制 LF 以維持 byte-exact baseline；AOCI 檔案已列入 `.packwizignore`，不進 pack（PR #21）。
- 完成 AOCI 認知索引：216 個受管理檔案都有 Entry，governance aligned；Agent 開工時可用 `aoci_overview` 取得整個 Repo 的結構化認知（PR #22）。
- README 移除 `pack.toml` 仍為 `0.1.0` 的過時說明；release index 補上 v0.7.4 與 v0.7.5；`scripts/check_duplicate_mods.py` 改為讀取 `mods/*.pw.toml` 的 `filename`，原本只檢查 `mods/*.jar` 而永遠通過；同時移除已正式加入的 Create 6 與 Twilight Forest 的禁止線索（PR #23）。
- `kubejs/server_scripts/eg_stages.js` 的過時狀態註解改為與現況一致，只改註解、遊戲行為不變；交叉 Review 後修正職業互斥的描述（PR #24）。
- Documentation pass for README, compatibility strategy, release note organization, and project structure.
- Added clearer distinction between implemented systems, installed foundations, planned systems, and deferred content.
- Moved root release notes into `docs/releases/`.

## v0.8.1 Friends Feedback Test

- Released GitHub pre-release `v0.8.1-friends-feedback-test` from commit `e12bca1`.
- Published `EGSF-v0.8.1-friends-feedback-test.mrpack` as the release asset.
- Polished Chapter 0 into stronger guild onboarding and expedition preparation.
- Polished Chapter 1 to preview Create engineering, Ad Astra foreshadowing, and Vanguard / Gunner / Arcanist class fantasy.
- Updated quest text to match the v0.8.x baseline: Create `1.20.1-6.0.8` and Ad Astra `1.20.1-1.15.20`.
- Tuned early quest rewards into low-risk guild supply rewards.
- Refreshed packwiz index / pack hash during implementation and improved `.packwizignore` to avoid Python cache pollution.
- RC smoke test passed for import, main menu, mod list, new world, FTB Quests, Chapter 0 / 1 / 2 / 7 visibility, Create, Ad Astra, JEI, Sophisticated Storage / Backpacks, Twilight Forest, Terramity, Dungeon Crawl, and packaging cleanliness.
- Did not include TaCZ full integration, Iron's Spells full integration, Better Combat, full class skills, Dragon Disaster, Guild Threat, Create Aeronautics, Tom's Simple Storage, or Touhou Little Maid.

## v0.7.3-alpha

- Added Chapter 5 calamity foreshadowing MVP gate release notes.
- Added a Chapter 5 investigation completion task using vanilla item submissions and kill tasks.
- Added command rewards for `eg.chapter.5.calamity_foreshadowing` and `eg.gate.calamity_reported`.
- Confirmed no new KubeJS gameplay logic, Guild Threat, Dragon Disaster, raid/wave system, mob escalation, or new Boss/calamity mods in this release.

## v0.7.2-alpha

- Added Chapter 4 first defense MVP gate.
- Added a Chapter 4 completion quest using defense supply submissions and vanilla zombie/skeleton kill tasks.
- Moved the `eg.chapter.4.first_defense` command reward to the real completion quest to avoid multiple sources for the same completion stage.
- Verified the Chapter 4 FTB Quests task and GameStages reward flow manually.
- No new defense, raid, wave, Boss, or KubeJS gameplay system was added.

## v0.7.1-alpha

- Added the first verified kill-based progression gate for Chapter 3.
- Added a Chapter 3 Blaze kill task and command reward for `eg.chapter.3.first_hunt`.
- Verified FTB Quests kill task behavior and GameStages reward claim manually.
- Kept the scope to a minimal first hunt gate, not a full Boss chain or combat system.

## v0.7.0-alpha

- Added the first semantic control layer milestone.
- Added KubeJS, Rhino, Game Stages, and Bookshelf.
- Added `kubejs/server_scripts/eg_stages.js` as a passive stage naming skeleton.
- Connected most FTB Quests Chapter 0-11 milestones to GameStages command rewards.
- Established Vanguard / Gunner / Arcanist class stage foundation.
- Added semantic Boss Gate, Defense Gate, Calamity Gate, Astral Gate, Fusion Gate, Endgame Gate, and Postgame Archive stage names.
- Added artifact hygiene for local backup and `.mrpack` export files.

## v0.6.0-alpha

- Completed the Chapter 0-11 quest campaign skeleton.
- Expanded Chapter 0 as guild handbook and onboarding hub.
- Added early combat, defense, calamity, astral expedition, endgame, and postgame chapter direction.
- Preserved Create as the logistics backbone and Ad Astra as the stellar expedition backbone.
- Explicitly marked unfinished systems as placeholders.

## v0.1.0-alpha

- Established initial alpha playable pack direction for Minecraft 1.20.1 Forge.
- Confirmed Create `0.5.1j` and Ad Astra `1.15.19` baseline.
- Added core QoL, map, Waystones, FTB, voice chat, Create, Ad Astra, and performance foundation.
- Completed early Traditional Chinese FTB Quests Chapter 0-7 mainline at the time of that release.
- Confirmed launch, new world, and quest display smoke testing for the early alpha.

## Earlier Tags Without Root Release Notes

The repo also contains earlier git tags such as `v0.2.0-alpha`, `v0.4.x-alpha-pretest`, and `v0.5.0-alpha-pretest`. No root `RELEASE_NOTES_v*.md` files were found for those during this documentation pass, so they are not expanded here.
