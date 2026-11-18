---
title: Review Fatture in Cloud expenses and the cashbook in ChatGPT
description: Ask ChatGPT or Claude which expenses and supplier invoices Fatture in Cloud holds for this month, when they are due, and what left the cashbook.
date: 2026-11-18
products: fatture-in-cloud
---
You can ask ChatGPT or Claude to review the costs of a month in your Fatture in Cloud company. The AI lists your expenses, such as supplier invoices and other costs, opens the ones you ask about, and compares them with the money in and out of the cashbook (Prima nota). Add `https://fatture-in-cloud.usefulapi.io/mcp` as a connector, sign in with Fatture in Cloud, then ask in plain words.

## Which prompt do I start with?

> List this month's expenses in Fatture in Cloud with the supplier, total and due date. Then show what went out in the cashbook.

You can also ask for one supplier, for one cost category, for a different period, or for the invoices you issued to your customers.

## What does the AI do, step by step?

1. If your sign-in reaches more than one company, it finds the company with `fattureincloud_list_companies`. With one company, the other tools use it automatically.
2. It lists the expenses with `fattureincloud_list_received_documents` and the type expense. This type includes supplier invoices and other costs. The AI can filter by document date, supplier, category and next due date in Fatture in Cloud's filter language, and sort the results. A page has 25 documents by default and at most 100. One call reads one page, so if more documents match, the AI must call again for the next page.
3. It opens a document with `fattureincloud_get_received_document` when you ask for detail. The reply shows the supplier, the items, the payments and the totals.
4. It reads the cashbook with `fattureincloud_list_cashbook_entries` for the two dates of the period. The AI can ask for money in, money out or both, and it can limit the list to one payment account from `fattureincloud_list_settings`. Each entry shows the linked documents and the payment account.
5. For your own sales, it lists invoices with `fattureincloud_list_issued_documents` and opens one with `fattureincloud_get_issued_document`. That reply also shows the payments and the e-invoice status.

Fatture in Cloud data calls that succeed count toward your plan. The server tries to refund a failed call.

## Can it change my documents or send an invoice?

The server has no tool that edits the contents of a record or deletes a record. A send can update the sending status of a document.

The server has these tools that write Fatture in Cloud data: `fattureincloud_create_client`, `fattureincloud_create_product` and `fattureincloud_create_issued_document`. A new document is not sent. Two tools send, and a send cannot be undone: `fattureincloud_send_document_email` e-mails a document to the customer, and `fattureincloud_send_einvoice` sends an e-invoice to the SDI. These tools act when they are called; they do not enforce a separate preview step. Only the e-invoice send has a dry run that checks without sending. The review above uses read tools only. If you choose **Read only** when you connect, the server hides the write tools and refuses calls to them. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about Fatture in Cloud data: `fattureincloud_usage_status` shows your UsefulAPI usage and plan, `fattureincloud_upgrade` returns a payment link or changes an existing subscription, `fattureincloud_cancel_subscription` cancels at the end of the current period, and `fattureincloud_request_feature` sends us a feature request. These tools stay available in a Read only connection. An upgrade can charge your card. A cancellation, and a change from Pro to Pro+, need `confirm: true`.

## What do I need?

A Fatture in Cloud user with access to the company. You sign in with Fatture in Cloud and approve the permissions on its consent page; no API key is needed. You can revoke access in Fatture in Cloud under **Impostazioni → Applicazioni collegate**.

See the [Fatture in Cloud setup steps](/fatture-in-cloud/) for ChatGPT, Claude, Cursor and other MCP clients.
