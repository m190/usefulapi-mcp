# Timesheets.com MCP by usefulapi

Use your [Timesheets.com](https://www.timesheets.com) account from Claude, Cursor, or any MCP client. Read users, clock status, items, project timers and reports, and create users or assign items to users. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://timesheets-com.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://timesheets-com.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http timesheets-com https://timesheets-com.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=timesheets-com&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftimesheets-com.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "timesheets-com": {
      "url": "https://timesheets-com.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Timesheets.com credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/timesheets-com/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Timesheets.com API key** and the **authorization token** (a Primary Administrator creates both in the API dashboard). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `timesheets_list_users` | read | List users |
| `timesheets_get_user_info` | read | Get user info |
| `timesheets_create_user` | **write** | Create a user |
| `timesheets_assign_user_items` | **write** | Assign items to a user |
| `timesheets_unassign_user_items` | **write** | Remove items from a user |
| `timesheets_list_items` | read | List items |
| `timesheets_get_item` | read | Get an item |
| `timesheets_create_vendor` | **write** | Create a vendor |
| `timesheets_update_vendor` | **write** | Update a vendor |
| `timesheets_create_event` | **write** | Create an event |
| `timesheets_update_event` | **write** | Update an event |
| `timesheets_get_clock_shift` | read | Get a user's clock shift |
| `timesheets_list_clock_shifts` | read | List clock shifts |
| `timesheets_list_project_timers` | read | List project timers |
| `timesheets_get_record_history` | read | Get record history |
| `timesheets_get_hourly_report` | read | Get an hourly time report |
| `timesheets_list_payroll_periods` | read | List hourly payroll periods |
| `timesheets_get_payroll_period` | read | Get one hourly payroll period |
| `timesheets_preview_payroll` | read | Preview an hourly payroll run |
| `timesheets_get_project_report` | read | Get a project time report |
| `timesheets_get_expense_report` | read | Get an expense report |
| `timesheets_get_server_reference` | read | Get server reference data |
| `timesheets_usage_status` | meta | Usage status (free-tier meter) |
| `timesheets_request_feature` | meta | Request a missing feature |
| `timesheets_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `timesheets_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `timesheets_upgrade` (it returns a Stripe Checkout link). Cancel any time with `timesheets_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `timesheets_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
