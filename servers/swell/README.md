# Swell MCP by usefulapi

Manage your Swell headless-commerce store — products, orders, customers, and subscriptions — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Swell store ID + secret key.

**Live endpoint:** `https://swell.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/swell

## Add to Claude

```json
{
  "mcpServers": {
    "swell": {
      "url": "https://swell.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Swell store ID and secret key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `swell_list_products` | read | List products |
| `swell_get_product` | read | Get product |
| `swell_list_categories` | read | List categories |
| `swell_list_orders` | read | List orders |
| `swell_get_order` | read | Get order |
| `swell_list_customers` | read | List customers |
| `swell_get_customer` | read | Get customer |
| `swell_list_carts` | read | List carts |
| `swell_list_subscriptions` | read | List subscriptions |
| `swell_get_subscription` | read | Get subscription |
| `swell_list_invoices` | read | List invoices |
| `swell_list_coupons` | read | List coupons |
| `swell_query` | read | Query |
| `swell_create_product` | **write** | Create product |
| `swell_update_product` | **write** | Update product |
| `swell_update_order` | **write** | Update order |
| `swell_usage_status` | meta | Usage status (free-tier meter) |
| `swell_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
