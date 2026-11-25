# Shoprenter MCP by usefulapi

Use your [Shoprenter](https://www.shoprenter.hu) account from Claude, Cursor, or any MCP client. Read products, categories, manufacturers, stock statuses, orders and customers of a Shoprenter web shop, with no write access. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://shoprenter.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shoprenter.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shoprenter https://shoprenter.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shoprenter&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshoprenter.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shoprenter": {
      "url": "https://shoprenter.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Shoprenter credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shoprenter/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **shop name** (the part before `.myshoprenter.hu`), and the **client ID** and **client secret** of an API client you create under Settings → API Settings. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shoprenter_list_products` | read | List products |
| `shoprenter_get_product` | read | Get product |
| `shoprenter_list_categories` | read | List categories |
| `shoprenter_get_category` | read | Get category |
| `shoprenter_list_manufacturers` | read | List manufacturers |
| `shoprenter_list_stock_statuses` | read | List stock statuses |
| `shoprenter_list_orders` | read | List orders |
| `shoprenter_get_order` | read | Get order |
| `shoprenter_list_order_statuses` | read | List order statuses |
| `shoprenter_list_customers` | read | List customers |
| `shoprenter_get_customer` | read | Get customer |
| `shoprenter_usage_status` | meta | Usage status (free-tier meter) |
| `shoprenter_request_feature` | meta | Request a missing feature |
| `shoprenter_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shoprenter_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `shoprenter_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `shoprenter_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `shoprenter_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
