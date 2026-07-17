# GoCardless MCP by usefulapi

Query your GoCardless direct-debit data from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your GoCardless access token.

**Live endpoint:** `https://gocardless.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/gocardless

## Add to Claude

```json
{
  "mcpServers": {
    "gocardless": {
      "url": "https://gocardless.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your GoCardless access token. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gocardless_list_customers` | read | List customers |
| `gocardless_get_customer` | read | Get customer |
| `gocardless_list_customer_bank_accounts` | read | List customer bank accounts |
| `gocardless_list_mandates` | read | List mandates |
| `gocardless_get_mandate` | read | Get mandate |
| `gocardless_list_payments` | read | List payments |
| `gocardless_get_payment` | read | Get payment |
| `gocardless_list_subscriptions` | read | List subscriptions |
| `gocardless_get_subscription` | read | Get subscription |
| `gocardless_list_payouts` | read | List payouts |
| `gocardless_get_payout` | read | Get payout |
| `gocardless_list_refunds` | read | List refunds |
| `gocardless_list_events` | read | List events |
| `gocardless_list_creditors` | read | List creditors |
| `gocardless_create_customer` | **write** | Create customer |
| `gocardless_usage_status` | meta | Usage status (free-tier meter) |
| `gocardless_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
