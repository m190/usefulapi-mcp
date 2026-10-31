# Kledo MCP by usefulapi

Use your [Kledo](https://kledo.com) account from Claude, Cursor, or any MCP client. Read sales and purchase invoices, contacts, products, bank balances and financial reports. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://kledo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kledo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kledo https://kledo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kledo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkledo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kledo": {
      "url": "https://kledo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Kledo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kledo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Kledo subdomain** (the first part of company.app.kledo.com) and a **Personal Access Token** (Kledo → Pengaturan → Integrasi → API Key → Tambah; Kledo shows it once). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kledo_list_invoices` | read | List sales invoices |
| `kledo_get_invoice` | read | Get a sales invoice |
| `kledo_list_quotes` | read | List sales quotes |
| `kledo_list_sales_orders` | read | List sales orders |
| `kledo_list_purchase_invoices` | read | List purchase invoices |
| `kledo_get_purchase_invoice` | read | Get a purchase invoice |
| `kledo_list_expenses` | read | List expenses |
| `kledo_list_contacts` | read | List contacts |
| `kledo_get_contact` | read | Get a contact |
| `kledo_list_products` | read | List products |
| `kledo_get_product` | read | Get a product |
| `kledo_list_accounts` | read | List chart of accounts |
| `kledo_get_bank_balances` | read | Get bank balances |
| `kledo_list_bank_transactions` | read | List bank transactions |
| `kledo_report_profit_loss` | read | Profit and loss report |
| `kledo_report_balance_sheet` | read | Balance sheet report |
| `kledo_report_trial_balance` | read | Trial balance report |
| `kledo_report_cash_flow` | read | Cash flow report |
| `kledo_report_aged_receivable` | read | Aged receivable report |
| `kledo_report_aged_payable` | read | Aged payable report |
| `kledo_report_executive_summary` | read | Executive summary report |
| `kledo_usage_status` | meta | Usage status (free-tier meter) |
| `kledo_request_feature` | meta | Request a missing feature |
| `kledo_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `kledo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `kledo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `kledo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `kledo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
