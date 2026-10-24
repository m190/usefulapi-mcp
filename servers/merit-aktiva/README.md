# Merit Aktiva MCP by usefulapi

Use [Merit Aktiva](https://www.merit.ee) from Claude, Cursor, or any MCP client — sales and purchase invoices, customers, vendors, items, payments, GL batches and financial reports, plus customer creation.
Hosted, no local install: connect with your own Merit Aktiva credentials.

**Live endpoint:** `https://merit-aktiva.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/merit-aktiva

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://merit-aktiva.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http merit-aktiva https://merit-aktiva.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=merit-aktiva&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmerit-aktiva.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "merit-aktiva": {
      "url": "https://merit-aktiva.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Merit Aktiva credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/merit-aktiva/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `merit_list_sales_invoices` | read | List sales invoices |
| `merit_search_sales_invoices` | read | Find sales invoices by number or customer |
| `merit_get_sales_invoice` | read | Get a sales invoice |
| `merit_list_purchase_invoices` | read | List purchase invoices |
| `merit_get_purchase_invoice` | read | Get a purchase invoice |
| `merit_list_customers` | read | Search customers |
| `merit_list_vendors` | read | Search vendors |
| `merit_list_items` | read | List items (articles) |
| `merit_list_accounts` | read | List the chart of accounts |
| `merit_list_taxes` | read | List VAT rates |
| `merit_list_departments` | read | List departments |
| `merit_list_banks` | read | List bank accounts |
| `merit_list_financial_years` | read | List financial years |
| `merit_list_dimensions` | read | List dimensions |
| `merit_list_payment_types` | read | List payment types |
| `merit_list_payments` | read | List payments |
| `merit_list_bank_payments` | read | List income or expense payments of a bank account |
| `merit_list_gl_batches` | read | List general ledger transactions |
| `merit_get_gl_batch` | read | Get a general ledger transaction |
| `merit_customer_debts_report` | read | Customer debts report |
| `merit_customer_payments_report` | read | Customer payments report |
| `merit_income_statement` | read | Income statement (profit and loss) |
| `merit_balance_sheet` | read | Balance sheet |
| `merit_sales_report` | read | Sales report |
| `merit_purchase_report` | read | Purchase report |
| `merit_create_customer` | **write** | Create a customer |
| `merit_usage_status` | meta | Usage status (free-tier meter) |
| `merit_request_feature` | meta | Request a missing feature |
| `merit_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `merit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `merit_upgrade` (it returns a Stripe Checkout link). Cancel any time with `merit_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `merit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Merit Aktiva.
