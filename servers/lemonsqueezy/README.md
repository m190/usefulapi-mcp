# Lemon Squeezy MCP by usefulapi

Read and manage your Lemon Squeezy store, orders and subscriptions from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Lemon Squeezy API key.

**Live endpoint:** `https://lemonsqueezy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/lemonsqueezy

## Add to Claude

```json
{
  "mcpServers": {
    "lemonsqueezy": {
      "url": "https://lemonsqueezy.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Lemon Squeezy API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lemonsqueezy_get_user` | read | Get user |
| `lemonsqueezy_list_stores` | read | List stores |
| `lemonsqueezy_get_store` | read | Get store |
| `lemonsqueezy_list_products` | read | List products |
| `lemonsqueezy_list_variants` | read | List variants |
| `lemonsqueezy_list_prices` | read | List prices |
| `lemonsqueezy_list_customers` | read | List customers |
| `lemonsqueezy_get_customer` | read | Get customer |
| `lemonsqueezy_list_orders` | read | List orders |
| `lemonsqueezy_get_order` | read | Get order |
| `lemonsqueezy_list_subscriptions` | read | List subscriptions |
| `lemonsqueezy_get_subscription` | read | Get subscription |
| `lemonsqueezy_list_subscription_invoices` | read | List subscription invoices |
| `lemonsqueezy_list_license_keys` | read | List license keys |
| `lemonsqueezy_list_discounts` | read | List discounts |
| `lemonsqueezy_create_checkout` | **write** | Create checkout |
| `lemonsqueezy_update_subscription` | **write** | Update subscription |
| `lemonsqueezy_cancel_subscription` | **write** | Cancel subscription |
| `lemonsqueezy_usage_status` | meta | Usage status (free-tier meter) |
| `lemonsqueezy_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
