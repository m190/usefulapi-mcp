# CXT Software MCP by usefulapi

Track and search CXT courier orders, check drivers, propose and save order and route plans.

**Live endpoint:** `https://cxt-software.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/cxt-software

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cxt-software.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cxt-software https://cxt-software.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cxt-software&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcxt-software.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cxt-software": {
      "url": "https://cxt-software.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CXT Software credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cxt-software/

<!-- connect:end (generated above, edit below) -->

On first connect you'll choose the user type (Operations App user or internet user) and enter your CXT account id (the 4 digits of your address, 0987 for 09870.cxtsoftware.net) or your own server address, plus that user's name without the XDISPATCH-/INET- prefix and **password**.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cxt_track_shipments` | read | Track shipments |
| `cxt_search_shipments` | read | Search orders and route stops |
| `cxt_list_recent_orders` | read | List recent orders |
| `cxt_get_order` | read | Get order (internet user) |
| `cxt_get_dispatch_order` | read | Get order (Operations App user) |
| `cxt_get_planning_limits` | read | Get itinerary planning limits |
| `cxt_validate_drivers` | read | Validate drivers for planning |
| `cxt_validate_driver_for_orders` | read | Validate a driver for orders |
| `cxt_plan_orders` | read | Plan orders onto drivers |
| `cxt_optimize_order_plan` | read | Re-optimize one driver's order plan |
| `cxt_plan_routes` | read | Plan route stops |
| `cxt_optimize_route_plan` | read | Re-optimize one route |
| `cxt_save_order_plan` | **write** | Save order plan (dispatch orders to drivers) |
| `cxt_save_route_plan` | **write** | Save route plan (reassign route stops) |
| `cxt_usage_status` | meta | Usage status (free-tier meter) |
| `cxt_request_feature` | meta | Request a missing feature |
| `cxt_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `cxt_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `cxt_upgrade` (it returns a Stripe Checkout link). Cancel any time with `cxt_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `cxt_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by CXT Software.
