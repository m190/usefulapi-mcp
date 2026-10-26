---
title: Fill open shifts in When I Work from Claude
description: Claude or ChatGPT can list who works this week in When I Work, find open shifts, see who is eligible to take them, and assign them.
date: 2026-10-07
products: when-i-work
---
You can ask Claude or ChatGPT who works this week in When I Work and which shifts nobody has taken yet. The AI finds the employees who can take an open shift and assigns it. A new shift that it creates is a draft by default. To start, add `https://when-i-work.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> Which shifts are still open this week? For each one, show who is eligible to take it and who said they are not available.

## What does the AI do, step by step?

1. It lists the shifts in a time window, open shifts included, with `wheniwork_list_shifts`. It maps ids to names with `wheniwork_list_users` and `wheniwork_list_locations`.
2. For an open shift, it finds who can take it with `wheniwork_list_eligible_users_for_shift`, and checks `wheniwork_list_availability` and `wheniwork_list_time_off_requests`.
3. It assigns the shift with `wheniwork_update_shift`, or creates a new one with `wheniwork_create_shift`.
4. When you are ready, it publishes the drafts with `wheniwork_publish_shifts`.

## How do I stay in control of the changes?

- `wheniwork_create_shift` creates a draft by default, and employees do not see a draft. The tools can also publish, so tell the AI to keep new shifts as drafts until you review them.
- An open shift that is already published stays published when the AI assigns it. The change is visible at once.
- `wheniwork_publish_shifts` does not itself send notifications. `wheniwork_unpublish_shifts` returns shifts to draft.
- When I Work can remove a shift's breaks when the shift changes. After an assignment, ask the AI to check the breaks of that shift.
- Most AI clients ask you to approve each call that changes data. This depends on the client's settings.

## What do I need?

A When I Work developer key (W-Key), and the email and password that you use at app.wheniwork.com. If you have no developer key, ask When I Work support for one. See the [setup steps](/when-i-work/) for Claude, ChatGPT, Cursor and other clients.
