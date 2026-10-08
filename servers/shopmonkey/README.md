# Shopmonkey MCP by usefulapi

Use [Shopmonkey](https://www.shopmonkey.io) from Claude, Cursor, or any MCP client — look up customers, vehicles, work orders, appointments and parts stock, and create customers, orders and appointments.
Hosted, no local install: connect with your own Shopmonkey credentials.

**Live endpoint:** `https://shopmonkey.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/shopmonkey

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shopmonkey.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shopmonkey https://shopmonkey.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shopmonkey&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshopmonkey.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shopmonkey": {
      "url": "https://shopmonkey.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shopmonkey/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Shopmonkey API key** (Settings → Integration → API Keys; a shop admin creates it).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shopmonkey_get_current_user` | read | Get the current user |
| `shopmonkey_search_customers` | read | Search customers |
| `shopmonkey_find_customers_by_phone` | read | Find customers by phone number |
| `shopmonkey_find_customers_by_email` | read | Find customers by email |
| `shopmonkey_get_customer` | read | Get one customer |
| `shopmonkey_list_customer_vehicles` | read | List a customer's vehicles |
| `shopmonkey_list_customer_orders` | read | List a customer's orders |
| `shopmonkey_get_vehicle` | read | Get one vehicle |
| `shopmonkey_list_orders` | read | List orders |
| `shopmonkey_get_order` | read | Get one order |
| `shopmonkey_list_order_services` | read | List an order's services |
| `shopmonkey_search_appointments` | read | Search appointments |
| `shopmonkey_search_inventory_parts` | read | Search inventory parts |
| `shopmonkey_list_canned_services` | read | List canned services |
| `shopmonkey_list_workflow_statuses` | read | List workflow statuses |
| `shopmonkey_list_users` | read | List users |
| `shopmonkey_create_customer` | **write** | Create a customer |
| `shopmonkey_update_customer` | **write** | Update a customer |
| `shopmonkey_add_customer_email` | **write** | Add an email to a customer |
| `shopmonkey_create_vehicle` | **write** | Create a vehicle |
| `shopmonkey_create_order` | **write** | Create an order |
| `shopmonkey_update_order` | **write** | Update an order |
| `shopmonkey_create_appointment` | **write** | Book an appointment |
| `shopmonkey_usage_status` | meta | Usage status (free-tier meter) |
| `shopmonkey_upgrade` | meta | Upgrade to Pro (unlimited) |
| `shopmonkey_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `shopmonkey_upgrade` (it returns a Stripe Checkout link). Cancel any time with `shopmonkey_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `shopmonkey_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Shopmonkey.
