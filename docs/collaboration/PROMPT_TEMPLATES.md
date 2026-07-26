# 工具中立 Prompt Templates

以下模板可用於 Codex、Claude Code、Cursor 或純手動流程。工具差異不得改變 scope、authority、stop conditions 或 evidence 標準。所有欄位都必須填寫；不適用時填 `N/A`，不要省略。

## Read-only review

```yaml
task:
  name: "<review name>"
  mode: "READ_ONLY"
context:
  repo: "<repo path or URL>"
  starting_state: "<branch, commit, tag, or supplied artifact>"
objective:
  - "<what must be reviewed>"
authoritative_sources:
  - "<source path>"
scope:
  - "<exact files, chapters, or behavior>"
allowed_changes:
  - "None; observation and report only"
forbidden_changes:
  - "Do not modify the Repo"
  - "Do not commit, push, or create a Pull Request"
validation:
  - "Record locations and evidence for every finding"
report_format:
  - "Use the observation format in docs/collaboration/REPORT_FORMATS.md"
stop_conditions:
  - "Authority conflict"
  - "Required source is NOT_FOUND"
  - "Review would require a write or runtime action"
```

## Documentation patch

```yaml
task:
  name: "<documentation patch>"
  mode: "DOC_ONLY"
context:
  repo: "<repo path or URL>"
  base_branch: "<verified base>"
objective:
  - "<documentation outcome>"
authoritative_sources:
  - "<governance or implementation evidence>"
scope:
  - "<exact documentation scope>"
allowed_changes:
  - "<allowlisted files>"
forbidden_changes:
  - "metadata, quest, KubeJS, gameplay, Release, and unrelated docs"
validation:
  - "git diff --name-only <base>...HEAD"
  - "git diff --check <base>...HEAD"
  - "<content-specific checks>"
report_format:
  - "Use the implementation format in docs/collaboration/REPORT_FORMATS.md"
stop_conditions:
  - "Working tree is not clean"
  - "Required authority conflicts"
  - "The patch requires an out-of-scope file"
```

## Compatibility research

```yaml
task:
  name: "<compatibility subject>"
  mode: "READ_ONLY_RESEARCH"
context:
  environment: "<Minecraft, Loader, Java, OS, or supplied environment>"
  evidence_date: "<date and timezone>"
objective:
  - "<question to answer>"
authoritative_sources:
  - "Repo metadata and current governance"
  - "Official upstream documentation or primary source"
scope:
  - "<specific Mods, APIs, versions, or failure>"
allowed_changes:
  - "None unless a separate doc-only task is approved"
forbidden_changes:
  - "Do not install, update, launch, or rewrite metadata"
  - "Do not promote design sources or historical evidence to current truth"
validation:
  - "Separate observed facts, inference, recommendation, and unknowns"
  - "Record source URL or Repo location and access date"
report_format:
  - "Use the research format in docs/collaboration/REPORT_FORMATS.md"
stop_conditions:
  - "Sources conflict"
  - "Required evidence is inaccessible"
  - "A runtime test or metadata change is required"
```

## Controlled isolated implementation

```yaml
task:
  name: "<isolated change>"
  mode: "CONTROLLED_IMPLEMENTATION"
context:
  repo: "<repo path>"
  base_branch: "<verified base>"
  expected_head: "<full commit>"
objective:
  - "<single bounded outcome>"
authoritative_sources:
  - "<exact source paths>"
scope:
  - "<one isolated system or artifact>"
allowed_changes:
  - "<explicit allowlist>"
forbidden_changes:
  - "<explicit denylist>"
  - "No direct main mutation"
validation:
  - "<static checks>"
  - "<runtime checks only when explicitly authorized>"
  - "git status --short -uall"
report_format:
  - "Use the implementation format in docs/collaboration/REPORT_FORMATS.md"
stop_conditions:
  - "Base or working tree mismatch"
  - "Authority conflict"
  - "Scope expansion or destructive action is required"
  - "Validation cannot support the requested result"
```

Controlled implementation 必須使用獨立 branch 與 Pull Request，並在 Yoi Review 後才能 merge。Prompt 只描述授權；它不會自行創造權限。
