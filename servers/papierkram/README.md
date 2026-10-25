# Papierkram MCP by usefulapi

Use [Papierkram](https://www.papierkram.de) from Claude, Cursor, or any MCP client — work with your invoices, expense vouchers, contacts, projects, tracked time and bank transactions. Hosted, no local install: connect with your own Papierkram account and API token.

**Live endpoint:** `https://papierkram.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/papierkram

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://papierkram.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http papierkram https://papierkram.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=papierkram&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpapierkram.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "papierkram": {
      "url": "https://papierkram.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Papierkram credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/papierkram/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your **Papierkram account** (the first part of `https://<account>.papierkram.de`) and an **API token** (create it under Einstellungen > API; the API is a beta feature of the plans M and L). They are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `papierkram_get_info` | read | Get account info |
| `papierkram_list_companies` | read | List companies |
| `papierkram_get_company` | read | Get company |
| `papierkram_list_persons` | read | List persons of a company |
| `papierkram_get_person` | read | Get person |
| `papierkram_list_invoices` | read | List invoices |
| `papierkram_get_invoice` | read | Get invoice |
| `papierkram_list_estimates` | read | List estimates |
| `papierkram_get_estimate` | read | Get estimate |
| `papierkram_list_vouchers` | read | List expense vouchers |
| `papierkram_get_voucher` | read | Get expense voucher |
| `papierkram_list_payment_terms` | read | List payment terms |
| `papierkram_list_propositions` | read | List products and services |
| `papierkram_get_proposition` | read | Get product or service |
| `papierkram_list_projects` | read | List projects |
| `papierkram_get_project` | read | Get project |
| `papierkram_list_tasks` | read | List tasks |
| `papierkram_get_task` | read | Get task |
| `papierkram_list_time_entries` | read | List time entries |
| `papierkram_get_time_entry` | read | Get time entry |
| `papierkram_list_bank_connections` | read | List bank connections |
| `papierkram_list_bank_transactions` | read | List bank transactions |
| `papierkram_get_bank_transaction` | read | Get bank transaction |
| `papierkram_list_users` | read | List users |
| `papierkram_get_user` | read | Get user |
| `papierkram_create_company` | **write** | Create company |
| `papierkram_update_company` | **write** | Update company |
| `papierkram_create_person` | **write** | Create person |
| `papierkram_create_project` | **write** | Create project |
| `papierkram_create_task` | **write** | Create task |
| `papierkram_create_time_entry` | **write** | Create time entry |
| `papierkram_create_proposition` | **write** | Create product or service |
| `papierkram_create_invoice` | **write** | Create draft invoice |
| `papierkram_usage_status` | meta | Usage status (free-tier meter) |
| `papierkram_request_feature` | meta | Request a missing feature |
| `papierkram_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `papierkram_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `papierkram_upgrade` (it returns a Stripe Checkout link). Cancel any time with `papierkram_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `papierkram_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
