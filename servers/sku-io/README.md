# SKU.io MCP by usefulapi

Use your [SKU.io](https://sku.io) account from Claude, Cursor, or any MCP client. Read products, stock, warehouses, sales orders, purchase orders, suppliers and customers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sku-io.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sku-io.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sku-io https://sku-io.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sku-io&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsku-io.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sku-io": {
      "url": "https://sku-io.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SKU.io credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sku-io/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **SKU.io subdomain** (the app part of app.sku.io) and a **Personal Access Token** (Settings → Developer → Personal Access Tokens). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sku_list_products` | read | List products |
| `sku_get_product` | read | Get product |
| `sku_get_product_inventory` | read | Get product inventory |
| `sku_list_stock_by_location` | read | List stock by location |
| `sku_list_warehouses` | read | List warehouses |
| `sku_list_sales_orders` | read | List sales orders |
| `sku_get_sales_order` | read | Get sales order |
| `sku_get_sales_order_line_items` | read | Get sales order lines |
| `sku_list_purchase_orders` | read | List purchase orders |
| `sku_get_purchase_order` | read | Get purchase order |
| `sku_get_purchase_order_lines` | read | Get purchase order lines |
| `sku_list_suppliers` | read | List suppliers |
| `sku_get_supplier` | read | Get supplier |
| `sku_list_customers` | read | List customers |
| `sku_get_customer` | read | Get customer |
| `sku_usage_status` | meta | Usage status (free-tier meter) |
| `sku_request_feature` | meta | Request a missing feature |
| `sku_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sku_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sku_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sku_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sku_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
