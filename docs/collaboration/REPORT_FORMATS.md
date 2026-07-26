# 統一回報格式

回報必須區分已觀察事實、推論、建議與未驗證假設。`PASS` 需要與 claim 相稱的 evidence；只完成部分檢查使用 `PARTIAL`，沒有足夠證據使用 `UNVERIFIED`，找不到必要來源使用 `NOT_FOUND`。

## Observation report

每個觀察獨立填寫一次：

```yaml
location: "<file:line, screen, chapter, or step>"
current_behavior: "<what was observed>"
expected_behavior: "<expected wording or player outcome>"
impact: "<player, maintainer, compatibility, or workflow impact>"
confidence: "<high, medium, or low with reason>"
evidence:
  - "<file excerpt, screenshot, log, or reproduction step>"
recommendation: "<smallest suggested follow-up; not automatic authorization>"
```

## Research report

```yaml
subject: "<research question>"
environment: "<relevant software, OS, Loader, Java, or evidence date>"
sources:
  - "<primary source, Repo path, URL, and access date>"
findings:
  - "<observed fact, clearly labeled inference, or unknown>"
compatibility_risks:
  - "<risk and affected scope>"
tests_performed:
  - "<actual checks; write None if no test was run>"
result: "<PASS, PARTIAL, UNVERIFIED, NOT_FOUND, or STOP>"
recommendation: "<one bounded next action>"
confidence: "<high, medium, or low with evidence reason>"
```

## Implementation report

```yaml
status_before:
  branch: "<branch>"
  head: "<full commit>"
  working_tree: "<clean or exact pre-existing changes>"
files_modified:
  - "<every created, modified, or deleted file>"
changes:
  - "<what changed and why>"
validation:
  - "<command or check and actual result>"
  - "<explicitly list validation not performed>"
risks:
  - "<remaining risk, unknown, or rollback note>"
commit: "<full commit or None>"
pull_request: "<URL, Draft/OPEN state, or None>"
status_after:
  branch: "<branch>"
  head: "<full commit>"
  working_tree: "<clean or exact remaining changes>"
  stop_point: "<where work stopped and whose review is required>"
```

不要把 static metadata、檔案存在或文字檢查描述為 runtime verification。若因 authority conflict、scope expansion 或缺少證據停止，請在 result／status_after 明確寫出 `STOP POINT` 並交由 Yoi 決策。
