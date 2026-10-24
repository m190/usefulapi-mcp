# Linnworks MCP by usefulapi

Use [Linnworks](https://www.linnworks.com) from Claude, Cursor, or any MCP client — search inventory, read stock levels and stock history per location, categories and suppliers, list open orders, search processed orders, read order details and notes, set stock levels and add order notes.
Hosted, no local install: connect with the Application Id, Application Secret and installation token of a System Integration app that you create in the Linnworks Developer Portal.

**Live endpoint:** `https://linnworks.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/linnworks

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://linnworks.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http linnworks https://linnworks.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=linnworks&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flinnworks.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "linnworks": {
      "url": "https://linnworks.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Linnworks credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/linnworks/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `linnworks_list_stock_locations` | read | List stock locations |
| `linnworks_search_inventory` | read | Search inventory |
| `linnworks_get_inventory_item` | read | Get inventory item |
| `linnworks_get_stock_levels` | read | Get stock levels |
| `linnworks_get_stock_history` | read | Get stock change history |
| `linnworks_list_categories` | read | List categories |
| `linnworks_list_suppliers` | read | List suppliers |
| `linnworks_list_open_orders` | read | List open orders |
| `linnworks_get_open_orders_details` | read | Get open order details |
| `linnworks_get_order` | read | Get order |
| `linnworks_find_order_by_number` | read | Find order by order number |
| `linnworks_find_orders_by_reference` | read | Find orders by channel reference |
| `linnworks_search_processed_orders` | read | Search processed orders |
| `linnworks_get_order_notes` | read | Get order notes |
| `linnworks_list_postal_services` | read | List postal services |
| `linnworks_set_stock_level` | **write** | Set stock level |
| `linnworks_add_order_note` | **write** | Add order note |
| `linnworks_usage_status` | meta | Usage status (free-tier meter) |
| `linnworks_request_feature` | meta | Request a missing feature |
| `linnworks_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `linnworks_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per Linnworks app installation) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `linnworks_upgrade` (it returns a Stripe Checkout link). Cancel any time with `linnworks_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `linnworks_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Linnworks.
