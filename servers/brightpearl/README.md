# Brightpearl MCP by usefulapi

Use [Brightpearl](https://www.brightpearl.com) from Claude, Cursor, or any MCP client — search sales and purchase orders, products, prices, stock availability per warehouse, goods-in and goods-out notes, contacts and customer payments, add notes to orders and contacts, and update an order's status (each write needs an explicit confirmation).
Hosted, no local install: connect with the reference and token of a private app in your own Brightpearl account.

**Live endpoint:** `https://brightpearl.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/brightpearl

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://brightpearl.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http brightpearl https://brightpearl.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=brightpearl&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbrightpearl.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "brightpearl": {
      "url": "https://brightpearl.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Brightpearl credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/brightpearl/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `brightpearl_get_account_configuration` | read | Get account configuration |
| `brightpearl_search_orders` | read | Search orders |
| `brightpearl_get_orders` | read | Get orders |
| `brightpearl_get_order_notes` | read | Get order notes |
| `brightpearl_list_order_statuses` | read | List order statuses |
| `brightpearl_list_order_types` | read | List order types |
| `brightpearl_add_order_note` | **write** | Add order note |
| `brightpearl_update_order_status` | **write** | Update order status |
| `brightpearl_search_products` | read | Search products |
| `brightpearl_get_products` | read | Get products |
| `brightpearl_get_product_prices` | read | Get product prices |
| `brightpearl_get_product_availability` | read | Get product stock availability |
| `brightpearl_list_price_lists` | read | List price lists |
| `brightpearl_search_brands` | read | Search brands |
| `brightpearl_search_categories` | read | Search product categories |
| `brightpearl_list_warehouses` | read | List warehouses |
| `brightpearl_list_shipping_methods` | read | List shipping methods |
| `brightpearl_search_goods_out_notes` | read | Search goods-out notes (shipments) |
| `brightpearl_search_goods_in_notes` | read | Search goods-in notes (stock received) |
| `brightpearl_search_contacts` | read | Search contacts |
| `brightpearl_get_contacts` | read | Get contacts |
| `brightpearl_add_contact_note` | **write** | Add contact note |
| `brightpearl_search_customer_payments` | read | Search customer payments |
| `brightpearl_list_payment_methods` | read | List payment methods |
| `brightpearl_list_tax_codes` | read | List tax codes |
| `brightpearl_usage_status` | meta | Usage status (free-tier meter) |
| `brightpearl_request_feature` | meta | Request a missing feature |
| `brightpearl_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `brightpearl_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `brightpearl_upgrade` (it returns a Stripe Checkout link). Cancel any time with `brightpearl_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `brightpearl_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Brightpearl.
