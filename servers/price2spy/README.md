# Price2Spy MCP by usefulapi

Use your [Price2Spy](https://www.price2spy.com) account from Claude, Cursor, or any MCP client. Read your tracked products, competitor prices, monitored URLs and price history. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://price2spy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://price2spy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http price2spy https://price2spy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=price2spy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fprice2spy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "price2spy": {
      "url": "https://price2spy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Price2Spy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/price2spy/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Client ID** and a **Client Secret** (Price2Spy → Integrations → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `price2spy_get_products` | read | Get products |
| `price2spy_get_current_pricing_data` | read | Get current pricing data |
| `price2spy_get_urls` | read | Get monitored URLs |
| `price2spy_get_measurements` | read | Get price history of a URL |
| `price2spy_list_brands` | read | List brands |
| `price2spy_list_categories` | read | List categories |
| `price2spy_list_suppliers` | read | List suppliers |
| `price2spy_list_price_buckets` | read | List price buckets |
| `price2spy_usage_status` | meta | Usage status (free-tier meter) |
| `price2spy_request_feature` | meta | Request a missing feature |
| `price2spy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `price2spy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `price2spy_upgrade` (it returns a Stripe Checkout link). Cancel any time with `price2spy_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `price2spy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
