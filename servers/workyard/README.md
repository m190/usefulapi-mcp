# Workyard MCP by usefulapi

**Live endpoint:** `https://workyard.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://workyard.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http workyard https://workyard.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=workyard&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fworkyard.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "workyard": {
      "url": "https://workyard.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Workyard credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/workyard/

<!-- connect:end (generated above, edit below) -->

Sign in with your Workyard API token. Staff names, contact details and work locations are personal data.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `workyard_get_organization` | read | Get Workyard organization |
| `workyard_list_employees` | read | List Workyard employees |
| `workyard_list_projects` | read | List Workyard projects |
| `workyard_get_project` | read | Get Workyard project |
| `workyard_list_time_cards` | read | List Workyard time cards |
| `workyard_get_time_card` | read | Get Workyard time card |
| `workyard_list_time_card_activity_segments` | read | List Workyard time card activity segments |
| `workyard_list_geofences` | read | List Workyard geofences (work sites) |
| `workyard_list_active_geofences` | read | List active Workyard geofences |
| `workyard_list_geofence_projects` | read | List projects of a Workyard geofence |
| `workyard_approve_time_card` | **write** | Approve a Workyard time card |
| `workyard_add_time_card_note` | **write** | Add a note to a Workyard time card |
| `workyard_usage_status` | meta | Usage status (free-tier meter) |
| `workyard_request_feature` | meta | Request a missing feature |
| `workyard_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `workyard_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per organization) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `workyard_upgrade` (it returns a Stripe Checkout link). Cancel any time with `workyard_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `workyard_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

Documentation for the hosted usefulapi connector.
