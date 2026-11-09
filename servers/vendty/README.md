# Vendty MCP by usefulapi

Use your Vendty account from Claude, Cursor, or any MCP client. Read products, customers, sales, purchases and restaurant tables of your business. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://vendty.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://vendty.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http vendty https://vendty.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=vendty&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvendty.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "vendty": {
      "url": "https://vendty.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Vendty credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/vendty/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Vendty API token**, which your Vendty representative issues to your business. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `vendty_get_client_info` | read | Get API client info |
| `vendty_list_products` | read | List products |
| `vendty_get_product` | read | Get a product |
| `vendty_list_categories` | read | List categories |
| `vendty_list_customers` | read | List customers |
| `vendty_get_customer` | read | Get a customer |
| `vendty_list_customer_groups` | read | List customer groups |
| `vendty_list_customer_sales` | read | List a customer's sales |
| `vendty_list_sales` | read | List sales |
| `vendty_get_sale` | read | Get a sale |
| `vendty_list_payment_methods` | read | List payment methods |
| `vendty_list_sale_credit_notes` | read | List a sale's credit notes |
| `vendty_list_restaurant_sections` | read | List restaurant sections |
| `vendty_list_restaurant_tables` | read | List restaurant tables |
| `vendty_get_restaurant_table_order` | read | Get a table's active order |
| `vendty_list_quick_service_orders` | read | List Quick Service orders |
| `vendty_list_warehouses` | read | List warehouses |
| `vendty_list_taxes` | read | List taxes |
| `vendty_list_sellers` | read | List sellers |
| `vendty_list_users` | read | List users |
| `vendty_list_price_lists` | read | List price lists |
| `vendty_list_suppliers` | read | List suppliers |
| `vendty_list_purchase_orders` | read | List purchase invoices |
| `vendty_get_purchase_order` | read | Get a purchase invoice |
| `vendty_list_support_documents` | read | List support documents |
| `vendty_get_support_document` | read | Get a support document |
| `vendty_list_reports` | read | List report jobs |
| `vendty_get_report` | read | Get a report job |
| `vendty_usage_status` | meta | Usage status (free-tier meter) |
| `vendty_request_feature` | meta | Request a missing feature |
| `vendty_upgrade` | meta | Upgrade to Pro or Pro+ |
| `vendty_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `vendty_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `vendty_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `vendty_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
