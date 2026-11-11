# WebClock MCP by usefulapi

Use your [WebClock](https://itcs-webclock.com) account from Claude, Cursor, or any MCP client. It reads employees, time-clock and timesheet data, time off, schedules and payroll-ready records, and never writes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://webclock.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://webclock.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http webclock https://webclock.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=webclock&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwebclock.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "webclock": {
      "url": "https://webclock.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your WebClock credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/webclock/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **WebClock Client ID**, **WebClock API username** and **WebClock API password**, issued by WebClock Support. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `webclock_list_employees` | read | List employees |
| `webclock_get_time_clock` | read | Get time-clock records |
| `webclock_get_timesheets` | read | Get timesheet data |
| `webclock_get_time_off_requests` | read | Get time-off requests |
| `webclock_get_time_off_requests_admin` | read | Get time-off requests (admin fields) |
| `webclock_whos_in_out` | read | Who is in or out |
| `webclock_get_license` | read | Get license usage |
| `webclock_get_time_summary` | read | Get time totals |
| `webclock_get_schedules` | read | Get schedules |
| `webclock_get_anomalies` | read | Get shift anomalies |
| `webclock_get_hr_certifications` | read | Get HR certifications |
| `webclock_get_accrual_balances` | read | Get accrual balances |
| `webclock_get_payroll_data` | read | Get payroll data |
| `webclock_list_locations` | read | List work locations |
| `webclock_list_tasks` | read | List tasks |
| `webclock_list_job_functions` | read | List job functions |
| `webclock_usage_status` | meta | Usage status (free-tier meter) |
| `webclock_request_feature` | meta | Request a missing feature |
| `webclock_upgrade` | meta | Upgrade to Pro or Pro+ |
| `webclock_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `webclock_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `webclock_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `webclock_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
