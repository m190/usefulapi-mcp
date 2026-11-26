# Rebuy MCP by usefulapi

Use your [Rebuy](https://www.rebuyengine.com) account from Claude, Cursor, or any MCP client. Read product recommendations, top sellers, trending products and collections from a Shopify store's Rebuy Engine (read-only). Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://rebuy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rebuy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rebuy https://rebuy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rebuy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frebuy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rebuy": {
      "url": "https://rebuy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Rebuy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rebuy/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the store's **Rebuy public API key** (Rebuy admin → Settings → API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rebuy_recommended_products` | read | Recommended products |
| `rebuy_top_sellers` | read | Top sellers |
| `rebuy_trending_products` | read | Trending products |
| `rebuy_purchased_products` | read | Purchased products |
| `rebuy_collection_products` | read | Collection products |
| `rebuy_viewed_products` | read | Viewed products |
| `rebuy_viewed_related_products` | read | Complementary to viewed |
| `rebuy_static_products` | read | Static product list |
| `rebuy_similar_products` | read | Similar products |
| `rebuy_custom_ruleset_products` | read | Custom ruleset products |
| `rebuy_usage_status` | meta | Usage status (free-tier meter) |
| `rebuy_request_feature` | meta | Request a missing feature |
| `rebuy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rebuy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `rebuy_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `rebuy_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `rebuy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
