---
title: Build next week's RotaCloud rota from ChatGPT
description: ChatGPT or Claude can copy a week of RotaCloud shifts as drafts, skip people on leave or days off, and publish the rota after you review it.
date: 2026-10-23
products: rotacloud
---
You can build next week's RotaCloud rota from ChatGPT or Claude. The AI copies last week's shifts, checks leave, availability and days off, and creates the new shifts as unpublished drafts. You review them, then ask it to publish. To start, add `https://rotacloud.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> Copy last week's shifts at our Main site to next week. Skip anyone who is on leave or unavailable, and leave those shifts open. Do not publish yet.

## What does the AI do, step by step?

1. It reads last week's rota with `rotacloud_list_shifts` and maps user, location and role ids to names with `rotacloud_list_users`, `rotacloud_list_locations` and `rotacloud_list_roles`.
2. It checks who can work next week with `rotacloud_get_availability`, `rotacloud_list_days_off` and `rotacloud_list_leave`.
3. It creates next week's shifts with `rotacloud_create_shift`. By default, a new shift is not published, so employees do not see it yet.
4. You read the result and ask for changes in plain words. The AI changes times, people or breaks with `rotacloud_update_shift`.
5. When the rota is correct, you ask it to publish. `rotacloud_publish_shifts` makes the shifts visible, and RotaCloud notifies the assigned employees.

## How do I stay in control of the changes?

- Your AI client can ask you to approve each call that creates or changes data. This depends on the client and its settings. For a large rota, you can allow the RotaCloud write tools for the chat.
- Ask for drafts, as in the prompt above. New shifts are unpublished by default, but the tools can also publish, so tell the AI to keep them unpublished while it creates and changes them. Before you publish, ask for a check, for example: "List every shift that overlaps with leave or a day off."
- To remove short open shifts, ask the AI to find them first. `rotacloud_find_shifts` selects them. Without `confirm: true`, `rotacloud_delete_shifts` only shows a preview. Ask the AI to show you the preview and to wait for your approval before it deletes.

## What do I need?

A RotaCloud API key. An account admin creates it in RotaCloud under **Settings → Integrations → API**. See the [setup steps](/rotacloud/) for Claude, ChatGPT, Cursor and other clients.
