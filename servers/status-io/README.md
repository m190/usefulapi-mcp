# Status.io MCP by usefulapi

Use [Status.io](https://status.io) from Claude, Cursor, or any MCP client — status page components, incidents, maintenance windows and subscribers, plus incident and maintenance updates.
Hosted, no local install: connect with your own Status.io credentials.

**Live endpoint:** `https://status-io.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/status-io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://status-io.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http status-io https://status-io.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=status-io&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstatus-io.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "status-io": {
      "url": "https://status-io.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Status.io credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/status-io/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `statusio_get_status_summary` | read | Get status summary |
| `statusio_list_components` | read | List components |
| `statusio_list_incidents` | read | List incident ids |
| `statusio_list_active_incidents` | read | List active incidents |
| `statusio_list_resolved_incidents` | read | List resolved incidents |
| `statusio_get_incident` | read | Get incident |
| `statusio_get_incident_message` | read | Get incident message |
| `statusio_list_maintenance_ids` | read | List maintenance ids |
| `statusio_list_maintenance` | read | List maintenance |
| `statusio_get_maintenance` | read | Get maintenance |
| `statusio_get_maintenance_message` | read | Get maintenance message |
| `statusio_list_subscribers` | read | List subscribers |
| `statusio_update_component_status` | **write** | Update component status |
| `statusio_create_incident` | **write** | Create incident |
| `statusio_update_incident` | **write** | Update incident |
| `statusio_resolve_incident` | **write** | Resolve incident |
| `statusio_schedule_maintenance` | **write** | Schedule maintenance |
| `statusio_start_maintenance` | **write** | Start maintenance |
| `statusio_update_maintenance` | **write** | Update maintenance |
| `statusio_finish_maintenance` | **write** | Finish maintenance |
| `statusio_usage_status` | meta | Usage status (free-tier meter) |
| `statusio_request_feature` | meta | Request a missing feature |
| `statusio_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `statusio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `statusio_upgrade` (it returns a Stripe Checkout link). Cancel any time with `statusio_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `statusio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Status.io.
