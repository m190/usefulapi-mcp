# ClickTime MCP by usefulapi

Use your [ClickTime](https://www.clicktime.com) account from Claude, Cursor, or any MCP client. Read jobs, timesheets, time off and company reports, and log, edit or submit your own time. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://clicktime.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://clicktime.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http clicktime https://clicktime.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=clicktime&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fclicktime.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "clicktime": {
      "url": "https://clicktime.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ClickTime credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/clicktime/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **ClickTime API token**, found in ClickTime under **My Preferences**, then the **Authentication Token** tab. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `clicktime_get_me` | read | Get my user |
| `clicktime_get_company` | read | Get company settings |
| `clicktime_list_jobs` | read | List jobs (projects) |
| `clicktime_get_job` | read | Get job |
| `clicktime_list_clients` | read | List clients |
| `clicktime_list_tasks` | read | List tasks |
| `clicktime_list_job_task_controls` | read | List valid job and task pairs |
| `clicktime_list_job_phases` | read | List job phases |
| `clicktime_list_time_entries` | read | List my time entries |
| `clicktime_get_time_entry` | read | Get time entry |
| `clicktime_list_timesheets` | read | List my timesheets |
| `clicktime_get_timesheet_by_date` | read | Get timesheet covering a date |
| `clicktime_list_timesheet_actions` | read | List actions available on my timesheet |
| `clicktime_list_time_off_types` | read | List time off types and balances |
| `clicktime_list_time_off` | read | List my time off |
| `clicktime_list_time_off_requests` | read | List my time off requests |
| `clicktime_list_expense_sheets` | read | List my expense sheets |
| `clicktime_list_expense_items` | read | List my expense items |
| `clicktime_list_users` | read | List users |
| `clicktime_time_report` | read | Time report (company-wide) |
| `clicktime_time_summary` | read | Time summary (grouped) |
| `clicktime_create_time_entry` | **write** | Log time |
| `clicktime_update_time_entry` | **write** | Update time entry |
| `clicktime_submit_timesheet` | **write** | Submit or recall my timesheet |
| `clicktime_create_client` | **write** | Create client |
| `clicktime_create_job` | **write** | Create job |
| `clicktime_usage_status` | meta | Usage status (free-tier meter) |
| `clicktime_request_feature` | meta | Request a missing feature |
| `clicktime_upgrade` | meta | Upgrade to Pro or Pro+ |
| `clicktime_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `clicktime_upgrade` (it returns a Stripe Checkout link). Cancel any time with `clicktime_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `clicktime_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
