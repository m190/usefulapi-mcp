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
| `braintree_find_transaction` | read | Fetch one transaction by its GraphQL global ID — amount, status, timestamps, order id, and linked customer. |
| `braintree_search_transactions` | read | Search transactions by created-at date range, status, and/or customer, returning a page of transaction nodes. |
| `braintree_find_customer` | read | Fetch one customer by GraphQL global Customer ID — id, legacy id, name, company, and created-at. |
| `braintree_customer_payment_methods` | read | List a customer's vaulted payment methods (credit cards, PayPal accounts) with usage and detail type. |
| `braintree_list_subscriptions` | read | Trace a customer's recurring / subscription charge activity via their transactions (GraphQL has no native Subscription object). |
| `braintree_refund_transaction` | **write** | Refund a settled (or settling) transaction — full, or a partial decimal amount — returning money to the customer. |
| `braintree_void_transaction` | **write** | Void (cancel) a transaction that has not yet settled, such as an authorization or one submitted for settlement. |
| `braintree_usage_status` | meta | Your tier + usage this month |
| `braintree_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
