# Buddy Punch MCP by usefulapi

Use your [Buddy Punch](https://buddypunch.com) account from Claude, Cursor, or any MCP client. Read employees, punches, time cards, schedules and time off, and record punches, breaks and time off requests. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://buddy-punch.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://buddy-punch.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http buddy-punch https://buddy-punch.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=buddy-punch&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbuddy-punch.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "buddy-punch": {
      "url": "https://buddy-punch.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Buddy Punch credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/buddy-punch/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Buddy Punch API key** (Settings → Integrations → Developer API → Manage API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `buddypunch_list_employees` | read | List employees |
| `buddypunch_get_employee` | read | Get an employee |
| `buddypunch_list_locations` | read | List locations |
| `buddypunch_list_pay_periods` | read | List pay periods |
| `buddypunch_list_punches` | read | List punches |
| `buddypunch_get_punch` | read | Get a punch |
| `buddypunch_list_time_entries` | read | List time entries |
| `buddypunch_list_time_cards` | read | List time cards |
| `buddypunch_get_time_card_details` | read | Get time card details |
| `buddypunch_list_time_off` | read | List time off |
| `buddypunch_list_time_off_types` | read | List time off types |
| `buddypunch_get_schedule` | read | Get schedule |
| `buddypunch_punch_in` | **write** | Punch in an employee |
| `buddypunch_punch_out` | **write** | Punch out an employee |
| `buddypunch_start_break` | **write** | Start a break |
| `buddypunch_end_break` | **write** | End a break |
| `buddypunch_create_time_off_request` | **write** | Create a time off request |
| `buddypunch_usage_status` | meta | Usage status (free-tier meter) |
| `buddypunch_request_feature` | meta | Request a missing feature |
| `buddypunch_upgrade` | meta | Upgrade to Pro or Pro+ |
| `buddypunch_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `buddypunch_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `buddypunch_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `buddypunch_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
