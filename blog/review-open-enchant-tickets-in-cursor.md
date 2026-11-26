---
title: Review open Enchant tickets in Cursor
description: Ask Cursor, Claude or ChatGPT which Enchant help desk tickets are open, read each conversation, and get a short note on what each customer needs.
date: 2026-11-25
products: enchant
---
You can ask Cursor, Claude or ChatGPT to go through your open Enchant tickets before you start replying. The AI lists the open tickets, opens each conversation, and tells you in a few lines what each customer needs. Add `https://enchant.usefulapi.io/mcp` as an MCP server, then ask in plain words.

## Which prompt do I start with?

> Which Enchant tickets are open? Read each conversation and tell me what the customer needs.

You can also ask for the unassigned tickets only, the tickets of one agent, one inbox, one label, or the tickets updated since yesterday.

## What does the AI do, step by step?

1. It finds the tickets with `enchant_list_tickets`. The AI can filter by state (open, hold or closed), by inbox, by assigned agent (or unassigned), by label, by ticket type such as email or chat, and by the time a ticket was created or last updated. The newest tickets come first by default. Each result has a short summary of the ticket. A page has 10 tickets by default and at most 100. One call reads one page, so if more tickets match, the AI must call again for the next page. Page numbers stop at 10,000 results; past that, the AI filters by creation time instead.
2. It opens each ticket with `enchant_get_ticket` and asks for the messages. This shows the full conversation: the customer's emails, your replies and the internal notes. The AI can also ask for the customer, the assigned agent, the inbox and the labels in the same call. Enchant counts one extra API credit for each of these that the AI asks for.
3. To show names instead of ids, it can read your agents with `enchant_list_users`.
4. If you ask about one customer, it finds that customer by email address with `enchant_list_customers` and opens the profile with `enchant_get_customer`.
5. It gives you a short note for each ticket: who wrote, what they need, and what is still open.

Enchant data calls that succeed count toward your plan, and each opened ticket is one call. The server tries to refund a failed call.

## Can it reply to a customer without my approval?

The review above uses read tools only. No tool deletes a ticket.

The server has tools that write Enchant data. `enchant_reply_to_ticket` sends a real email to the address that the AI gives. `enchant_add_note` adds an internal note that is not sent to the customer. `enchant_update_ticket` changes the state, the agent, the inbox, the subject or the labels of a ticket, and it can mark a ticket as spam or move it to the trash. `enchant_add_ticket_labels` and `enchant_remove_ticket_labels` change labels. `enchant_create_ticket`, `enchant_create_customer`, `enchant_update_customer` and `enchant_add_customer_contact` create or change records, and `enchant_delete_customer_contact` removes a contact from a customer. These tools act when they are called; they do not enforce a separate preview step. If you want to approve a reply first, ask the AI to write a draft in the chat. If you choose **Read only** when you connect, the server hides the write tools and refuses calls to them. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about Enchant data: `enchant_usage_status` shows your UsefulAPI usage and plan, `enchant_upgrade` returns a payment link or undoes a scheduled cancellation, `enchant_cancel_subscription` cancels at the end of the current period, and `enchant_request_feature` sends us a feature request. These tools stay available in a Read only connection. The upgrade tool never charges your card: you confirm a purchase, or a change from Pro to Pro+, on the Stripe payment page. A cancellation needs `confirm: true`.

## What do I need?

Your Enchant help desk identifier (**acme** for acme.enchant.com) and an API access token. For the token, install the **API** app in your help desk **Settings → Apps** and copy its access token. The API is available on paid Enchant plans.

See the [Enchant setup steps](/enchant/) for Cursor, Claude, ChatGPT and other MCP clients.
