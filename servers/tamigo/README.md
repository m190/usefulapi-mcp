# Tamigo MCP by usefulapi

Read Tamigo departments, employees, shifts, absences and opening hours; register attendance.

**Live endpoint:** `https://tamigo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/tamigo

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tamigo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tamigo https://tamigo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tamigo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftamigo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tamigo": {
      "url": "https://tamigo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Tamigo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tamigo/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your Tamigo **application name** and **application key** (Configuration → Web Services (API); an administrator creates them).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tamigo_list_departments` | read | List departments |
| `tamigo_list_employees` | read | List employees |
| `tamigo_list_employee_details` | read | List employee details |
| `tamigo_list_shifts` | read | List shifts (original, planned, worked) |
| `tamigo_list_absences` | read | List absences |
| `tamigo_get_opening_hours` | read | Get opening hours |
| `tamigo_register_attendance` | **write** | Register check-ins / check-outs |
| `tamigo_upload_daily_revenue` | **write** | Upload daily revenue |
| `tamigo_usage_status` | meta | Usage status (free-tier meter) |
| `tamigo_request_feature` | meta | Request a missing feature |
| `tamigo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `tamigo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `tamigo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `tamigo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `tamigo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Tamigo.
