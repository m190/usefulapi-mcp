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
| `orb_list_customers` | read | List customers |
| `orb_get_customer` | read | Get a customer by Orb id |
| `orb_get_customer_by_external_id` | read | Get a customer by external id |
| `orb_get_customer_costs` | read | A customer's costs over a timeframe |
| `orb_get_customer_credits` | read | A customer's credit balances |
| `orb_get_customer_credits_ledger` | read | A customer's credit ledger |
| `orb_list_plans` | read | List plans |
| `orb_get_plan` | read | Get a plan |
| `orb_list_subscriptions` | read | List subscriptions |
| `orb_get_subscription` | read | Get a subscription |
| `orb_get_subscription_costs` | read | Subscription costs over a timeframe |
| `orb_get_subscription_usage` | read | Metered usage for a subscription |
| `orb_list_invoices` | read | List invoices |
| `orb_get_invoice` | read | Get an invoice |
| `orb_get_upcoming_invoice` | read | Preview an upcoming invoice |
| `orb_list_prices` | read | List prices |
| `orb_list_metrics` | read | List billable metrics |
| `orb_list_alerts` | read | List usage/spend alerts |
| `orb_create_customer` | **write** | Create a customer |
| `orb_update_customer` | **write** | Update a customer's details |
| `orb_usage_status` | meta | Your tier + usage this month |
| `orb_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
