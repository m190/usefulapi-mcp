# inFlow Inventory MCP by usefulapi

Use your [inFlow Inventory](https://www.inflowinventory.com) account from Claude, Cursor, or any MCP client. Read products, stock, customers, vendors, orders and stock adjustments, and create or update products, customers and vendors, or adjust stock levels. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://inflow-inventory.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://inflow-inventory.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http inflow-inventory https://inflow-inventory.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=inflow-inventory&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finflow-inventory.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "inflow-inventory": {
      "url": "https://inflow-inventory.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your inFlow Inventory credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/inflow-inventory/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **inFlow API key**, created on the inFlow Integrations page by an administrator account with the API add-on, and your **companyId**, a GUID shown next to the API keys there. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `inflow_list_products` | read | List products |
| `inflow_get_product` | read | Get a product |
| `inflow_get_product_summary` | read | Get product stock summary |
| `inflow_upsert_product` | **write** | Create or update a product |
| `inflow_list_customers` | read | List customers |
| `inflow_get_customer` | read | Get a customer |
| `inflow_upsert_customer` | **write** | Create or update a customer |
| `inflow_list_vendors` | read | List vendors |
| `inflow_get_vendor` | read | Get a vendor |
| `inflow_upsert_vendor` | **write** | Create or update a vendor |
| `inflow_list_sales_orders` | read | List sales orders |
| `inflow_get_sales_order` | read | Get a sales order |
| `inflow_list_purchase_orders` | read | List purchase orders |
| `inflow_get_purchase_order` | read | Get a purchase order |
| `inflow_list_locations` | read | List locations |
| `inflow_list_categories` | read | List product categories |
| `inflow_list_adjustment_reasons` | read | List stock adjustment reasons |
| `inflow_list_stock_adjustments` | read | List stock adjustments |
| `inflow_create_stock_adjustment` | **write** | Create a stock adjustment |
| `inflow_list_stock_transfers` | read | List stock transfers |
| `inflow_list_manufacturing_orders` | read | List manufacturing orders |
| `inflow_usage_status` | meta | Usage status (free-tier meter) |
| `inflow_request_feature` | meta | Request a missing feature |
| `inflow_upgrade` | meta | Upgrade to Pro or Pro+ |
| `inflow_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `inflow_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `inflow_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `inflow_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
