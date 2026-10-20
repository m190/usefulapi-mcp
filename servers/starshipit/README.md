# Starshipit MCP by usefulapi

Use [Starshipit](https://www.starshipit.com) from Claude, Cursor, or any MCP client — unshipped, printed and shipped orders, tracking, rate quotes and manifests, plus unshipped order edits.
Hosted, no local install: connect with your own Starshipit credentials.

**Live endpoint:** `https://starshipit.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/starshipit

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://starshipit.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http starshipit https://starshipit.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=starshipit&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstarshipit.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "starshipit": {
      "url": "https://starshipit.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Starshipit credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/starshipit/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `starshipit_list_unshipped_orders` | read | List unshipped orders |
| `starshipit_list_shipped_orders` | read | List shipped orders |
| `starshipit_list_printed_orders` | read | List printed or unmanifested orders |
| `starshipit_list_delivered_orders` | read | List delivered orders by reference |
| `starshipit_orders_summary` | read | Orders summary by status |
| `starshipit_search_orders` | read | Search orders |
| `starshipit_get_order` | read | Get one order |
| `starshipit_list_orders` | read | List orders with filters |
| `starshipit_track_shipment` | read | Track a shipment |
| `starshipit_get_rates` | read | Quote shipping rates |
| `starshipit_list_delivery_services` | read | List delivery services |
| `starshipit_list_address_book` | read | List address book |
| `starshipit_list_manifests` | read | List manifests |
| `starshipit_list_products` | read | List product catalogue |
| `starshipit_list_tags` | read | List order tags |
| `starshipit_list_pickups` | read | List booked pickups |
| `starshipit_create_order` | **write** | Create an unshipped order |
| `starshipit_update_order` | **write** | Update an order's details |
| `starshipit_add_order_tags` | **write** | Add tags to an order |
| `starshipit_usage_status` | meta | Usage status (free-tier meter) |
| `starshipit_request_feature` | meta | Request a missing feature |
| `starshipit_upgrade` | meta | Upgrade to Pro (unlimited) |
| `starshipit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `starshipit_upgrade` (it returns a Stripe Checkout link). Cancel any time with `starshipit_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `starshipit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Starshipit.
