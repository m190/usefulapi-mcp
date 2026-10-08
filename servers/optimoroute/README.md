# OptimoRoute MCP by usefulapi

Use [OptimoRoute](https://optimoroute.com) from Claude, Cursor, or any MCP client — check routes, orders, scheduling and driver events, and create orders, run planning and send routes to drivers.
Hosted, no local install: connect with your own OptimoRoute credentials.

**Live endpoint:** `https://optimoroute.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/optimoroute

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://optimoroute.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http optimoroute https://optimoroute.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=optimoroute&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Foptimoroute.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "optimoroute": {
      "url": "https://optimoroute.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/optimoroute/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **OptimoRoute WS API key** (Administration > Settings > WS API).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `optimoroute_get_routes` | read | Get routes for a date |
| `optimoroute_get_orders` | read | Get orders |
| `optimoroute_search_orders` | read | Search orders |
| `optimoroute_get_scheduling_info` | read | Get an order's scheduling info |
| `optimoroute_get_completion_details` | read | Get order completion details |
| `optimoroute_get_events` | read | Get mobile events |
| `optimoroute_get_planning_status` | read | Get planning status |
| `optimoroute_get_dispatch_status` | read | Get dispatch status |
| `optimoroute_create_order` | **write** | Create or update an order |
| `optimoroute_create_or_update_orders` | **write** | Create or update orders in bulk |
| `optimoroute_start_planning` | **write** | Start route planning |
| `optimoroute_stop_planning` | **write** | Stop route planning |
| `optimoroute_update_driver_parameters` | **write** | Update a driver's parameters for a date |
| `optimoroute_update_completion_details` | **write** | Update order completion status |
| `optimoroute_send_routes` | **write** | Send routes to drivers |
| `optimoroute_usage_status` | meta | Usage status (free-tier meter) |
| `optimoroute_upgrade` | meta | Upgrade to Pro (unlimited) |
| `optimoroute_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `optimoroute_upgrade` (it returns a Stripe Checkout link). Cancel any time with `optimoroute_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `optimoroute_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by OptimoRoute.
