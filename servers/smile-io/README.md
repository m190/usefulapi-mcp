# Smile.io MCP by usefulapi

Use [Smile.io](https://smile.io) from Claude, Cursor, or any MCP client — look up loyalty customers, points balances and history, ways to earn and redeem, issued rewards and VIP tiers, and adjust points.
Hosted, no local install: connect with your own Smile.io credentials.

**Live endpoint:** `https://smile-io.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/smile-io

## Add to Claude

```json
{
  "mcpServers": {
    "smile-io": {
      "url": "https://smile-io.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Smile.io merchant API key** (Smile Admin → Settings → Developer tools → API keys).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smile_list_customers` | read | List customers |
| `smile_get_customer` | read | Get a customer |
| `smile_list_points_transactions` | read | List points transactions |
| `smile_get_points_transaction` | read | Get a points transaction |
| `smile_list_points_products` | read | List points products |
| `smile_get_points_product` | read | Get a points product |
| `smile_list_reward_fulfillments` | read | List reward fulfillments |
| `smile_list_earning_rules` | read | List earning rules |
| `smile_list_vip_tiers` | read | List VIP tiers |
| `smile_get_points_settings` | read | Get points settings |
| `smile_get_referral_settings` | read | Get referral settings |
| `smile_create_points_transaction` | **write** | Adjust a customer's points balance |
| `smile_create_activity` | **write** | Record a customer activity |
| `smile_purchase_points_product` | **write** | Redeem a customer's points for a reward |
| `smile_usage_status` | meta | Usage status (free-tier meter) |
| `smile_upgrade` | meta | Upgrade to Pro (unlimited) |
| `smile_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `smile_upgrade` (it returns a Stripe Checkout link). Cancel any time with `smile_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `smile_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Smile.io.
