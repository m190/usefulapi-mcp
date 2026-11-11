---
title: Plan the day at your Street.co.uk estate agency from ChatGPT
description: Ask ChatGPT for today's Street.co.uk viewings, new enquiries, inspections that need booking and open offers, in one short overview for your branch.
date: 2026-11-02
products: street-co-uk
---
You can ask ChatGPT, Claude or another MCP client to read your Street.co.uk CRM and give you one overview of the day: the viewings that are booked, the new enquiries, the inspections that are due and the offers that wait for an answer. Add `https://street-co-uk.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> What is on today at my main branch in Street? Show viewings, new enquiries, inspections that are overdue or need booking, and pending offers.

You can change the time range, for example "this week". Viewings, enquiries, offers, tasks and follow-ups filter by branch, and viewings also by sales or lettings. Inspections have no branch filter, so the AI checks the property of each inspection to keep your branch only.

## What does the AI do, step by step?

1. It finds your branch with `street_list_branches`, because most lists filter by the branch ID.
2. It lists the viewings with `street_list_viewings`. It can filter by branch, sales or lettings, status (for example unconfirmed, confirmed or completed) and a booked-from and booked-to time. It can include the property, the applicant and the viewing feedback in the same answer.
3. It lists the new leads with `street_list_enquiries`, a created-from time and the branch. Each enquiry shows who asked, the message and the source. To see the related property, branch or person, it opens one with `street_get_enquiry`.
4. It lists the inspections with `street_list_inspections`. The status filter can be need to book, overdue, booked or complete, and a due date range limits the list.
5. It lists the open offers with `street_list_sales_offers` and `street_list_lettings_offers`, filtered by the pending or put to vendor status.
6. For more detail on one record, it opens it with `street_get_property`, `street_get_viewing` or `street_get_tenancy`.
7. It can also list the to-dos with `street_list_tasks` and `street_list_follow_ups`. These lists have no status filter, so the AI sorts the results by their due dates.

Results come one page at a time. For a busy branch, ask the AI to read the next pages too, or narrow the time range.

## Can it change my Street data by mistake?

The steps above only read. They do not change anything in Street.

The server also has tools that write to Street: `street_create_enquiry`, `street_create_note`, `street_create_task`, `street_create_follow_up`, `street_create_maintenance_request` and `street_update_person`. They act when they are called; they do not enforce a separate preview or confirmation step. If you only want a suggestion, ask the AI to show the proposed note or task in the chat and not to call a write tool. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

There is no tool that deletes a Street record, pays a Street invoice or uploads a document. The token acts with the permissions of your own Street account.

The server also has tools that are not about Street data: `street_usage_status` shows your UsefulAPI usage and plan, `street_upgrade` and `street_cancel_subscription` change your plan, and `street_request_feature` sends us a feature request. A cancellation, and a change from Pro to Pro+, need `confirm: true`.

## What do I need?

A Street API token: in Street, open **Settings → Account Administration → Applications** and generate one. The Street Open API is free, and each agency makes its own token. Choose the demo sandbox only for a token from demo.street.co.uk.

See the [Street.co.uk setup steps](/street-co-uk/) for ChatGPT, Claude, Cursor and other MCP clients.
