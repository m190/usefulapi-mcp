# ShopWired MCP by usefulapi

Use your [ShopWired](https://www.shopwired.co.uk) account from Claude, Cursor, or any MCP client. It reads orders, products, customers, stock and categories. It sets stock quantities and order statuses. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://shopwired.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shopwired.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shopwired https://shopwired.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shopwired&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshopwired.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shopwired": {
      "url": "https://shopwired.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ShopWired credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shopwired/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **ShopWired API key** and **API secret** (Account → API keys in ShopWired). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shopwired_get_business` | read | Get business details |
| `shopwired_list_orders` | read | List orders |
| `shopwired_get_order` | read | Get an order |
| `shopwired_search_orders` | read | Search orders |
| `shopwired_list_products` | read | List products |
| `shopwired_get_product` | read | Get a product |
| `shopwired_search_products` | read | Search products |
| `shopwired_list_customers` | read | List customers |
| `shopwired_get_customer` | read | Get a customer |
| `shopwired_get_stock` | read | Get stock quantity |
| `shopwired_list_categories` | read | List categories |
| `shopwired_list_brands` | read | List brands |
| `shopwired_update_stock` | **write** | Set stock quantity |
| `shopwired_update_order_status` | **write** | Update order status |
| `shopwired_usage_status` | meta | Usage status (free-tier meter) |
| `shopwired_request_feature` | meta | Request a missing feature |
| `shopwired_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shopwired_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `shopwired_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `shopwired_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `shopwired_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
