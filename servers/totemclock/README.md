# TotemClock MCP by usefulapi

Use your [TotemClock](https://totemclock.com) account from Claude, Cursor, or any MCP client. Read employees, sites, punches, timecards and timesheets, and record clock punches. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://totemclock.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://totemclock.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http totemclock https://totemclock.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=totemclock&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftotemclock.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "totemclock": {
      "url": "https://totemclock.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TotemClock credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/totemclock/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **TotemClock company API key** (TotemClock → API e integrazioni; select only the scopes you need). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `totemclock_get_organization` | read | Get the company |
| `totemclock_list_employees` | read | List employees |
| `totemclock_list_sites` | read | List sites |
| `totemclock_list_schedules` | read | List schedules |
| `totemclock_list_punches` | read | List punches |
| `totemclock_create_punch` | **write** | Record a punch |
| `totemclock_get_employee_day` | read | Get an employee day |
| `totemclock_list_timecards` | read | List daily timecards |
| `totemclock_get_monthly_timecard` | read | Get a monthly timecard |
| `totemclock_get_timesheet` | read | Get a monthly timesheet |
| `totemclock_usage_status` | meta | Usage status (free-tier meter) |
| `totemclock_request_feature` | meta | Request a missing feature |
| `totemclock_upgrade` | meta | Upgrade to Pro or Pro+ |
| `totemclock_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `totemclock_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `totemclock_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `totemclock_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
