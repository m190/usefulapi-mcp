# CBO MCP by usefulapi

Use your [CBO](https://cbo.gr) account from Claude, Cursor, or any MCP client. Read invoices, orders, clients, suppliers and products, and create or update clients and products. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://cloud-business-organiser.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cloud-business-organiser.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cloud-business-organiser https://cloud-business-organiser.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cloud-business-organiser&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcloud-business-organiser.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cloud-business-organiser": {
      "url": "https://cloud-business-organiser.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CBO credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cloud-business-organiser/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **CBO API token** (created on your CBO Profile page at app.cbo.gr) and your **Company ID** (the id of the company the token acts for). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cbo_list_clients` | read | List clients |
| `cbo_get_client` | read | Get a client |
| `cbo_create_client` | **write** | Create a client |
| `cbo_update_client` | **write** | Update a client |
| `cbo_list_suppliers` | read | List suppliers |
| `cbo_get_supplier` | read | Get a supplier |
| `cbo_list_invoices` | read | List invoices |
| `cbo_get_invoice` | read | Get an invoice |
| `cbo_list_supplier_invoices` | read | List supplier invoices |
| `cbo_get_supplier_invoice` | read | Get a supplier invoice |
| `cbo_list_orders` | read | List orders |
| `cbo_get_order` | read | Get an order |
| `cbo_list_client_receipts` | read | List client receipts |
| `cbo_list_supplier_payments` | read | List supplier payments |
| `cbo_list_products` | read | List products |
| `cbo_get_product` | read | Get a product |
| `cbo_list_product_children` | read | List product variants |
| `cbo_create_product` | **write** | Create a product |
| `cbo_update_product` | **write** | Update a product |
| `cbo_list_product_groups` | read | List product groups |
| `cbo_list_bank_accounts` | read | List bank accounts |
| `cbo_list_payment_links` | read | List payment links |
| `cbo_get_payment_link` | read | Get a payment link |
| `cbo_list_invoice_series` | read | List invoice series |
| `cbo_list_invoice_types` | read | List invoice types |
| `cbo_list_taxes` | read | List taxes |
| `cbo_list_expense_categories` | read | List expense categories |
| `cbo_list_measurement_units` | read | List measurement units |
| `cbo_list_countries` | read | List countries |
| `cbo_list_tax_offices` | read | List tax offices |
| `cbo_usage_status` | meta | Usage status (free-tier meter) |
| `cbo_request_feature` | meta | Request a missing feature |
| `cbo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cbo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `cbo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `cbo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `cbo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
