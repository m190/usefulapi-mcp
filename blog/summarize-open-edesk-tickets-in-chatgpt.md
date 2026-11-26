---
title: Summarize open eDesk tickets in ChatGPT
description: Ask ChatGPT or Claude which eDesk support tickets are open, what each customer wrote, and which order each ticket is about, before you reply.
date: 2026-11-23
products: edesk
---
You can ask ChatGPT or Claude to go through your open eDesk tickets before you start replying. The AI lists the tickets from all your sales channels, opens each one, reads the customer's messages, and tells you in a few lines what each customer wants. Add `https://edesk.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> Which eDesk tickets are open and were updated since yesterday? For each one, tell me what the customer wants.

You can also ask for one status such as Unread or Pending, one ticket type such as ReturnRequest, one channel such as your Amazon store, or the tickets of one agent.

## What does the AI do, step by step?

1. It finds the tickets with `edesk_list_tickets`. The AI can filter by status, by ticket type, by channel, by owner, by contact, by linked order and by the date of the last update. The reply shows the subject, the channel, the owner, the linked sales order and the ids of the messages. A page has 25 tickets by default and at most 100. One call reads one page, so if more tickets match, the AI must call again with the next page number.
2. It opens each ticket with `edesk_get_ticket`. This shows the status, the owner, the tags, the custom fields, the linked sales order and the ids of all messages on the ticket.
3. It reads the messages with `edesk_get_message`. One call reads one message or internal note, with its text, direction, author and attachments. It reads as many messages as it needs to understand the request, then gives you a short summary for each matching ticket.
4. If a ticket is about an order and you ask for order details, it opens the order with `edesk_get_sales_order`. This shows the items, the amounts, the addresses, the tracking codes and the delivery dates.
5. To show names instead of ids, it can read your channels with `edesk_list_channels` and your agents with `edesk_list_users`.

eDesk data calls that succeed count toward your plan, and each opened ticket and each message read is one call. The server tries to refund a failed call.

## Can it reply to a customer without my approval?

The review above uses read tools only. No tool deletes a ticket, a message or an order.

The server has these tools that write eDesk data: `edesk_update_ticket` changes the status, owner, tags or subject of a ticket. `edesk_add_ticket_note` and `edesk_add_order_note` add internal notes that are not sent to the customer. `edesk_reply_to_ticket` sends a reply to the default recipients of the channel. On a Mirakl channel, the setting "Default messages recipients" can select the customer, the operator or both, and the API cannot choose the recipients. If the recipients matter, use the eDesk reply box. eDesk queues the reply for delivery to the marketplace or email channel, and it cannot be recalled after that. These tools act when they are called; they do not enforce a separate preview step. If you want to approve the text first, ask the AI to write a draft in the chat. If you choose **Read only** when you connect, the server hides the write tools and refuses calls to them. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about eDesk data: `edesk_usage_status` shows your UsefulAPI usage and plan, `edesk_upgrade` returns a payment link or undoes a scheduled cancellation, `edesk_cancel_subscription` cancels at the end of the current period, and `edesk_request_feature` sends us a feature request. These tools stay available in a Read only connection. The upgrade tool never charges your card: you confirm a purchase, or a change from Pro to Pro+, on the Stripe payment page. A cancellation needs `confirm: true`.

## What do I need?

An eDesk API token. You create it at **dashboard.edesk.com/api-token**. The eDesk API is part of the Enterprise plan, and the token acts with the permissions of the user who created it.

See the [eDesk setup steps](/edesk/) for ChatGPT, Claude, Cursor and other MCP clients.
