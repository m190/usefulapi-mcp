# Ecwid MCP by usefulapi

Manage your [Ecwid](https://www.ecwid.com) store from Claude, Cursor, or any MCP client — read
products, orders, customers, categories and coupons, adjust inventory, and update orders. Hosted,
no local install: connect with your Ecwid store ID and secret token.

**Live endpoint:** `https://ecwid.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "ecwid": {
      "url": "https://ecwid.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Ecwid Store ID** and **secret token** (Ecwid control panel →
Apps → "My apps" → create a custom app). They're validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ecwid_get_store_profile` | read | Get store profile |
| `ecwid_search_products` | read | Search products |
| `ecwid_get_product` | read | Get product |
| `ecwid_search_orders` | read | Search orders |
| `ecwid_get_order` | read | Get order |
| `ecwid_search_customers` | read | Search customers |
| `ecwid_get_customer` | read | Get customer |
| `ecwid_list_categories` | read | List categories |
| `ecwid_get_category` | read | Get category |
| `ecwid_list_discount_coupons` | read | List discount coupons |
| `ecwid_adjust_product_inventory` | **write** | Adjust product inventory |
| `ecwid_update_order` | **write** | Update order |
| `ecwid_usage_status` | meta | Usage status (free-tier meter) |
| `ecwid_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
