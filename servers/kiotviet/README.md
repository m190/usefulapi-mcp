# KiotViet MCP by usefulapi

**Live endpoint:** `https://kiotviet.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kiotviet.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kiotviet https://kiotviet.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kiotviet&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkiotviet.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kiotviet": {
      "url": "https://kiotviet.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your KiotViet credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kiotviet/

<!-- connect:end (generated above, edit below) -->

On first connect you will paste your **KiotViet Client ID, secret and shop name**. They are validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kiotviet_list_products` | read | List products |
| `kiotviet_get_product` | read | Get product |
| `kiotviet_get_product_by_code` | read | Get product by code |
| `kiotviet_list_categories` | read | List categories |
| `kiotviet_get_category` | read | Get category |
| `kiotviet_list_customers` | read | List customers |
| `kiotviet_get_customer` | read | Get customer |
| `kiotviet_get_customer_by_code` | read | Get customer by code |
| `kiotviet_create_customer` | **write** | Create customer |
| `kiotviet_list_invoices` | read | List invoices |
| `kiotviet_get_invoice` | read | Get invoice |
| `kiotviet_get_invoice_by_code` | read | Get invoice by code |
| `kiotviet_list_orders` | read | List sales orders |
| `kiotviet_get_order` | read | Get sales order |
| `kiotviet_get_order_by_code` | read | Get sales order by code |
| `kiotviet_create_order` | **write** | Create sales order |
| `kiotviet_list_branches` | read | List branches |
| `kiotviet_list_stock` | read | List stock on hand |
| `kiotviet_list_suppliers` | read | List suppliers |
| `kiotviet_get_supplier` | read | Get supplier |
| `kiotviet_list_purchase_orders` | read | List goods receipts |
| `kiotviet_get_purchase_order` | read | Get goods receipt |
| `kiotviet_list_supplier_orders` | read | List supplier orders |
| `kiotviet_list_returns` | read | List returns |
| `kiotviet_get_return` | read | Get return |
| `kiotviet_list_cashflow` | read | List cash flow |
| `kiotviet_list_users` | read | List users |
| `kiotviet_list_price_books` | read | List price books |
| `kiotviet_get_price_book` | read | Get price book prices |
| `kiotviet_usage_status` | meta | Usage status (free-tier meter) |
| `kiotviet_request_feature` | meta | Request a missing feature |
| `kiotviet_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `kiotviet_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per store account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `kiotviet_upgrade` (it returns a Stripe Checkout link). Cancel any time with `kiotviet_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `kiotviet_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
