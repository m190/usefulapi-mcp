---
title: Check yesterday's sales in Lightspeed Retail from ChatGPT
description: ChatGPT or Claude can read Lightspeed Retail (R-Series) sales per store, show what sold, and check stock levels, after you sign in with Lightspeed.
date: 2026-10-22
products: lightspeed-r-series
---
You can ask ChatGPT or Claude how your stores sold yesterday in Lightspeed Retail (R-Series). The AI reads the sales per store, shows which items sold, and checks what is low on stock. To start, add `https://lightspeed-r-series.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> What were my total sales yesterday at each store? Show the 10 items that sold the most and their stock now.

## What does the AI do, step by step?

1. It lists your stores with `lightspeedrseries_list_shops`.
2. It reads the sales for a date range and a store with `lightspeedrseries_list_sales`. With the sale lines, it sees which items sold. One sale in full comes from `lightspeedrseries_get_sale`.
3. It checks stock per item and store with `lightspeedrseries_list_inventory` or `lightspeedrseries_list_items`.
4. It finds open purchase orders with `lightspeedrseries_list_purchase_orders`.

## What can the AI change in Lightspeed?

- Most tools only read. The server can create a customer, change an item's details, and set a stock level, when you ask.
- `lightspeedrseries_update_stock` sets the quantity on hand to a number. It does not add to it. For many items, use an inventory count in Lightspeed.
- The AI can do only what the Lightspeed employee who signs in is allowed to do. You can revoke the access from your Lightspeed Retail account settings.

## What do I need?

A Lightspeed Retail (R-Series) employee login. You sign in with Lightspeed and approve the access. You do not need an API key. See the [setup steps](/lightspeed-r-series/) for Claude, ChatGPT, Cursor and other clients.
