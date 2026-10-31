# MarketTime MCP by usefulapi

Connect your API-enabled MarketTime account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://markettime.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http markettime https://markettime.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=markettime&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmarkettime.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "markettime": {
      "url": "https://markettime.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MarketTime credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/markettime/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `markettime_list_manufacturers` | read | List manufacturers |
| `markettime_get_manufacturer` | read | Get manufacturer |
| `markettime_list_orders` | read | List orders |
| `markettime_list_order_details` | read | List order lines |
| `markettime_get_order_changes_history` | read | Get order changes history |
| `markettime_list_order_shipments` | read | List order shipments |
| `markettime_list_customers` | read | List customers |
| `markettime_get_customer` | read | Get customer |
| `markettime_list_customer_contacts` | read | List customer contacts |
| `markettime_list_customer_ship_to_locations` | read | List customer ship-to locations |
| `markettime_list_items` | read | List items |
| `markettime_get_item` | read | Get item |
| `markettime_list_item_inventory` | read | List item inventory |
| `markettime_list_item_pricing` | read | List item pricing |
| `markettime_list_salespersons` | read | List salespersons |
| `markettime_list_commission_order_payments` | read | List commission order payments |
| `markettime_create_order_shipment` | **write** | Create order shipment |
| `markettime_create_customer` | **write** | Create customer |
| `markettime_usage_status` | meta | Usage status (free-tier meter) |
| `markettime_request_feature` | meta | Request a missing feature |
| `markettime_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `markettime_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per Rep Group or Manufacturer account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `markettime_upgrade` (it returns a Stripe Checkout link). Cancel any time with `markettime_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `markettime_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
