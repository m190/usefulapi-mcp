# Katana MRP MCP by usefulapi

Use your [Katana MRP](https://www.katanamrp.com) account from Claude, Cursor, or any MCP client. Read products, stock, orders and locations, and create customers, sales orders and manufacturing orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://katana-mrp.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://katana-mrp.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http katana-mrp https://katana-mrp.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=katana-mrp&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkatana-mrp.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "katana-mrp": {
      "url": "https://katana-mrp.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Katana MRP credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/katana-mrp/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Katana API key** (in Katana under **Settings → API → API keys**, with **+ Add new API key**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `katana_list_products` | read | List products |
| `katana_get_product` | read | Get a product |
| `katana_list_materials` | read | List materials |
| `katana_get_material` | read | Get a material |
| `katana_list_variants` | read | List variants |
| `katana_get_variant` | read | Get a variant |
| `katana_list_sales_orders` | read | List sales orders |
| `katana_get_sales_order` | read | Get a sales order |
| `katana_list_manufacturing_orders` | read | List manufacturing orders |
| `katana_get_manufacturing_order` | read | Get a manufacturing order |
| `katana_list_purchase_orders` | read | List purchase orders |
| `katana_get_purchase_order` | read | Get a purchase order |
| `katana_list_customers` | read | List customers |
| `katana_list_suppliers` | read | List suppliers |
| `katana_list_inventory` | read | List stock levels |
| `katana_list_inventory_movements` | read | List inventory movements |
| `katana_list_negative_stock` | read | List variants with negative stock |
| `katana_list_stock_adjustments` | read | List stock adjustments |
| `katana_list_locations` | read | List locations |
| `katana_get_location` | read | Get a location |
| `katana_create_customer` | **write** | Create a customer |
| `katana_create_sales_order` | **write** | Create a sales order |
| `katana_create_manufacturing_order` | **write** | Create a manufacturing order |
| `katana_usage_status` | meta | Usage status (free-tier meter) |
| `katana_request_feature` | meta | Request a missing feature |
| `katana_upgrade` | meta | Upgrade to Pro or Pro+ |
| `katana_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `katana_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `katana_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `katana_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
