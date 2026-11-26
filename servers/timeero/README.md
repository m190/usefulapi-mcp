# Timeero MCP by usefulapi

Use your [Timeero](https://timeero.com) account from Claude, Cursor, or any MCP client. Read timesheets, schedules, jobs and users, clock users in or out, and approve or unapprove timesheets. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://timeero.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://timeero.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http timeero https://timeero.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=timeero&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftimeero.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "timeero": {
      "url": "https://timeero.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Timeero credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/timeero/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Timeero Public API key** (Integrations → Public API → Configuration in Timeero). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `timeero_list_users` | read | List users |
| `timeero_get_user` | read | Get a user |
| `timeero_list_groups` | read | List groups |
| `timeero_list_jobs` | read | List jobs |
| `timeero_get_job` | read | Get a job |
| `timeero_list_tasks` | read | List tasks |
| `timeero_list_timesheets` | read | List timesheets |
| `timeero_get_timesheet` | read | Get a timesheet |
| `timeero_get_timesheet_locations` | read | Get timesheet GPS locations |
| `timeero_list_working_users` | read | List users working now |
| `timeero_list_breaks` | read | List breaks |
| `timeero_list_time_offs` | read | List time off |
| `timeero_list_schedules` | read | List schedules |
| `timeero_get_schedule` | read | Get a schedule |
| `timeero_clock_in` | **write** | Clock a user in |
| `timeero_clock_out` | **write** | Clock a user out |
| `timeero_approve_timesheets` | **write** | Approve timesheets |
| `timeero_unapprove_timesheets` | **write** | Unapprove timesheets |
| `timeero_usage_status` | meta | Usage status (free-tier meter) |
| `timeero_request_feature` | meta | Request a missing feature |
| `timeero_upgrade` | meta | Upgrade to Pro or Pro+ |
| `timeero_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `timeero_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `timeero_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `timeero_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
