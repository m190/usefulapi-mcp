# Foxy.io MCP by usefulapi

Manage [Foxy.io](https://foxy.io) from Claude, Cursor, or any MCP client — read transactions,
subscriptions, customers, carts and coupons, and update customers and subscriptions. Hosted, no
local install: connect with your Foxy API credentials.

**Live endpoint:** `https://foxyio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "foxyio": {
      "url": "https://foxyio.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Foxy Client ID, Client Secret, and Refresh Token** (Foxy admin
→ Integrations → "Get Token"). They're validated, stored per-user, and scoped to you — no keys in
config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `foxy_get_api_home` | read | Get API home |
| `foxy_get_default_store` | read | Get default store |
| `foxy_get_store` | read | Get store |
| `foxy_list_transactions` | read | List transactions |
| `foxy_get_transaction` | read | Get transaction |
| `foxy_list_subscriptions` | read | List subscriptions |
| `foxy_get_subscription` | read | Get subscription |
| `foxy_list_customers` | read | List customers |
| `foxy_get_customer` | read | Get customer |
| `foxy_list_carts` | read | List carts |
| `foxy_list_coupons` | read | List coupons |
| `foxy_list_items` | read | List transaction items |
| `foxy_update_customer` | **write** | Update customer |
| `foxy_update_subscription` | **write** | Update subscription |
| `foxy_usage_status` | meta | Usage status (free-tier meter) |
| `foxy_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
