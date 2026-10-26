---
title: Prepare for a donor call in Virtuous with Claude
description: Claude or ChatGPT can find a donor in Virtuous, sum up their giving history and past notes before a call, and log a note after it.
date: 2026-10-20
products: virtuous-crm
---
You can ask Claude or ChatGPT to prepare you for a donor call from Virtuous. The AI finds the donor, sums up their giving and the last conversations, and logs a note on the record after the call. To start, add `https://virtuous-crm.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> I call Jane Smith in 10 minutes. Show her household's giving history, her last gift, and the notes from our last three conversations.

## What does the AI do, step by step?

1. It finds the donor by name, email or phone with `virtuous_search_contacts`, or by email with `virtuous_find_contact`.
2. It reads the record with `virtuous_get_contact`: the giving summary, the last gift and the people in the household.
3. It lists the gifts with `virtuous_list_contact_gifts` and the past notes with `virtuous_list_contact_notes`.
4. After the call, it logs a note with `virtuous_create_contact_note`. It gets the note types first with `virtuous_list_contact_note_types`.
5. For lists across many donors, it builds a query with `virtuous_get_query_options` and `virtuous_query`.

## What can the AI change in Virtuous?

- A note from `virtuous_create_contact_note` goes on the donor record at once. A tag from `virtuous_add_contact_tag` too.
- New contacts and gifts go through the Virtuous import. Virtuous creates them only after a user reviews the import and clicks Run. Recording a gift never charges anyone.
- The API key acts with the permission group that you give it in Virtuous.

## What do I need?

A Virtuous API key. You create it in Virtuous under **Settings → API Keys**. See the [setup steps](/virtuous-crm/) for Claude, ChatGPT, Cursor and other clients.
