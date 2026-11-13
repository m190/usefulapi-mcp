---
title: Review outstanding WeFact invoices in ChatGPT
description: Ask ChatGPT to list outstanding WeFact invoices with customer, due date and remaining balance. Review totals by customer and currency.
date: 2026-11-13
products: wefact
---
You can ask ChatGPT which WeFact invoices remain unpaid, which are overdue and how much each customer still owes. The AI reads your invoices and prepares an overview without changing invoices or sending reminders. Add `https://wefact.usefulapi.io/mcp` as a connector and ask your question. The same connector works with Claude, Cursor and other MCP clients.

## Which prompt do I start with?

> Which WeFact invoices remain unpaid? Show customer, invoice number, due date and remaining balance. Total the balances by customer and currency.

You can name a customer or a period. A period filters by invoice date; the outstanding amount is the current balance in WeFact, not a reconstruction of the balance on a past date. Ask the AI to read all pages before giving a total.

## What does the AI do, step by step?

1. It uses `wefact_list_invoices` to retrieve sent and partially paid invoices. The [WeFact status list](https://developer.wefact.com/variable-list) identifies these as statuses 2 and 3. The status filter takes one code per call, so the AI reads the two selections separately. Draft, credit, paid and cancelled invoices are excluded from the outstanding sales invoices.
2. The list includes the invoice number, customer, currency, due date, paid amount and outstanding amount. The AI keeps invoices with a positive outstanding amount and sums the remaining balances separately for each currency. For a partial payment, it uses the amount still owed rather than the original invoice total.
3. Each call returns at most 1,000 invoices. The AI uses the counts and offset in the response to fetch subsequent pages. It should label an incomplete overview as incomplete, and must not add different currencies together without an exchange rate.
4. To inspect one invoice, it uses `wefact_get_invoice` with the invoice number or internal identifier from the list. It can then read invoice lines, VAT, payment details and sending or reminder dates.
5. For additional customer information, it uses `wefact_list_debtors` or `wefact_get_debtor`. This can match the customer number to a company name, contact people and VAT number.

Ask the AI to show overdue invoices separately using their due dates. An invoice can remain unpaid before its payment deadline has passed. You can then decide which customers to contact.

## Can the AI change invoices or send reminders?

The WeFact data tools in this connector only read. They cannot create, change, delete or mark an invoice as paid. They cannot send payment reminders or make payments. The overview gives you information; you handle follow-up in WeFact yourself.

The UsefulAPI account tools are separate. `wefact_usage_status` shows your usage and plan. `wefact_upgrade` provides plan options or a checkout link; a change from Pro to Pro+ requires confirmation. `wefact_cancel_subscription` also requires confirmation and ends the subscription at the end of the current period. With `wefact_request_feature`, you can request a missing feature after discussing it. These tools do not change WeFact invoices.

## What do I need?

A WeFact administration with API access enabled, and your API key from **Settings → API**. If you use an IP whitelist, it must allow the connection. Enter the API key on the connector's login screen, not in a chat message.

See the [WeFact setup steps](/wefact/) to connect ChatGPT, Claude or Cursor. The [WeFact API access documentation](https://support.wefact.nl/instellingen/extern-de-gegevens-in-benaderen-api) explains where to enable the API.
