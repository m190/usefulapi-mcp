# Sellasist MCP by usefulapi

**Live endpoint:** `https://sellasist.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sellasist.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sellasist https://sellasist.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sellasist&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsellasist.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sellasist": {
      "url": "https://sellasist.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sellasist credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sellasist/

<!-- connect:end (generated above, edit below) -->

On first connect you will enter your **Sellasist address** and a **Sellasist API key**. They are validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sellasist_list_orders` | read | List orders |
| `sellasist_get_order` | read | Get order |
| `sellasist_search_orders` | read | Search orders by creation date and status |
| `sellasist_list_order_statuses` | read | List order statuses |
| `sellasist_list_order_notes` | read | List order notes |
| `sellasist_list_order_logs` | read | List order change log |
| `sellasist_list_waybills` | read | List waybills (shipping labels) |
| `sellasist_list_products` | read | List products |
| `sellasist_get_product` | read | Get product |
| `sellasist_get_stock` | read | Get stock levels |
| `sellasist_list_bestsellers` | read | List bestselling products |
| `sellasist_list_categories` | read | List categories |
| `sellasist_get_category` | read | Get category |
| `sellasist_list_warehouses` | read | List warehouses |
| `sellasist_list_customers` | read | List customers |
| `sellasist_get_customer` | read | Get customer |
| `sellasist_list_invoices` | read | List invoices |
| `sellasist_get_invoice` | read | Get invoice |
| `sellasist_list_returns` | read | List returns |
| `sellasist_get_return` | read | Get return |
| `sellasist_list_payment_methods` | read | List payment methods |
| `sellasist_list_shipment_methods` | read | List delivery methods |
| `sellasist_list_order_sources` | read | List order sources |
| `sellasist_list_integration_accounts` | read | List connected marketplace accounts |
| `sellasist_list_alerts` | read | List system alerts |
| `sellasist_add_order_note` | **write** | Add order note |
| `sellasist_update_order_status` | **write** | Change order status |
| `sellasist_usage_status` | meta | Usage status (free-tier meter) |
| `sellasist_request_feature` | meta | Request a missing feature |
| `sellasist_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `sellasist_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `sellasist_upgrade` (it returns a Stripe Checkout link). Cancel any time with `sellasist_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `sellasist_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
