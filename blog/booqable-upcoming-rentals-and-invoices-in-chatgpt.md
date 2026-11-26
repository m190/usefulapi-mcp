---
title: Review upcoming Booqable rentals and their invoices in ChatGPT
description: Ask ChatGPT or Claude which Booqable rental orders start this week, what each order contains, and which invoices are still unpaid.
date: 2026-11-17
products: booqable
---
You can ask ChatGPT or Claude to prepare the rentals of the coming days from your Booqable account. The AI finds the orders that start in a period, reads the customer and the order lines of each one, and checks the invoices and payments. Add `https://booqable.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> Which Booqable orders start this week? For each one, show the customer, the items and whether the invoice is paid.

You can also ask for the orders that end this week, for one customer, for one status such as reserved, or for one tag.

## What does the AI do, step by step?

1. It finds the orders with `booqable_list_orders`. The AI can filter by the start or end of the rental period, by status, by payment status, by customer and by tag, and it can search by order number, customer name or email. A page has 25 orders by default and at most 100. One call reads one page, so if more orders match, the AI must call again for the next page.
2. It opens each order with `booqable_get_order`. By default the reply includes the customer and the order lines, and it shows the totals, the deposit and the payment status. The AI can also ask for the payments, the documents and the notes of the order in the same call.
3. It checks the invoices with `booqable_list_documents`. This tool lists invoices, quotes and contracts, and it can filter by order, by customer, by document type and by status, for example payment due.
4. If you ask for more detail, it lists the payments with `booqable_list_payments`, or the products booked on each order and how many are out or returned with `booqable_list_plannings`.
5. `booqable_get_company` shows your company name, currency and time zone. The AI can call it first to confirm the connection.

Booqable data calls that succeed count toward your plan. The server tries to refund a failed call.

## Can it change an order or take a payment?

It cannot take a payment. The Booqable tools can read payments, but they cannot take or refund a payment or finalize an invoice. No tool deletes a record or cancels an order.

The server has these tools that write Booqable data: `booqable_create_customer`, `booqable_update_customer`, `booqable_create_order`, `booqable_update_order`, `booqable_book_product`, `booqable_transition_order_status` and `booqable_create_note`. They act when they are called; they do not enforce a separate preview step. The review above uses read tools only. If you choose **Read only** when you connect, the server hides the write tools and refuses calls to them. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about Booqable data: `booqable_usage_status` shows your UsefulAPI usage and plan, `booqable_upgrade` returns a payment link or undoes a scheduled cancellation, `booqable_cancel_subscription` cancels at the end of the current period, and `booqable_request_feature` sends us a feature request. These tools stay available in a Read only connection. The upgrade tool never charges your card: you confirm a purchase, or a change from Pro to Pro+, on the Stripe payment page. A cancellation needs `confirm: true`.

## What do I need?

Your Booqable company slug (acme, from acme.booqable.com) and an access token. You create the token in Booqable under **Settings → User settings → Authentication methods**. Booqable includes API access in its Grow and Scale plans.

See the [Booqable setup steps](/booqable/) for Claude, ChatGPT, Cursor and other MCP clients.
