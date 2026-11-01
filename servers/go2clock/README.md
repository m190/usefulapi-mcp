# Go2Clock MCP by usefulapi

Use your [Go2Clock](https://go2clock.com) account from Claude, Cursor, or any MCP client. It reads clock records, timesheets, employee details and rotas, and it can update employees, add clock records and put shifts on a rota. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://go2clock.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://go2clock.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http go2clock https://go2clock.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=go2clock&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgo2clock.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "go2clock": {
      "url": "https://go2clock.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Go2Clock credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/go2clock/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Go2Clock API key** (in Go2Clock under Settings, API key; an admin login is needed). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `go2clock_list_users` | read | List clock users |
| `go2clock_list_employees` | read | List employee details |
| `go2clock_list_clock_records` | read | List clock records for a day |
| `go2clock_list_clock_records_range` | read | List clock records for a date range |
| `go2clock_get_timesheet_csv` | read | Get timesheet CSV |
| `go2clock_get_rota` | read | Get employee rota |
| `go2clock_update_employee` | **write** | Update employee details |
| `go2clock_upload_employees` | **write** | Create or update employees |
| `go2clock_upload_clock_record` | **write** | Add a clock record |
| `go2clock_create_rota` | **write** | Create rota shifts |
| `go2clock_usage_status` | meta | Usage status (free-tier meter) |
| `go2clock_request_feature` | meta | Request a missing feature |
| `go2clock_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `go2clock_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `go2clock_upgrade` (it returns a Stripe Checkout link). Cancel any time with `go2clock_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `go2clock_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
