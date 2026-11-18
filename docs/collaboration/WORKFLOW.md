# EG:SF 協作工作流程 v0.2

本文件說明多個 Agent 同時在不同 branch 工作時，任務怎麼分工、何時需要 runtime 測試，以及 Pull Request 怎麼送到 Project Maintainer 手上。它只規範流程，不授權任何實作，目前能做什麼仍以 [`PROGRESS.md`](../../PROGRESS.md) 與 [已授權任務索引](tasks/README.md) 為準。

## 為什麼要分工

Agent 可以寫內容並完成 static validation，但不能在 Prism Launcher 裡實際操作遊戲，因此每個會影響遊戲行為的變更，最後都要由 Project Maintainer 做 client runtime 測試。整個流程的產量取決於 runtime 測試的速度，而不是同時開了幾個 Agent，所以下面的規則都以「不讓 runtime 測試塞車」為目標。

## 角色

| 角色 | 負責 | 不負責 |
| --- | --- | --- |
| Project Maintainer | 開立與核准任務、設計決策、client runtime 測試、Review 與 merge。 | 不需要自己切 branch 或打包測試檔。 |
| Claude Code | 跨檔案工作、packwiz metadata、CI、需要判斷治理規則的任務，以及 Review 其他 Agent 的 PR。 | 不回報 client runtime `PASS`。 |
| DeepSeek Harness | 範圍窄、規格明確的任務，例如單一章節的 quest 文字、翻譯與校對、玩家說明文件，以及 Review 其他 Agent 的 PR。 | 不處理 packwiz metadata、KubeJS 或 CI，除非任務明確授權。 |
| 朋友測試者 | 大版本發佈後試玩整包並回饋手感。 | 不測單一 PR，也不參與日常 QA。 |

Agent 的分工是預設值，task file 可以另外指定，指定時以 task file 為準。

## 任務分類

每張任務在 task file 裡標明屬於哪一類，分類決定能不能並行，以及完成前需要哪些驗證。

| 分類 | 範例 | 同時進行的上限 | 完成前需要 |
| --- | --- | --- | --- |
| `STATIC` | 設計文件、玩家說明、協作文件、翻譯 | 不限，但兩條 branch 不得修改同一個檔案 | Static validation 與另一個 Agent 的 Review |
| `RUNTIME` | quest 任務與獎勵、KubeJS、config | 最多 3 條 | Static validation、server smoke test、client runtime 測試 |
| `RUNTIME_MODS` | 新增、移除或升級 mod，任何會改到 `index.toml` 的變更 | 1 條 | 同 `RUNTIME`，加上 `packwiz refresh` 後的 hash 檢查 |

`RUNTIME_MODS` 限制為 1 條，原因是每次修改 mod 都會改寫 `index.toml` 與 `pack.toml` 的 hash，兩條 branch 同時進行一定會衝突，也很難判斷 crash 來自哪一個 mod。quest 檔案依章節分開（`config/ftbquests/quests/chapters/N.snbt`），不同章節的 `RUNTIME` 任務可以並行，同一章節則一次只開一條。

## 一張任務的流程

1. 任務：Project Maintainer 在 [`tasks/`](tasks/README.md) 開立 task file，或由 Agent 起草後經 Project Maintainer 核准，內容包含分類、allowlist、authoritative sources 與 stop conditions。
2. 實作：一張任務對應一條 branch，Claude Code 每條 branch 使用獨立的 worktree，避免互相覆寫。
3. Static validation：Agent 執行 `scripts/` 的檢查並確認 diff 只在 allowlist 內。
4. 交叉 Review：PR 由另一個 Agent 先做 static Review，Review 結果寫在 PR 留言，問題修正後才交給 Project Maintainer。
5. Server smoke test：`RUNTIME` 與 `RUNTIME_MODS` 任務需通過 CI 的 dedicated server 啟動測試，詳見下一節。
6. Client runtime 測試：Project Maintainer 下載該 PR 的 `.mrpack`，在 Prism Launcher 依 PR 裡的 runtime 測試清單操作，結果寫回 PR。
7. Merge：通過後由 Project Maintainer merge，不通過的 PR 附上 crash log、截圖或觀察紀錄後退回原 branch 修正。

