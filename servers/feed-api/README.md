# Feed API MCP by usefulapi

Use your [Feed API](https://feed-api.com) account from Claude, Cursor, or any MCP client. It reads products, variants, stock, suppliers, orders, shipments, returns and cancellations. It is read only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://feed-api.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://feed-api.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http feed-api https://feed-api.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=feed-api&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffeed-api.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "feed-api": {
      "url": "https://feed-api.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Feed API credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/feed-api/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Feed API reseller API key**, which starts with `fapi_` (Settings → API Keys in the reseller dashboard). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `feedapi_list_products` | read | List products |
| `feedapi_get_product` | read | Get a product |
| `feedapi_list_product_variants` | read | List product variants |
| `feedapi_list_suppliers` | read | List suppliers |
| `feedapi_get_supplier` | read | Get a supplier |
| `feedapi_list_inventory_movements` | read | List stock movements |
| `feedapi_list_orders` | read | List orders |
| `feedapi_get_order` | read | Get an order |
| `feedapi_list_order_shipments` | read | List order shipments |
| `feedapi_list_order_status_history` | read | List order status history |
| `feedapi_list_order_returns` | read | List order returns |
| `feedapi_list_order_cancellations` | read | List item cancellations |
| `feedapi_usage_status` | meta | Usage status (free-tier meter) |
| `feedapi_request_feature` | meta | Request a missing feature |
| `feedapi_upgrade` | meta | Upgrade to Pro or Pro+ |
| `feedapi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `feedapi_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `feedapi_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `feedapi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
