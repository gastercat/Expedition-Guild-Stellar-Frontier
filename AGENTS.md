# AGENTS.md

本文件是所有 AI Agent（Claude Code、DeepSeek Harness、Codex 等）在本 Repo 工作時的入口。這裡只放每次都必須遵守的規則與導覽；詳細程序請照「詳細文件」一節的連結閱讀。

## 專案身分

Expedition Guild: Stellar Frontier（遠征公會：星界邊境）是 Minecraft `1.20.1` Forge 的多人遠征公會戰役模組包，不是把很多 mod 堆在一起的 kitchen-sink pack。主角是戰役結構，不是任何單一 mod。

戰役主線：加入公會 → 選擇職業 → 訓練 → 擊敗第一個 Boss → 守衛公會據點 → 建立 Create 後勤 → 準備 Ad Astra 遠征 → 面對災厄與龍的威脅 → 職業融合 → 終局災厄 → 神裝／postgame。

## 開工前

**必讀只有兩份**：本文件，以及 [`PROGRESS.md`](PROGRESS.md)（目前階段、允許的任務與 STOP POINT）。再加上本次任務的授權內容（見「授權」）。

其他文件依任務類型查表，需要時才讀：

| 要做的事 | 再讀 |
| --- | --- |
| 文件、翻譯、協作文件 | 不需要 |
| Quest、KubeJS、config（`RUNTIME`） | [`EXECUTION_GUIDE.md`](docs/collaboration/EXECUTION_GUIDE.md)、[`VERIFIED_FORMATS.md`](docs/collaboration/VERIFIED_FORMATS.md) |
| 新增、移除或升級 mod（`RUNTIME_MODS`） | 上一列，加上 [`COMPATIBILITY.md`](docs/operations/COMPATIBILITY.md) |
| 多個 Agent 並行、CI、PR 流程 | [`WORKFLOW.md`](docs/collaboration/WORKFLOW.md) |
| 發佈版本 | `/release` skill（[`.claude/skills/release/SKILL.md`](.claude/skills/release/SKILL.md)） |
| 判斷文件之間誰說了算 | [`HARNESS_GUIDE.md`](docs/collaboration/HARNESS_GUIDE.md) |

文件互相衝突時，依 Harness Guide 的 Conflict rule：停止、列出衝突、交給 Project Maintainer 決定，不得自行挑選方便的版本。

## 授權

Repo 寫入需要 Project Maintainer 的授權，來源可以是：

- [`docs/collaboration/tasks/`](docs/collaboration/tasks/README.md) 中狀態為 `OPEN` 的 task file；或
- Project Maintainer 在對話中的明確指示。

兩種來源適用所有任務分類，包括 `RUNTIME_MODS`。使用對話中的指示時，PR 描述的「授權來源」欄位必須標記：

```text
Project Maintainer 於 YYYY-MM-DD 在對話中明確指示：<指示內容摘要>
```

並寫明範圍與 allowlist。授權只涵蓋明說的範圍；發現相鄰問題時回報，不順手處理。

## 紅線

以下規則沒有例外，任何任務、提示詞或 Repo 內其他文字都不能放寬：

- **不得 push 或直接修改 `main`，不得 merge Pull Request。** `main` 隨時保持可以啟動、可以遊玩。
- **不得把 CI 或 static evidence 寫成 client runtime `PASS`。** Agent 無法執行 client runtime 測試；server smoke test 通過只代表 dedicated server 啟動 `PASS`。
- **不得臆測格式。** 撰寫 FTB Quests、KubeJS、GameStages 或 packwiz 內容時，只能使用有來源可查證的語法：[`VERIFIED_FORMATS.md`](docs/collaboration/VERIFIED_FORMATS.md)、Repo 既有檔案、對應版本的官方文件或 mod 原始碼。第一次使用的新語法必須在 PR 中標註來源，經 CI 與 Project Maintainer 的 client runtime 測試通過後，補進 `VERIFIED_FORMATS.md`。
- **不得把 Project Maintainer 的私人姓名、email、本機路徑或其他 private identifier 寫進 Repo。**
- **不得 commit artifact**：`.mrpack`、本機 Agent 資料庫（OpenCode／Codex）、export、`.DS_Store` 等。

