---
title: Review open CentralStationCRM tasks for the week in Claude
description: Ask Claude or ChatGPT which CentralStationCRM tasks are open and due this week, grouped by day, with the person, company or deal behind each one.
date: 2026-11-24
products: centralstationcrm
---
You can ask Claude or ChatGPT to plan your week from your CentralStationCRM tasks. The AI lists your open calls, emails, visits and to-dos for the dates you name, sorts them by day, and tells you which person, company or deal each task is about. Add `https://centralstationcrm.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> Which of my CentralStationCRM tasks are open and due this week? Sort them by day and tell me who each one is about.

You can also ask for the tasks of one colleague, for open tasks with a due date before today, or for finished tasks that were due last week.

## What does the AI do, step by step?

1. It finds the user of the connected API key with `centralstationcrm_get_current_user`. If the key is yours, this gives your user id, so the AI can ask for your tasks only. If the key belongs to another user, or you ask about a colleague, the AI finds the right user with `centralstationcrm_list_users`.
2. It lists the tasks with `centralstationcrm_list_tasks`. The AI asks for open tasks only, for your user id and for the dates of this week. Each task shows the fields that CentralStationCRM returns, for example its text, its kind (task, call, email, visit, preparation or important) and if it is finished. A due time is optional. On some tasks only the day matters, not the hour. A page has 50 tasks by default and at most 250. One call reads one page, so if the reply gives a next page number, the AI must call again with that page.
3. If a task is linked to a person, a company or a deal, the AI can open that record with `centralstationcrm_get_person`, `centralstationcrm_get_company` or `centralstationcrm_get_deal`. The AI can ask for related data in the same call, for example the phone numbers and email addresses of a person. To read one task again, it uses `centralstationcrm_get_task`.
4. It sorts the tasks by day and gives you a short list: what to do, when, and for whom.

CentralStationCRM data calls that succeed count toward your plan, and each page of tasks and each opened record is one call. The server tries to refund a failed call.

## Can it change my tasks without my approval?

The review above uses read tools only. No tool deletes a person, a company, a deal, a task or a note.

The server has these tools that write CentralStationCRM data: `centralstationcrm_create_task` adds a task, and `centralstationcrm_update_task` changes a task, for example it marks the task done or moves its due time. `centralstationcrm_create_person`, `centralstationcrm_update_person`, `centralstationcrm_create_company`, `centralstationcrm_update_company`, `centralstationcrm_create_deal` and `centralstationcrm_update_deal` add or change contacts, companies and deals. `centralstationcrm_create_note` adds a note to a record. These tools act when they are called; they do not enforce a separate preview step. If you want to approve a change first, ask the AI to show it in the chat before it writes. If you choose **Read only** when you connect, the server hides the write tools and refuses calls to them. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about CentralStationCRM data: `centralstationcrm_usage_status` shows your UsefulAPI usage and plan, `centralstationcrm_upgrade` returns a payment link or changes an existing subscription, `centralstationcrm_cancel_subscription` cancels at the end of the current period, and `centralstationcrm_request_feature` sends us a feature request. These tools stay available in a Read only connection. An upgrade can charge your card. A cancellation, and a change from Pro to Pro+, need `confirm: true`.

## What do I need?

A CentralStationCRM API key. You find it in CentralStationCRM under **My settings**, then **API key**. The key acts with the permissions of that user.

See the [CentralStationCRM setup steps](/centralstationcrm/) for Claude, ChatGPT, Cursor and other MCP clients.
