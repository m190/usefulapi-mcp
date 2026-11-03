# solidtime MCP by usefulapi

Use your [solidtime](https://www.solidtime.io) account from Claude, Cursor, or any MCP client. Start and stop timers, log time entries, and read projects, clients and tasks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://solidtime.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://solidtime.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http solidtime https://solidtime.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=solidtime&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsolidtime.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "solidtime": {
      "url": "https://solidtime.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your solidtime credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/solidtime/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **solidtime API token**, which you create under Profile Settings → Create API Token. solidtime shows it only once. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `solidtime_get_current_user` | read | Get my user |
| `solidtime_list_organizations` | read | List my organizations |
| `solidtime_get_active_timer` | read | Get the running timer |
| `solidtime_list_projects` | read | List projects |
| `solidtime_get_project` | read | Get a project |
| `solidtime_list_clients` | read | List clients |
| `solidtime_list_tags` | read | List tags |
| `solidtime_list_tasks` | read | List tasks |
| `solidtime_list_time_entries` | read | List time entries |
| `solidtime_start_timer` | **write** | Start a timer |
| `solidtime_stop_timer` | **write** | Stop the running timer |
| `solidtime_create_time_entry` | **write** | Log a time entry |
| `solidtime_usage_status` | meta | Usage status (free-tier meter) |
| `solidtime_request_feature` | meta | Request a missing feature |
| `solidtime_upgrade` | meta | Upgrade to Pro or Pro+ |
| `solidtime_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `solidtime_upgrade` (it returns a Stripe Checkout link). Cancel any time with `solidtime_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `solidtime_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
