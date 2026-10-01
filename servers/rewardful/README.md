# Rewardful MCP by usefulapi

Use [Rewardful](https://www.rewardful.com) from Claude, Cursor, or any MCP client — list campaigns, affiliates, links, coupons, referrals, commissions and payouts, and set up campaigns and affiliates.
Hosted, no local install: connect with your own Rewardful credentials.

**Live endpoint:** `https://rewardful.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/rewardful

## Add to Claude

```json
{
  "mcpServers": {
    "rewardful": {
      "url": "https://rewardful.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Rewardful API Secret** (Company settings, API section).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rewardful_list_campaigns` | read | List campaigns |
| `rewardful_get_campaign` | read | Get one campaign |
| `rewardful_list_affiliates` | read | List affiliates |
| `rewardful_get_affiliate` | read | Get one affiliate |
| `rewardful_list_affiliate_links` | read | List affiliate links |
| `rewardful_get_affiliate_link` | read | Get one affiliate link |
| `rewardful_list_affiliate_coupons` | read | List affiliate coupons |
| `rewardful_get_affiliate_coupon` | read | Get one affiliate coupon |
| `rewardful_list_referrals` | read | List referrals |
| `rewardful_list_commissions` | read | List commissions |
| `rewardful_get_commission` | read | Get one commission |
| `rewardful_list_payouts` | read | List payouts |
| `rewardful_get_payout` | read | Get one payout |
| `rewardful_create_campaign` | **write** | Create a campaign |
| `rewardful_update_campaign` | **write** | Update a campaign |
| `rewardful_create_affiliate` | **write** | Create an affiliate |
| `rewardful_update_affiliate` | **write** | Update an affiliate |
| `rewardful_create_affiliate_link` | **write** | Create an affiliate link |
| `rewardful_update_affiliate_link` | **write** | Change an affiliate link's token |
| `rewardful_create_affiliate_coupon` | **write** | Create an affiliate coupon |
| `rewardful_usage_status` | meta | Usage status (free-tier meter) |
| `rewardful_upgrade` | meta | Upgrade to Pro (unlimited) |
| `rewardful_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `rewardful_upgrade` (it returns a Stripe Checkout link). Cancel any time with `rewardful_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `rewardful_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Rewardful.
