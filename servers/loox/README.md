# Loox MCP by usefulapi

Read Loox product and store reviews, reviewer details and rating summaries. Read-only.

**Live endpoint:** `https://loox.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/loox

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://loox.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http loox https://loox.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=loox&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Floox.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "loox": {
      "url": "https://loox.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Loox credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/loox/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Loox **store id** (publicStoreId) and an **API secret key** (Loox → Settings → API Keys).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `loox_list_product_reviews` | read | List product reviews |
| `loox_get_product_review` | read | Get product review |
| `loox_list_store_reviews` | read | List store reviews |
| `loox_get_store_review` | read | Get store review |
| `loox_get_product_reviews_summary` | read | Get product reviews summary |
| `loox_get_product_rating` | read | Get product rating |
| `loox_get_store_reviews_summary` | read | Get store reviews summary |
| `loox_usage_status` | meta | Usage status (free-tier meter) |
| `loox_request_feature` | meta | Request a missing feature |
| `loox_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `loox_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `loox_upgrade` (it returns a Stripe Checkout link). Cancel any time with `loox_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `loox_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Loox.
