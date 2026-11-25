# Calamari MCP by usefulapi

Use your [Calamari](https://calamari.io) account from Claude, Cursor, or any MCP client. Read employees, absences, leave balances and clock-in status, and create absence requests or teams. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://calamari.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://calamari.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http calamari https://calamari.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=calamari&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcalamari.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "calamari": {
      "url": "https://calamari.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Calamari credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/calamari/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **account subdomain** (the part before .calamari.io) and a **Calamari API key** (Configuration → Integrations → API, with all endpoints enabled). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `calamari_list_employees` | read | List employees |
| `calamari_search_employees` | read | Search employees |
| `calamari_list_teams` | read | List teams |
| `calamari_list_positions` | read | List positions |
| `calamari_list_contract_types` | read | List contract types |
| `calamari_list_working_weeks` | read | List working weeks |
| `calamari_list_absence_types` | read | List absence types |
| `calamari_find_absence_requests` | read | Find one employee's absence requests |
| `calamari_find_absence_requests_advanced` | read | Find absence requests by team or position |
| `calamari_get_entitlement_balance` | read | Get one entitlement balance |
| `calamari_list_entitlement_balances` | read | List one employee's balances |
| `calamari_find_entitlement_balances` | read | Find balances by team, position or contract |
| `calamari_find_holidays` | read | Find public holidays |
| `calamari_list_current_shift_status` | read | List who is clocked in |
| `calamari_get_current_shift_status` | read | Get one employee's shift status |
| `calamari_get_presence_report` | read | Get the presence report |
| `calamari_list_projects` | read | List time-tracking projects |
| `calamari_find_time_entries` | read | Find timesheet entries |
| `calamari_find_timesheet_balances` | read | Find timesheet balances |
| `calamari_create_absence_request` | **write** | Create an absence request |
| `calamari_create_team` | **write** | Create a team |
| `calamari_usage_status` | meta | Usage status (free-tier meter) |
| `calamari_request_feature` | meta | Request a missing feature |
| `calamari_upgrade` | meta | Upgrade to Pro or Pro+ |
| `calamari_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `calamari_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `calamari_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `calamari_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
