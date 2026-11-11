---
title: Review STEL Order invoices by client and product in ChatGPT
description: Ask ChatGPT or Claude to read your STEL Order invoices for a period and sum the invoice lines by client and by product.
date: 2026-11-11
products: stel-order
---
You can ask ChatGPT or Claude to review the invoices in your STEL Order account for a period and sum them up by client and by product. The AI reads the invoices and their lines in the date range, then puts the client names next to the totals. Add `https://stel-order.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> Break down my STEL Order invoices from October by client and by product, with a total for each.

Name the period in plain words. You can also limit the review to one client, ask for the top products only, or ask which invoices are not paid yet.

## What does the AI do, step by step?

1. It can check which company the API key belongs to with `stelorder_get_company`.
2. It lists the invoices of the period with `stelorder_list_ordinary_invoices`, using a start date and an end date in UTC. Each invoice comes with its reference, title, date, client id and document state id. One call returns 100 invoices by default and at most 500. If there are more, the AI must make another call with a higher start offset, so ask it to read all pages.
3. The list reply can already include the lines of each invoice (item name, item reference, units and line amount), the invoice total, the tax total, a tax breakdown for each rate and the paid amount. To read one invoice in full, the AI opens it with `stelorder_get_ordinary_invoice`. Each tool call that succeeds counts toward your plan; a failed call does not. For a long period, start with one month or with one client.
4. The invoices name the client only by id. It finds the client names and tax numbers with `stelorder_list_clients`, or reads one client with `stelorder_get_client`.
5. The lines already carry the item name and reference, and a line can be a product or a service. For more about a product, such as its category or whether it is inactive, it can use `stelorder_list_products` or `stelorder_get_product`.
6. If you also want to know what is still due, it lists the unpaid payment items with `stelorder_list_invoice_receipts` and matches them to the reviewed invoices by the invoice id in each item.

Ask the AI to say whether a total includes tax. The invoice gives the total, the tax total and the tax breakdown separately. The document state is only an id, and the server has no tool that gives the names of the states. If you want to leave out some states, check their ids in STEL Order first.

## Can it change or delete my invoices?

No. The invoice tools only read. The server has no tool that creates, changes or deletes an invoice, a receipt, an estimate, an order, a product or a stock movement.

The server has three tools that write STEL Order data: `stelorder_create_client`, `stelorder_update_client` and `stelorder_create_contact`. They act when they are called; they do not enforce a separate preview or confirmation step. `stelorder_update_client` changes the live client record, and the fields you leave out keep their values. For a review like this one, ask the AI not to call a write tool. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about STEL Order data: `stelorder_usage_status` shows your UsefulAPI usage and plan, `stelorder_upgrade` returns a payment link or changes an existing subscription, `stelorder_cancel_subscription` cancels at the end of the current period, and `stelorder_request_feature` sends us a feature request. A cancellation, and a change from Pro to Pro+, need `confirm: true`.

## What do I need?

A STEL Order API key from a superadmin account: in STEL Order, open **Functionalities → API** and create a key or use an existing one.

See the [STEL Order setup steps](/stel-order/) for ChatGPT, Claude, Cursor and other MCP clients.
