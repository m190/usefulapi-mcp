# Lightspeed Retail (R-Series) MCP by usefulapi

Work with your [Lightspeed Retail (R-Series)](https://www.lightspeedhq.com/pos/retail/) store from Claude, Cursor, or any MCP client — look up items, stock per shop, sales, customers, vendors, purchase orders and employees; create customers, edit items and set stock levels. Hosted, no local
install: connect with your Lightspeed Retail account over OAuth.

**Live endpoint:** `https://lightspeed-r-series.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/lightspeed-r-series

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://lightspeed-r-series.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http lightspeed-r-series https://lightspeed-r-series.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=lightspeed-r-series&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flightspeed-r-series.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "lightspeed-r-series": {
      "url": "https://lightspeed-r-series.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/lightspeed-r-series/

<!-- connect:end (generated above, edit below) -->

On first connect you'll be sent to Lightspeed to sign in and approve access; no API keys to paste.
The server can do only what the Lightspeed employee who signs in is allowed to do, and you can revoke
access any time from your Lightspeed Retail account settings. One subscription covers one store account.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `get_account` | read | Get account |
| `list_shops` | read | List shops |
| `list_items` | read | List items |
| `get_item` | read | Get an item |
| `list_inventory` | read | List inventory levels |
| `list_categories` | read | List categories |
| `list_sales` | read | List sales |
| `get_sale` | read | Get a sale |
| `list_customers` | read | List customers |
| `get_customer` | read | Get a customer |
| `list_vendors` | read | List vendors |
| `list_purchase_orders` | read | List purchase orders |
| `get_purchase_order` | read | Get a purchase order |
| `list_employees` | read | List employees |
| `create_customer` | **write** | Create a customer |
| `update_item` | **write** | Update an item |
| `update_stock` | **write** | Set stock level |
| `lightspeedrseries_usage_status` | meta | Usage status (free-tier meter) |
| `lightspeedrseries_upgrade` | meta | Upgrade to Pro (unlimited) |
| `lightspeedrseries_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per store account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `lightspeedrseries_upgrade` (it returns a Stripe Checkout link). Cancel any time with `lightspeedrseries_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `lightspeedrseries_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). This repo contains documentation only; the server is hosted.
