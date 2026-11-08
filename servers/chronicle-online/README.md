# Chronicle Online MCP by usefulapi

Use your [Chronicle Online](https://www.chronicle-online.co.uk) account from Claude, Cursor, or any MCP client. Reads employees, absences, clockings, shifts, work records and overtime. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://chronicle-online.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://chronicle-online.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http chronicle-online https://chronicle-online.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=chronicle-online&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fchronicle-online.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "chronicle-online": {
      "url": "https://chronicle-online.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Chronicle Online credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/chronicle-online/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Chronicle API Client ID** and a **Chronicle API Client Secret** (Chronicle issues both on request: ask your account manager or support team). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `chronicleonline_list_employees` | read | List employees |
| `chronicleonline_get_employee` | read | Get employee |
| `chronicleonline_list_absences` | read | List absences |
| `chronicleonline_get_absence` | read | Get absence |
| `chronicleonline_list_absence_types` | read | List absence types |
| `chronicleonline_list_absentee_records` | read | List absentee records |
| `chronicleonline_list_real_clockings` | read | List clockings |
| `chronicleonline_get_real_clocking` | read | Get clocking |
| `chronicleonline_list_shifts` | read | List shifts |
| `chronicleonline_list_scheduled_shifts` | read | List scheduled shifts |
| `chronicleonline_list_work_records` | read | List work records |
| `chronicleonline_list_daily_overtime` | read | List daily overtime |
| `chronicleonline_list_weekly_overtime` | read | List weekly overtime |
| `chronicleonline_list_cost_centres` | read | List cost centres |
| `chronicleonline_list_leavers` | read | List leavers |
| `chronicleonline_usage_status` | meta | Usage status (free-tier meter) |
| `chronicleonline_request_feature` | meta | Request a missing feature |
| `chronicleonline_upgrade` | meta | Upgrade to Pro or Pro+ |
| `chronicleonline_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `chronicleonline_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `chronicleonline_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `chronicleonline_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
