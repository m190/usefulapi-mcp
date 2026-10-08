# Shipday MCP by usefulapi

Use [Shipday](https://www.shipday.com) from Claude, Cursor, or any MCP client — read Shipday orders, carriers and delivery status; create orders and assign drivers.
Hosted, no local install: connect with your own Shipday credentials.

**Live endpoint:** `https://shipday.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/shipday

## Add to Claude

```json
{
  "mcpServers": {
    "shipday": {
      "url": "https://shipday.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Shipday API key**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `list_active_orders` | read | List active orders |
| `get_order` | read | Get order by order number |
| `query_orders` | read | Search orders (history) |
| `get_pickup_order` | read | Get a pickup order |
| `get_delivery_progress` | read | Get delivery progress and ETA |
| `list_carriers` | read | List carriers (drivers) |
| `list_on_demand_services` | read | List on-demand delivery services |
| `get_on_demand_estimate` | read | Get on-demand delivery estimates |
| `get_on_demand_details` | read | Get on-demand delivery details |
| `check_on_demand_availability` | read | Check on-demand delivery availability |
| `create_order` | **write** | Create a delivery order |
| `assign_order_to_carrier` | **write** | Assign an order to a driver |
| `unassign_order` | **write** | Unassign an order from its driver |
| `set_order_ready_to_pickup` | **write** | Mark an order ready for pickup |
| `shipday_usage_status` | meta | Usage status (free-tier meter) |
| `shipday_upgrade` | meta | Upgrade to Pro (unlimited) |
| `shipday_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `shipday_upgrade` (it returns a Stripe Checkout link). Cancel any time with `shipday_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `shipday_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Shipday.
