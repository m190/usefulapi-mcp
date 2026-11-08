# Timebutler MCP by usefulapi

Use your [Timebutler](https://timebutler.com) account from Claude, Cursor, or any MCP client. It reads absences, time entries, time-off balances and, for managers, team requests, and it can run the time clock and request absences. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://timebutler.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://timebutler.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http timebutler https://timebutler.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=timebutler&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftimebutler.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "timebutler": {
      "url": "https://timebutler.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Timebutler credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/timebutler/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Timebutler personal access token** (it starts with tb_; create it in your Timebutler account settings under personal access tokens). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `timebutler_get_profile` | read | Get my profile |
| `timebutler_list_employees` | read | List employees |
| `timebutler_list_absence_types` | read | List absence types |
| `timebutler_list_categories` | read | List time categories |
| `timebutler_list_projects` | read | List projects |
| `timebutler_list_my_absence_requests` | read | List my absence requests |
| `timebutler_list_team_absence_requests` | read | List team absence requests |
| `timebutler_get_absence_pending_count` | read | Count pending absence requests |
| `timebutler_list_my_time_entries` | read | List my time entries |
| `timebutler_get_time_entry_pending_count` | read | Count pending time entries |
| `timebutler_list_time_entry_requests` | read | List time entry requests |
| `timebutler_get_time_clock_status` | read | Get time clock status |
| `timebutler_get_work_summary` | read | Get today's work summary |
| `timebutler_get_time_off_summary` | read | Get time-off summary |
| `timebutler_clock_start` | **write** | Start time clock |
| `timebutler_clock_pause` | **write** | Pause time clock |
| `timebutler_clock_resume` | **write** | Resume time clock |
| `timebutler_clock_stop` | **write** | Stop time clock and save |
| `timebutler_submit_clock_entry` | **write** | Submit a finished time entry |
| `timebutler_create_absence_request` | **write** | Request absence |
| `timebutler_usage_status` | meta | Usage status (free-tier meter) |
| `timebutler_request_feature` | meta | Request a missing feature |
| `timebutler_upgrade` | meta | Upgrade to Pro or Pro+ |
| `timebutler_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `timebutler_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `timebutler_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `timebutler_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
