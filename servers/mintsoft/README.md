# Mintsoft MCP by usefulapi

Use your [Mintsoft](https://www.mintsoft.co.uk) account from Claude, Cursor, or any MCP client. Read orders, shipments, products, stock levels, ASNs and returns, and add comments and tags to orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://mintsoft.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mintsoft.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mintsoft https://mintsoft.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mintsoft&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmintsoft.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mintsoft": {
      "url": "https://mintsoft.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Mintsoft credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mintsoft/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Mintsoft static API key** (create a key with POST /api/Auth, then ask Mintsoft support to make it static). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mintsoft_list_clients` | read | List clients |
| `mintsoft_list_warehouses` | read | List warehouses |
| `mintsoft_list_courier_services` | read | List courier services |
| `mintsoft_list_order_statuses` | read | List order statuses |
| `mintsoft_list_asn_statuses` | read | List ASN statuses |
| `mintsoft_list_orders` | read | List orders |
| `mintsoft_search_orders` | read | Search orders |
| `mintsoft_get_order` | read | Get an order |
| `mintsoft_get_order_comments` | read | Get order comments |
| `mintsoft_get_order_shipments` | read | Get order shipments |
| `mintsoft_list_products` | read | List products |
| `mintsoft_search_products` | read | Search products |
| `mintsoft_get_product` | read | Get a product |
| `mintsoft_get_stock_levels` | read | Get stock levels |
| `mintsoft_get_product_inventory` | read | Get product inventory records |
| `mintsoft_list_stock_movements` | read | List stock movements |
| `mintsoft_list_asns` | read | List ASNs |
| `mintsoft_get_asn` | read | Get an ASN |
| `mintsoft_list_returns` | read | List returns |
| `mintsoft_get_return` | read | Get a return |
| `mintsoft_add_order_comment` | **write** | Add an order comment |
| `mintsoft_add_order_tag` | **write** | Add an order tag |
| `mintsoft_usage_status` | meta | Usage status (free-tier meter) |
| `mintsoft_request_feature` | meta | Request a missing feature |
| `mintsoft_upgrade` | meta | Upgrade to Pro or Pro+ |
| `mintsoft_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `mintsoft_upgrade` (it returns a Stripe Checkout link). Cancel any time with `mintsoft_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `mintsoft_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
