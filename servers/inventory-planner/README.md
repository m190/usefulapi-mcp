# Inventory Planner MCP by usefulapi

Use [Inventory Planner](https://www.inventory-planner.com) from Claude, Cursor, or any MCP client — variants with forecast and replenishment metrics, vendors and purchase orders, plus draft purchase orders.
Hosted, no local install: connect with your own Inventory Planner credentials.

**Live endpoint:** `https://inventory-planner.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/inventory-planner

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://inventory-planner.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http inventory-planner https://inventory-planner.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=inventory-planner&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finventory-planner.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "inventory-planner": {
      "url": "https://inventory-planner.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Inventory Planner credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/inventory-planner/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `inventoryplanner_list_variants` | read | List variants (forecast and replenishment) |
| `inventoryplanner_get_variant` | read | Get variant |
| `inventoryplanner_list_variant_vendors` | read | List a variant's vendors |
| `inventoryplanner_get_variant_vendor` | read | Get a variant's vendor terms |
| `inventoryplanner_list_purchase_orders` | read | List purchase orders (and transfers, assembly orders) |
| `inventoryplanner_get_purchase_order` | read | Get purchase order |
| `inventoryplanner_list_purchase_order_items` | read | List purchase order line items |
| `inventoryplanner_get_purchase_order_connections` | read | Get purchase order connection status |
| `inventoryplanner_get_purchase_order_stock_update` | read | Get purchase order stock update (preview) |
| `inventoryplanner_create_draft_purchase_order` | **write** | Create a draft purchase order |
| `inventoryplanner_update_draft_purchase_order` | **write** | Edit a draft purchase order |
| `inventoryplanner_usage_status` | meta | Usage status (free-tier meter) |
| `inventoryplanner_request_feature` | meta | Request a missing feature |
| `inventoryplanner_upgrade` | meta | Upgrade to Pro (unlimited) |
| `inventoryplanner_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `inventoryplanner_upgrade` (it returns a Stripe Checkout link). Cancel any time with `inventoryplanner_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `inventoryplanner_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Inventory Planner.
