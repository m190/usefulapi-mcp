# Planerio MCP by usefulapi

Use your [Planerio](https://www.planerio.de) account from Claude, Cursor, or any MCP client. Read shifts, staffing requirements, staff, employees, absences and vacation days. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://planerio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://planerio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http planerio https://planerio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=planerio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fplanerio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "planerio": {
      "url": "https://planerio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Planerio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/planerio/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Planerio address** (the part before `.planer.io`, for example `example`), the **Technical login: user** and **Technical login: password** from your Planerio account manager, and the **Shift group token** that a Planerio admin creates in Admin, Einstellungen, box Planerio-Schnittstelle. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `planerio_list_shifts` | read | List shifts |
| `planerio_list_shift_cards` | read | List staffing requirements (shift cards) |
| `planerio_list_staff` | read | List available staff (resource planning) |
| `planerio_list_employees` | read | List employees (master data) |
| `planerio_list_absences` | read | List absences |
| `planerio_get_vacation_days` | read | Get vacation budget |
| `planerio_usage_status` | meta | Usage status (free-tier meter) |
| `planerio_request_feature` | meta | Request a missing feature |
| `planerio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `planerio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `planerio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `planerio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `planerio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
