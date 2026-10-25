# Hiboutik MCP by usefulapi

Use [Hiboutik](https://www.hiboutik.com) from Claude, Cursor, or any MCP client — work with your shop's products, stock, customers and sales. Hosted, no local install: connect with your own Hiboutik credentials.

**Live endpoint:** `https://hiboutik.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/hiboutik

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hiboutik.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hiboutik https://hiboutik.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hiboutik&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhiboutik.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hiboutik": {
      "url": "https://hiboutik.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Hiboutik credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hiboutik/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your **Hiboutik account name, user email and API key** (Hiboutik Settings > API). They are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hiboutik_list_stores` | read | List stores |
| `hiboutik_list_warehouses` | read | List warehouses |
| `hiboutik_list_users` | read | List users (vendors) |
| `hiboutik_list_taxes` | read | List taxes |
| `hiboutik_list_payment_types` | read | List payment types |
| `hiboutik_list_categories` | read | List categories |
| `hiboutik_list_brands` | read | List brands |
| `hiboutik_list_suppliers` | read | List suppliers |
| `hiboutik_list_size_types` | read | List variant types |
| `hiboutik_list_sizes` | read | List variants of a type |
| `hiboutik_list_products` | read | List products |
| `hiboutik_get_product` | read | Get product |
| `hiboutik_search_products_by_name` | read | Search products by name |
| `hiboutik_find_product_by_barcode` | read | Find product by barcode |
| `hiboutik_search_products` | read | Search products by filters |
| `hiboutik_stock_all_warehouses` | read | Stock in all warehouses |
| `hiboutik_stock_by_warehouse` | read | Stock in one warehouse |
| `hiboutik_stock_by_product` | read | Stock of one product |
| `hiboutik_list_stock_orders` | read | List stock orders (inventory inputs) |
| `hiboutik_list_customers` | read | List customers |
| `hiboutik_search_customers` | read | Search customers |
| `hiboutik_get_customer` | read | Get customer |
| `hiboutik_list_customer_sales` | read | List sales of a customer |
| `hiboutik_get_sale` | read | Get sale |
| `hiboutik_list_open_sales` | read | List open sales |
| `hiboutik_list_closed_sales` | read | List closed sales |
| `hiboutik_report_turnover` | read | Turnover report |
| `hiboutik_report_products_sold` | read | Products sold report |
| `hiboutik_create_customer` | **write** | Create customer |
| `hiboutik_update_customer` | **write** | Update a customer attribute |
| `hiboutik_set_sale_comment` | **write** | Set sale comment |
| `hiboutik_usage_status` | meta | Usage status (free-tier meter) |
| `hiboutik_request_feature` | meta | Request a missing feature |
| `hiboutik_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `hiboutik_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `hiboutik_upgrade` (it returns a Stripe Checkout link). Cancel any time with `hiboutik_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `hiboutik_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
