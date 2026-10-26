---
title: Answer "what does this tenant owe?" from Buildium in Claude
description: Find a tenant, read the lease ledger and the outstanding balance in Buildium from Claude or ChatGPT. The server only reads ledgers and never posts to them.
date: 2026-10-24
products: buildium
---
A tenant calls and asks why their balance is higher this month. The answer is in the lease ledger, but it takes several screens in Buildium to find it. An AI assistant with the Buildium MCP server can read it for you in one question.

## What you need

- A Buildium API key: a Client ID and a Client secret. An administrator first turns on the Open API in Buildium under **Settings → Application settings → Api settings**, then creates the key under **Settings → Developer Tools**. Buildium shows the secret only once.
- On the login page, choose the environment of the key: Production, or Sandbox for a sandbox account.
- The Buildium connector in Claude, ChatGPT or another MCP client. See the [setup steps](/buildium/).

## How it works

1. The AI finds the tenant by name, email, phone or unit with `buildium_list_tenants`, and reads the details with `buildium_get_tenant`.
2. It finds the lease with `buildium_list_leases` or `buildium_get_lease`.
3. It reads the ledger with `buildium_list_lease_transactions`: charges, payments, credits, refunds and deposits, each with a date and an amount.
4. For the overdue amount, it reads `buildium_list_outstanding_balances`, with the 0-30, 31-60, 61-90 and 90+ day buckets.

A prompt to start with:

> Find the tenant in unit 4B at Maple Court. Show the lease ledger for the last three months and explain why this month's balance is higher than last month's.

## Good to know

- The ledger tools only read. This server never posts a charge or a payment to a ledger.
- The AI sees only the data that your Buildium API key can see.
- The same tools answer portfolio questions too, for example: "Which tenants owe more than 60 days of rent?"
