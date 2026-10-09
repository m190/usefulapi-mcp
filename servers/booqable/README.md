# Booqable MCP by usefulapi

Use [Booqable](https://booqable.com) from Claude, Cursor, or any MCP client — browse rental orders, customers, products and availability, and create bookings.
Hosted, no local install: connect with your own Booqable credentials.

**Live endpoint:** `https://booqable.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/booqable

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://booqable.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http booqable https://booqable.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=booqable&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbooqable.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "booqable": {
      "url": "https://booqable.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Booqable credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/booqable/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Booqable company slug** (the `acme` in acme.booqable.com) and an **Access Token** (Settings → User settings → Authentication methods).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `booqable_get_company` | read | Get the company |
| `booqable_list_orders` | read | List orders |
| `booqable_get_order` | read | Get one order |
| `booqable_list_customers` | read | List customers |
| `booqable_get_customer` | read | Get one customer |
| `booqable_list_product_groups` | read | List product groups |
| `booqable_list_products` | read | List products |
| `booqable_check_inventory_availability` | read | Check inventory availability |
| `booqable_get_availability_calendar` | read | Get a product's availability calendar |
| `booqable_list_plannings` | read | List plannings |
| `booqable_list_documents` | read | List documents |
| `booqable_list_payments` | read | List payments |
| `booqable_list_locations` | read | List locations |
| `booqable_list_notes` | read | List notes |
| `booqable_create_customer` | **write** | Create a customer |
| `booqable_update_customer` | **write** | Update a customer |
| `booqable_create_order` | **write** | Create an order |
| `booqable_update_order` | **write** | Update an order |
| `booqable_book_product` | **write** | Book a product on an order |
| `booqable_transition_order_status` | **write** | Change an order's status |
| `booqable_create_note` | **write** | Add a note |
| `booqable_usage_status` | meta | Usage status (free-tier meter) |
| `booqable_upgrade` | meta | Upgrade to Pro (unlimited) |
| `booqable_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `booqable_upgrade` (it returns a Stripe Checkout link). Cancel any time with `booqable_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `booqable_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Booqable.
