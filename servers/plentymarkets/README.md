# PlentyONE MCP by usefulapi

Hosted at https://plentymarkets.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://plentymarkets.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http plentymarkets https://plentymarkets.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=plentymarkets&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fplentymarkets.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "plentymarkets": {
      "url": "https://plentymarkets.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PlentyONE credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/plentymarkets/

<!-- connect:end (generated above, edit below) -->

Use your plenty ID and the username and password of a dedicated back end user with REST API and order read access. The system needs **Expand or higher**. Grant only the resource permissions you want the assistant to have. Changing an order status can trigger configured customer emails, stock bookings and other event procedures.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `plentymarkets_list_orders` | read | List orders |
| `plentymarkets_get_order` | read | Get an order |
| `plentymarkets_get_order_status_history` | read | Get an order's status history |
| `plentymarkets_list_order_statuses` | read | List order statuses |
| `plentymarkets_list_order_referrers` | read | List order referrers |
| `plentymarkets_list_comments` | read | List comments |
| `plentymarkets_list_items` | read | List items |
| `plentymarkets_get_item` | read | Get an item |
| `plentymarkets_list_variations` | read | List variations |
| `plentymarkets_list_categories` | read | List categories |
| `plentymarkets_list_manufacturers` | read | List manufacturers |
| `plentymarkets_list_sales_prices` | read | List sales price configurations |
| `plentymarkets_list_stock` | read | List stock |
| `plentymarkets_list_warehouses` | read | List warehouses |
| `plentymarkets_list_contacts` | read | List contacts |
| `plentymarkets_get_contact` | read | Get a contact |
| `plentymarkets_add_comment` | **write** | Add a comment |
| `plentymarkets_update_order_status` | **write** | Change an order's status |
| `plentymarkets_usage_status` | meta | Usage status (free-tier meter) |
| `plentymarkets_request_feature` | meta | Request a missing feature |
| `plentymarkets_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `plentymarkets_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per system and API user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `plentymarkets_upgrade` (it returns a Stripe Checkout link). Cancel any time with `plentymarkets_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `plentymarkets_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
