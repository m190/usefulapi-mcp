# TimeTac MCP by usefulapi

Use your [TimeTac](https://www.timetac.com) account from Claude, Cursor, or any MCP client. Read employees, time entries, absences, projects and tasks, and start timers, add time entries or handle leave requests. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://timetac.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://timetac.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http timetac https://timetac.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=timetac&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftimetac.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "timetac": {
      "url": "https://timetac.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TimeTac credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/timetac/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your TimeTac **account name**, and the **client id** and **client secret** of an API client (TimeTac → Account settings → API Credentials; ask support@timetac.com to enable the API if it is missing). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `timetac_list_users` | read | List users |
| `timetac_get_user` | read | Get user |
| `timetac_list_time_trackings` | read | List time trackings |
| `timetac_current_time_trackings` | read | Running timers |
| `timetac_list_absences` | read | List absences |
| `timetac_list_absence_types` | read | List absence types |
| `timetac_list_projects` | read | List projects |
| `timetac_list_tasks` | read | List tasks |
| `timetac_list_departments` | read | List departments |
| `timetac_list_teams` | read | List teams |
| `timetac_start_time_tracking` | **write** | Start timer |
| `timetac_stop_time_tracking` | **write** | Stop timer |
| `timetac_create_time_tracking` | **write** | Add time entry |
| `timetac_create_absence` | **write** | Request absence |
| `timetac_approve_absence` | **write** | Approve absence |
| `timetac_reject_absence` | **write** | Reject absence |
| `timetac_usage_status` | meta | Usage status (free-tier meter) |
| `timetac_request_feature` | meta | Request a missing feature |
| `timetac_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `timetac_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `timetac_upgrade` (it returns a Stripe Checkout link). Cancel any time with `timetac_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `timetac_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
