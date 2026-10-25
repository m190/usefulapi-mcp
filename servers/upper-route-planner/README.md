# Upper Route Planner MCP by usefulapi

**Live endpoint:** `https://upper-route-planner.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/upper-route-planner

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://upper-route-planner.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http upper-route-planner https://upper-route-planner.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=upper-route-planner&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fupper-route-planner.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "upper-route-planner": {
      "url": "https://upper-route-planner.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Upper Route Planner credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/upper-route-planner/

<!-- connect:end (generated above, edit below) -->

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Upper Route Planner credentials.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `upper_list_drivers` | read | List drivers |
| `upper_list_stops` | read | List stops |
| `upper_get_optimization_status` | read | Get route optimization status |
| `upper_get_custom_fields` | read | Get stop custom fields |
| `upper_get_capacity_fields` | read | Get capacity fields |
| `upper_create_route` | **write** | Create route |
| `upper_update_route` | **write** | Update route |
| `upper_create_stop` | **write** | Create stop |
| `upper_update_stop` | **write** | Update stop |
| `upper_assign_drivers` | **write** | Assign drivers to a route |
| `upper_optimize_route` | **write** | Optimize route |
| `upper_share_route_to_drivers` | **write** | Share route to drivers |
| `upper_usage_status` | meta | Usage status (free-tier meter) |
| `upper_request_feature` | meta | Request a missing feature |
| `upper_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `upper_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `upper_upgrade` (it returns a Stripe Checkout link). Cancel any time with `upper_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `upper_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
