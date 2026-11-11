---
title: Check SOS Inventory stock against open orders in Claude
description: Ask Claude or ChatGPT to compare SOS Inventory stock with open sales orders and check the purchase orders that are not fully received yet.
date: 2026-11-10
products: sos-inventory
---
You can ask Claude or ChatGPT to compare your SOS Inventory stock with your open sales orders and your open purchase orders. The tools return the SOS records; the AI matches the items and compares the quantities. Add `https://sos-inventory.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> Compare my SOS Inventory stock of "Finished goods" with my open sales and purchase orders. Which items could run short?

Ask the AI to explain how it calculates a shortage, and to tell you when a field is missing or unclear. You can name a location to see the quantities at one warehouse only. You can also start smaller: "Which purchase orders are still waiting to be received?"

## What does the AI do, step by step?

1. It lists your items with `sosinventory_list_items`, filtered by category, type, SKU, tags or free text. If you name a location, it asks SOS for the quantities at that location. Lists return summary records by default, so the AI checks which quantity fields SOS sends back.
2. It can open one item with `sosinventory_get_item` for all its fields, for example a reorder point or a default vendor, if your items have them.
3. It lists the open sales orders with `sosinventory_list_sales_orders`, with the status "open" and summary off. Full records include the line items and the shipped quantities.
4. It lists the open purchase orders with `sosinventory_list_purchase_orders` in the same way, or opens one with `sosinventory_get_purchase_order`. It uses the received quantities, the vendor and the expected receipt date where SOS returns them.
5. For other records, such as item receipts, shipments, work orders or transfers, it uses `sosinventory_list_transactions` and `sosinventory_get_transaction`.

Each list call returns 50 rows by default and at most 200. For the next page, the AI makes another call with the "next start" value from the reply. SOS Inventory refuses requests that come less than half a second apart; the server retries such a refused request up to four times. A large check can need several calls.

## Can it change my stock or my orders?

The tools in the steps above only read. Other tools can create SOS Inventory records: `sosinventory_create_customer`, `sosinventory_create_vendor`, `sosinventory_create_item`, `sosinventory_create_sales_order` and `sosinventory_create_purchase_order`. A new item with opening stock makes SOS book an adjustment, and new orders add quantities to your records. The server has no tool to edit or delete an existing record.

The create tools act when they are called. They do not enforce a separate preview or confirmation step. If you only want a reorder plan, ask the AI to show the plan in the chat and not to create a purchase order yet. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

SOS Inventory gives the server the permissions of the user who signs in. To limit what the AI can see and create, sign in with a SOS user that has only the permissions you want to grant.

The server also has tools for your UsefulAPI account. `sosinventory_usage_status` shows your usage and plan, and `sosinventory_request_feature` sends us a feature request. `sosinventory_upgrade` can give you a checkout link, change an existing Pro subscription to Pro+, or undo a scheduled cancellation. `sosinventory_cancel_subscription` ends the subscription at the end of the paid period. A cancellation, and a change from Pro to Pro+, need `confirm: true`.

## What do I need?

An SOS Inventory user that can read the complete company user list and the items and orders you want to check. The server uses the user list to identify your company. Your SOS Inventory account must allow API access. There is no API key to copy: you sign in with SOS Inventory and approve access.

See the [SOS Inventory setup steps](/sos-inventory/) for Claude, ChatGPT, Cursor and other MCP clients.
