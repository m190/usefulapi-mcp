# Nembol MCP by usefulapi

Use your [Nembol](https://nembol.com) account from Claude, Cursor, or any MCP client. Reads products, listings, orders and sync events, and updates stock and prices, publishes listings and marks orders shipped. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://nembol.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nembol.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nembol https://nembol.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nembol&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnembol.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nembol": {
      "url": "https://nembol.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Nembol credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nembol/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Nembol API key** (Settings → Developers, created by the store owner). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nembol_get_store` | read | Get the store |
| `nembol_list_channel_accounts` | read | List channel accounts |
| `nembol_list_products` | read | List and search products |
| `nembol_get_product` | read | Get a product |
| `nembol_list_listings` | read | List listings |
| `nembol_get_listing` | read | Get a listing |
| `nembol_list_orders` | read | List orders |
| `nembol_get_order` | read | Get an order |
| `nembol_get_operation` | read | Get an operation |
| `nembol_list_events` | read | List events |
| `nembol_list_actions` | read | List the action log |
| `nembol_create_product` | **write** | Create a product |
| `nembol_update_product` | **write** | Update a product |
| `nembol_update_stock_and_prices` | **write** | Update stock and prices by SKU |
| `nembol_publish_product_to_channel` | **write** | Publish a product to a channel |
| `nembol_delist_listing` | **write** | Delist a listing |
| `nembol_mark_order_shipped` | **write** | Mark an order shipped |
| `nembol_usage_status` | meta | Usage status (free-tier meter) |
| `nembol_request_feature` | meta | Request a missing feature |
| `nembol_upgrade` | meta | Upgrade to Pro or Pro+ |
| `nembol_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `nembol_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `nembol_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `nembol_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
