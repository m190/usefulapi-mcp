# Sortly MCP by usefulapi

Use [Sortly](https://www.sortly.com) from Claude, Cursor, or any MCP client — search items and folders, check stock levels and low-stock alerts, and follow jobs and purchase orders.
Hosted, no local install: connect with your own Sortly credentials.

**Live endpoint:** `https://sortly.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/sortly

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sortly.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sortly https://sortly.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sortly&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsortly.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sortly": {
      "url": "https://sortly.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sortly credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sortly/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Sortly API secret key** (app.sortly.com/public-api).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sortly_list_items` | read | List items and folders |
| `sortly_get_item` | read | Get one item or folder |
| `sortly_search_items` | read | Search inventory |
| `sortly_list_recently_updated_items` | read | List recently updated items |
| `sortly_list_custom_fields` | read | List custom fields |
| `sortly_list_units` | read | List units of measure |
| `sortly_list_alerts` | read | List alerts |
| `sortly_list_jobs` | read | List jobs |
| `sortly_get_job` | read | Get one job |
| `sortly_list_purchase_orders` | read | List purchase orders |
| `sortly_get_purchase_order` | read | Get one purchase order |
| `sortly_get_purchase_order_receive_status` | read | Get a purchase order's receive status |
| `sortly_create_item` | **write** | Create an item or folder |
| `sortly_update_item` | **write** | Update an item or folder |
| `sortly_move_item` | **write** | Move stock to another folder |
| `sortly_create_alert` | **write** | Create an alert |
| `sortly_create_job` | **write** | Create a job |
| `sortly_pull_items_into_job` | **write** | Pull items into a job |
| `sortly_return_items_from_job` | **write** | Return items from a job |
| `sortly_create_purchase_order` | **write** | Draft a purchase order |
| `sortly_usage_status` | meta | Usage status (free-tier meter) |
| `sortly_request_feature` | meta | Request a missing feature |
| `sortly_upgrade` | meta | Upgrade to Pro (unlimited) |
| `sortly_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `sortly_upgrade` (it returns a Stripe Checkout link). Cancel any time with `sortly_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `sortly_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Sortly.
