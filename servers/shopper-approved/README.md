# Shopper Approved MCP by usefulapi

Use your [Shopper Approved](https://www.shopperapproved.com) account from Claude, Cursor, or any MCP client. Read seller reviews, product reviews and their rating statistics, all read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://shopper-approved.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shopper-approved.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shopper-approved https://shopper-approved.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shopper-approved&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshopper-approved.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shopper-approved": {
      "url": "https://shopper-approved.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Shopper Approved credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shopper-approved/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Site ID** and **API token**, both found in your Shopper Approved dashboard under **Settings**, also on the API Docs page. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shopperapproved_list_reviews` | read | List seller reviews |
| `shopperapproved_get_review` | read | Get a review by order ID |
| `shopperapproved_list_product_reviews` | read | List product reviews |
| `shopperapproved_get_product_reviews` | read | Get reviews for one product |
| `shopperapproved_get_review_stats` | read | Get seller review statistics |
| `shopperapproved_get_product_stats` | read | Get product review statistics |
| `shopperapproved_get_product_stat` | read | Get statistics for one product |
| `shopperapproved_usage_status` | meta | Usage status (free-tier meter) |
| `shopperapproved_request_feature` | meta | Request a missing feature |
| `shopperapproved_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shopperapproved_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `shopperapproved_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `shopperapproved_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `shopperapproved_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
