# Sello MCP by usefulapi

Use your [Sello](https://sello.io) account from Claude, Cursor, or any MCP client. Read orders, products, messages and sales statistics, and update orders and product stock. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sello.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sello.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sello https://sello.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sello&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsello.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sello": {
      "url": "https://sello.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sello credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sello/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Sello API key** (Sello → Account settings → API keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sello_get_account` | read | Get account |
| `sello_list_orders` | read | List orders |
| `sello_get_order` | read | Get order |
| `sello_list_order_rows` | read | List order rows |
| `sello_list_order_deliveries` | read | List order deliveries |
| `sello_get_order_history` | read | Get order history |
| `sello_list_products` | read | List products |
| `sello_get_product` | read | Get product |
| `sello_get_product_history` | read | Get product history |
| `sello_list_statuses` | read | List order statuses |
| `sello_list_suppliers` | read | List suppliers |
| `sello_list_integrations` | read | List integrations |
| `sello_list_messages` | read | List messages |
| `sello_count_unread_messages` | read | Count unread messages |
| `sello_get_stats_summary` | read | Get stats summary |
| `sello_get_daily_turnover` | read | Get daily turnover |
| `sello_get_monthly_turnover` | read | Get monthly turnover |
| `sello_get_stock_worth` | read | Get stock worth |
| `sello_get_top_sellers` | read | Get top sellers |
| `sello_update_order` | **write** | Update order |
| `sello_update_product_quantity` | **write** | Update product stock |
| `sello_usage_status` | meta | Usage status (free-tier meter) |
| `sello_request_feature` | meta | Request a missing feature |
| `sello_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `sello_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `sello_upgrade` (it returns a Stripe Checkout link). Cancel any time with `sello_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `sello_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
