# ShipBob MCP by usefulapi

Use your [ShipBob](https://www.shipbob.com) account from Claude, Cursor, or any MCP client. Read orders, shipments, tracking, inventory and returns, and create or cancel orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://shipbob.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shipbob.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shipbob https://shipbob.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shipbob&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshipbob.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shipbob": {
      "url": "https://shipbob.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ShipBob credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shipbob/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **ShipBob Personal Access Token** (create it as the root user under Integrations → API Tokens → Generate New Token). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shipbob_list_channels` | read | List sales channels |
| `shipbob_list_orders` | read | List orders |
| `shipbob_get_order` | read | Get order |
| `shipbob_list_order_shipments` | read | List order shipments |
| `shipbob_get_shipment` | read | Get shipment |
| `shipbob_get_shipment_timeline` | read | Get shipment timeline |
| `shipbob_get_tracking` | read | Get tracking by tracking number |
| `shipbob_list_products` | read | List products |
| `shipbob_get_product` | read | Get product |
| `shipbob_list_inventory` | read | List inventory items |
| `shipbob_list_inventory_levels` | read | List inventory levels |
| `shipbob_list_receiving_orders` | read | List warehouse receiving orders |
| `shipbob_get_receiving_order` | read | Get warehouse receiving order |
| `shipbob_list_returns` | read | List returns |
| `shipbob_list_fulfillment_centers` | read | List fulfillment centers |
| `shipbob_list_locations` | read | List locations |
| `shipbob_list_invoices` | read | List invoices |
| `shipbob_create_order` | **write** | Create order |
| `shipbob_cancel_order` | **write** | Cancel order |
| `shipbob_update_shipment_address` | **write** | Update shipment address |
| `shipbob_usage_status` | meta | Usage status (free-tier meter) |
| `shipbob_request_feature` | meta | Request a missing feature |
| `shipbob_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shipbob_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `shipbob_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `shipbob_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `shipbob_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
