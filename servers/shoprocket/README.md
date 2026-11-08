# Shoprocket MCP by usefulapi

Connect your API-enabled Shoprocket account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shoprocket.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shoprocket https://shoprocket.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shoprocket&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshoprocket.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shoprocket": {
      "url": "https://shoprocket.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Shoprocket credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shoprocket/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shoprocket_get_store` | read | Get store |
| `shoprocket_get_store_stats` | read | Get store stats |
| `shoprocket_list_orders` | read | List orders |
| `shoprocket_get_order` | read | Get order |
| `shoprocket_update_order_status` | **write** | Update order status |
| `shoprocket_list_products` | read | List products |
| `shoprocket_get_product` | read | Get product |
| `shoprocket_create_product` | **write** | Create product |
| `shoprocket_update_product` | **write** | Update product |
| `shoprocket_list_categories` | read | List categories |
| `shoprocket_get_category` | read | Get category |
| `shoprocket_create_category` | **write** | Create category |
| `shoprocket_update_category` | **write** | Update category |
| `shoprocket_list_customers` | read | List customers |
| `shoprocket_get_customer` | read | Get customer |
| `shoprocket_create_customer` | **write** | Create customer |
| `shoprocket_update_customer` | **write** | Update customer |
| `shoprocket_list_discount_codes` | read | List discount codes |
| `shoprocket_get_discount_code` | read | Get discount code |
| `shoprocket_create_discount_code` | **write** | Create discount code |
| `shoprocket_list_automatic_discounts` | read | List automatic discounts |
| `shoprocket_list_sales` | read | List sale promotions |
| `shoprocket_list_shipping_methods` | read | List shipping methods |
| `shoprocket_list_taxes` | read | List taxes |
| `shoprocket_list_zones` | read | List shipping zones |
| `shoprocket_list_payment_methods` | read | List payment methods |
| `shoprocket_usage_status` | meta | Usage status (free-tier meter) |
| `shoprocket_request_feature` | meta | Request a missing feature |
| `shoprocket_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shoprocket_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per Shoprocket store) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per Shoprocket store) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `shoprocket_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `shoprocket_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `shoprocket_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
