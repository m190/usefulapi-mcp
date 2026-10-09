# Gelato MCP by usefulapi

Use [Gelato](https://www.gelato.com) from Claude, Cursor, or any MCP client — the print-on-demand catalog, prices, shipping methods, quotes, orders, store products and templates.
Hosted, no local install: connect with your own Gelato credentials.

**Live endpoint:** `https://gelato.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/gelato

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gelato.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gelato https://gelato.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gelato&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgelato.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gelato": {
      "url": "https://gelato.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Gelato credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gelato/

<!-- connect:end (generated above, edit below) -->

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Gelato credentials.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gelato_list_catalogs` | read | List product catalogs |
| `gelato_get_catalog` | read | Get catalog |
| `gelato_search_products` | read | Search catalog products |
| `gelato_get_product` | read | Get product |
| `gelato_get_product_prices` | read | Get product prices |
| `gelato_get_cover_dimensions` | read | Get cover dimensions |
| `gelato_check_stock` | read | Check stock availability |
| `gelato_list_shipment_methods` | read | List shipment methods |
| `gelato_search_orders` | read | Search orders |
| `gelato_get_order` | read | Get order |
| `gelato_quote_order` | read | Quote order |
| `gelato_create_order` | **write** | Create order (draft by default) |
| `gelato_submit_draft_order` | **write** | Submit draft order |
| `gelato_cancel_order` | **write** | Cancel order |
| `gelato_delete_draft_order` | **write** | Delete draft order |
| `gelato_list_store_products` | read | List store products |
| `gelato_get_store_product` | read | Get store product |
| `gelato_get_template` | read | Get template |
| `gelato_create_product_from_template` | **write** | Create store product from template |
| `gelato_usage_status` | meta | Usage status (free-tier meter) |
| `gelato_request_feature` | meta | Request a missing feature |
| `gelato_upgrade` | meta | Upgrade to Pro (unlimited) |
| `gelato_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `gelato_upgrade` (it returns a Stripe Checkout link). Cancel any time with `gelato_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `gelato_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Gelato.
