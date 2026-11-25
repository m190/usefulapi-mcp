# Snipcart MCP by usefulapi

Use your [Snipcart](https://snipcart.com) account from Claude, Cursor, or any MCP client. Read orders, refunds, products, customers, discount codes, abandoned carts and subscriptions, in read-only mode. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://snipcart.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://snipcart.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http snipcart https://snipcart.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=snipcart&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsnipcart.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "snipcart": {
      "url": "https://snipcart.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Snipcart credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/snipcart/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Snipcart secret API key** from your merchant dashboard. Test and Live keys work separately: a Test key reads only test data. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `snipcart_list_orders` | read | List orders |
| `snipcart_get_order` | read | Get an order |
| `snipcart_list_order_refunds` | read | List refunds of an order |
| `snipcart_list_products` | read | List products |
| `snipcart_get_product` | read | Get a product |
| `snipcart_list_customers` | read | List customers |
| `snipcart_get_customer` | read | Get a customer |
| `snipcart_list_customer_orders` | read | List orders of a customer |
| `snipcart_list_discounts` | read | List discount codes |
| `snipcart_get_discount` | read | Get a discount code |
| `snipcart_list_abandoned_carts` | read | List abandoned carts |
| `snipcart_get_abandoned_cart` | read | Get an abandoned cart |
| `snipcart_list_subscriptions` | read | List subscriptions |
| `snipcart_get_subscription` | read | Get a subscription |
| `snipcart_usage_status` | meta | Usage status (free-tier meter) |
| `snipcart_request_feature` | meta | Request a missing feature |
| `snipcart_upgrade` | meta | Upgrade to Pro or Pro+ |
| `snipcart_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `snipcart_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `snipcart_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `snipcart_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
