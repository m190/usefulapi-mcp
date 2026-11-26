# TimeCamp MCP by usefulapi

Use your [TimeCamp](https://www.timecamp.com) account from Claude, Cursor, or any MCP client. Read tasks and time entries, create, edit or delete entries, and start or stop timers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://timecamp.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://timecamp.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http timecamp https://timecamp.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=timecamp&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftimecamp.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "timecamp": {
      "url": "https://timecamp.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TimeCamp credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/timecamp/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API token** (Settings → Users → me in TimeCamp).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `timecamp_get_user` | read | Get my user |
| `timecamp_list_tasks` | read | List tasks |
| `timecamp_list_time_entries` | read | List time entries |
| `timecamp_get_timer_status` | read | Get timer status |
| `timecamp_create_time_entry` | **write** | Create time entry |
| `timecamp_update_time_entry` | **write** | Update time entry |
| `timecamp_delete_time_entry` | **write** | Delete time entry |
| `timecamp_start_timer` | **write** | Start timer |
| `timecamp_stop_timer` | **write** | Stop timer |
| `timecamp_usage_status` | meta | Usage status (free-tier meter) |
| `timecamp_request_feature` | meta | Request a missing feature |
| `timecamp_upgrade` | meta | Upgrade to Pro or Pro+ |
| `timecamp_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `timecamp_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `timecamp_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `timecamp_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
