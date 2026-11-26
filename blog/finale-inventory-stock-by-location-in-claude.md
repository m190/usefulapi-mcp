---
title: Check Finale Inventory stock by location in Claude
description: Ask Claude or ChatGPT how much stock of a product you have at each Finale Inventory location, with the quantities on order and reserved.
date: 2026-11-16
products: finale-inventory
---
You can ask Claude or ChatGPT how much stock you have in Finale Inventory, product by product and location by location. The AI reads your locations and the stock entries of Finale, adds them up per location, and shows the quantity on hand next to the quantities on order and reserved. Add `https://finale-inventory.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> How much stock of SKU 1042 do we have at each Finale location? Show on hand, on order and reserved.

You can also ask about a few products, or about the stock entries at one location, for example the main warehouse.

## What does the AI do, step by step?

1. It lists your locations and sublocations with `finale_list_facilities`. Each location has a name and a facility URL. The other stock tools use that URL to identify the location.
2. If you give a product name and not a SKU, it finds the product with `finale_list_products`. This tool filters by the exact product id, by status and by the date of the last update. It has no search by name, so in a large catalog the AI may need several calls to find a product. `finale_get_product` shows one product in full, for example its suppliers and reorder guidelines.
3. For one product, it calls `finale_get_product_stock`. The tool adds up the stock entries of Finale and returns the totals and the same three numbers per location: quantity on hand, quantity on order (committed purchase orders) and quantity reserved (committed sales orders).
4. For one location, it calls `finale_list_inventory_items` with the facility URL. You get one entry per product, lot and order, with the same three quantities. The filter matches that location only: a sublocation is a different location, so the AI asks for it separately. The default is 100 entries, and the AI can ask for up to 1000. The reply says if more entries match.
5. It puts the facility URLs next to the location names from step 1, so the answer shows names and not URLs.

Finale has no filter for its stock collection. So each call of `finale_get_product_stock` or `finale_list_inventory_items` downloads the whole collection, and Finale counts it as one collection read. Finale allows about 300 collection reads per hour for each account. Ask about a few products at a time, not your whole catalog one product after the other. Finale data calls that succeed count toward your plan. The server tries to refund a failed call.

## Can it change my stock?

No. The server has no tool that changes stock, records a count, ships an order or deletes a record.

`finale_create_draft_purchase_order` writes Finale data. It creates a purchase order for a supplier as a draft. The draft is not committed, received or sent to the supplier, and it does not change stock. You review and commit it in Finale. The tool acts when it is called; it does not enforce a separate preview step. If you choose **Read only** when you connect, the server hides this tool and refuses calls to it. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The server also has tools that are not about Finale data: `finale_usage_status` shows your UsefulAPI usage and plan, `finale_upgrade` returns a payment link or undoes a scheduled cancellation, `finale_cancel_subscription` cancels at the end of the current period, and `finale_request_feature` sends us a feature request. These tools stay available in a Read only connection. The upgrade tool never charges your card: you confirm a purchase, or a change from Pro to Pro+, on the Stripe payment page. A cancellation needs `confirm: true`.

## What do I need?

Your Finale account name (the part after app.finaleinventory.com/ in your Finale address), an API key and its secret. You create the key in Finale under **Application settings → Users → API keys**; this needs the Manage users and permissions permission. A Finale key has full access to the account, and API access depends on your Finale plan.

See the [Finale Inventory setup steps](/finale-inventory/) for Claude, ChatGPT, Cursor and other MCP clients.
