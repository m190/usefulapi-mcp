# Talero MCP by usefulapi

Use your [Talero](https://talero.dk/) account from Claude, Cursor, or any MCP client. Read invoices, customers, expenses, ledger entries and financial reports, and create customers and invoice drafts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://talero.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://talero.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http talero https://talero.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=talero&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftalero.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "talero": {
      "url": "https://talero.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Talero credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/talero/

<!-- connect:end (generated above, edit below) -->

On first connect you provide **Talero API key** (create it in Talero under **Settings → API keys**; choose only the scopes you need). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `talero_get_company` | read | Get the connected company |
| `talero_list_customers` | read | List customers |
| `talero_get_customer` | read | Get a customer |
| `talero_lookup_customer` | read | Look up a customer |
| `talero_list_invoices` | read | List invoices |
| `talero_get_invoice` | read | Get an invoice |
| `talero_create_invoice_draft` | **write** | Create an invoice draft |
| `talero_list_expenses` | read | List expenses |
| `talero_get_expense` | read | Get an expense |
| `talero_list_products` | read | List products |
| `talero_get_product` | read | Get a product |
| `talero_list_suppliers` | read | List suppliers |
| `talero_get_supplier` | read | Get a supplier |
| `talero_list_accounts` | read | List accounts |
| `talero_list_transactions` | read | List ledger transactions |
| `talero_get_voucher` | read | Get voucher metadata |
| `talero_get_balance_sheet` | read | Get balance sheet |
| `talero_get_profit_loss` | read | Get profit and loss report |
| `talero_create_customer` | **write** | Create a customer |
| `talero_update_customer` | **write** | Update a customer |
| `talero_usage_status` | meta | Usage status (free-tier meter) |
| `talero_request_feature` | meta | Request a missing feature |
| `talero_upgrade` | meta | Upgrade to Pro or Pro+ |
| `talero_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `talero_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `talero_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `talero_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
