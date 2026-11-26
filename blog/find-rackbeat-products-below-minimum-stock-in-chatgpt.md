---
title: Find Rackbeat products below minimum stock in ChatGPT
description: Ask ChatGPT, Claude or Cursor which Rackbeat products have less available stock than their minimum stock, with stock by warehouse location.
date: 2026-12-01
products: rackbeat
---
You can ask ChatGPT, Claude or Cursor which of your Rackbeat products are below their minimum stock. The AI reads your products page by page, compares the available quantity of each product with its minimum stock, and lists the products to review for a reorder. Add `https://rackbeat.usefulapi.io/mcp` as an MCP server, then ask in plain words.

## Which prompt do I start with?

> Which Rackbeat products have less available stock than their minimum stock? Show stock, available and on order.

You can also give a search word to narrow the products checked, or ask for the stock of one product in each warehouse location.

## What does the AI do, step by step?

1. It reads your products with `rackbeat_products`. When Rackbeat gives them, each product comes with its stock quantity, available quantity, quantity in orders, purchased quantity and minimum stock. A page has 20 products by default and at most 100. One call reads one page, so the AI must call again with the next page number until it has read all pages. A very large reply is shortened to fit the result size limit, and the reply then says so. In that case the AI should start the read again with a smaller page size, and keep that size for all pages, so that it does not skip products. If a product call fails because the Rackbeat reply is too large, the AI should also start again with a smaller page size. You can filter by a search word, by barred products and by sellable products.
2. `rackbeat_products` has no filter that compares the available quantity with the minimum stock. So the AI makes this comparison itself for each product. If a product has no available quantity or no minimum stock in the reply, the AI should list it as unknown, not as zero. You can also ask it to leave out products with inventory turned off.
3. To check one product again, it reads it with `rackbeat_get_product` by its product number.
4. If you ask where the stock is, it reads the stock of one product in each warehouse location with `rackbeat_product_locations`. One call gives 25 locations by default and at most 100. If more locations exist, the reply gives the next offset, and the AI must call again until there is none. If a location reply says that it was shortened, the AI should ask again for the same offset with a smaller limit, and not use the offset from the shortened reply. The server reads all locations of the product from Rackbeat on each call. If that reply is too large for the server, the call fails; then use the Rackbeat dashboard, and the AI should say that the location check is not complete.
5. It lists each product below its minimum stock with the product number, the name and the quantities.

This list compares two numbers only. It is not Rackbeat's own reorder calculation, which can also count expected stock and existing orders.

Rackbeat allows 480 API requests per minute for your account. A long read of many pages can reach this limit; the AI should then wait a minute and continue from the same page.

Rackbeat data calls that succeed count toward your plan. The server tries to refund a failed call.

## Can it change my stock or orders?

No. All Rackbeat tools on this server only read data. The server cannot change stock, prices, products or orders. It does not book, cancel or ship an order. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The UsefulAPI account tools are separate. `rackbeat_usage_status` shows your usage and plan. `rackbeat_upgrade` gives plan options or a payment link; a change from Pro to Pro+ requires confirmation. `rackbeat_cancel_subscription` also requires confirmation and ends the subscription at the end of the current period. `rackbeat_request_feature` sends us a feature request. These tools do not change Rackbeat data.

## What do I need?

A Rackbeat API key. Make it in Rackbeat under **Company Settings → API → Create New**, and give it the scopes for the data you want to read.

See the [Rackbeat setup steps](/rackbeat/) for ChatGPT, Claude, Cursor and other MCP clients.
