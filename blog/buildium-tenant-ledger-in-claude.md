---
title: Answer "what does this tenant owe?" from Buildium in Claude
description: Claude or ChatGPT can find a tenant in Buildium, read the lease ledger and explain the balance. The server only reads ledgers and never posts to them.
date: 2026-10-19
products: buildium
---
You can ask Claude or ChatGPT what a Buildium tenant owes and why. The AI finds the tenant, reads the lease ledger and the overdue amount, and explains the balance in one answer. To start, add `https://buildium.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> Find the tenant in unit 4B at Maple Court. Show the lease ledger for the last three months and explain why this month's balance is higher than last month's.

## What does the AI read, step by step?

1. It finds the tenant by name, email, phone or unit with `buildium_list_tenants`, and reads the details with `buildium_get_tenant`.
2. It finds the lease with `buildium_list_leases` or `buildium_get_lease`.
3. It reads the ledger with `buildium_list_lease_transactions`: charges, payments, credits, refunds and deposits, each with a date and an amount.
4. For the overdue amount, it reads `buildium_list_outstanding_balances`, with the 0-30, 31-60, 61-90 and 90+ day buckets.

## Can the AI change the ledger?

- No. The ledger tools only read. This server never posts a charge or a payment to a ledger.
- The AI sees only the data that your Buildium API key can see.
- The same tools answer portfolio questions too, for example: "Which tenants owe more than 60 days of rent?"

## What do I need?

- A Buildium API key: a Client ID and a Client secret. An administrator first turns on the Open API in Buildium under **Settings → Application settings → Api settings**, then creates the key under **Settings → Developer Tools**. Buildium shows the secret only once.
- On the login page, choose the environment of the key: Production, or Sandbox for a sandbox account.
- See the [setup steps](/buildium/) for Claude, ChatGPT, Cursor and other clients.
