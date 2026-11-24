---
title: Find unpaid Service Fusion invoices in ChatGPT
description: Ask ChatGPT, Claude or Cursor which Service Fusion invoices are not paid yet, grouped by customer, with the job behind each invoice.
date: 2026-11-26
products: service-fusion
---
You can ask ChatGPT, Claude or Cursor which of your recent Service Fusion invoices are not paid yet. The AI reads your invoices page by page, keeps the ones that are not marked as paid, and groups them by customer. If you ask, it also finds the job behind an invoice. Add `https://service-fusion.usefulapi.io/mcp` as an MCP server, then ask in plain words.

## Which prompt do I start with?

> Which Service Fusion invoices from the last 30 days are not paid yet? Group them by customer.

You can also ask for one customer only, for a longer period, or for the job and the payments behind one invoice.

## What does the AI do, step by step?

1. It reads your invoices with `servicefusion_list_invoices`. Each invoice has its number, total, paid flag, dates and customer. The Service Fusion API has no invoice filters, so the AI cannot ask for unpaid invoices or for one customer directly. Instead, it sorts the invoices with the newest date first and reads them page by page. A page has 10 invoices by default and at most 50. One call reads one page, and the reply gives the number of the next page. When a page has only invoices older than the period you asked for, the AI does not need the next pages.
2. It keeps the invoices that are not marked as paid and groups them by customer, with the invoice number, date and total.
3. To see one invoice again, it opens it with `servicefusion_get_invoice`.
4. To find the job behind an invoice, it searches jobs by invoice number with `servicefusion_list_jobs`. The same call can include the payments, the invoices and the assigned technicians of each job. `servicefusion_get_job` opens one job with the same detail.
5. If you ask about one customer, it can look up the customer and the contacts with `servicefusion_list_customers` and `servicefusion_get_customer`.

Service Fusion data calls that succeed count toward your plan, and each page of invoices is one call. Ask for pages of 50 invoices and a short period to use fewer calls. The server tries to refund a failed call.

## Can it change my invoices?

No tool changes, sends, deletes or marks an invoice as paid. The review above uses read tools only.

The server has three tools that write Service Fusion data. `servicefusion_create_customer`, `servicefusion_create_job` and `servicefusion_create_estimate` create a new customer, job or estimate. A new job appears on your team's schedule. These records cannot be deleted through the API, and a second call creates a second record. These tools act when they are called; they do not enforce a separate preview step. If you choose **Read only** when you connect, the server hides the write tools and refuses calls to them. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about Service Fusion data: `servicefusion_usage_status` shows your UsefulAPI usage and plan, `servicefusion_upgrade` returns a payment link or changes an existing subscription, `servicefusion_cancel_subscription` cancels at the end of the current period, and `servicefusion_request_feature` sends us a feature request. These tools stay available in a Read only connection. An upgrade can charge your card. A cancellation, and a change from Pro to Pro+, need `confirm: true`.

## What do I need?

A Client ID and a Client Secret from Service Fusion. In Service Fusion, open **Admin → Developer Settings → API Credentials** (OAuth Consumer) and copy both. The credentials act with your user's permissions. API access is included with the Service Fusion PRO plan; on other plans, ask Service Fusion support to turn it on.

See the [Service Fusion setup steps](/service-fusion/) for ChatGPT, Claude, Cursor and other MCP clients.
