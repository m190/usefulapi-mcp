---
title: Review ExakTime timecards before payroll in ChatGPT
description: Ask ChatGPT or Claude to check last week's ExakTime (Arcoro Time) timecards: hours and overtime per employee, raw punches and meal break violations.
date: 2026-11-19
products: exaktime
---
You can ask ChatGPT or Claude to review the timecards of a pay week in ExakTime (Arcoro Time) before you run payroll. The AI reads the time records of each employee, totals the regular and overtime hours, compares a record with the raw clock punches when you ask, and lists the meal break violations. Add `https://exaktime.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> Review last week's ExakTime timecards before payroll. Show each employee's regular and overtime hours and any meal break violations.

You can also ask about one employee, one location or one cost code, or ask who has not signed off the pay period.

## What does the AI do, step by step?

1. It lists the employees with `exaktime_list_employees`, so it can match names to person ids. A page has 50 employees by default and at most 100. If more employees exist, the AI must call again for the next page.
2. It reads the timecard entries with `exaktime_list_time_records`. The AI can filter by work date range, by employee, by location and by cost code identifier. Each record shows the work date, the start and stop time, the cost code, the location, and the regular, overtime and total hours. One call returns up to 100 records by default and at most 1,000. If more records match, the AI must call again with the next skip value.
3. If a record looks wrong, it reads the raw clock punches with `exaktime_list_time_punches`. A punch shows the punch time, the device type, the location and the network time difference. This filter uses UTC days, so the AI can include one day more on each side of the week.
4. It lists the meal break violations of the week with `exaktime_list_meal_break_violations`. Each violation shows the type, the date and the expected and actual value, and it links to a time record.
5. If you ask about sign-off, it finds the pay period with `exaktime_list_pay_periods` and lists the approvals with `exaktime_list_pay_period_approvals`. The AI compares the approvals with the employee list to find who has not signed off.
6. If you ask for more detail, it reads the employment details of one person with `exaktime_get_employee`, or the jobs and cost codes with `exaktime_list_jobs` and `exaktime_list_cost_codes`.

The time records, punches, violations, pay periods and approvals come from the Arcoro data warehouse. Arcoro refreshes it each night, so today's entries can be missing until tomorrow. ExakTime data calls that succeed count toward your plan. The server tries to refund a failed call.

## Can it change a timecard?

No. No tool on this server creates, changes or deletes a time record, a punch or an approval. No tool deletes any record. The `exaktime_query_odata` tool runs read-only queries on other warehouse data.

The server has six tools that write ExakTime data: `exaktime_create_job`, `exaktime_update_job`, `exaktime_create_cost_code`, `exaktime_update_cost_code`, `exaktime_create_location` and `exaktime_update_location`. They act when they are called; they do not enforce a separate preview step. The review above uses read tools only. If you choose **Read only** when you connect, the server hides the write tools and refuses calls to them. A read-only Arcoro API key also blocks writes at Arcoro. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about ExakTime data: `exaktime_usage_status` shows your UsefulAPI usage and plan, `exaktime_upgrade` returns a payment link or changes an existing subscription, `exaktime_cancel_subscription` cancels at the end of the current period, and `exaktime_request_feature` sends us a feature request. These tools stay available in a Read only connection. An upgrade can charge your card. A cancellation, and a change from Pro to Pro+, need `confirm: true`.

## What do I need?

An Arcoro API key. You create it in the **Arcoro API Portal** (my.arcoro.com/api/portal); if you do not see the portal, ask Arcoro support for access. A read-only key is enough for this review. The timecard tools read Arcoro's OData data, so the key needs OData access.

See the [ExakTime setup steps](/exaktime/) for Claude, ChatGPT, Cursor and other MCP clients.
