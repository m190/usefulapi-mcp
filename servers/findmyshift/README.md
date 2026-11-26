# Findmyshift MCP by usefulapi

Use your [Findmyshift](https://www.findmyshift.com) account from Claude, Cursor, or any MCP client. Read shifts, staff, time off and clock status, approve or unapprove time off, and clock staff in or out. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://findmyshift.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://findmyshift.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http findmyshift https://findmyshift.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=findmyshift&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffindmyshift.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "findmyshift": {
      "url": "https://findmyshift.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Findmyshift credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/findmyshift/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Findmyshift site** and your **Findmyshift API key** from your Findmyshift account. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `findmyshift_list_teams` | read | List teams |
| `findmyshift_get_team` | read | Get team |
| `findmyshift_get_team_last_modified` | read | Get team last-modified time |
| `findmyshift_list_facilities` | read | List facilities |
| `findmyshift_get_facility` | read | Get facility |
| `findmyshift_list_staff` | read | List staff |
| `findmyshift_get_staff` | read | Get staff member |
| `findmyshift_list_time_off` | read | List time off |
| `findmyshift_get_time_off` | read | Get time off record |
| `findmyshift_approve_time_off` | **write** | Approve time off |
| `findmyshift_unapprove_time_off` | **write** | Unapprove time off |
| `findmyshift_get_clock_status` | read | Get clock status |
| `findmyshift_clock_in` | **write** | Clock staff member in |
| `findmyshift_clock_out` | **write** | Clock staff member out |
| `findmyshift_report_shifts` | read | Report shifts |
| `findmyshift_report_schedule_vs_timesheets` | read | Report schedule vs timesheets |
| `findmyshift_report_time_clock` | read | Report time clock |
| `findmyshift_report_time_off` | read | Report time off |
| `findmyshift_report_sent_messages` | read | Report sent messages |
| `findmyshift_usage_status` | meta | Usage status (free-tier meter) |
| `findmyshift_request_feature` | meta | Request a missing feature |
| `findmyshift_upgrade` | meta | Upgrade to Pro or Pro+ |
| `findmyshift_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `findmyshift_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `findmyshift_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `findmyshift_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
