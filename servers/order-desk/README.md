# Order Desk MCP by usefulapi

Use [Order Desk](https://www.orderdesk.com) from Claude, Cursor, or any MCP client — search orders and inventory items, read orders with their items and shipments, plus labelled writes to create or update orders, add items, notes and shipments, move orders between folders and manage inventory.
Hosted, no local install: connect with your Order Desk Store ID and API key.

**Live endpoint:** `https://order-desk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/order-desk

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://order-desk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http order-desk https://order-desk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=order-desk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Forder-desk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "order-desk": {
      "url": "https://order-desk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Order Desk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/order-desk/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `orderdesk_get_store` | read | Get store settings and folders |
| `orderdesk_list_orders` | read | List orders |
| `orderdesk_get_order` | read | Get order |
| `orderdesk_list_order_items` | read | List order items |
| `orderdesk_list_order_shipments` | read | List order shipments |
| `orderdesk_create_order` | **write** | Create order |
| `orderdesk_update_order` | **write** | Update order |
| `orderdesk_add_order_item` | **write** | Add order item |
| `orderdesk_add_order_note` | **write** | Add order history note |
| `orderdesk_add_shipment` | **write** | Add shipment |
| `orderdesk_move_orders` | **write** | Move orders to a folder |
| `orderdesk_list_inventory_items` | read | List inventory items |
| `orderdesk_get_inventory_item` | read | Get inventory item |
| `orderdesk_create_inventory_item` | **write** | Create inventory item |
| `orderdesk_update_inventory_item` | **write** | Update inventory item |
| `orderdesk_usage_status` | meta | Usage status (free-tier meter) |
| `orderdesk_request_feature` | meta | Request a missing feature |
| `orderdesk_upgrade` | meta | Upgrade to Pro (unlimited) |
| `orderdesk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per store) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `orderdesk_upgrade` (it returns a Stripe Checkout link). Cancel any time with `orderdesk_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `orderdesk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Order Desk.
