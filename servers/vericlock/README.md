# VeriClock MCP by usefulapi

Use your [VeriClock](https://www.vericlock.com) account from Claude, Cursor, or any MCP client. Read timesheets, employees, groups and payroll, and create clock events and payroll items. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://vericlock.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://vericlock.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http vericlock https://vericlock.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=vericlock&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvericlock.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "vericlock": {
      "url": "https://vericlock.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your VeriClock credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/vericlock/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **VeriClock domain**, the **API public key** and **API private key** (VeriClock → Settings → API), and the **employee email** and **password** the connection acts as. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `vericlock_get_employee` | read | Get an employee |
| `vericlock_get_group` | read | Get a group |
| `vericlock_query_payroll_items` | read | List payroll items |
| `vericlock_query_payroll_rules` | read | List payroll item rules |
| `vericlock_get_caller_id_access` | read | Get caller ID access rules |
| `vericlock_get_ip_access_rules` | read | Get IP access rules |
| `vericlock_query_timesheet` | read | Search clock events |
| `vericlock_query_timesheet_entries` | read | List timesheet entries |
| `vericlock_get_timesheet_entry` | read | Get a clock event |
| `vericlock_get_timesheet_entry_by_root` | read | Get the active clock event by root GUID |
| `vericlock_create_timesheet_entry` | **write** | Create a clock event |
| `vericlock_create_payroll_item` | **write** | Create a payroll item |
| `vericlock_update_payroll_item` | **write** | Update a payroll item |
| `vericlock_create_payroll_rule` | **write** | Create a payroll item rule |
| `vericlock_usage_status` | meta | Usage status (free-tier meter) |
| `vericlock_request_feature` | meta | Request a missing feature |
| `vericlock_upgrade` | meta | Upgrade to Pro or Pro+ |
| `vericlock_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `vericlock_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `vericlock_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `vericlock_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
