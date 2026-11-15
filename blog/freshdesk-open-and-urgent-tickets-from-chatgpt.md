---
title: Find open and urgent Freshdesk tickets from ChatGPT
description: Ask ChatGPT or Claude to find the open, high-priority tickets in your Freshdesk helpdesk, read their replies and notes, and say what each requester needs.
date: 2026-11-15
products: freshdesk
---
You can ask ChatGPT or Claude to go through the tickets of your Freshdesk helpdesk before a shift or a team meeting. The AI searches the tickets by status, priority, group or date, reads the replies and notes of each one, and tells you what the requester waits for. Add `https://freshdesk.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> Find the open Freshdesk tickets with high or urgent priority. For each one, tell me who asked, what they need and who replied last.

You can also name one group, one agent, one tag or a date, for example the tickets created this week. You can ask for the pending tickets too.

## What does the AI do, step by step?

1. It searches the tickets with `freshdesk_search_tickets`. The search takes a Freshdesk query: the AI can filter by status, priority, group, agent, tag and created date, and join the conditions with AND. In a query, the statuses are numbers: 2 is Open, 3 is Pending, 4 is Resolved and 5 is Closed. For priority, 3 is High and 4 is Urgent.
2. A search gives 30 tickets in a page and at most 10 pages. If more tickets match, ask for a smaller search, for example one group or a later created date.
3. If you name a group or an agent, the AI needs its id. It gets the names and ids with `freshdesk_list_groups` and `freshdesk_list_agents`.
4. Without a query, it can list tickets with `freshdesk_list_tickets`. This tool filters by requester email, by company or by the time of the last update, and it sorts by created date, due date, update date or status. One call gives up to 100 tickets.
5. It opens each ticket with `freshdesk_get_ticket`. The AI can ask for the requester, the company, the ticket statistics and the conversations in the same call.
6. For a long ticket, it reads the replies and notes page by page with `freshdesk_list_ticket_conversations`. A reply shows who wrote it, so the AI can tell you if the last word was from your team or from the requester.
7. To learn more about the requester, it can read the contact with `freshdesk_get_contact` and the company with `freshdesk_get_company`.

Freshdesk data calls that succeed count toward your plan. The server tries to refund a failed call, and the four UsefulAPI account tools below do not count. Freshdesk can also limit the rate of API calls. If it returns a rate-limit error, wait and then ask again.

## Can it reply to a customer or change a ticket?

Only if the AI calls a write tool. The ticket review above uses read tools only. The server has no tool that deletes a record.

The server has these tools that write Freshdesk data: `freshdesk_create_ticket`, `freshdesk_update_ticket`, `freshdesk_reply_ticket`, `freshdesk_add_note`, `freshdesk_create_contact`, `freshdesk_update_contact` and `freshdesk_create_company`. They act when they are called; they do not enforce a separate preview or confirmation step. `freshdesk_reply_ticket` adds a public reply, and Freshdesk sends it to the requester. `freshdesk_add_note` adds a private note unless the AI sets the note to public. `freshdesk_update_ticket` changes the live ticket, for example its status, its priority or its agent. The fields that the AI leaves out keep their values.

For a review, ask the AI not to call a write tool. If you want a reply, ask the AI to show you the text first. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about Freshdesk data: `freshdesk_usage_status` shows your UsefulAPI usage and plan, `freshdesk_upgrade` returns a payment link or changes an existing subscription, `freshdesk_cancel_subscription` cancels at the end of the current period, and `freshdesk_request_feature` sends us a feature request. A cancellation, and a change from Pro to Pro+, need `confirm: true`.

## What do I need?

Your Freshdesk domain (for example acme, from acme.freshdesk.com) and your API key. The key is in **Profile settings** in Freshdesk. The key belongs to one agent, so the AI sees only what that agent can see.

See the [Freshdesk setup steps](/freshdesk/) for Claude, ChatGPT, Cursor and other MCP clients.
