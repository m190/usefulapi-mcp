---
title: Check unexplained FreeAgent bank transactions in Cursor
description: Ask Cursor, Claude or ChatGPT which FreeAgent bank transactions still need an explanation, with account balances and the open invoices and bills to match.
date: 2026-11-22
products: freeagent
---
You can ask Cursor, Claude or ChatGPT about the bank accounts in your FreeAgent books. The AI lists your bank, credit card and PayPal accounts with their balances, finds the transactions that are not explained yet, and shows the open invoices and bills that can match them. Add `https://freeagent.usefulapi.io/mcp` as an MCP server, sign in with FreeAgent, then ask in plain words.

## Which prompt do I start with?

> Which FreeAgent bank transactions from this month are still unexplained? List them per account.

You can also name one account or a date range, or ask the AI to match each transaction to an open invoice or bill.

## What does the AI do, step by step?

1. It can read your company with `freeagent_get_company`: the name, the type, the currency and the VAT status.
2. It lists your accounts with `freeagent_list_bank_accounts`. Each account comes with its current balance. It can show only bank, credit card or PayPal accounts.
3. For each account, it lists the transactions with `freeagent_list_bank_transactions`. For the start prompt, it sets the unexplained view and the first and last day of this month. Other views show explained, manual or imported transactions, or the ones marked for review. It can also show only the transactions of the latest statement upload. A page has 25 transactions by default and up to 100. If more exist, the AI must call again for the next page.
4. If you ask for matches, it lists the open or overdue sales invoices with `freeagent_list_invoices` and the open or overdue supplier bills with `freeagent_list_bills`. It compares the amounts, the dates and the names. A match is only a suggestion: you explain the transaction in FreeAgent.
5. To find a client or supplier by name, it uses `freeagent_list_contacts`.

FreeAgent data calls that succeed count toward your plan. The server tries to refund a failed call.

## Can it change my bank records?

No. The server has no tool that explains, edits or deletes a bank transaction, and no tool that uploads a statement. It never deletes a record, never e-mails an invoice and never marks an invoice as sent.

The server can make four everyday changes when you ask: `freeagent_create_contact`, `freeagent_update_contact`, `freeagent_create_draft_invoice` and `freeagent_create_timeslip`. A draft invoice is not sent and is not income until you mark it as sent in FreeAgent. These tools do not ask for a separate confirmation. If you choose **Read only** when you connect, the server hides these four tools and refuses calls to them. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about FreeAgent data: `freeagent_usage_status` shows your UsefulAPI usage and plan, `freeagent_upgrade` returns a payment link or changes an existing subscription, `freeagent_cancel_subscription` cancels at the end of the current period, and `freeagent_request_feature` sends us a feature request. These tools stay available in a Read only connection. An upgrade can charge your card. A cancellation, and a change from Pro to Pro+, need `confirm: true`.

## What do I need?

A FreeAgent login. You sign in with FreeAgent and approve access; the server can do only what your FreeAgent user is allowed to do, so banking needs a user with access to bank accounts. You can revoke the access later in FreeAgent, in its list of approved applications.

See the [FreeAgent setup steps](/freeagent/) for Cursor, Claude, ChatGPT and other MCP clients.
