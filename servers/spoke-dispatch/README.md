# Spoke Dispatch MCP by usefulapi

Use [Spoke Dispatch](https://spoke.com/dispatch) from Claude, Cursor, or any MCP client — delivery plans, stops, routes, drivers and depots, plus plan creation, optimization and distribution.
Hosted, no local install: connect with your own Spoke Dispatch credentials.

**Live endpoint:** `https://spoke-dispatch.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/spoke-dispatch

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://spoke-dispatch.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http spoke-dispatch https://spoke-dispatch.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spoke-dispatch&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fspoke-dispatch.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "spoke-dispatch": {
      "url": "https://spoke-dispatch.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Spoke Dispatch credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/spoke-dispatch/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `spoke_list_plans` | read | List plans |
| `spoke_get_plan` | read | Get plan |
| `spoke_list_plan_stops` | read | List plan stops |
| `spoke_get_stop` | read | Get stop |
| `spoke_search_stops` | read | Search stops |
| `spoke_list_unassigned_stops` | read | List unassigned stops |
| `spoke_get_unassigned_stop` | read | Get unassigned stop |
| `spoke_list_drivers` | read | List drivers |
| `spoke_get_driver` | read | Get driver |
| `spoke_list_depots` | read | List depots |
| `spoke_get_depot` | read | Get depot |
| `spoke_list_routes` | read | List routes |
| `spoke_get_route` | read | Get route |
| `spoke_list_route_stops` | read | List route stops |
| `spoke_list_operations` | read | List operations |
| `spoke_get_operation` | read | Get operation |
| `spoke_list_custom_stop_properties` | read | List custom stop properties |
| `spoke_create_plan` | **write** | Create plan |
| `spoke_update_plan` | **write** | Update plan |
| `spoke_create_stop` | **write** | Create stop |
| `spoke_import_stops` | **write** | Import stops |
| `spoke_optimize_plan` | **write** | Optimize plan |
| `spoke_distribute_plan` | **write** | Distribute plan to drivers |
| `spoke_usage_status` | meta | Usage status (free-tier meter) |
| `spoke_request_feature` | meta | Request a missing feature |
| `spoke_upgrade` | meta | Upgrade to Pro or Pro+ |
| `spoke_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per team) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per team) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `spoke_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `spoke_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `spoke_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Spoke Dispatch.
