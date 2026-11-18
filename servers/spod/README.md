# Spreadconnect MCP by usefulapi

Use your [Spreadconnect](https://www.spreadconnect.app) account from Claude, Cursor, or any MCP client. Read orders, shipments, stock, articles and the product catalog, and create, confirm or cancel orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://spod.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://spod.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http spod https://spod.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spod&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fspod.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "spod": {
      "url": "https://spod.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Spreadconnect credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/spod/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Spreadconnect API key**. Get it at login.spreadconnect.app: open **Connect Integration**, create a **Spreadconnect API** integration, and copy its key from the Dashboard or Integration Settings page. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `spod_get_account` | read | Get account |
| `spod_list_articles` | read | List articles |
| `spod_get_article` | read | Get article |
| `spod_get_order` | read | Get order |
| `spod_get_order_shipments` | read | Get order shipments |
| `spod_get_order_shipping_types` | read | Get order shipping types |
| `spod_create_order` | **write** | Create order (unconfirmed) |
| `spod_set_order_shipping_type` | **write** | Set order shipping type |
| `spod_confirm_order` | **write** | Confirm order (sends it to production) |
| `spod_cancel_order` | **write** | Cancel order |
| `spod_list_product_types` | read | List product types |
| `spod_get_product_type` | read | Get product type |
| `spod_list_product_categories` | read | List product categories |
| `spod_list_stock` | read | List stock |
| `spod_get_stock_by_sku` | read | Get stock for a sku |
| `spod_get_stock_by_product_type` | read | Get stock for a product type |
| `spod_upload_design` | **write** | Upload design from URL |
| `spod_create_article` | **write** | Create article |
| `spod_delete_article` | **write** | Delete article |
| `spod_usage_status` | meta | Usage status (free-tier meter) |
| `spod_request_feature` | meta | Request a missing feature |
| `spod_upgrade` | meta | Upgrade to Pro or Pro+ |
| `spod_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `spod_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `spod_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `spod_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
