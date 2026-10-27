---
title: Count successful and failed Tookan deliveries from Claude
description: Claude or ChatGPT can count your Tookan tasks per status for a team and a date range, then list the failed deliveries with agent and customer.
date: 2026-10-13
products: tookan
---
You can ask Claude or ChatGPT how many Tookan deliveries succeeded or failed last week, per team. The AI counts the tasks per status, then lists the failed ones with the agent, the customer and the times. To start, add `https://tookan.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> How many delivery tasks were successful, failed or cancelled last week, per team? Then list the failed ones with the agent and the customer address.

## What does the AI do, step by step?

1. It checks the account with `tookan_get_account`, and lists the teams with `tookan_list_teams` and the agents with `tookan_list_agents`.
2. It counts the delivery tasks per status for a team and a date range with `tookan_get_task_stats`, so it does not page through every task. Without a task type, the count includes all task types.
3. It lists the failed delivery tasks with `tookan_list_tasks`, filtered by team and status. One call returns one page of tasks. Tookan accepts a date range of at most 31 days, within the last 31 days.
4. It reads up to 100 tasks in full with `tookan_get_tasks`: customer, addresses, agent, timestamps and, if you ask, the status history.

## Can the AI change a task by mistake?

- The tools in the steps above only read data.
- `tookan_update_task_status` sets a task's status at once and overrides the agent app. It has no preview. Completing or cancelling a task closes it and can notify people, as set in your Tookan account. The tool cannot delete a task.
- Tell the AI to only read, and to ask you before any status change.
- Your AI client can ask you to approve each call that creates or changes data. This depends on the client and its settings. The tools themselves do not ask.

## What do I need?

A Tookan V2 API key. You find it in Tookan under **Settings → API Keys** (V2 section). See the [setup steps](/tookan/) for Claude, ChatGPT, Cursor and other clients.
