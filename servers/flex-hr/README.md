# Flex HR MCP by usefulapi

Use your [Flex HR](https://flex.team) account from Claude, Cursor, or any MCP client. Read employees, departments, work schedules, clock events, time off and holidays. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://flex-hr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://flex-hr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http flex-hr https://flex-hr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=flex-hr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fflex-hr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "flex-hr": {
      "url": "https://flex-hr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Flex HR credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/flex-hr/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **client id** and a **client secret** from flex (Open API settings, Client Credential). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `flexhr_list_departments` | read | List departments |
| `flexhr_list_department_heads` | read | List department heads |
| `flexhr_list_job_items` | read | List job items |
| `flexhr_list_cost_centers` | read | List cost centers |
| `flexhr_list_custom_properties` | read | List custom property definitions |
| `flexhr_list_employee_numbers` | read | List employee numbers |
| `flexhr_get_employees` | read | Get employees |
| `flexhr_get_employee_departments` | read | Get employee departments |
| `flexhr_list_employee_changes` | read | List employee changes |
| `flexhr_get_work_schedules` | read | Get work schedules |
| `flexhr_get_work_clock_events` | read | Get work clock events |
| `flexhr_get_work_schedules_with_clocks` | read | Get work schedules with clock data |
| `flexhr_get_time_off_uses` | read | Get time-off uses |
| `flexhr_get_annual_time_off_buckets` | read | Get annual time-off buckets |
| `flexhr_get_leave_of_absence` | read | Get leave of absence |
| `flexhr_list_holidays` | read | List holidays |
| `flexhr_usage_status` | meta | Usage status (free-tier meter) |
| `flexhr_request_feature` | meta | Request a missing feature |
| `flexhr_upgrade` | meta | Upgrade to Pro or Pro+ |
| `flexhr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `flexhr_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `flexhr_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `flexhr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
