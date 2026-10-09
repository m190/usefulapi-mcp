# FreeAgent MCP by usefulapi

Work with your [FreeAgent](https://www.freeagent.com) books from Claude, Cursor, or any MCP client — read contacts, invoices, bills, expenses, bank accounts and transactions, projects, timeslips, the tax timeline, profit and loss and the balance sheet; create and update contacts, create draft invoices (never sent) and log timeslips. Hosted, no local
install: connect with your FreeAgent account over OAuth.

**Live endpoint:** `https://freeagent.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/freeagent

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://freeagent.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http freeagent https://freeagent.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=freeagent&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffreeagent.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "freeagent": {
      "url": "https://freeagent.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your FreeAgent account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/freeagent/

<!-- connect:end (generated above, edit below) -->

On first connect you'll be sent to FreeAgent to sign in and approve access; no API keys to paste.
The server can do only what your FreeAgent user is allowed to do, it never deletes anything, and you can
revoke access any time in FreeAgent (Settings → Approved apps).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `freeagent_get_company` | read | Get the company |
| `freeagent_get_current_user` | read | Get the current user |
| `freeagent_get_tax_timeline` | read | Get the tax timeline |
| `freeagent_list_contacts` | read | List contacts |
| `freeagent_get_contact` | read | Get one contact |
| `freeagent_list_invoices` | read | List invoices |
| `freeagent_get_invoice` | read | Get one invoice |
| `freeagent_list_bills` | read | List bills |
| `freeagent_list_expenses` | read | List expenses |
| `freeagent_list_bank_accounts` | read | List bank accounts |
| `freeagent_list_bank_transactions` | read | List bank transactions |
| `freeagent_list_projects` | read | List projects |
| `freeagent_list_tasks` | read | List tasks |
| `freeagent_list_timeslips` | read | List timeslips |
| `freeagent_get_profit_and_loss` | read | Get profit and loss |
| `freeagent_get_balance_sheet` | read | Get the balance sheet |
| `freeagent_create_contact` | **write** | Create a contact |
| `freeagent_update_contact` | **write** | Update a contact |
| `freeagent_create_draft_invoice` | **write** | Create a draft invoice |
| `freeagent_create_timeslip` | **write** | Log a timeslip |
| `freeagent_usage_status` | meta | Usage status (free-tier meter) |
| `freeagent_request_feature` | meta | Request a missing feature |
| `freeagent_upgrade` | meta | Upgrade to Pro (unlimited) |
| `freeagent_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `freeagent_upgrade` (it returns a Stripe Checkout link). Cancel any time with `freeagent_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `freeagent_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). This repo contains documentation only; the server is hosted.
