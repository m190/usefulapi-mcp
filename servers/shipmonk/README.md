# ShipMonk MCP by usefulapi

Use your [ShipMonk](https://shipmonk.com) account from Claude, Cursor, or any MCP client. Look up warehouses, orders, products, receivings, returns and inventory holds, and create or submit orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://shipmonk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shipmonk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shipmonk https://shipmonk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shipmonk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshipmonk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shipmonk": {
      "url": "https://shipmonk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ShipMonk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shipmonk/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **ShipMonk Integration API key** (Account Settings → General Settings → Stores → Integration API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shipmonk_list_warehouses` | read | List warehouses |
| `shipmonk_list_orders` | read | List orders |
| `shipmonk_get_order` | read | Get an order |
| `shipmonk_list_products` | read | List products |
| `shipmonk_list_receivings` | read | List receivings |
| `shipmonk_get_receiving` | read | Get a receiving |
| `shipmonk_list_returns` | read | List returns |
| `shipmonk_list_inventory_holds` | read | List inventory holds |
| `shipmonk_create_order` | **write** | Create or update an order |
| `shipmonk_submit_order` | **write** | Submit an order for fulfilment |
| `shipmonk_usage_status` | meta | Usage status (free-tier meter) |
| `shipmonk_request_feature` | meta | Request a missing feature |
| `shipmonk_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shipmonk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `shipmonk_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `shipmonk_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `shipmonk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
