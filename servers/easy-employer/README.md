# Easy Employer MCP by usefulapi

Use your [Easy Employer](https://www.easyemployer.com) account from Claude, Cursor, or any MCP client. Read users, rosters, timesheet shifts, leave and settings, and create leave requests. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://easy-employer.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://easy-employer.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http easy-employer https://easy-employer.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=easy-employer&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Feasy-employer.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "easy-employer": {
      "url": "https://easy-employer.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Easy Employer credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/easy-employer/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API token and API password**, which Easy Employer Support issues, and your **organisation ID**. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `easyemployer_get_settings` | read | Get organisation settings |
| `easyemployer_list_users` | read | List users |
| `easyemployer_get_user` | read | Get a user |
| `easyemployer_list_roster_shifts` | read | List roster shifts |
| `easyemployer_list_unassigned_roster_shifts` | read | List open roster shifts |
| `easyemployer_list_groups` | read | List groups |
| `easyemployer_list_roles` | read | List roles |
| `easyemployer_list_awards` | read | List awards |
| `easyemployer_list_timesheet_shifts` | read | List timesheet shifts |
| `easyemployer_list_leave` | read | List leave requests |
| `easyemployer_list_leave_types` | read | List leave types |
| `easyemployer_create_leave_request` | **write** | Create a leave request |
| `easyemployer_usage_status` | meta | Usage status (free-tier meter) |
| `easyemployer_request_feature` | meta | Request a missing feature |
| `easyemployer_upgrade` | meta | Upgrade to Pro or Pro+ |
| `easyemployer_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `easyemployer_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `easyemployer_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `easyemployer_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
