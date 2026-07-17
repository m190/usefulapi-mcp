# Lago MCP by usefulapi

Query your Lago billing — customers, subscriptions, invoices, usage, and revenue analytics — and log usage events, from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Lago API key.

**Live endpoint:** `https://lago.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/lago

## Add to Claude

```json
{
  "mcpServers": {
    "lago": {
      "url": "https://lago.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Lago API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lago_list_customers` | read | List customers |
| `lago_get_customer` | read | Get customer |
| `lago_get_customer_current_usage` | read | Get customer current usage |
| `lago_get_customer_past_usage` | read | Get customer past usage |
| `lago_list_customer_subscriptions` | read | List customer subscriptions |
| `lago_get_customer_portal_url` | read | Get customer portal url |
| `lago_list_subscriptions` | read | List subscriptions |
| `lago_get_subscription` | read | Get subscription |
| `lago_list_plans` | read | List plans |
| `lago_get_plan` | read | Get plan |
| `lago_list_invoices` | read | List invoices |
| `lago_get_invoice` | read | Get invoice |
| `lago_list_billable_metrics` | read | List billable metrics |
| `lago_get_billable_metric` | read | Get billable metric |
| `lago_list_coupons` | read | List coupons |
| `lago_list_add_ons` | read | List add ons |
| `lago_list_wallets` | read | List wallets |
| `lago_list_credit_notes` | read | List credit notes |
| `lago_get_credit_note` | read | Get credit note |
| `lago_list_fees` | read | List fees |
| `lago_analytics_gross_revenue` | read | Analytics gross revenue |
| `lago_analytics_mrr` | read | Analytics mrr |
| `lago_create_customer` | **write** | Create customer |
| `lago_create_event` | **write** | Create event |
| `lago_usage_status` | meta | Usage status (free-tier meter) |
| `lago_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
