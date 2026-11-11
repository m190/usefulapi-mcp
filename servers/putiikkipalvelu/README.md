# Putiikkipalvelu MCP by usefulapi

Use your [Putiikkipalvelu](https://www.putiikkipalvelu.fi) account from Claude, Cursor, or any MCP client. Read a store's products, categories, reviews, content pages and shipping methods. The server is read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://putiikkipalvelu.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://putiikkipalvelu.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http putiikkipalvelu https://putiikkipalvelu.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=putiikkipalvelu&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fputiikkipalvelu.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "putiikkipalvelu": {
      "url": "https://putiikkipalvelu.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Putiikkipalvelu credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/putiikkipalvelu/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your store's **Storefront API key** (Putiikkipalvelu Dashboard → Settings → API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `putiikkipalvelu_get_store_config` | read | Get store configuration |
| `putiikkipalvelu_list_categories` | read | List categories |
| `putiikkipalvelu_get_category` | read | Get a category |
| `putiikkipalvelu_latest_products` | read | Latest products |
| `putiikkipalvelu_search_products` | read | Search and browse products |
| `putiikkipalvelu_count_products` | read | Count products |
| `putiikkipalvelu_get_product` | read | Get a product |
| `putiikkipalvelu_get_reviews` | read | Get product reviews |
| `putiikkipalvelu_get_page` | read | Get a content page |
| `putiikkipalvelu_list_shipping_methods` | read | List shipping methods |
| `putiikkipalvelu_usage_status` | meta | Usage status (free-tier meter) |
| `putiikkipalvelu_request_feature` | meta | Request a missing feature |
| `putiikkipalvelu_upgrade` | meta | Upgrade to Pro or Pro+ |
| `putiikkipalvelu_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `putiikkipalvelu_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `putiikkipalvelu_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `putiikkipalvelu_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
