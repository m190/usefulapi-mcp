# Track-POD MCP by usefulapi

Use [Track-POD](https://www.track-pod.com) from Claude, Cursor, or any MCP client — read Track-POD orders, routes, drivers, vehicles and proof of delivery; create orders.
Hosted, no local install: connect with your own Track-POD credentials.

**Live endpoint:** `https://track-pod.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/track-pod

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://track-pod.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http track-pod https://track-pod.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=track-pod&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftrack-pod.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "track-pod": {
      "url": "https://track-pod.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/track-pod/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Track-POD API key**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `trackpod_list_orders` | read | List orders for a day |
| `trackpod_list_orders_changed_since` | read | List orders with a recent status change |
| `trackpod_list_route_orders` | read | List the orders of a route |
| `trackpod_get_order` | read | Get an order |
| `trackpod_find_orders_by_number` | read | Find orders by number |
| `trackpod_get_proof_of_delivery` | read | Get proof of delivery |
| `trackpod_list_reject_reasons` | read | List reject reasons |
| `trackpod_list_routes` | read | List routes for a day |
| `trackpod_get_route` | read | Get a route |
| `trackpod_get_route_track` | read | Get a route's GPS track |
| `trackpod_list_drivers` | read | List drivers |
| `trackpod_get_driver` | read | Get a driver |
| `trackpod_list_vehicles` | read | List vehicles |
| `trackpod_get_vehicle` | read | Get a vehicle |
| `trackpod_list_vehicle_checks` | read | List vehicle checks |
| `trackpod_create_order` | **write** | Create an order |
| `trackpod_usage_status` | meta | Usage status (free-tier meter) |
| `trackpod_upgrade` | meta | Upgrade to Pro (unlimited) |
| `trackpod_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `trackpod_upgrade` (it returns a Stripe Checkout link). Cancel any time with `trackpod_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `trackpod_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Track-POD.
