---
title: Prepare for a Less Annoying CRM follow-up in Cursor
description: Ask Cursor or Claude to find a Less Annoying CRM contact, read their latest notes, check pipeline stages and tasks, and draft a follow-up.
date: 2026-11-03
products: less-annoying-crm
---
You can ask Cursor or Claude to prepare a follow-up using the contact records, notes, tasks and pipelines in Less Annoying CRM. The AI reads the history and drafts what to say in your chat. Add `https://less-annoying-crm.usefulapi.io/mcp` as a remote MCP server, then name the person or company you want to review.

## Which prompt do I start with?

> Prepare my follow-up with Acme Ltd from Less Annoying CRM: notes, pipeline stages, tasks due this week and a short draft. Do not save anything.

If several records match, give the AI an email address or another detail to identify the right one before it continues. Name the dates you mean by "this week" if needed.

## What does the AI do, step by step?

1. It finds the person or company with `lacrm_search_contacts`, then opens the matching record with `lacrm_get_contact` to check its details and owner.
2. It reads the latest notes with `lacrm_list_notes`, filtered to that contact or company. Notes are returned newest first by default.
3. It reads the record's pipeline items with `lacrm_get_contact_pipeline_items`. If it needs the pipeline definitions and status names, it uses `lacrm_list_pipelines`.
4. It reads tasks with `lacrm_list_tasks`. When a contact is specified, Less Annoying CRM returns all of that record's tasks regardless of the date and completion filters, so the AI must select the incomplete tasks due in the requested week from the results.
5. It summarizes what the records say, flags missing information and drafts a follow-up in the chat. A company record and its individual contacts are separate records; ask it to review named people too when their notes matter.

Lists are paginated. If there are more results, the AI needs to read further pages before claiming it has checked every matching note or task.

## Does this save a note or send the follow-up?

The steps above only read your CRM. The draft stays in the chat, and this server has no tool for sending an email.

Other tools can change CRM data when called. For example, `lacrm_create_note` saves a note, `lacrm_create_task` adds a task, `lacrm_edit_task` can mark one complete, and `lacrm_update_pipeline_item` can move a deal to another status. They do not enforce a separate preview or confirmation step. Your AI client can ask you to approve tool calls; this depends on its settings. Ask for a draft first, then name the specific change you want saved.

## What do I need?

A Less Annoying CRM API key from **Settings → Programmer API**, with permission to read the records you want to review. API access requires a paid Less Annoying CRM plan or trial. Add the server URL to your AI client and enter the key on the connection's login page.

See the [Less Annoying CRM setup steps](/less-annoying-crm/) for Cursor, Claude, ChatGPT and other MCP clients.
