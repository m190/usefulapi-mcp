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
| `gocardless_list_customers` | read | List customers (payers) |
| `gocardless_get_customer` | read | Get a customer by id |
| `gocardless_list_customer_bank_accounts` | read | List customer bank accounts (masked) |
| `gocardless_list_mandates` | read | List mandates (debit authorizations) |
| `gocardless_get_mandate` | read | Get a mandate by id |
| `gocardless_list_payments` | read | List payments |
| `gocardless_get_payment` | read | Get a payment by id |
| `gocardless_list_subscriptions` | read | List subscriptions |
| `gocardless_get_subscription` | read | Get a subscription by id |
| `gocardless_list_payouts` | read | List payouts to your bank |
| `gocardless_get_payout` | read | Get a payout by id |
| `gocardless_list_refunds` | read | List refunds |
| `gocardless_list_events` | read | List events (audit / webhook log) |
| `gocardless_list_creditors` | read | List creditors (merchant accounts) |
| `gocardless_create_customer` | **write** | Create a contact-only customer (moves no money) |
| `gocardless_usage_status` | meta | Your tier + usage this month |
| `gocardless_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
