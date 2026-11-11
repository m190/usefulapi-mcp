# Humanforce MCP by usefulapi

Use your [Humanforce](https://humanforce.com) account from Claude, Cursor, or any MCP client. Read employees, rosters, timesheets, leave requests and clocking status. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://humanforce.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://humanforce.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http humanforce https://humanforce.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=humanforce&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhumanforce.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "humanforce": {
      "url": "https://humanforce.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Humanforce credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/humanforce/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Humanforce tenant** (the part before `.humanforce.com`), an **API key** and an **API secret** from Humanforce WFM (Admin → Security Config → API Key Management). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `humanforce_list_employees` | read | List employees |
| `humanforce_get_employee` | read | Get an employee |
| `humanforce_list_locations` | read | List locations |
| `humanforce_list_departments` | read | List departments |
| `humanforce_list_roles` | read | List roles |
| `humanforce_list_shift_types` | read | List shift types |
| `humanforce_list_pay_types` | read | List pay types |
| `humanforce_list_pay_companies` | read | List pay companies |
| `humanforce_list_roster_items` | read | List roster shifts |
| `humanforce_list_availability` | read | List availability |
| `humanforce_list_public_holidays` | read | List public holidays |
| `humanforce_get_clocking_status` | read | Get clocking status |
| `humanforce_list_timesheets` | read | List timesheets |
| `humanforce_list_leave_requests` | read | List leave requests |
| `humanforce_usage_status` | meta | Usage status (free-tier meter) |
| `humanforce_request_feature` | meta | Request a missing feature |
| `humanforce_upgrade` | meta | Upgrade to Pro or Pro+ |
| `humanforce_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `humanforce_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `humanforce_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `humanforce_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
