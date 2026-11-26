# Joy Loyalty MCP by usefulapi

Use your [Joy Loyalty](https://joy.so) account from Claude, Cursor, or any MCP client. Read loyalty customers, points transactions, programs, rewards, VIP tiers and referral totals, and award or deduct points or refund a coupon. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://joy-loyalty.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://joy-loyalty.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http joy-loyalty https://joy-loyalty.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=joy-loyalty&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjoy-loyalty.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "joy-loyalty": {
      "url": "https://joy-loyalty.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Joy Loyalty credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/joy-loyalty/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your shop's **Joy App Key** and **Joy Secret Key** (Joy → Settings → Developers → Manage keys; a ro_ read-only key works for reads). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `joyloyalty_whoami` | read | Get shop info |
| `joyloyalty_get_shop_settings` | read | Get shop settings |
| `joyloyalty_list_customers` | read | List customers |
| `joyloyalty_get_customer` | read | Get customer |
| `joyloyalty_get_customer_by_shopify_id` | read | Get customer by Shopify id |
| `joyloyalty_get_customer_points_earned` | read | Get customer earned points |
| `joyloyalty_list_transactions` | read | List points transactions |
| `joyloyalty_get_transaction` | read | Get points transaction |
| `joyloyalty_award_points` | **write** | Award points |
| `joyloyalty_deduct_points` | **write** | Deduct points |
| `joyloyalty_list_earning_programs` | read | List earning programs |
| `joyloyalty_get_program` | read | Get program |
| `joyloyalty_list_redemption_programs` | read | List redemption programs |
| `joyloyalty_list_rewards` | read | List rewards |
| `joyloyalty_get_reward` | read | Get reward |
| `joyloyalty_refund_coupon` | **write** | Refund coupon |
| `joyloyalty_list_tiers` | read | List VIP tiers |
| `joyloyalty_get_tier` | read | Get VIP tier |
| `joyloyalty_get_referral_analytics` | read | Get referral analytics |
| `joyloyalty_get_customer_referral_summary` | read | Get customer referral summary |
| `joyloyalty_usage_status` | meta | Usage status (free-tier meter) |
| `joyloyalty_request_feature` | meta | Request a missing feature |
| `joyloyalty_upgrade` | meta | Upgrade to Pro or Pro+ |
| `joyloyalty_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `joyloyalty_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `joyloyalty_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `joyloyalty_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
