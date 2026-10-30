---
title: Review a JobNimbus job and its open tasks in Claude
description: Use Claude or ChatGPT to find a JobNimbus job, review its status, open tasks and recent notes, and draft a follow-up before saving changes.
date: 2026-10-30
products: jobnimbus
---
You can ask Claude or ChatGPT to prepare a JobNimbus job handover: find the project, check its workflow status, and bring open tasks and recent notes into one answer. Add `https://jobnimbus.usefulapi.io/mcp` as a connector, then name the job or customer you want to review.

## Which prompt do I start with?

> Find the Oak Street roofing job. If several jobs match, show their names and addresses and ask me to choose. Summarize the selected job's status, sales rep, open tasks with their dates and assignees, and recent notes. Suggest the next follow-up and draft a note for my review. Do not create or change anything yet.

Replace the example with a job you are authorized to access. Include its address or customer name when the project name alone is ambiguous.

## What does the AI read, step by step?

1. It searches with `jobnimbus_list_jobs` and opens the selected record with `jobnimbus_get_job`. If you start with a customer, it can use `jobnimbus_list_contacts` to find the contact before looking up related jobs.
2. It reads the team's names and IDs with `jobnimbus_list_users` to identify the sales rep and task assignees.
3. It uses `jobnimbus_list_tasks` to find incomplete tasks related to the selected job. It can open an individual task with `jobnimbus_get_task` for more detail.
4. It reads the job's activity feed with `jobnimbus_list_activities`. The feed includes both notes and system events, such as status changes, so the summary should distinguish them.
5. It drafts a handover and suggested follow-up, marking missing dates or assignees rather than guessing.

The list tools return 25 records by default. Ask the assistant to check further pages when needed and say whether the summary covers all matching records or only the pages it read. Tasks or notes attached only to the customer may need a separate contact lookup.

## Can I save a note or assign the follow-up?

After checking the job and proposed text, you can ask the assistant to save a note with `jobnimbus_create_note`. To create a follow-up task, it checks the available task types with `jobnimbus_get_account_settings`, confirms the date and assignee with you, then uses `jobnimbus_create_task`. An existing task can be rescheduled or marked complete with `jobnimbus_update_task`.

These tools write as soon as they are called; they do not enforce a preview or separate approval step. Ask the assistant to show the exact changes first. Your AI client may also ask you to approve write calls, depending on its settings. Changes to a job's workflow status can trigger JobNimbus automations.

## What do I need?

A JobNimbus account and an API key with an Access Profile that permits the reads and changes you need. Create the key under **Settings → API** and enter the full key on the connector's login page. JobNimbus explains the process in its [API key guide](https://support.jobnimbus.com/how-do-i-create-an-api-key).

See the [JobNimbus setup steps](/jobnimbus/) for connecting your AI client.
