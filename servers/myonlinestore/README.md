# MyOnlineStore MCP by usefulapi

Use your [MyOnlineStore](https://www.myonlinestore.com) account from Claude, Cursor, or any MCP client. Read the orders, articles, categories, customers, discount codes, shipping methods and newsletter subscribers of one shop, read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://myonlinestore.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://myonlinestore.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http myonlinestore https://myonlinestore.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=myonlinestore&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmyonlinestore.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "myonlinestore": {
      "url": "https://myonlinestore.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MyOnlineStore credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/myonlinestore/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **MyOnlineStore store token** (in your shop backend: Settings → API → Add new token). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `myonlinestore_get_store` | read | Get store details |
| `myonlinestore_list_shipping_methods` | read | List shipping methods |
| `myonlinestore_list_articles` | read | List articles |
| `myonlinestore_get_article` | read | Get an article |
| `myonlinestore_count_articles` | read | Count articles |
| `myonlinestore_list_categories` | read | List categories |
| `myonlinestore_get_category` | read | Get a category |
| `myonlinestore_list_category_articles` | read | List articles in a category |
| `myonlinestore_list_customers` | read | List customers |
| `myonlinestore_get_customer` | read | Get a customer |
| `myonlinestore_list_customer_addresses` | read | List a customer's addresses |
| `myonlinestore_list_orders` | read | List orders |
| `myonlinestore_get_order` | read | Get an order |
| `myonlinestore_count_orders` | read | Count orders |
| `myonlinestore_list_order_payments` | read | List an order's payments |
| `myonlinestore_list_discount_codes` | read | List discount codes |
| `myonlinestore_get_discount_code` | read | Get a discount code |
| `myonlinestore_list_newsletter_subscribers` | read | List newsletter subscribers |
| `myonlinestore_get_newsletter_subscriber` | read | Get a newsletter subscriber |
| `myonlinestore_count_newsletter_subscribers` | read | Count newsletter subscribers |
| `myonlinestore_usage_status` | meta | Usage status (free-tier meter) |
| `myonlinestore_request_feature` | meta | Request a missing feature |
| `myonlinestore_upgrade` | meta | Upgrade to Pro or Pro+ |
| `myonlinestore_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `myonlinestore_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `myonlinestore_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `myonlinestore_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
