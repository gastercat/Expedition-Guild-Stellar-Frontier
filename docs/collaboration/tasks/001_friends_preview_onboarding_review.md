# 001｜Friends Preview Onboarding Review

- Mode：`READ_ONLY`
- Status：`OPEN`
- Owner／final authority：Yoi
- Deliverable：5 至 10 個具體 observation reports

## Objective

以第一次加入朋友測試的新玩家視角，檢查 onboarding、Create／Ad Astra preview 與測試入口是否清楚。這是閱讀與回報任務，不修改 Repo，也不授權重新設計主線。

## Scope

- FTB Quests Chapter 0：[`config/ftbquests/quests/chapters/0.snbt`](../../../config/ftbquests/quests/chapters/0.snbt)
- FTB Quests Chapter 1：[`config/ftbquests/quests/chapters/1.snbt`](../../../config/ftbquests/quests/chapters/1.snbt)
- [`README.md`](../../../README.md)
- [`docs/TESTING_GUIDE.md`](../../TESTING_GUIDE.md)
- [`docs/testing/FRIENDS_TEST_GUIDE.zh-TW.md`](../../testing/FRIENDS_TEST_GUIDE.zh-TW.md)

## Goals

- 確認新玩家是否能理解公會 onboarding 與第一步行動。
- 確認 Create 與 Ad Astra preview 是否清楚，且不會被誤解為已完成的完整系統。
- 找出 stale、模糊、重複或可能誤導的說明。
- 確認安裝與朋友測試入口是否容易找到與理解。

## Review procedure

1. 依 Scope 順序閱讀，不先查設計文件替現有文字補意圖。
2. 記錄玩家第一次可能停住、誤解或不知道下一步的位置。
3. 每項 observation 指出精確位置、目前文字或行為，以及對新玩家的影響。
4. 建議維持最小、可獨立處理；不要提交 patch。
5. 使用 [Observation report](../REPORT_FORMATS.md#observation-report) 回報 5 至 10 項觀察。

每項必須包含：`location`、`current_behavior`、`expected_behavior`、`impact`、`confidence`、`evidence` 與 `recommendation`。

## Forbidden

- 不得修改 Repo。
- 不得新增或移除 Mod。
- 不得修改任務主線。
- 不得自行提出或執行完整重構。
- 不得建立 branch、commit、push 或 Pull Request。
- 不得宣稱 runtime `PASS`，除非實際執行了相應測試並提供可追溯 evidence；本任務沒有授權 runtime test。

## Stop conditions

- Scope 中必要檔案為 `NOT_FOUND`。
- 文件互相衝突，無法判斷預期玩家路徑。
- 需要啟動遊戲、修改 Repo 或擴大到 Scope 外才能回答。
- 發現可能影響 authority、Release 或主線設計的問題。

命中 stop condition 時，保留已完成 observations，標記 `STOP POINT`，並將衝突或缺口交給 Yoi。
