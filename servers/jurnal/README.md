# Mekari Jurnal MCP by usefulapi

Connect your API-enabled Mekari Jurnal account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://jurnal.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http jurnal https://jurnal.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=jurnal&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjurnal.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "jurnal": {
      "url": "https://jurnal.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Mekari Jurnal credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/jurnal/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `jurnal_get_current_user` | read | Get the current user |
| `jurnal_list_companies` | read | List companies |
| `jurnal_list_customers` | read | List customers |
| `jurnal_get_customer` | read | Get a customer |
| `jurnal_list_vendors` | read | List vendors |
| `jurnal_get_vendor` | read | Get a vendor |
| `jurnal_list_products` | read | List products |
| `jurnal_get_product` | read | Get a product |
| `jurnal_list_accounts` | read | List chart of accounts |
| `jurnal_get_account` | read | Get an account |
| `jurnal_list_sales_invoices` | read | List sales invoices |
| `jurnal_get_sales_invoice` | read | Get a sales invoice |
| `jurnal_list_sales_orders` | read | List sales orders |
| `jurnal_list_sales_quotes` | read | List sales quotes |
| `jurnal_list_receive_payments` | read | List received payments |
| `jurnal_list_purchase_invoices` | read | List purchase invoices |
| `jurnal_get_purchase_invoice` | read | Get a purchase invoice |
| `jurnal_list_purchase_orders` | read | List purchase orders |
| `jurnal_list_purchase_payments` | read | List purchase payments |
| `jurnal_list_expenses` | read | List expenses |
| `jurnal_get_expense` | read | Get an expense |
| `jurnal_list_journal_entries` | read | List journal entries |
| `jurnal_get_journal_entry` | read | Get a journal entry |
| `jurnal_list_taxes` | read | List taxes |
| `jurnal_list_tags` | read | List transaction tags |
| `jurnal_list_payment_methods` | read | List payment methods |
| `jurnal_list_warehouses` | read | List warehouses |
| `jurnal_list_product_categories` | read | List product categories |
| `jurnal_get_profit_and_loss` | read | Get the profit and loss report |
| `jurnal_get_balance_sheet` | read | Get the balance sheet |
| `jurnal_get_trial_balance` | read | Get the trial balance |
| `jurnal_get_cash_flow` | read | Get the cash flow report |
| `jurnal_get_general_ledger` | read | Get the general ledger |
| `jurnal_get_aged_receivables` | read | Get aged receivables |
| `jurnal_get_aged_payables` | read | Get aged payables |
| `jurnal_get_executive_summary` | read | Get the executive summary |
| `jurnal_create_customer` | **write** | Create a customer |
| `jurnal_create_vendor` | **write** | Create a vendor |
| `jurnal_usage_status` | meta | Usage status (free-tier meter) |
| `jurnal_request_feature` | meta | Request a missing feature |
| `jurnal_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `jurnal_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per active company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `jurnal_upgrade` (it returns a Stripe Checkout link). Cancel any time with `jurnal_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `jurnal_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
