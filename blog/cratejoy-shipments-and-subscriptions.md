---
title: Check Cratejoy shipments and subscriptions from Claude or Cursor
description: Claude, ChatGPT or Cursor can list your Cratejoy subscriptions and shipments by status, find what is not shipped yet, and read one shipment in full.
date: 2026-10-27
products: cratejoy
---
You can ask Claude, ChatGPT or Cursor which Cratejoy boxes still have to ship and which subscriptions are active. The AI lists the subscriptions and the shipments by status, then reads one shipment with its customer and tracking number. To start, add `https://cratejoy.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> List the shipments created this month that are not shipped yet, with the customer and the target date. Then count the active subscriptions per product.

## What does the AI do, step by step?

1. It lists the subscriptions by status and end date with `cratejoy_list_subscriptions`, and the products with `cratejoy_list_products`.
2. It lists the orders by payment status and date with `cratejoy_list_orders`.
3. It lists the shipments by status and creation date with `cratejoy_list_shipments`: target date, ship date and tracking number.
4. It reads one shipment with `cratejoy_get_shipment`, and can include the customer and the ship address.

## Can the AI change a subscriber's subscription?

- The tools in the steps above only read data.
- Other tools change a subscriber's subscription: `cratejoy_skip_subscription_renewal` skips the next renewal or undoes a skip, and `cratejoy_cancel_customer_subscription` cancels the subscription. Each call must carry `confirm: true`, but this does not prove that you approved the change. It is not a preview: with it, the change happens at once.
- Tell the AI to only read, and to ask you before any change.
- Your AI client can ask you to approve each call that creates or changes data. This depends on the client and its settings. The tools themselves do not ask.

## What do I need?

A Cratejoy Client ID and Client Secret Key. A store admin creates them in the Cratejoy Seller Portal under **Settings → API → Generate a new Key**. The secret is shown only once. See the [setup steps](/cratejoy/) for Claude, ChatGPT, Cursor and other clients.
