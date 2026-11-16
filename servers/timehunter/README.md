# TimeHunter MCP by usefulapi

Use your [TimeHunter](https://timehunter.pl) account from Claude, Cursor, or any MCP client. Read employee status, attendance, work time reports and schedules; the key is read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://timehunter.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://timehunter.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http timehunter https://timehunter.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=timehunter&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftimehunter.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "timehunter": {
      "url": "https://timehunter.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TimeHunter credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/timehunter/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **TimeHunter API key** (a company admin creates it in TimeHunter under **Klucze API**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `timehunter_employee_status` | read | Employee status now |
| `timehunter_get_work_time_today` | read | Work time today |
| `timehunter_list_attendance` | read | List attendance |
| `timehunter_get_daily_report` | read | Daily report |
| `timehunter_get_weekly_report` | read | Weekly report |
| `timehunter_get_monthly_report` | read | Monthly report |
| `timehunter_get_period_summary` | read | Period summary |
| `timehunter_list_schedules` | read | List schedules |
| `timehunter_usage_status` | meta | Usage status (free-tier meter) |
| `timehunter_request_feature` | meta | Request a missing feature |
| `timehunter_upgrade` | meta | Upgrade to Pro or Pro+ |
| `timehunter_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `timehunter_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `timehunter_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `timehunter_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
