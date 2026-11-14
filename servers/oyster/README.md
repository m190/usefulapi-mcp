# Oyster MCP by usefulapi

Use your [Oyster](https://www.oysterhr.com) account from Claude, Cursor, or any MCP client. It reads team members, time off, expenses, contract changes, invoices and time sheets, and it approves or rejects time off and expenses only when you ask. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://oyster.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://oyster.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http oyster https://oyster.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=oyster&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Foyster.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "oyster": {
      "url": "https://oyster.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Oyster account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/oyster/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Oyster and approve access. A Company Admin must approve the access. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `oyster_get_company` | read | Get company |
| `oyster_list_team_members` | read | List team members |
| `oyster_get_team_member` | read | Get team member |
| `oyster_list_departments` | read | List departments |
| `oyster_list_time_off_requests` | read | List time off requests |
| `oyster_get_time_off_request` | read | Get time off request |
| `oyster_list_time_off_balances` | read | List time off balances |
| `oyster_list_public_holidays` | read | List public holidays |
| `oyster_list_expenses` | read | List expenses |
| `oyster_get_expense` | read | Get expense |
| `oyster_list_contract_changes` | read | List contract changes |
| `oyster_get_contract_change` | read | Get contract change |
| `oyster_list_invoices` | read | List invoices |
| `oyster_get_invoice` | read | Get invoice |
| `oyster_list_time_sheets` | read | List time sheets |
| `oyster_get_time_sheet` | read | Get time sheet |
| `oyster_approve_time_off_request` | **write** | Approve time off request |
| `oyster_reject_time_off_request` | **write** | Reject time off request |
| `oyster_approve_expense` | **write** | Approve expense |
| `oyster_decline_expense` | **write** | Decline expense |
| `oyster_usage_status` | meta | Usage status (free-tier meter) |
| `oyster_request_feature` | meta | Request a missing feature |
| `oyster_upgrade` | meta | Upgrade to Pro or Pro+ |
| `oyster_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `oyster_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `oyster_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `oyster_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
