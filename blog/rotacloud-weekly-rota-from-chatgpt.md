---
title: Build next week's RotaCloud rota from ChatGPT
description: Copy a week of RotaCloud shifts, check availability and days off, fix the drafts, then publish them, all from one chat in ChatGPT or Claude.
date: 2026-10-23
products: rotacloud
---
Most rotas look like last week's rota with a few changes. With the RotaCloud MCP server, you can ask an AI assistant to do the copy work and you only make the decisions.

## What you need

- A RotaCloud API key. An account admin creates it in RotaCloud under **Settings → Integrations → API**.
- The RotaCloud connector in ChatGPT, Claude or another MCP client. See the [setup steps](/rotacloud/).

## Step by step

1. Ask for last week's rota. The AI reads it with `rotacloud_list_shifts` and maps user, location and role ids to names with `rotacloud_list_users`, `rotacloud_list_locations` and `rotacloud_list_roles`.
2. Ask it to check who can work next week. It reads `rotacloud_get_availability` and `rotacloud_list_days_off`, and `rotacloud_list_leave` for booked leave.
3. Ask it to create next week's shifts. It uses `rotacloud_create_shift`. New shifts are not published, so employees do not see them yet.
4. Read the result and ask for changes in plain words. The AI changes times, people or breaks with `rotacloud_update_shift`.
5. When the rota is correct, ask it to publish. `rotacloud_publish_shifts` makes the shifts visible, and RotaCloud notifies the assigned employees.

A prompt to start with:

> Copy last week's shifts at our Main site to next week. Skip anyone who is on leave or unavailable, and leave those shifts open. Do not publish yet.

## Tips

- Most AI clients ask you to approve each call that creates or changes data. For a large rota, you can allow the RotaCloud write tools for the chat.
- To remove short open shifts, ask the AI to find them first. `rotacloud_find_shifts` selects them and `rotacloud_delete_shifts` shows a preview. It deletes only after you confirm.
- Ask for a check before you publish, for example: "List every shift that overlaps with leave or a day off."
