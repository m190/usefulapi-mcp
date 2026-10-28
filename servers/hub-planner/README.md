# Hub Planner MCP by usefulapi

**Live endpoint:** `https://hub-planner.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hub-planner.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hub-planner https://hub-planner.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hub-planner&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhub-planner.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hub-planner": {
      "url": "https://hub-planner.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Hub Planner credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hub-planner/

<!-- connect:end (generated above, edit below) -->

Sign in with a Hub Planner API key. Use a Read Only key for queries or a Read & Write key for writes. Staff details and time entries contain personal data.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hubplanner_list_resources` | read | List resources |
| `hubplanner_get_resource` | read | Get resource |
| `hubplanner_list_projects` | read | List projects |
| `hubplanner_get_project` | read | Get project |
| `hubplanner_list_bookings` | read | List bookings |
| `hubplanner_get_booking` | read | Get booking |
| `hubplanner_list_time_entries` | read | List time entries |
| `hubplanner_get_time_entry` | read | Get timeentry |
| `hubplanner_list_clients` | read | List clients |
| `hubplanner_get_client` | read | Get client |
| `hubplanner_search_projects` | read | Search projects |
| `hubplanner_search_resources` | read | Search resources |
| `hubplanner_search_bookings` | read | Search bookings |
| `hubplanner_search_time_entries` | read | Search time entries |
| `hubplanner_create_time_entry` | **write** | Create time entry |
| `hubplanner_create_client` | **write** | Create client |
| `hubplanner_usage_status` | meta | Usage status (free-tier meter) |
| `hubplanner_request_feature` | meta | Request a missing feature |
| `hubplanner_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `hubplanner_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `hubplanner_upgrade` (it returns a Stripe Checkout link). Cancel any time with `hubplanner_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `hubplanner_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

Documentation for the hosted usefulapi connector.
