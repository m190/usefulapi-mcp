# Orb MCP by usefulapi

Query and manage your Orb usage-based billing from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Orb API key.

**Live endpoint:** `https://orb.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/orb

## Add to Claude

```json
{
  "mcpServers": {
    "orb": {
      "url": "https://orb.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Orb API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `orb_ping` | read | Ping / auth check |
| `orb_list_customers` | read | List customers |
| `orb_get_customer` | read | Get customer |
| `orb_get_customer_by_external_id` | read | Get customer by external id |
| `orb_get_customer_costs` | read | Get customer costs |
| `orb_get_customer_credits` | read | Get customer credit balances |
| `orb_get_customer_credits_ledger` | read | Get customer credit ledger |
| `orb_list_plans` | read | List plans |
| `orb_get_plan` | read | Get plan |
| `orb_list_subscriptions` | read | List subscriptions |
| `orb_get_subscription` | read | Get subscription |
| `orb_get_subscription_costs` | read | Get subscription costs |
| `orb_get_subscription_usage` | read | Get subscription usage |
| `orb_get_subscription_schedule` | read | Get subscription schedule |
| `orb_list_invoices` | read | List invoices |
| `orb_get_invoice` | read | Get invoice |
| `orb_get_upcoming_invoice` | read | Get upcoming invoice |
| `orb_list_items` | read | List items |
| `orb_get_item` | read | Get item |
| `orb_list_prices` | read | List prices |
| `orb_get_price` | read | Get price |
| `orb_list_metrics` | read | List billable metrics |
| `orb_list_coupons` | read | List coupons |
| `orb_list_alerts` | read | List alerts |
| `orb_create_customer` | **write** | Create customer |
| `orb_update_customer` | **write** | Update customer |
| `orb_usage_status` | meta | Usage status (free-tier meter) |
| `orb_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
