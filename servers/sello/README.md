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
| `sello_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sello_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sello_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sello_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sello_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
