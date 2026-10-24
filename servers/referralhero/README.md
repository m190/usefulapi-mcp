# ReferralHero MCP by usefulapi

Read ReferralHero campaigns, subscribers, referrals and rewards; add subscribers and points.

**Live endpoint:** `https://referralhero.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/referralhero

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://referralhero.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http referralhero https://referralhero.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=referralhero&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Freferralhero.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "referralhero": {
      "url": "https://referralhero.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ReferralHero credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/referralhero/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your ReferralHero **API token** (ReferralHero dashboard → Account → API).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `referralhero_list_campaigns` | read | List campaigns |
| `referralhero_get_leaderboard` | read | Get campaign leaderboard |
| `referralhero_list_campaign_rewards` | read | List campaign rewards |
| `referralhero_create_campaign` | **write** | Create campaign |
| `referralhero_list_subscribers` | read | List subscribers |
| `referralhero_get_subscriber` | read | Get subscriber |
| `referralhero_get_subscriber_by_email` | read | Find subscriber by email |
| `referralhero_get_subscriber_by_referral_code` | read | Find subscriber by referral code |
| `referralhero_search_subscribers_by_name` | read | Search subscribers by name |
| `referralhero_list_referrals` | read | List a subscriber's referrals |
| `referralhero_list_unlocked_rewards` | read | List earned rewards (campaign-wide) |
| `referralhero_list_subscriber_rewards` | read | List a subscriber's rewards |
| `referralhero_list_coupon_groups` | read | List coupon groups |
| `referralhero_get_coupon_group` | read | Get coupon group |
| `referralhero_add_subscriber` | **write** | Add subscriber |
| `referralhero_update_subscriber` | **write** | Update subscriber |
| `referralhero_delete_subscriber` | **write** | Delete subscriber |
| `referralhero_add_points` | **write** | Add points to a subscriber |
| `referralhero_track_transaction` | **write** | Track a transaction |
| `referralhero_confirm_referral` | **write** | Confirm a referral |
| `referralhero_track_conversion_event` | **write** | Track a referral conversion event |
| `referralhero_qualify_referral` | **write** | Mark referral qualified |
| `referralhero_unqualify_referral` | **write** | Mark referral unqualified |
| `referralhero_promote_subscriber` | **write** | Promote subscriber (winner) |
| `referralhero_unlock_promoted_reward` | **write** | Trigger a manual reward |
| `referralhero_update_reward_status` | **write** | Update reward status |
| `referralhero_create_coupon_group` | **write** | Create coupon group |
| `referralhero_add_coupons` | **write** | Add coupons to a group |
| `referralhero_usage_status` | meta | Usage status (free-tier meter) |
| `referralhero_request_feature` | meta | Request a missing feature |
| `referralhero_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `referralhero_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `referralhero_upgrade` (it returns a Stripe Checkout link). Cancel any time with `referralhero_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `referralhero_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by ReferralHero.
