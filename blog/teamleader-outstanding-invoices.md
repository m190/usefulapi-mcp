---
title: See who still owes you in Teamleader Focus from Claude
description: Claude or ChatGPT can list outstanding Teamleader Focus invoices, show what each customer owes, and add a follow-up task, after you sign in with Teamleader.
date: 2026-10-24
products: teamleader-focus
---
You can ask Claude or ChatGPT which Teamleader Focus invoices are still not paid and who owes you money. The AI reads the invoices, the payments received and the due dates, and can put a follow-up task on your list. To start, add `https://teamleader-focus.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> Which invoices are still outstanding? Group them by customer, show what is past the due date, and create a task for tomorrow to call the customer who owes the most.

## What does the AI do, step by step?

1. It lists the outstanding invoices with `teamleader_list_invoices`, with the totals and due dates.
2. It reads one invoice in full with `teamleader_get_invoice`, including the payments received.
3. It reads the customer's deals with `teamleader_list_deals` and the projects with `teamleader_list_projects`.
4. When you ask, it creates a task with `teamleader_create_task`. A task needs a work type, which it gets from `teamleader_list_work_types`.

## What can the AI change in Teamleader?

- It can create contacts, companies, deals, tasks, notes, calendar events and tracked time, and mark tasks complete.
- It never updates, deletes, books, sends or credits anything. So it cannot change or send an invoice.
- It can do only what your Teamleader user is allowed to do. You can revoke the access in Teamleader under **Settings → Integrations**.

## What do I need?

A Teamleader Focus user. You sign in with Teamleader and approve the access. You do not need an API key. See the [setup steps](/teamleader-focus/) for Claude, ChatGPT, Cursor and other clients.
