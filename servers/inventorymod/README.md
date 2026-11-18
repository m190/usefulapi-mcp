# InventoryMod MCP by usefulapi

Use your [InventoryMod](https://inventorymod.com) account from Claude, Cursor, or any MCP client. It reads products, stock by warehouse, movements and orders. It creates or updates products, and it does not change stock. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://inventorymod.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://inventorymod.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http inventorymod https://inventorymod.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=inventorymod&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finventorymod.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "inventorymod": {
      "url": "https://inventorymod.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your InventoryMod credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/inventorymod/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **InventoryMod API key** and your **campaign_id** (user menu → API keys in InventoryMod; a write key is needed to create or update products). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `inventorymod_list_warehouses` | read | List warehouses |
| `inventorymod_list_categories` | read | List categories |
| `inventorymod_search_products` | read | Search products |
| `inventorymod_get_product` | read | Get product |
| `inventorymod_find_product` | read | Find product by SKU or barcode |
| `inventorymod_get_product_stock` | read | Get product stock in a warehouse |
| `inventorymod_search_stock_balances` | read | Search stock balances |
| `inventorymod_get_warehouse_totals` | read | Get stock totals per warehouse |
| `inventorymod_search_movements` | read | Search stock movements |
| `inventorymod_search_sales_orders` | read | Search sales orders |
| `inventorymod_get_sales_order` | read | Get sales order |
| `inventorymod_search_purchase_orders` | read | Search purchase orders |
| `inventorymod_get_purchase_order` | read | Get purchase order |
| `inventorymod_get_dashboard_summary` | read | Get dashboard summary |
| `inventorymod_create_product` | **write** | Create product |
| `inventorymod_update_product` | **write** | Update product |
| `inventorymod_usage_status` | meta | Usage status (free-tier meter) |
| `inventorymod_request_feature` | meta | Request a missing feature |
| `inventorymod_upgrade` | meta | Upgrade to Pro or Pro+ |
| `inventorymod_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `inventorymod_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `inventorymod_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `inventorymod_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
