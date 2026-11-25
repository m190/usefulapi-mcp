# Wagepoint MCP by usefulapi

Use your [Wagepoint](https://wagepoint.com) account from Claude, Cursor, or any MCP client. Read companies, people, pay groups, time entries and time off, and create, approve or reject time entries. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://wagepoint.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://wagepoint.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http wagepoint https://wagepoint.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=wagepoint&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwagepoint.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "wagepoint": {
      "url": "https://wagepoint.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Wagepoint credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/wagepoint/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Wagepoint API bearer token**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wagepoint_list_companies` | read | List companies |
| `wagepoint_get_company` | read | Get a company |
| `wagepoint_list_persons` | read | List people |
| `wagepoint_list_pay_groups` | read | List pay groups |
| `wagepoint_list_time_entries` | read | List time entries |
| `wagepoint_create_time_entries` | **write** | Create time entries |
| `wagepoint_update_time_entry_status` | **write** | Approve or reject time entries |
| `wagepoint_list_time_off_requests` | read | List time-off requests |
| `wagepoint_get_time_off_request` | read | Get a time-off request |
| `wagepoint_list_company_time_off_balances` | read | List company time-off balances |
| `wagepoint_list_person_time_off_balances` | read | List a person's time-off balances |
| `wagepoint_usage_status` | meta | Usage status (free-tier meter) |
| `wagepoint_request_feature` | meta | Request a missing feature |
| `wagepoint_upgrade` | meta | Upgrade to Pro or Pro+ |
| `wagepoint_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `wagepoint_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `wagepoint_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `wagepoint_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
