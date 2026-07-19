# Recharge MCP by usefulapi

**Live endpoint:** `https://recharge.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "recharge": {
      "url": "https://recharge.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Recharge API token** (Recharge → Apps → API tokens).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `recharge_get_store` | read | Get store |
| `recharge_list_subscriptions` | read | List subscriptions |
| `recharge_get_subscription` | read | Get subscription |
| `recharge_list_customers` | read | List customers |
| `recharge_get_customer` | read | Get customer |
| `recharge_list_charges` | read | List charges |
| `recharge_get_charge` | read | Get charge |
| `recharge_list_orders` | read | List orders |
| `recharge_get_order` | read | Get order |
| `recharge_list_onetimes` | read | List one-times |
| `recharge_list_products` | read | List products |
| `recharge_list_addresses` | read | List addresses |
| `recharge_skip_charge` | **write** | Skip charge |
| `recharge_cancel_subscription` | **write** | Cancel subscription |
| `recharge_activate_subscription` | **write** | Activate subscription |
| `recharge_usage_status` | meta | Usage status (free-tier meter) |
| `recharge_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License
