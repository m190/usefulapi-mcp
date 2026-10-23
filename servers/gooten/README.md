# Gooten MCP by usefulapi

Use [Gooten](https://www.gooten.com) from Claude, Cursor, or any MCP client — browse the print-on-demand catalog and variants, check stock, quote shipping and order prices, validate addresses, search and read orders with tracking and billing, and set an order's status or cancel order items (each write needs an explicit confirmation).
Hosted, no local install: connect with your Gooten RecipeID and Partner Billing Key.

**Live endpoint:** `https://gooten.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/gooten

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gooten.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gooten https://gooten.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gooten&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgooten.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gooten": {
      "url": "https://gooten.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Gooten credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gooten/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gooten_list_products` | read | List catalog products |
| `gooten_list_product_variants` | read | List product variants (SKUs) |
| `gooten_get_product_templates` | read | Get product templates |
| `gooten_check_stock` | read | Check stock for SKUs |
| `gooten_get_shipping_estimate` | read | Get shipping estimate for a product |
| `gooten_get_shipping_options` | read | Get shipping options for a cart |
| `gooten_get_price_estimate` | read | Get price estimate for an order |
| `gooten_validate_address` | read | Validate a shipping address |
| `gooten_list_currencies` | read | List supported currencies |
| `gooten_list_shipping_countries` | read | List shipping countries |
| `gooten_list_print_ready_products` | read | List print-ready products |
| `gooten_list_print_ready_variants` | read | List print-ready variants |
| `gooten_search_orders` | read | Search orders |
| `gooten_get_order` | read | Get order |
| `gooten_get_order_billing` | read | Get order billing |
| `gooten_set_order_status` | **write** | Set order status |
| `gooten_cancel_order_items` | **write** | Cancel order items |
| `gooten_usage_status` | meta | Usage status (free-tier meter) |
| `gooten_request_feature` | meta | Request a missing feature |
| `gooten_upgrade` | meta | Upgrade to Pro (unlimited) |
| `gooten_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `gooten_upgrade` (it returns a Stripe Checkout link). Cancel any time with `gooten_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `gooten_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Gooten.
