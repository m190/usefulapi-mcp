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
| `chargebee_get_customer` | read | Get a customer by id |
| `chargebee_list_subscriptions` | read | List subscriptions |
| `chargebee_get_subscription` | read | Get a subscription by id |
| `chargebee_list_invoices` | read | List invoices |
| `chargebee_get_invoice` | read | Get an invoice by id |
| `chargebee_list_items` | read | List catalog items (plans, addons, charges) |
| `chargebee_list_item_prices` | read | List item prices |
| `chargebee_list_transactions` | read | List payment/refund transactions |
| `chargebee_list_credit_notes` | read | List credit notes |
| `chargebee_list_coupons` | read | List coupons |
| `chargebee_create_customer` | **write** | Create a customer |
| `chargebee_update_customer` | **write** | Update a customer's details |
| `chargebee_usage_status` | meta | Your tier + usage this month |
| `chargebee_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
