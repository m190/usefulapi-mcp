---
title: Make Printful mockups for a new design from Claude or Cursor
description: Claude, ChatGPT or Cursor can pick a Printful product, check the print file size, upload your design, make mockups and estimate the order cost.
date: 2026-10-27
products: printful
---
You can make Printful mockups for a new design from Claude, ChatGPT or Cursor. The AI finds a blank product and its variants, checks the print area sizes, adds your design to the File Library, and gets the mockup images. It can also estimate what an order costs. To start, add `https://printful.usefulapi.io/mcp` to your AI client as a connector.

## Which prompt do I start with?

> Find a unisex t-shirt in the Printful catalog in black and white. Add my design from this URL, make front mockups for both colors, and estimate the cost of one shirt shipped to Germany.

## What does the AI do, step by step?

1. It finds the blank product with `printful_list_catalog_categories` and `printful_list_catalog_products`, and reads its sizes and colors with `printful_get_catalog_product`.
2. It reads the print areas and the required pixel size and DPI with `printful_get_printfiles`.
3. It adds your design from a public URL with `printful_add_file`, and checks it with `printful_get_file` until the processing is done.
4. It starts the mockups with `printful_create_mockup_task`, and gets the image links with `printful_get_mockup_task` when the task is complete.
5. It prices one order with `printful_estimate_order_costs`. This creates no order.
6. It lists your existing products, so you can compare: `printful_list_sync_products` for a Shopify, Etsy or other integrated store, `printful_list_store_products` for a Manual-order or API store.

## Can the AI place an order or charge me?

- `printful_create_draft_order` creates an order as a draft only, and nothing is charged or produced. This server has no tool that confirms an order. You confirm a draft in the Printful dashboard, where you see the charge.
- `printful_estimate_order_costs` and the mockup tools create no order.
- Printful limits mockup tasks to a few per minute, so a large set of mockups takes time.

## What do I need?

A Printful Private Token. Create it at developers.printful.com under **Your tokens → Create**, with the scopes you need. For an account-level token, also enter the Store ID when you connect. Private tokens expire and cannot be refreshed: when yours expires, create a new one and connect again. See the [setup steps](/printful/) for Claude, ChatGPT, Cursor and other clients.
