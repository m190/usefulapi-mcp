# ShipStation MCP by usefulapi

Use your [ShipStation](https://www.shipstation.com) account from Claude, Cursor, or any MCP client. Read orders, shipments, carriers, rate quotes and stores, and create, hold, tag or mark orders shipped. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://shipstation.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shipstation.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shipstation https://shipstation.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shipstation&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshipstation.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shipstation": {
      "url": "https://shipstation.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ShipStation credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shipstation/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **ShipStation API Key** and **API Secret** (Settings, API Settings; your plan must include API access). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shipstation_list_orders` | read | List orders |
| `shipstation_get_order` | read | Get order |
| `shipstation_list_orders_by_tag` | read | List orders by tag |
| `shipstation_create_or_update_order` | **write** | Create or update order |
| `shipstation_mark_order_shipped` | **write** | Mark order shipped |
| `shipstation_hold_order` | **write** | Hold order until date |
| `shipstation_restore_order_from_hold` | **write** | Release order from hold |
| `shipstation_add_order_tag` | **write** | Add tag to order |
| `shipstation_remove_order_tag` | **write** | Remove tag from order |
| `shipstation_list_shipments` | read | List shipments |
| `shipstation_list_fulfillments` | read | List fulfillments |
| `shipstation_list_carriers` | read | List carriers |
| `shipstation_get_carrier` | read | Get carrier account |
| `shipstation_list_carrier_services` | read | List carrier services |
| `shipstation_list_carrier_packages` | read | List carrier packages |
| `shipstation_get_shipping_rates` | read | Get shipping rates |
| `shipstation_list_products` | read | List products |
| `shipstation_get_product` | read | Get product |
| `shipstation_list_stores` | read | List stores |
| `shipstation_get_store` | read | Get store |
| `shipstation_get_store_refresh_status` | read | Get store refresh status |
| `shipstation_list_customers` | read | List customers |
| `shipstation_get_customer` | read | Get customer |
| `shipstation_list_users` | read | List users |
| `shipstation_list_warehouses` | read | List ship-from locations |
| `shipstation_list_webhooks` | read | List webhooks |
| `shipstation_list_tags` | read | List tags |
| `shipstation_usage_status` | meta | Usage status (free-tier meter) |
| `shipstation_request_feature` | meta | Request a missing feature |
| `shipstation_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shipstation_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `shipstation_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `shipstation_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `shipstation_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
