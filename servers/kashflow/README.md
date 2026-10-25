# KashFlow MCP by usefulapi

Use [KashFlow](https://www.kashflow.com) from Claude, Cursor, or any MCP client — work with your invoices, customers, suppliers, banking and accounting reports. Hosted, no local install: connect with your own KashFlow credentials.

**Live endpoint:** `https://kashflow.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/kashflow

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kashflow.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kashflow https://kashflow.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kashflow&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkashflow.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kashflow": {
      "url": "https://kashflow.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your KashFlow credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kashflow/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your **KashFlow username and password** (or the separate API password; enable API access under Apps > API Settings). They are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kashflow_get_company_details` | read | Get company details |
| `kashflow_list_customers` | read | List customers |
| `kashflow_get_customer` | read | Get customer by code |
| `kashflow_get_customer_by_id` | read | Get customer by id |
| `kashflow_find_customer_by_email` | read | Find customer by email |
| `kashflow_get_customer_balance` | read | Get customer balance |
| `kashflow_create_customer` | **write** | Create customer |
| `kashflow_list_suppliers` | read | List suppliers |
| `kashflow_get_supplier` | read | Get supplier by code |
| `kashflow_create_supplier` | **write** | Create supplier |
| `kashflow_get_invoice` | read | Get invoice by number |
| `kashflow_list_invoices` | read | List invoices by date range |
| `kashflow_list_customer_invoices` | read | List a customer's invoices |
| `kashflow_list_unpaid_invoices` | read | List unpaid invoices |
| `kashflow_list_overdue_invoices` | read | List overdue invoices |
| `kashflow_list_recent_invoices` | read | List recent invoices |
| `kashflow_list_invoice_payments` | read | List payments of an invoice |
| `kashflow_list_payments_by_date` | read | List invoice payments by date range |
| `kashflow_get_invoice_notes` | read | Get invoice notes |
| `kashflow_add_invoice_note` | **write** | Add invoice note |
| `kashflow_list_quotes` | read | List quotes |
| `kashflow_get_receipt` | read | Get purchase by number |
| `kashflow_list_recent_receipts` | read | List recent purchases |
| `kashflow_list_supplier_receipts` | read | List a supplier's purchases |
| `kashflow_list_products` | read | List products |
| `kashflow_list_bank_accounts` | read | List bank accounts |
| `kashflow_list_bank_transactions` | read | List bank transactions |
| `kashflow_get_bank_balance` | read | Get bank balance |
| `kashflow_list_nominal_codes` | read | List nominal codes |
| `kashflow_list_vat_rates` | read | List VAT rates |
| `kashflow_list_projects` | read | List projects |
| `kashflow_get_profit_and_loss` | read | Get profit and loss |
| `kashflow_get_balance_sheet` | read | Get balance sheet |
| `kashflow_get_trial_balance` | read | Get trial balance |
| `kashflow_get_aged_debtors` | read | Get aged debtors |
| `kashflow_get_aged_creditors` | read | Get aged creditors |
| `kashflow_get_vat_report` | read | Get VAT report |
| `kashflow_get_kpis` | read | Get KPIs |
| `kashflow_usage_status` | meta | Usage status (free-tier meter) |
| `kashflow_request_feature` | meta | Request a missing feature |
| `kashflow_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `kashflow_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `kashflow_upgrade` (it returns a Stripe Checkout link). Cancel any time with `kashflow_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `kashflow_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
