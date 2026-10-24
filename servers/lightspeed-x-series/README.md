# Lightspeed Retail (X-Series) MCP by usefulapi

Work with your [Lightspeed Retail (X-Series)](https://www.lightspeedhq.com/pos/retail/) store (formerly Vend) from Claude, Cursor, or any MCP client — look up products, stock per outlet, sales, customers, suppliers, stock orders, registers and staff; get a sales report for a period in one call; create and update customers, set prices and set stock levels. Hosted, no local
install: connect with your Lightspeed Retail account over OAuth.

**Live endpoint:** `https://lightspeed-x-series.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/lightspeed-x-series

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://lightspeed-x-series.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http lightspeed-x-series https://lightspeed-x-series.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=lightspeed-x-series&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flightspeed-x-series.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "lightspeed-x-series": {
      "url": "https://lightspeed-x-series.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Lightspeed Retail (X-Series) account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/lightspeed-x-series/

<!-- connect:end (generated above, edit below) -->

On first connect you'll be sent to Lightspeed to sign in and approve access for your store; no API keys to paste.
You can remove the access any time in your Lightspeed Retail back office. One subscription covers one store account.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lightspeedxseries_get_retailer` | read | Get retailer |
| `lightspeedxseries_list_outlets` | read | List outlets |
| `lightspeedxseries_get_outlet` | read | Get outlet |
| `lightspeedxseries_list_registers` | read | List registers |
| `lightspeedxseries_get_register_payments_summary` | read | Get register payments summary |
| `lightspeedxseries_list_taxes` | read | List taxes |
| `lightspeedxseries_list_users` | read | List users |
| `lightspeedxseries_get_user_sale_totals` | read | Get user sale totals |
| `lightspeedxseries_list_products` | read | List products |
| `lightspeedxseries_get_product` | read | Get product |
| `lightspeedxseries_search_products` | read | Search products |
| `lightspeedxseries_get_inventory_levels` | read | Get inventory levels |
| `lightspeedxseries_list_brands` | read | List brands |
| `lightspeedxseries_list_tags` | read | List tags |
| `lightspeedxseries_list_suppliers` | read | List suppliers |
| `lightspeedxseries_list_consignments` | read | List stock orders (consignments) |
| `lightspeedxseries_get_consignment` | read | Get consignment |
| `lightspeedxseries_list_consignment_products` | read | List consignment products |
| `lightspeedxseries_list_sales` | read | List sales (change feed) |
| `lightspeedxseries_get_sale` | read | Get sale |
| `lightspeedxseries_search_sales` | read | Search sales |
| `lightspeedxseries_sales_summary` | read | Sales summary (totals for a period) |
| `lightspeedxseries_list_customers` | read | List customers |
| `lightspeedxseries_search_customers` | read | Search customers |
| `lightspeedxseries_get_customer` | read | Get customer |
| `lightspeedxseries_list_customer_groups` | read | List customer groups |
| `lightspeedxseries_create_customer` | **write** | Create customer |
| `lightspeedxseries_update_customer` | **write** | Update customer |
| `lightspeedxseries_update_product_prices` | **write** | Update product prices |
| `lightspeedxseries_set_product_stock` | **write** | Set product stock and reorder levels |
| `lightspeedxseries_usage_status` | meta | Usage status (free-tier meter) |
| `lightspeedxseries_request_feature` | meta | Request a missing feature |
| `lightspeedxseries_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `lightspeedxseries_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per store account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `lightspeedxseries_upgrade` (it returns a Stripe Checkout link). Cancel any time with `lightspeedxseries_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `lightspeedxseries_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). This repo contains documentation only; the server is hosted.
