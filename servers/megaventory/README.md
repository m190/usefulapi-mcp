# Megaventory MCP by usefulapi

Use [Megaventory](https://www.megaventory.com) from Claude, Cursor, or any MCP client — products, stock per location, sales and purchase orders, clients and suppliers, plus new pending orders.
Hosted, no local install: connect with your own Megaventory credentials.

**Live endpoint:** `https://megaventory.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/megaventory

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://megaventory.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http megaventory https://megaventory.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=megaventory&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmegaventory.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "megaventory": {
      "url": "https://megaventory.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Megaventory credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/megaventory/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `megaventory_get_current_user` | read | Get current user |
| `megaventory_list_products` | read | List products |
| `megaventory_list_product_categories` | read | List product categories |
| `megaventory_get_product_bom` | read | Get product bill of materials |
| `megaventory_list_product_bundles` | read | List product bundles |
| `megaventory_get_stock` | read | Get stock levels |
| `megaventory_list_inventory_locations` | read | List inventory locations |
| `megaventory_list_clients_suppliers` | read | List clients and suppliers |
| `megaventory_list_product_suppliers` | read | List product supplier prices |
| `megaventory_list_sales_orders` | read | List sales orders |
| `megaventory_list_purchase_orders` | read | List purchase orders |
| `megaventory_list_sales_quotes` | read | List sales quotes |
| `megaventory_list_work_orders` | read | List work orders |
| `megaventory_list_documents` | read | List documents |
| `megaventory_list_document_types` | read | List document types |
| `megaventory_list_taxes` | read | List taxes |
| `megaventory_list_currencies` | read | List currencies |
| `megaventory_create_client_or_supplier` | **write** | Create client or supplier |
| `megaventory_create_sales_order` | **write** | Create pending sales order |
| `megaventory_create_purchase_order` | **write** | Create pending purchase order |
| `megaventory_usage_status` | meta | Usage status (free-tier meter) |
| `megaventory_request_feature` | meta | Request a missing feature |
| `megaventory_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `megaventory_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `megaventory_upgrade` (it returns a Stripe Checkout link). Cancel any time with `megaventory_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `megaventory_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Megaventory.
