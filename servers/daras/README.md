# Daras MCP by usefulapi

Use your [Daras](https://daras.com.tr) account from Claude, Cursor, or any MCP client. Read products, stock, orders, returns and shipments, and update variant prices and warehouse stock. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://daras.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://daras.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http daras https://daras.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=daras&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdaras.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "daras": {
      "url": "https://daras.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Daras credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/daras/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Daras merchant API key** (Daras admin → Developers → API keys, with the scopes you need) and a **store id** (the same admin). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `daras_list_products` | read | List products |
| `daras_get_product` | read | Get a product |
| `daras_list_categories` | read | List categories |
| `daras_list_collections` | read | List collections |
| `daras_get_collection` | read | Get a collection |
| `daras_list_low_stock` | read | List low-stock variants |
| `daras_list_warehouses` | read | List warehouses |
| `daras_list_warehouse_stock` | read | List stock in a warehouse |
| `daras_list_orders` | read | List orders for a customer |
| `daras_get_order` | read | Get an order |
| `daras_list_order_events` | read | List order events |
| `daras_list_returns` | read | List returns |
| `daras_get_return` | read | Get a return |
| `daras_list_customers` | read | List customers |
| `daras_get_customer` | read | Get a customer |
| `daras_list_fulfillment_orders` | read | List fulfillment orders |
| `daras_get_fulfillment_order` | read | Get a fulfillment order |
| `daras_list_carriers` | read | List shipping carriers |
| `daras_track_shipment` | read | Track a shipment |
| `daras_list_webhooks` | read | List webhooks |
| `daras_update_variant` | **write** | Update a product variant |
| `daras_set_warehouse_stock` | **write** | Set warehouse stock |
| `daras_usage_status` | meta | Usage status (free-tier meter) |
| `daras_request_feature` | meta | Request a missing feature |
| `daras_upgrade` | meta | Upgrade to Pro or Pro+ |
| `daras_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `daras_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `daras_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `daras_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
