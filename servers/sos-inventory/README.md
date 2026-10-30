# SOS Inventory MCP by usefulapi

Hosted at https://sos-inventory.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sos-inventory.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sos-inventory https://sos-inventory.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sos-inventory&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsos-inventory.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sos-inventory": {
      "url": "https://sos-inventory.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your SOS Inventory account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sos-inventory/

<!-- connect:end (generated above, edit below) -->

Sign in with your SOS Inventory company account and approve access. The connecting user must be able to read the company user list. Access follows that user's SOS permissions.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sosinventory_list_items` | read | List items |
| `sosinventory_get_item` | read | Get item |
| `sosinventory_get_item_bom` | read | Get item bill of materials |
| `sosinventory_list_customers` | read | List customers |
| `sosinventory_get_customer` | read | Get customer |
| `sosinventory_list_vendors` | read | List vendors |
| `sosinventory_get_vendor` | read | Get vendor |
| `sosinventory_list_sales_orders` | read | List sales orders |
| `sosinventory_get_sales_order` | read | Get sales order |
| `sosinventory_list_purchase_orders` | read | List purchase orders |
| `sosinventory_get_purchase_order` | read | Get purchase order |
| `sosinventory_list_transactions` | read | List other transactions |
| `sosinventory_get_transaction` | read | Get transaction |
| `sosinventory_list_reference_data` | read | List reference data |
| `sosinventory_create_customer` | **write** | Create customer |
| `sosinventory_create_vendor` | **write** | Create vendor |
| `sosinventory_create_item` | **write** | Create item |
| `sosinventory_create_sales_order` | **write** | Create sales order |
| `sosinventory_create_purchase_order` | **write** | Create purchase order |
| `sosinventory_usage_status` | meta | Usage status (free-tier meter) |
| `sosinventory_request_feature` | meta | Request a missing feature |
| `sosinventory_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `sosinventory_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |

Pro covers this server only. Subscribe with `sosinventory_upgrade` (it returns a Stripe Checkout link). Cancel any time with `sosinventory_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `sosinventory_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
