# Veeqo MCP by usefulapi

Use [Veeqo](https://www.veeqo.com) from Claude, Cursor, or any MCP client — read Veeqo orders, products, stock, warehouses, customers and POs; add notes, tag, set stock.
Hosted, no local install: connect with your own Veeqo credentials.

**Live endpoint:** `https://veeqo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/veeqo

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://veeqo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http veeqo https://veeqo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=veeqo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fveeqo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "veeqo": {
      "url": "https://veeqo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Veeqo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/veeqo/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Veeqo API key**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `veeqo_get_company` | read | Get company |
| `veeqo_list_stores` | read | List stores (sales channels) |
| `veeqo_list_warehouses` | read | List warehouses |
| `veeqo_get_warehouse` | read | Get warehouse |
| `veeqo_list_orders` | read | List orders |
| `veeqo_get_order` | read | Get order |
| `veeqo_get_order_returns` | read | Get order returns |
| `veeqo_get_shipment_tracking` | read | Get shipment tracking |
| `veeqo_list_products` | read | List products |
| `veeqo_get_product` | read | Get product |
| `veeqo_get_stock_entry` | read | Get stock level |
| `veeqo_set_stock_level` | **write** | Set stock level |
| `veeqo_list_customers` | read | List customers |
| `veeqo_get_customer` | read | Get customer |
| `veeqo_list_suppliers` | read | List suppliers |
| `veeqo_get_supplier` | read | Get supplier |
| `veeqo_list_purchase_orders` | read | List purchase orders |
| `veeqo_get_purchase_order` | read | Get purchase order |
| `veeqo_list_tags` | read | List tags |
| `veeqo_list_delivery_methods` | read | List delivery methods |
| `veeqo_add_order_note` | **write** | Add order note |
| `veeqo_tag_orders` | **write** | Tag orders |
| `veeqo_usage_status` | meta | Usage status (free-tier meter) |
| `veeqo_request_feature` | meta | Request a missing feature |
| `veeqo_upgrade` | meta | Upgrade to Pro (unlimited) |
| `veeqo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `veeqo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `veeqo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `veeqo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Veeqo.
