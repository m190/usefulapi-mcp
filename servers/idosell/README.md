# IdoSell MCP by usefulapi

Use your [IdoSell](https://www.idosell.com) account from Claude, Cursor, or any MCP client. Read orders, products, stock levels, customers, returns and parcels, and change the status of one order. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://idosell.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://idosell.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http idosell https://idosell.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=idosell&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fidosell.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "idosell": {
      "url": "https://idosell.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your IdoSell credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/idosell/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **IdoSell panel address** (for example client12345.idosell.com) and an **Admin API key** (panel → Administration → API → Access keys to Admin API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `idosell_get_shop_config` | read | Get shop configuration |
| `idosell_search_orders` | read | Search orders |
| `idosell_get_orders` | read | Get orders by id |
| `idosell_list_order_statuses` | read | List order statuses |
| `idosell_get_order_packages` | read | Get order parcels |
| `idosell_search_products` | read | Search products |
| `idosell_get_product_stocks` | read | Get product stock levels |
| `idosell_list_categories` | read | List product categories |
| `idosell_list_brands` | read | List brands |
| `idosell_search_customers` | read | Search customers |
| `idosell_list_returns` | read | List returns |
| `idosell_list_couriers` | read | List couriers |
| `idosell_set_order_status` | **write** | Set order status |
| `idosell_usage_status` | meta | Usage status (free-tier meter) |
| `idosell_request_feature` | meta | Request a missing feature |
| `idosell_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `idosell_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `idosell_upgrade` (it returns a Stripe Checkout link). Cancel any time with `idosell_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `idosell_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
