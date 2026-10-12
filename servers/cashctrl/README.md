# CashCtrl MCP by usefulapi

Use [CashCtrl](https://www.cashctrl.com) from Claude, Cursor, or any MCP client — accounts and balances, bank accounts, journal entries, orders and invoices, people, articles, salary statements, fiscal periods, tax codes, currencies and reports, plus booking journal entries, creating orders and people, changing order status and deleting journal entries or orders. Needs a CashCtrl PRO account with an API user.
Hosted, no local install: connect with your own CashCtrl credentials.

**Live endpoint:** `https://cashctrl.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/cashctrl

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cashctrl.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cashctrl https://cashctrl.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cashctrl&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcashctrl.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cashctrl": {
      "url": "https://cashctrl.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CashCtrl credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cashctrl/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cashctrl_list_accounts` | read | List accounts |
| `cashctrl_get_account` | read | Get an account |
| `cashctrl_get_account_balance` | read | Get an account balance |
| `cashctrl_list_account_categories` | read | List account categories |
| `cashctrl_list_bank_accounts` | read | List bank accounts |
| `cashctrl_list_journal` | read | List journal entries |
| `cashctrl_get_journal_entry` | read | Get a journal entry |
| `cashctrl_list_orders` | read | List orders |
| `cashctrl_get_order` | read | Get an order |
| `cashctrl_list_order_categories` | read | List order categories |
| `cashctrl_list_persons` | read | List people |
| `cashctrl_get_person` | read | Get a person |
| `cashctrl_list_articles` | read | List inventory articles |
| `cashctrl_get_article` | read | Get an inventory article |
| `cashctrl_list_salary_statements` | read | List salary statements |
| `cashctrl_get_salary_statement` | read | Get a salary statement |
| `cashctrl_list_fiscal_periods` | read | List fiscal periods |
| `cashctrl_list_tax_codes` | read | List tax codes |
| `cashctrl_list_sequence_numbers` | read | List sequence numbers |
| `cashctrl_list_currencies` | read | List currencies |
| `cashctrl_get_report_tree` | read | Get the report tree |
| `cashctrl_get_report_data` | read | Get report data |
| `cashctrl_create_journal_entry` | **write** | Create a journal entry |
| `cashctrl_delete_journal_entries` | **write** | Delete journal entries |
| `cashctrl_create_order` | **write** | Create an order |
| `cashctrl_update_order_status` | **write** | Change the status of orders |
| `cashctrl_delete_orders` | **write** | Delete orders |
| `cashctrl_create_person` | **write** | Create a person or company |
| `cashctrl_usage_status` | meta | Usage status (free-tier meter) |
| `cashctrl_request_feature` | meta | Request a missing feature |
| `cashctrl_upgrade` | meta | Upgrade to Pro (unlimited) |
| `cashctrl_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per organization) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `cashctrl_upgrade` (it returns a Stripe Checkout link). Cancel any time with `cashctrl_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `cashctrl_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by CashCtrl.
