# Unleashed Software MCP by usefulapi

Use [Unleashed Software](https://www.unleashedsoftware.com) from Claude, Cursor, or any MCP client — check products, stock on hand, customers, suppliers, sales and purchase orders, invoices and quotes, and create customers, products and sales orders.
Hosted, no local install: connect with your own Unleashed Software credentials.

**Live endpoint:** `https://unleashed-software.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/unleashed-software

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://unleashed-software.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http unleashed-software https://unleashed-software.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=unleashed-software&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Funleashed-software.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "unleashed-software": {
      "url": "https://unleashed-software.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Unleashed Software credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/unleashed-software/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Unleashed API ID and API Key** (Integration → Unleashed API Access).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `unleashed_get_company` | read | Get the company |
| `unleashed_list_products` | read | List products |
| `unleashed_get_product` | read | Get one product |
| `unleashed_list_stock_on_hand` | read | List stock on hand |
| `unleashed_get_product_stock` | read | Get a product's stock |
| `unleashed_list_customers` | read | List customers |
| `unleashed_get_customer` | read | Get one customer |
| `unleashed_list_suppliers` | read | List suppliers |
| `unleashed_list_warehouses` | read | List warehouses |
| `unleashed_list_product_groups` | read | List product groups |
| `unleashed_list_sales_orders` | read | List sales orders |
| `unleashed_get_sales_order` | read | Get one sales order |
| `unleashed_list_purchase_orders` | read | List purchase orders |
| `unleashed_get_purchase_order` | read | Get one purchase order |
| `unleashed_list_invoices` | read | List sales invoices |
| `unleashed_list_sales_quotes` | read | List sales quotes |
| `unleashed_list_stock_adjustments` | read | List stock adjustments |
| `unleashed_create_customer` | **write** | Create a customer |
| `unleashed_create_product` | **write** | Create a product |
| `unleashed_create_sales_order` | **write** | Create a parked sales order |
| `unleashed_usage_status` | meta | Usage status (free-tier meter) |
| `unleashed_upgrade` | meta | Upgrade to Pro (unlimited) |
| `unleashed_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `unleashed_upgrade` (it returns a Stripe Checkout link). Cancel any time with `unleashed_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `unleashed_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Unleashed Software.
