# Chargebee MCP by usefulapi

Query and manage your Chargebee subscription billing from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Chargebee API key.

**Live endpoint:** `https://chargebee.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/chargebee

## Add to Claude

```json
{
  "mcpServers": {
    "chargebee": {
      "url": "https://chargebee.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Chargebee API key and site. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `chargebee_list_customers` | read | List customers |
| `chargebee_get_customer` | read | Get customer |
| `chargebee_list_subscriptions` | read | List subscriptions |
| `chargebee_get_subscription` | read | Get subscription |
| `chargebee_list_invoices` | read | List invoices |
| `chargebee_get_invoice` | read | Get invoice |
| `chargebee_list_items` | read | List items |
| `chargebee_list_item_prices` | read | List item prices |
| `chargebee_list_transactions` | read | List transactions |
| `chargebee_list_credit_notes` | read | List credit notes |
| `chargebee_list_coupons` | read | List coupons |
| `chargebee_create_customer` | **write** | Create customer |
| `chargebee_update_customer` | **write** | Update customer |
| `chargebee_usage_status` | meta | Usage status (free-tier meter) |
| `chargebee_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
