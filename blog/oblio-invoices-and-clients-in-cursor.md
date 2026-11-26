---
title: Check Oblio invoices and clients in Cursor
description: Ask Cursor, Claude or ChatGPT about your Oblio invoices: which ones are not collected yet, what a client was billed, and the next number in each series.
date: 2026-11-21
products: oblio
---
You can ask Cursor, Claude or ChatGPT about the invoices in your Oblio account. The AI finds your companies, lists the invoices of a period, shows which invoices are not collected yet, finds a client and opens one invoice with its PDF link and payments. Add `https://oblio.usefulapi.io/mcp` as an MCP server, then ask in plain words.

## Which prompt do I start with?

> Which of my Oblio invoices from this month are not collected yet? Group them by client.

You can also name one client, one series or a date range, or ask for the e-Factura (SPV) status of each invoice.

## What does the AI do, step by step?

1. It lists the companies of your Oblio account with `oblio_list_companies`. The invoice, client and series tools below need the CIF of your company. If you have more than one company, the AI asks which one, or you name it in the prompt.
2. It lists the invoices with `oblio_list_invoices`. It can filter by issue date, series, number, client (CIF, e-mail or client code), and by the collected, canceled and draft flags. It can include the invoice lines, the payments and the e-Factura (SPV) status. A page has up to 100 invoices. If more exist, the AI must call again for the next page. For the start prompt, it sets the issue dates of this month and `collected: false`, reads every page, and groups the invoices by client.
3. To find a client by name or CIF, it uses `oblio_list_clients`. A page has up to 250 clients.
4. If you ask to open one invoice, it reads the document by series and number with `oblio_get_document`: the type, the series, the number, the link to the PDF and the payments recorded on it.
5. If you ask about numbering, it lists the document series with `oblio_list_series`: the type (invoice, proforma or notice), the name and the next number.

Oblio data calls that succeed count toward your plan. The server tries to refund a failed call.

## Can it issue or cancel an invoice by mistake?

The check above uses read tools only. An issued invoice in Oblio is a fiscal document with no draft state. So the server refuses `oblio_issue_invoice`, `oblio_collect_invoice`, `oblio_cancel_document`, `oblio_restore_document` and `oblio_send_einvoice_to_spv` before any request to Oblio, unless the call carries `confirm: true`. The tool description tells the AI to set it only after you confirm the exact action. `oblio_create_webhook` and `oblio_delete_webhook` need `confirm: true` too.

`oblio_create_proforma` does not need `confirm: true`. A proforma is not a fiscal invoice, but it takes the next number of its series at once. The server has no tool that deletes a document, and it never asks Oblio to e-mail a document to your client.

If you choose **Read only** when you connect, the server hides all these tools and refuses calls to them. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about Oblio data: `oblio_usage_status` shows your UsefulAPI usage and plan, `oblio_upgrade` returns a payment link or undoes a scheduled cancellation, `oblio_cancel_subscription` cancels at the end of the current period, and `oblio_request_feature` sends us a feature request. These tools stay available in a Read only connection. The upgrade tool never charges your card: you confirm a purchase, or a change from Pro to Pro+, on the Stripe payment page. A cancellation needs `confirm: true`.

## What do I need?

Your Oblio login e-mail and your Oblio API secret. You find the secret in Oblio under **Setari > Date Cont**. The secret changes when you reset your Oblio password, so connect again after a reset.

See the [Oblio setup steps](/oblio/) for Cursor, Claude, ChatGPT and other MCP clients.
