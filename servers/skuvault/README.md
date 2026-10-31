# SkuVault MCP by usefulapi

Connect your API-enabled SkuVault account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://skuvault.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http skuvault https://skuvault.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=skuvault&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fskuvault.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "skuvault": {
      "url": "https://skuvault.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SkuVault credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/skuvault/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `skuvault_list_warehouses` | read | List warehouses |
| `skuvault_list_locations` | read | List locations |
| `skuvault_list_products` | read | List products |
| `skuvault_get_product` | read | Get product |
| `skuvault_list_kits` | read | List kits |
| `skuvault_list_brands` | read | List brands |
| `skuvault_list_suppliers` | read | List suppliers |
| `skuvault_list_classifications` | read | List classifications |
| `skuvault_get_inventory_by_location` | read | Get inventory by location |
| `skuvault_get_available_quantities` | read | Get available quantities |
| `skuvault_get_item_quantities` | read | Get item quantities |
| `skuvault_get_warehouse_quantities` | read | Get warehouse quantities |
| `skuvault_list_transactions` | read | List inventory transactions |
| `skuvault_list_sales` | read | List sales by status |
| `skuvault_list_sales_by_date` | read | List sales by date |
| `skuvault_list_sold_items` | read | List sold items |
| `skuvault_list_purchase_orders` | read | List purchase orders |
| `skuvault_list_po_receives` | read | List purchase order receives |
| `skuvault_list_integrations` | read | List sales channel accounts |
| `skuvault_add_stock` | **write** | Add stock |
| `skuvault_remove_stock` | **write** | Remove stock |
| `skuvault_set_stock_quantity` | **write** | Set stock quantity |
| `skuvault_usage_status` | meta | Usage status (free-tier meter) |
| `skuvault_request_feature` | meta | Request a missing feature |
| `skuvault_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `skuvault_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per SkuVault account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `skuvault_upgrade` (it returns a Stripe Checkout link). Cancel any time with `skuvault_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `skuvault_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
