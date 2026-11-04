---
title: Create Gelato store products from templates in Claude
description: Use Claude or ChatGPT to read a Gelato template, choose sizes and artwork, create a store product, and check its publishing status.
date: 2026-11-04
products: gelato
---
You can use the Gelato MCP server in Claude, ChatGPT or Cursor to turn a saved Gelato template into a new product in your connected store. The AI reads the template's variants and image placeholders, helps you choose the sizes and artwork, and checks the product as Gelato prepares its variants and mockups. Add `https://gelato.usefulapi.io/mcp` as a connector to start.

## Which prompt do I start with?

> Use my Gelato store ID and template ID to prepare a new t-shirt product with this artwork URL. Show me the available colors and sizes, then propose the title, description, selected variants and image placement. Do not create anything until I approve. After approval, create it hidden from the online store and check its publishing status.

Provide the store ID, template ID and a public URL for your artwork with the prompt. Your template should already have the product, prices and mockups set up in Gelato.

## What does the AI do step by step?

1. It reads your template with `gelato_get_template`, including the variant IDs and the names of the image placeholders.
2. It lists existing products with `gelato_list_store_products` so you can check whether the product already exists. For a large store, ask it to read the next pages too.
3. It shows the proposed product details in the chat. You choose which template variants to include and which image goes into each placeholder.
4. After your approval, it calls `gelato_create_product_from_template` with those details. Selecting only some variants creates the product with that selection; omitting the selection uses all template variants.
5. It checks the returned product ID with `gelato_get_store_product`. Gelato prepares variants and mockups in the background, so the first response does not mean publishing has finished.

## When does it change my store?

Reading templates and listing products make no changes. The create tool makes a new store product as soon as it is called. The review step in the prompt is an instruction to your AI; the tool has no separate confirmation gate. Your client's tool approval settings also apply.

Keep online-store visibility off while you review the result. Creating a store product does not place a print order. The connector has separate order tools, including tools that can submit an order for production.

This workflow creates a new product. It does not edit an existing listing's artwork, mockups or sizes. Check the returned product before repeating a creation request, to avoid duplicate listings.

## What do I need?

A Gelato API key from **Developer → API Keys**, a connected store, a saved product template and artwork at a public URL. Copy the template ID from Gelato's Templates page and the store ID from the store page URL.

See the [Gelato MCP setup steps](/gelato/) to connect Claude, ChatGPT, Cursor or another MCP client. Gelato's [template creation guide](https://dashboard.gelato.com/docs/guides/create-product-from-template/) explains how to prepare the template and its image placeholders.
