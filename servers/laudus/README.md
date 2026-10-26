# Laudus MCP by usefulapi

**Live endpoint:** `https://laudus.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://laudus.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http laudus https://laudus.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=laudus&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flaudus.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "laudus": {
      "url": "https://laudus.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Laudus credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/laudus/

<!-- connect:end (generated above, edit below) -->

On first connect you will enter your **company RUT** and the **user name and password** of a Laudus user with API access. They are validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `laudus_list_customers` | read | List customers |
| `laudus_list_sales_invoices` | read | List sales invoices |
| `laudus_list_sales_orders` | read | List sales orders |
| `laudus_list_sales_quotes` | read | List sales quotes |
| `laudus_list_sales_receipts` | read | List sales receipts |
| `laudus_list_products` | read | List products |
| `laudus_list_product_categories` | read | List product categories |
| `laudus_list_warehouses` | read | List warehouses |
| `laudus_list_salesmen` | read | List salespeople |
| `laudus_list_suppliers` | read | List suppliers |
| `laudus_list_purchase_invoices` | read | List purchase invoices |
| `laudus_list_purchase_orders` | read | List purchase orders |
| `laudus_list_accounts` | read | List accounting accounts |
| `laudus_list_journal_entries` | read | List journal entries |
| `laudus_list_cost_centers` | read | List cost centers |
| `laudus_get_customer` | read | Get a customer |
| `laudus_get_sales_invoice` | read | Get a sales invoice |
| `laudus_get_sales_order` | read | Get a sales order |
| `laudus_get_sales_quote` | read | Get a sales quote |
| `laudus_get_product` | read | Get a product |
| `laudus_get_supplier` | read | Get a supplier |
| `laudus_get_purchase_invoice` | read | Get a purchase invoice |
| `laudus_get_purchase_order` | read | Get a purchase order |
| `laudus_get_journal_entry` | read | Get a journal entry |
| `laudus_customer_pending_invoices` | read | Customer pending invoices |
| `laudus_customer_credit_limit` | read | Customer credit limit |
| `laudus_list_customer_contacts` | read | List customer contacts |
| `laudus_sales_invoice_receipts` | read | Sales invoice receipts |
| `laudus_pending_sales_orders` | read | Pending sales orders |
| `laudus_sales_report` | read | Sales report |
| `laudus_get_product_stock` | read | Get product stock |
| `laudus_list_stock` | read | List stock of all products |
| `laudus_product_kardex` | read | Product kardex |
| `laudus_balance_sheet` | read | Balance sheet |
| `laudus_profit_and_loss` | read | Profit and loss |
| `laudus_general_ledger` | read | General ledger |
| `laudus_purchase_ledger` | read | Purchase ledger |
| `laudus_create_customer` | **write** | Create a customer |
| `laudus_usage_status` | meta | Usage status (free-tier meter) |
| `laudus_request_feature` | meta | Request a missing feature |
| `laudus_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `laudus_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `laudus_upgrade` (it returns a Stripe Checkout link). Cancel any time with `laudus_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `laudus_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
