# Shipday MCP by usefulapi

Use [Shipday](https://www.shipday.com) from Claude, Cursor, or any MCP client — read Shipday orders, carriers and delivery status; create orders and assign drivers.
Hosted, no local install: connect with your own Shipday credentials.

**Live endpoint:** `https://shipday.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/shipday

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shipday.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shipday https://shipday.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shipday&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshipday.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shipday": {
      "url": "https://shipday.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Shipday credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shipday/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Shipday API key**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shipday_list_active_orders` | read | List active orders |
| `shipday_get_order` | read | Get order by order number |
| `shipday_query_orders` | read | Search orders (history) |
| `shipday_get_pickup_order` | read | Get a pickup order |
| `shipday_get_delivery_progress` | read | Get delivery progress and ETA |
| `shipday_list_carriers` | read | List carriers (drivers) |
| `shipday_list_on_demand_services` | read | List on-demand delivery services |
| `shipday_get_on_demand_estimate` | read | Get on-demand delivery estimates |
| `shipday_get_on_demand_details` | read | Get on-demand delivery details |
| `shipday_check_on_demand_availability` | read | Check on-demand delivery availability |
| `shipday_create_order` | **write** | Create a delivery order |
| `shipday_assign_order_to_carrier` | **write** | Assign an order to a driver |
| `shipday_unassign_order` | **write** | Unassign an order from its driver |
| `shipday_set_order_ready_to_pickup` | **write** | Mark an order ready for pickup |
| `shipday_usage_status` | meta | Usage status (free-tier meter) |
| `shipday_request_feature` | meta | Request a missing feature |
| `shipday_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shipday_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per company) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `shipday_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `shipday_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `shipday_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Shipday.
