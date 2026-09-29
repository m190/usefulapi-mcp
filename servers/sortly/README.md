# Sortly MCP by usefulapi

Use [Sortly](https://www.sortly.com) from Claude, Cursor, or any MCP client — search items and folders, check stock levels and low-stock alerts, and follow jobs and purchase orders.
Hosted, no local install: connect with your own Sortly credentials.

**Live endpoint:** `https://sortly.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/sortly

## Add to Claude

```json
{
  "mcpServers": {
    "sortly": {
      "url": "https://sortly.usefulapi.io/mcp"
    }
  }
}
```

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
| `sortly_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by Sortly.
