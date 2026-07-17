# Braintree MCP by usefulapi

Query payments and issue refunds in your Braintree merchant account from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Braintree credentials.

**Live endpoint:** `https://braintree.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/braintree

## Add to Claude

```json
{
  "mcpServers": {
    "braintree": {
      "url": "https://braintree.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Braintree merchant ID + keys. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `braintree_find_transaction` | read | Find a transaction |
| `braintree_search_transactions` | read | Search transactions |
| `braintree_find_customer` | read | Find a customer |
| `braintree_customer_payment_methods` | read | List a customer's payment methods |
| `braintree_list_subscriptions` | read | List a customer's subscription activity |
| `braintree_refund_transaction` | **write** | Refund a transaction |
| `braintree_void_transaction` | **write** | Void a transaction |
| `braintree_usage_status` | meta | Usage status (free-tier meter) |
| `braintree_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
