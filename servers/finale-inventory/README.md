# Finale Inventory MCP by usefulapi

Use [Finale Inventory](https://www.finaleinventory.com) from Claude, Cursor, or any MCP client — products, stock per facility, orders, shipments, transfers and stock changes, plus draft purchase orders.
Hosted, no local install: connect with your own Finale Inventory credentials.

**Live endpoint:** `https://finale-inventory.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/finale-inventory

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://finale-inventory.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http finale-inventory https://finale-inventory.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=finale-inventory&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffinale-inventory.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "finale-inventory": {
      "url": "https://finale-inventory.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Finale Inventory credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/finale-inventory/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `finale_list_facilities` | read | List locations (facilities) |
| `finale_list_products` | read | List products |
| `finale_get_product` | read | Get a product |
| `finale_list_orders` | read | List orders (sales and purchase) |
| `finale_get_order` | read | Get an order |
| `finale_list_shipments` | read | List shipments |
| `finale_get_shipment` | read | Get a shipment |
| `finale_list_parties` | read | List customers and suppliers |
| `finale_list_inventory_items` | read | List stock entries |
| `finale_get_product_stock` | read | Get stock levels of a product |
| `finale_list_inventory_transfers` | read | List stock transfers |
| `finale_list_stock_changes` | read | List stock changes (inventory variances) |
| `finale_create_draft_purchase_order` | **write** | Create a draft purchase order (WRITE) |
| `finale_usage_status` | meta | Usage status (free-tier meter) |
| `finale_request_feature` | meta | Request a missing feature |
| `finale_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `finale_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `finale_upgrade` (it returns a Stripe Checkout link). Cancel any time with `finale_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `finale_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Finale Inventory.
