# Dotypos MCP by usefulapi

Use your [Dotypos](https://www.dotypos.com) account from Claude, Cursor, or any MCP client. Read orders, sales reports, products, customers, stock and reservations, and create customers or change customers and products. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://dotypos.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://dotypos.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http dotypos https://dotypos.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=dotypos&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdotypos.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "dotypos": {
      "url": "https://dotypos.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Dotypos account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/dotypos/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Dotypos and approve access. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dotypos_list_branches` | read | List branches |
| `dotypos_get_branch` | read | Get branch |
| `dotypos_list_categories` | read | List categories |
| `dotypos_get_category` | read | Get category |
| `dotypos_list_products` | read | List products |
| `dotypos_get_product` | read | Get product |
| `dotypos_list_customers` | read | List customers |
| `dotypos_get_customer` | read | Get customer |
| `dotypos_list_orders` | read | List orders |
| `dotypos_get_order` | read | Get order |
| `dotypos_list_order_items` | read | List order items |
| `dotypos_get_sales_report` | read | Get sales report |
| `dotypos_list_employees` | read | List employees |
| `dotypos_list_tables` | read | List tables |
| `dotypos_list_reservations` | read | List reservations |
| `dotypos_list_warehouses` | read | List warehouses |
| `dotypos_list_stock` | read | List stock levels |
| `dotypos_list_suppliers` | read | List suppliers |
| `dotypos_list_delivery_notes` | read | List delivery notes |
| `dotypos_list_tags` | read | List tags |
| `dotypos_create_customer` | **write** | Create customer |
| `dotypos_update_customer` | **write** | Update customer |
| `dotypos_update_product` | **write** | Update product |
| `dotypos_usage_status` | meta | Usage status (free-tier meter) |
| `dotypos_request_feature` | meta | Request a missing feature |
| `dotypos_upgrade` | meta | Upgrade to Pro or Pro+ |
| `dotypos_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `dotypos_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `dotypos_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `dotypos_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
