# BigTime MCP by usefulapi

Use your [BigTime](https://www.bigtime.net) account from Claude, Cursor, or any MCP client. Read staff, projects, clients, tasks, time, expenses, invoices and payments, run saved reports and create time entries. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bigtime.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bigtime.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bigtime https://bigtime.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bigtime&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbigtime.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bigtime": {
      "url": "https://bigtime.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your BigTime credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bigtime/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **BigTime API token** and your **BigTime firm id** (a firm administrator creates the token in BigTime). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bigtime_list_staff` | read | List staff |
| `bigtime_get_staff` | read | Get a staff member |
| `bigtime_list_projects` | read | List projects |
| `bigtime_get_project` | read | Get a project |
| `bigtime_get_project_team` | read | Get a project team |
| `bigtime_list_clients` | read | List clients |
| `bigtime_get_client` | read | Get a client |
| `bigtime_list_project_tasks` | read | List tasks of a project |
| `bigtime_list_staff_tasks` | read | List tasks of a staff member |
| `bigtime_get_task` | read | Get a task |
| `bigtime_get_timesheet` | read | Get a timesheet |
| `bigtime_list_project_time` | read | List time entries of a project |
| `bigtime_get_time_entry` | read | Get a time entry |
| `bigtime_get_daily_totals` | read | Get daily hour totals |
| `bigtime_get_expense` | read | Get an expense entry |
| `bigtime_list_expense_reports` | read | List expense reports |
| `bigtime_list_invoices` | read | List invoice history |
| `bigtime_list_draft_invoices` | read | List draft invoices |
| `bigtime_get_invoice` | read | Get an invoice |
| `bigtime_list_client_invoices` | read | List invoices of a client |
| `bigtime_list_payments` | read | List payment history |
| `bigtime_get_report_definition` | read | Get a report definition |
| `bigtime_run_report` | read | Run a saved report |
| `bigtime_create_time_entry` | **write** | Create a time entry |
| `bigtime_usage_status` | meta | Usage status (free-tier meter) |
| `bigtime_request_feature` | meta | Request a missing feature |
| `bigtime_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bigtime_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bigtime_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bigtime_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bigtime_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
