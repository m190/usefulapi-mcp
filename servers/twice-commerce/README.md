# Twice Commerce MCP by usefulapi

Use your [Twice Commerce](https://www.twicecommerce.com) account from Claude, Cursor, or any MCP client. Read orders, customers, catalog items, stock, locations and availability, and add comments to orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://twice-commerce.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://twice-commerce.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http twice-commerce https://twice-commerce.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=twice-commerce&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftwice-commerce.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "twice-commerce": {
      "url": "https://twice-commerce.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Twice Commerce credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/twice-commerce/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **TWICE Commerce API key** (TWICE admin → Settings → Integrations & API → Create key; choose Limited access and give Read to the areas you need). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `twicecommerce_get_merchant` | read | Get merchant profile |
| `twicecommerce_list_service_locations` | read | List locations |
| `twicecommerce_list_taxes` | read | List taxes |
| `twicecommerce_list_tags` | read | List tags |
| `twicecommerce_list_orders` | read | List orders |
| `twicecommerce_get_order` | read | Get an order |
| `twicecommerce_get_order_payments` | read | Get order payments |
| `twicecommerce_get_order_invoices` | read | Get order invoices |
| `twicecommerce_list_customers` | read | List customers |
| `twicecommerce_get_customer` | read | Get a customer |
| `twicecommerce_get_customer_orders` | read | Get customer orders |
| `twicecommerce_list_catalog_items` | read | List catalog items |
| `twicecommerce_get_catalog_item` | read | Get a catalog item |
| `twicecommerce_check_availability` | read | Check availability for a period |
| `twicecommerce_list_discount_codes` | read | List discount codes |
| `twicecommerce_list_stock_items` | read | List stock items |
| `twicecommerce_get_stock_item` | read | Get a stock item |
| `twicecommerce_list_skus` | read | List SKUs |
| `twicecommerce_get_sku` | read | Get a SKU |
| `twicecommerce_add_order_comment` | **write** | Add a comment to an order |
| `twicecommerce_usage_status` | meta | Usage status (free-tier meter) |
| `twicecommerce_request_feature` | meta | Request a missing feature |
| `twicecommerce_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `twicecommerce_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `twicecommerce_upgrade` (it returns a Stripe Checkout link). Cancel any time with `twicecommerce_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `twicecommerce_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
