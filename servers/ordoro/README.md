# Ordoro MCP by usefulapi

Use [Ordoro](https://www.ordoro.com) from Claude, Cursor, or any MCP client — read Ordoro orders, products, shipments, suppliers and purchase orders; tag and comment on orders.
Hosted, no local install: connect with your own Ordoro credentials.

**Live endpoint:** `https://ordoro.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/ordoro

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ordoro.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ordoro https://ordoro.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ordoro&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fordoro.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ordoro": {
      "url": "https://ordoro.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ordoro/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Ordoro API client ID and secret**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ordoro_list_orders` | read | List orders |
| `ordoro_get_order` | read | Get an order |
| `ordoro_get_order_counts` | read | Get order counts by status |
| `ordoro_get_order_tracking` | read | Get an order's shipment tracking |
| `ordoro_list_order_comments` | read | List an order's comments |
| `ordoro_list_order_tags` | read | List order tags |
| `ordoro_list_products` | read | List products and inventory |
| `ordoro_get_product` | read | Get a product with stock per warehouse |
| `ordoro_list_warehouses` | read | List warehouses |
| `ordoro_list_suppliers` | read | List suppliers |
| `ordoro_get_supplier` | read | Get a supplier |
| `ordoro_list_shippers` | read | List shipping carrier accounts |
| `ordoro_list_purchase_orders` | read | List purchase orders |
| `ordoro_get_purchase_order` | read | Get a purchase order |
| `ordoro_list_return_orders` | read | List return orders (RMAs) |
| `ordoro_add_order_comment` | **write** | Add a comment to an order |
| `ordoro_add_order_tag` | **write** | Tag an order |
| `ordoro_remove_order_tag` | **write** | Remove a tag from an order |
| `ordoro_usage_status` | meta | Usage status (free-tier meter) |
| `ordoro_upgrade` | meta | Upgrade to Pro (unlimited) |
| `ordoro_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `ordoro_upgrade` (it returns a Stripe Checkout link). Cancel any time with `ordoro_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `ordoro_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Ordoro.
