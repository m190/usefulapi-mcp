# Shiftavo MCP by usefulapi

Use your [Shiftavo](https://www.shiftavo.com) account from Claude, Cursor, or any MCP client. Read locations, employees, shifts, timesheets, labor cost, time-account balances and shift swaps. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://shiftavo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shiftavo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shiftavo https://shiftavo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shiftavo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshiftavo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shiftavo": {
      "url": "https://shiftavo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Shiftavo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shiftavo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **client ID and client secret** that Shiftavo support creates for your company's integration. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shiftavo_get_account` | read | Get account settings |
| `shiftavo_list_locations` | read | List locations |
| `shiftavo_get_location` | read | Get a location |
| `shiftavo_list_positions` | read | List positions |
| `shiftavo_list_employees` | read | List employees |
| `shiftavo_get_employee` | read | Get an employee |
| `shiftavo_list_shifts` | read | List shifts |
| `shiftavo_get_shift` | read | Get a shift |
| `shiftavo_get_shift_assignments` | read | Get shift assignments |
| `shiftavo_list_timesheets` | read | List timesheets |
| `shiftavo_get_timesheet_breaks` | read | Get timesheet breaks |
| `shiftavo_get_labor_cost` | read | Get labor cost |
| `shiftavo_get_time_account_balances` | read | Get time-account balances |
| `shiftavo_list_swaps` | read | List shift swaps |
| `shiftavo_usage_status` | meta | Usage status (free-tier meter) |
| `shiftavo_request_feature` | meta | Request a missing feature |
| `shiftavo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shiftavo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `shiftavo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `shiftavo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `shiftavo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
