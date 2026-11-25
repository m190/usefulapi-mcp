# Inventory Now MCP by usefulapi

Use your [Inventory Now](https://www.inventorynow.app) account from Claude, Cursor, or any MCP client. Read items, orders and settings, create and update items, and record, complete and cancel orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://inventory-now.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://inventory-now.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http inventory-now https://inventory-now.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=inventory-now&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finventory-now.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "inventory-now": {
      "url": "https://inventory-now.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Inventory Now credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/inventory-now/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Inventory Now API key**, which the account owner creates under Developer API in the web app. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `inventorynow_list_items` | read | List items |
| `inventorynow_get_item` | read | Get an item |
| `inventorynow_get_items_summary` | read | Get items summary |
| `inventorynow_list_orders` | read | List orders |
| `inventorynow_get_order` | read | Get an order |
| `inventorynow_get_settings` | read | Get account settings |
| `inventorynow_create_item` | **write** | Create an item |
| `inventorynow_update_item` | **write** | Update an item |
| `inventorynow_create_order` | **write** | Record a buy or sell order |
| `inventorynow_complete_order` | **write** | Complete an order |
| `inventorynow_cancel_order` | **write** | Cancel an order |
| `inventorynow_usage_status` | meta | Usage status (free-tier meter) |
| `inventorynow_request_feature` | meta | Request a missing feature |
| `inventorynow_upgrade` | meta | Upgrade to Pro or Pro+ |
| `inventorynow_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `inventorynow_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `inventorynow_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `inventorynow_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
