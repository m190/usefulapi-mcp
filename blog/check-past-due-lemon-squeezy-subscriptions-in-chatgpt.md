---
title: Check past-due Lemon Squeezy subscriptions in ChatGPT
description: Ask ChatGPT, Claude or Cursor which Lemon Squeezy subscriptions are past due or unpaid, with the customer and the latest invoices of each.
date: 2026-11-30
products: lemonsqueezy
---
You can ask ChatGPT, Claude or Cursor which of your Lemon Squeezy subscriptions have payment problems. The AI reads the subscriptions that are past due or unpaid, finds their latest subscription invoices, and lists each customer with the amount and the dates. Add `https://lemonsqueezy.usefulapi.io/mcp` as an MCP server, then ask in plain words.

## Which prompt do I start with?

> Which Lemon Squeezy subscriptions are past due or unpaid? Show the customer and the latest invoices for each.

You can also name one store or one product, or ask for subscriptions that are paused or cancelled.

## What does the AI do, step by step?

1. If you have more than one store, it finds the store id with `lemonsqueezy_list_stores`.
2. It reads the subscriptions with `lemonsqueezy_list_subscriptions`, filtered by status. One call takes one status, so the AI calls once for past due and once for unpaid. You can also filter by store, product, variant, customer or email. A page has 10 subscriptions by default and at most 100. One call reads one page, so if more subscriptions match, the AI must call again for the next page.
3. It reads the subscription invoices with `lemonsqueezy_list_subscription_invoices`. This tool filters by store, by invoice status and by the refunded flag, but not by subscription. So the AI reads the invoices page by page and matches each invoice to its subscription. A very large reply is shortened to fit the result size limit, and the reply then says so. In that case the AI should ask again for the same page with a smaller page size, so that it does not skip invoices.
4. To see one subscription or one customer in full, it opens them with `lemonsqueezy_get_subscription` and `lemonsqueezy_get_customer`.
5. It lists each subscription with its status, the customer, the product and the latest invoices.

Lemon Squeezy allows 300 API requests per minute. A long read can reach this limit; the AI should then wait a minute and continue from the same page.

Lemon Squeezy data calls that succeed count toward your plan. The server tries to refund a failed call.

## Can it change a customer's subscription?

The review above uses read tools only. It does not change a subscription.

The server has three tools that write Lemon Squeezy data, and they affect real customers. `lemonsqueezy_update_subscription` changes the plan of a subscription, cancels it or takes back a cancellation, pauses it or changes its billing day. `lemonsqueezy_cancel_customer_subscription` cancels a customer's subscription at the end of its billing period. `lemonsqueezy_create_checkout` makes a new payment link. These tools act when they are called; they do not enforce a separate preview step. If you choose **Read only** when you connect, the server hides the write tools and refuses calls to them. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about Lemon Squeezy data: `lemonsqueezy_usage_status` shows your UsefulAPI usage and plan, `lemonsqueezy_upgrade` returns a payment link, `lemonsqueezy_cancel_subscription` cancels your UsefulAPI subscription at the end of the current period, and `lemonsqueezy_request_feature` sends us a feature request. Do not mix up `lemonsqueezy_cancel_subscription` (your UsefulAPI plan) with `lemonsqueezy_cancel_customer_subscription` (a customer in your store). These tools stay available in a Read only connection. The upgrade tool never charges your card: you confirm a purchase, or a change from Pro to Pro+, on the Stripe payment page. A cancellation needs `confirm: true`.

## What do I need?

A Lemon Squeezy API key. Make it in Lemon Squeezy under **Settings → API**.

See the [Lemon Squeezy setup steps](/lemonsqueezy/) for ChatGPT, Claude, Cursor and other MCP clients.
