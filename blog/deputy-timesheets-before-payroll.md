---
title: Check Deputy timesheets against the roster before payroll
description: Claude or ChatGPT can list Deputy timesheets for a pay period, compare them with the scheduled shifts and leave, and show what is still unapproved.
date: 2026-10-21
products: deputy
---
You can check Deputy timesheets before payroll from Claude or ChatGPT. The AI lists the worked time for the pay period, compares it with the scheduled shifts and the leave, and shows the timesheets that are not approved yet. To start, add `https://deputy.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> For last week, list every employee's timesheets with total hours. Mark the timesheets that are not approved, and the ones that differ from the rostered shift by more than 30 minutes. Include approved leave.

## What does the AI do, step by step?

1. It lists the locations, areas and employees with `deputy_list_locations`, `deputy_list_areas` and `deputy_list_employees`, so it can show names.
2. It lists the worked time for the period with `deputy_list_timesheets`: start and end, total hours, approval state and the linked shift.
3. It lists the scheduled shifts for the same period with `deputy_list_shifts`, and compares them with the timesheets.
4. It lists the leave requests and their status with `deputy_list_leave`.
5. It reads one timesheet in full, with its breaks, with `deputy_get_timesheet`.

## Can the AI approve or change a timesheet without me?

- The tools in the steps above only read data.
- `deputy_update_timesheet` corrects the start and end time, the area, the meal break or the comment of a timesheet. `deputy_approve_timesheet` approves the times of a timesheet, and approved timesheets go toward the payroll export. Both tools make the change at once, with no preview. Ask the AI to show you each change first.
- Your AI client can ask you to approve each call that creates or changes data. This depends on the client and its settings. The tools themselves do not ask.
- The token acts with its owner's Deputy permissions. Approval and other supervisor tools need a manager-level user.

## What do I need?

Your Deputy install host and a permanent access token. Create the token in Deputy under **Integrations → API**: open the OAuth clients page of your install, choose **New OAuth Client**, then **Get an Access Token**. See the [setup steps](/deputy/) for Claude, ChatGPT, Cursor and other clients.
