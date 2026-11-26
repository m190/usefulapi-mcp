# WooCommerce MCP by usefulapi

Use your [WooCommerce](https://woocommerce.com) account from Claude, Cursor, or any MCP client. Read orders, products, customers and sales reports, and change prices, stock and order status. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://woocommerce.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://woocommerce.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http woocommerce https://woocommerce.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=woocommerce&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwoocommerce.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "woocommerce": {
      "url": "https://woocommerce.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your WooCommerce credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/woocommerce/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **store address**, a **consumer key** (ck_…) and a **consumer secret** (cs_…) from WooCommerce → Settings → Advanced → REST API. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `woocommerce_list_products` | read | List products |
| `woocommerce_get_product` | read | Get a product |
| `woocommerce_list_orders` | read | List orders |
| `woocommerce_get_order` | read | Get an order |
| `woocommerce_list_order_notes` | read | List order notes |
| `woocommerce_list_customers` | read | List customers |
| `woocommerce_get_customer` | read | Get a customer |
| `woocommerce_list_coupons` | read | List coupons |
| `woocommerce_sales_report` | read | Sales report |
| `woocommerce_top_sellers` | read | Top sellers |
| `woocommerce_order_totals` | read | Order totals |
| `woocommerce_update_product_price` | **write** | Update product price |
| `woocommerce_update_product_stock` | **write** | Update product stock |
| `woocommerce_update_order_status` | **write** | Update order status |
| `woocommerce_add_order_note` | **write** | Add an order note |
| `woocommerce_usage_status` | meta | Usage status (free-tier meter) |
| `woocommerce_request_feature` | meta | Request a missing feature |
| `woocommerce_upgrade` | meta | Upgrade to Pro or Pro+ |
| `woocommerce_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `woocommerce_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `woocommerce_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `woocommerce_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