`main` 隨時保持可以啟動、可以遊玩的狀態，任何讓 `main` 無法啟動的 merge 都要優先 revert。

## CI 與 server smoke test

GitHub Actions workflow [`.github/workflows/pack-ci.yml`](../../.github/workflows/pack-ci.yml) 會在每個 PR 更新、`main` 有新 commit 或手動觸發時執行，分成兩個 job：

| Job | 內容 | 失敗條件 |
| --- | --- | --- |
| Static checks and mrpack export | 執行 `packwiz refresh` 確認 index 是最新的，跑 `scripts/` 的檢查，再用 `packwiz mr export` 打包 `.mrpack` 並上傳成 artifact。 | `index.toml` 或 `pack.toml` 與 refresh 結果不同，或任一檢查失敗。 |
| Dedicated server smoke test | 用 Java 17 安裝 Forge server，依 packwiz metadata 安裝 server 端 mod，啟動 server 等到啟動完成後關閉。 | 逾時仍未啟動完成、server 中途結束、產生 crash report，或 KubeJS server log 出現錯誤。 |

`.mrpack` artifact 在 PR 頁面的 Checks 分頁下載，GitHub 會把它包成 `.zip`，解壓縮後再匯入 Prism Launcher。Server log 也會上傳成 artifact，失敗時可以直接下載來看，兩者都保留 14 天。

本機要重現 server smoke test 時，執行 `scripts/ci/server_smoke_test.sh`，並用環境變數 `JAVA` 指定 Java 17。CI 無法執行時，改由 Project Maintainer 依 [`docs/operations/SERVER_TEST_PROTOCOL.md`](../operations/SERVER_TEST_PROTOCOL.md) Stage 3 手動測試。

Server smoke test 能抓到 mod 載入失敗、缺少前置 mod 與 KubeJS 錯誤，但抓不到畫面相關的 crash，也無法驗證 quest 在遊戲裡的操作結果。FTB Quests 的設定錯誤只有在造成 server 無法啟動時才會讓測試失敗，因此 CI 通過只能回報 server 啟動 `PASS`，不得寫成 client runtime `PASS`。

## PR 的 runtime 測試清單

`RUNTIME` 與 `RUNTIME_MODS` 類 PR 必須附上 runtime 測試清單，讓 Project Maintainer 進遊戲後不用自己摸索要測什麼。每一項寫明操作與預期結果，例如：

| # | 操作 | 預期結果 |
| --- | --- | --- |
| 1 | 建立新世界，打開 FTB Quests | 第 1 章顯示新任務「範例任務」 |
| 2 | 手持指定物品，完成該任務 | 獲得獎勵，並取得 GameStage `eg.example` |
| 3 | 重新進入世界 | 任務完成狀態與 GameStage 仍然存在 |

清單只列這次變更影響到的地方，整包的回歸測試留給大版本發佈前執行。

## 發佈節奏

- 日常的 PR 只在 Project Maintainer 這裡測試，不發給朋友。
- 大版本（例如 v0.9.0）才打包成 GitHub Release，發佈前依 `docs/operations/SERVER_TEST_PROTOCOL.md` 完成整包測試，再交給朋友試玩。
- 朋友測試使用 [`docs/testing/FRIENDS_TEST_GUIDE.zh-TW.md`](../testing/FRIENDS_TEST_GUIDE.zh-TW.md) 與既有的回饋格式。

## 與其他文件的關係

本文件補充 [`CONTRIBUTING.md`](../../CONTRIBUTING.md) 與 [Harness Guide](HARNESS_GUIDE.md) 的寫入流程，不取代其中任何規則，branch、Pull Request、Project Maintainer Review 與禁止自動 merge 的要求全部照舊。兩者衝突時，依 Harness Guide 的 Conflict rule 停止並回報。
