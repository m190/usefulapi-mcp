# Paychex Europe Payroll MCP by usefulapi

Use your [Paychex Europe Payroll](https://www.paychex.de) account from Claude, Cursor, or any MCP client. It reads companies, employees, contracts, salaries and absences, and never writes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://paychex-europe-payroll.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://paychex-europe-payroll.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http paychex-europe-payroll https://paychex-europe-payroll.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=paychex-europe-payroll&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpaychex-europe-payroll.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "paychex-europe-payroll": {
      "url": "https://paychex-europe-payroll.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Paychex Europe Payroll credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/paychex-europe-payroll/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Paychex Europe Payroll API key**, created in the Paychex Payroll app under **Unternehmen → Einstellungen → Integration → API-Zugangsdaten**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `paychex_list_companies` | read | List companies |
| `paychex_get_company` | read | Get company |
| `paychex_list_employees` | read | List employees |
| `paychex_get_employee` | read | Get employee |
| `paychex_get_employee_contract` | read | Get employee contract |
| `paychex_get_employee_salary` | read | Get employee salary |
| `paychex_list_employee_salary_components` | read | List employee salary components |
| `paychex_list_employee_absences` | read | List employee absences |
| `paychex_usage_status` | meta | Usage status (free-tier meter) |
| `paychex_request_feature` | meta | Request a missing feature |
| `paychex_upgrade` | meta | Upgrade to Pro or Pro+ |
| `paychex_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `paychex_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `paychex_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `paychex_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