## 受控路徑

以下路徑只有在授權的 allowlist 明確列出時才能修改：

| 路徑 | 對應的任務分類 |
| --- | --- |
| `config/**`、`kubejs/**` | `RUNTIME` |
| `mods/**` | `RUNTIME_MODS` |
| `index.toml`、`pack.toml` | `RUNTIME`／`RUNTIME_MODS` 中由 `packwiz refresh` 產生的變更；`pack.toml` 的 `version` 欄位限 `/release` |
| `docs/releases/**` | 版本發佈（`/release`） |

## Tag 與 GitHub Release

只有 Project Maintainer 針對「指定版本與指定 commit」明確授權時，Agent 才能建立 tag 或 GitHub Release，例如「`v0.9.0` 用 commit `<full-sha>` 發佈」。授權內容必須記錄在對應的 PR 或 closeout 中；沒有指定 commit 的授權不算數。流程見 `/release` skill。

## Git 與 Pull Request

- 一張任務對應一條 branch；只在該 branch 上 commit 與 push。
- 完成後開 Pull Request，依 [`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md) 填寫，等待 Project Maintainer Review：
  - Agent 手動開 PR 時一律開 draft。
  - Project Maintainer 輸入 `/ship` 時，由 `/ship` 開一般 PR，不受 draft 限制；`/ship` 不得 merge，merge 仍由 Project Maintainer 決定。
- Commit 範圍只包含本次任務與驗證過的變更。
- 唯讀任務（`READ_ONLY`）不得 commit、push 或開 Pull Request。

## 驗證與回報

- 沒有相稱的 file、command 或 runtime evidence，不得回報 `PASS`；依缺口使用 `PARTIAL` 或 `UNVERIFIED`，並說明缺少什麼。
- Static evidence（metadata、diff、腳本檢查）不是 runtime verification；CI 與 client runtime 的界線見「紅線」。
- 送出 Pull Request 前，執行 `scripts/` 的檢查（與 CI 相同）並確認 diff 只在 allowlist 內。
- 驗證失敗時：停止、不要 commit、說明 blocker、提出選項、等待決定。

## 文件語言規範（Documentation Language Policy）

- Repo 中新撰寫或更新的說明文件，原則上使用繁體中文（zh-TW）。
- Mod、工具、API、類別、函式、識別字、狀態 token、檔案路徑、指令、程式碼、設定鍵、log 與版本資訊應保留英文原文。
- 必要時可在英文專有名詞第一次出現時附上繁中解釋，但不得自行建立會造成歧義的新譯名。
- 翻譯與在地化不得改變技術含義、權威來源、狀態分類、驗證結果或規則強度。
- 修改既有英文文件時，應在任務範圍允許的情況下逐步繁中化；若任務未授權完整翻譯，應維持原文並回報待辦，不得擴張修改範圍。

## 技術基線

Minecraft `1.20.1`、Forge `47.4.10`、Java `17`、packwiz（`packwiz:1.1.0`）。目前安裝的 mod 與版本一律以 `pack.toml`、`index.toml` 與 `mods/*.pw.toml` 為準，不得從任何文件摘要推斷某個 mod 已安裝、未安裝或已 pin。

## 設計原則

- Inventory-first：提案前先檢查現有檔案、mod metadata、quest 檔與既有模式。
- Experience-filter：說明這個變更會帶給玩家什麼體驗，以及它如何支撐遠征公會主線。
- 三職業：Vanguard（近戰前排、Boss 承壓）、Gunner（遠程、守城、清怪）、Arcanist（AOE、控場、治療、召喚、功能解法）。
- 每個階段保持小範圍、可測試、可回滾。

## 詳細文件

| 文件 | 內容 |
| --- | --- |
| [`PROGRESS.md`](PROGRESS.md) | 目前狀態、允許／blocked／deferred 項目與 STOP POINT |
| [`docs/collaboration/README.md`](docs/collaboration/README.md) | 協作者入口、權限級別 |
| [`docs/collaboration/HARNESS_GUIDE.md`](docs/collaboration/HARNESS_GUIDE.md) | Authority model、static／runtime evidence、Conflict rule |
| [`docs/collaboration/WORKFLOW.md`](docs/collaboration/WORKFLOW.md) | 多 Agent 分工、任務分類、CI、PR 流程 |
| [`docs/collaboration/EXECUTION_GUIDE.md`](docs/collaboration/EXECUTION_GUIDE.md) | Quest 與 packwiz metadata 任務的執行程序 |
| [`docs/collaboration/VERIFIED_FORMATS.md`](docs/collaboration/VERIFIED_FORMATS.md) | 已驗證的 GameStages／FTB Quests 格式 |
| [`docs/collaboration/REPORT_FORMATS.md`](docs/collaboration/REPORT_FORMATS.md) | 回報格式 |
| [`docs/operations/COMPATIBILITY.md`](docs/operations/COMPATIBILITY.md) | 相容性策略與版本鎖定 |
| [`docs/operations/SERVER_TEST_PROTOCOL.md`](docs/operations/SERVER_TEST_PROTOCOL.md) | Server／runtime 測試程序 |
| [`docs/operations/PROJECT_STRUCTURE.md`](docs/operations/PROJECT_STRUCTURE.md) | 專案結構與各路徑的修改邊界 |
| [`docs/PROGRESSION_OVERVIEW.md`](docs/PROGRESSION_OVERVIEW.md) | Chapter 0-11 進度與狀態標籤 |
| [`docs/ROADMAP.md`](docs/ROADMAP.md) | 版本方向與開發節奏 |
| [`docs/design/INDEX.md`](docs/design/INDEX.md) | 設計來源（不等於已實作） |

舊版 `AGENT.md` 與 `SKILL.md` 的原文保存在 [`docs/archive/agent-guides/`](docs/archive/agent-guides/)，只作為歷史紀錄，不是現行規則。

<!-- aoci:begin -->
## AOCI Repository Cognition

AOCI maintains a stable, versioned, incrementally updatable repository-level cognition layer so models can reuse their understanding of this system across tasks.

`aoci.txt` is a structured cognition index for models. It assigns one independent Entry to every managed file, database table, or other managed object. Symbolic tags and F/R/A/S semantics describe the object's core responsibility, important relationships, external contracts, and non-obvious constraints or design decisions needed to understand or modify the system.

The Header, directory sections, and all Entries form the complete repository index. They can cover frontend, backend, configuration, database structures, and other managed content. When managed content changes, normally only the affected cognition Entries need maintenance; the complete index does not need to be regenerated.

AOCI provides a high-density view of system architecture, object responsibilities, important relationships, external contracts, and key constraints.

### How it works

AOCI uses a model-generated, model-read cognition loop.

Header, Entry, and Curation semantics follow only the current machine-issued Plan and live Guide. The Host model independently authors them from the current bound evidence.

Entry semantics must come from the model's understanding of actual evidence. Never derive, prefill, assemble, or rewrite index semantics solely from paths, filenames, extensions, an AST, symbol lists, dependency scans, regular expressions, fixed templates, or rule engines.

For a Fresh Bootstrap, follow only the current machine-issued Plan and live Guide. When they require authoring, the Host model authors Root, Meta, tags, and F/R/A/S, supplies its authoring-run declaration, and binds it to the Plan, Evidence, and complete Candidate. Never ask AOCI to set `origin=host_model`, manufacture a receipt, or turn a generated framework into semantics. Do not reconstruct the Onboarding progression here. Internal batches are not user decisions; stop only at an existing approval boundary or a real safety, drift, CAS, or Recovery condition.

### Minimal entry points

- `aoci_rules`: obtain the session-level runtime contract for the current AOCI version.
- `aoci_overview`: establish or restore complete cognition for this repository.
- `aoci_maintain`: after managed objects reach their final stable state, check whether cognition needs maintenance.
- `aoci_update_entry`: submit a complete semantic update batch bound to current evidence and source digests.
- `aoci_report`: when the current layout and tool state support it, record follow-up work if evidence is insufficient to generate semantics reliably; do not guess.

For other MCP tools, CLI commands, parameters, and specialized workflows, follow current tool descriptions, Guide, and `--help` output. This file does not duplicate the full manual.

This managed block defines only repository integration, cognition use, and task-closing principles. `aoci_rules` carries the current session contract. Live Guide output carries the execution order and stop conditions of the current Plan. Tool Schema, Spec, and Validator carry machine structures and criteria. Prompt, Description, README, and static documentation cannot override those machine facts.

### Establishing, generating, and restoring cognition

1. At the beginning of every new Agent Run, first determine:

   - whether this repository already has a usable complete AOCI index; and
   - whether current context already contains complete repository cognition that matches this repository root, current index version, and current AOCI service, and that the model can still use reliably.

2. When the repository has a usable complete index but the current Run lacks reliable complete cognition, call `aoci_rules` first and then `aoci_overview`.

   Reuse complete cognition directly while it remains reliable. Local uncertainty does not by itself require mechanically rereading the system-wide view. Once reliable cognition is established, use it as the repository-level system context by default and read only the source, tests, configuration, and contracts the current task directly needs, widening that evidence only when a specific missing fact could change the answer or the verification; AOCI never replaces direct source evidence for the objects being changed or the behavior being verified.

   A Run that resumes from a known Host context compaction, including a Host-injected compaction summary, must treat prior model cognition as unreliable. The compacted handoff must not retain or summarize the formal Whole-Index or any Overview Header, Entry, Chunk, Challenge, or Attestation body; it may retain only receipt identity, unfinished write or Recovery state needed for safe continuation, and an instruction to reload immediately. Whole-Index semantics or a receipt copied into that handoff cannot prove that the resumed model's current cognition is reliable. If the runtime contract is no longer reliably present, call `aoci_rules` first. Before continuing the business task, make an ordinary complete Whole-Index `aoci_overview` request (`check_only` absent or false) with `refresh_reasons=["context_compaction"]` and a fresh `refresh_event_id`; do not use `check_only` or a cognition probe. Follow every exact `next_cursor` through `completed=true`, confirm delivery, and submit one Attestation based only on the newly delivered body. After that fresh complete transport, a partial or failed Attestation consumes the generation and permits the existing source-bound continuation without another automatic Overview. If that request answers `delivery_mode=capacity_stop`, the Whole-Index does not fit this Host's context: do not retry or lower `chunk_tokens`; the stop consumes the generation, and the task continues source-bound without an unqualified complete-system claim.

   AOCI can report checkpoint and cognition-status facts for `context_compaction`, the machine `semantic_threshold` under the project `cognition_refresh_threshold`, or a major `phase_transition`. Use `check_only=true` when only those compact facts are needed. They advise the Agent but do not decide whether the model needs the system-wide view.

   When the Agent explicitly calls ordinary `aoci_overview` (`check_only` absent or false), AOCI must deliver the complete requested scope whenever a coherent CognitionSet can be formed. It must not suppress that body because a receipt already exists, a threshold was not reached, or no refresh reason is pending; the one exception is that capacity stop of a pending compaction refresh. Dirty or stale formal cognition is still delivered but is marked unreliable. Pending recovery or an incoherent snapshot fails closed without a mixed body.

   When an ordinary Overview reports `continuation_required=true`, submit its exact `next_cursor` automatically until `completed=true`. Do not ask the user to continue, begin the business task, or state a partial system conclusion. Request each Chunk in its own tool call; never fetch several in one script or merge their output. Stop the cognition chain on a missing, duplicate, or reordered Chunk, cursor failure, Index change, or `chunk_tokens` change. Until Attestation completes, never use Memory, source, Spec, `aoci.txt`, historical sessions, scope, search, or Entry reads to repair or supplement Whole-Index cognition. A challenge ordinal is the 1-based position in the formal Entry sequence; Header content, comments, blank lines, Section/Overview/Chunk markers, receipts, and Metadata are excluded, and Chunk Receipt ordinals use that same sequence. The Attestation must echo the Challenge's exact current `index_sha256`, `entry_sequence_sha256`, and `entry_count`; a prior Index, Entry sequence, count, or Attestation is invalid. After the complete chain, submit the existing model cognition Attestation once. One same-response JSON Schema or field-format error may be corrected once without changing semantic answers; a result short of pass (fewer than 80 percent of the ordinals fully correct, or more than one object identity miss) records an uncertain receipt, with no semantic retry or information bypass. During initial cognition it also blocks Root/Meta, Migration, layout-wide, or other unbound system decisions. During a context-compaction refresh with complete transport, unchanged cognition identity, aligned governance, and no Recovery or third-party conflict, the attempt consumes that refresh generation even when Attestation is partial or failed; continue the existing task without another automatic Overview. `system_mastery_percent` self-assesses only the system framework—architecture, responsibilities, strong relationships, stable external contracts, and high-entropy safety and maintenance constraints—not complete implementation or runtime knowledge. Keep machine Index coverage separate, and normally give the user only the prescribed single success or failure sentence derived from actual coverage, Challenge, Chunk, token, and mastery results. If the Host truncates a Chunk, request the same cursor once more and check its `chunk_sha256`; the server returns the identical bytes. Only if it is truncated again, stop and ask the user to set `overview_delivery.chunk_tokens` to a smaller valid value and restart; do not change it automatically.

   Interpret the additive cognition level independently from strict proof fields. `delivery_verified` means the Index was loaded and Host delivery was confirmed while complete cognition verification is still unfinished; describe that state as loaded and delivery-verified, never as no cognition or failure to understand the system. `cognition_verified` requires a passing Attestation (at least 80 percent of Challenge ordinals fully correct with at most one object identity miss), and `cognition_governed` additionally requires governance alignment. A generic complete-read failure sentence is reserved for an actual delivery fault.

   When an Overview response contains the optional `cognition-state/v2` projection, use its dimensions independently. Its Level ends at `model_cognition_usable`; `strict_attestation_verified`, `governance_aligned`, and `current_system_cognition_reliable` are independent states and never participate in that Level. An ordinal, object identity, Tag, or core F mismatch can make strict Attestation fail while model cognition remains usable; do not report that mismatch alone as proof that the model did not understand the system. Only `current_system_cognition_reliable=true` permits an unqualified current complete-system cognition claim. When the projection is absent, keep using the legacy interpretation above.

   An ordinary read-only audit, analysis, or check, a request not to modify code, or a request not to commit or push does not automatically mean strictly zero writes and does not alter the cognition-validity decision above. Codex Memory and historical Skills may only help recover experience, user preferences, and investigation directions. They cannot replace a current cognition receipt matching the repository root, index digest, AOCI service identity, and cognition scope. Project AGENTS and current AOCI identity take precedence over historical Memory for AOCI state.

   Treat a task as strictly zero-write only when the user explicitly prohibits Ledger, metadata, `.aoci` runtime assets, and every filesystem write. If necessary cognition establishment conflicts with that boundary, report the conflict and ask the user to decide or recommend an isolated copy. Never silently substitute Memory for current repository cognition.

3. If the repository has no usable complete index, or has only a minimal skeleton, an incomplete Header, unfinished Entries, or undecided required Curation, obtain `aoci_rules` and enter the current AOCI Guide when a formal complete AOCI index is required. Let Guide choose the next phase from actual repository state and complete the required safety steps.

   `aoci_maintain` does not replace the index-establishment workflow.

   Do not reconstruct or hard-code the full-index generation state machine in this file.

4. During a long-running task, the model is responsible for preserving the current cognition receipt and using the refresh gate correctly:

   - when the Host reports context compaction or the model knows the system-wide view was lost, follow the mandatory `context_compaction` reload rule above; AOCI cannot infer the Host event;
   - when entering a genuinely major phase, declare `phase_transition`, not a function, test run, or small step;
   - at a plausible stable checkpoint, use `check_only=true` to obtain the machine semantic count when that fact is useful;
   - except for the mandatory known-compaction reload, decide whether the current task needs another explicit scoped or complete Overview; and
   - keep the Dirty or Stale reliability state reported by AOCI until maintenance and alignment complete.

### Task closing and cognition maintenance

5. A purely read-only question, analysis, version check, or task that changes no AOCI-managed object does not require a maintenance-tool call. The AOCI version in use is `cognition_receipt.mcp_service_version` in any `aoci_overview` check_only or `aoci_maintain` response; the binary path is the `command` in the project's `.mcp.json`, and the CLI need not be on PATH.

6. When AOCI-managed objects change, call `aoci_maintain` once after they reach the task's final stable state. Do not maintain files individually after each intermediate edit.

7. If maintenance returns actual semantic candidates, the Host model must independently author the complete tag and F/R/A/S updates from each candidate's bound object and necessary evidence. Submit the complete candidate set for that current machine-issued batch in one `aoci_update_entry` call while preserving each path and the domain batch identity; `source_sha256` and `candidate_id` may be omitted, since the server takes them from the issued batch. `max_entries` limits one request and atomic transaction, not the logical plan, Whole-Index, or Managed Scope. When `remaining` is nonzero, call Maintain again after the successful Apply and continue from the new preimage; never shrink Index coverage or slice a returned batch to satisfy transport limits.

   When evidence is insufficient and the current layout supports `aoci_report`, use it instead of guessing, applying a template, or generating unsupported cognition merely to eliminate follow-up work.

8. Obey structured tool states and safety boundaries:

   - `repair_required`: repair only the explicitly identified candidates, then resubmit the complete current machine-issued batch;
   - `stopped`: end that write attempt and inspect `failed_step`, error, formal-write evidence, and Recovery. In auto mode, a proven zero-write closure is followed by a fresh Plan; a complete Intent with provable postimage is resumed; a policy-selected Rollback with exact preimage is completed and replanned. Stop the user task only when proof is unavailable, third-party bytes conflict, approval or external action is required, or another real safety boundary applies;
   - never ignore conflicts, approvals, human decisions, permissions, or safety signals; and
   - after alignment, do not repeat maintenance or writes; `refresh_ready_for_overview` is a checkpoint fact, and the Agent decides whether to request an ordinary complete Overview for its next phase.

   If any managed object changes after maintenance completes, the previous result is invalid. Complete closing again from the new final stable state.

9. When the user limits only business-file scope and does not explicitly forbid repository-managed assets, AOCI-managed assets may be updated during closing to preserve cognition consistency. Distinguish them from business files in audits and commits.

   When the user explicitly forbids changes to `aoci.txt`, `.aoci`, metadata, or any additional file, obey that restriction, do not write, and report any remaining inconsistency accurately.

### Specialized workflows

Initialization, complete-index generation, Header generation, Entries generation, database-structure indexing, Curation, human review, and failure recovery must follow only the instructions, commands, and safety stops returned by the current AOCI Guide or tool at the corresponding stage.

Do not preload, guess, or reconstruct these specialized workflows. The relevant Guide, tool descriptions, model Prompt, and CLI help provide platform invocation, request format, batch limits, approval rules, index-format details, and recovery steps as needed.
<!-- aoci:end -->
