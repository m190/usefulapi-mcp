# Numeral MCP by usefulapi

Manage [Numeral](https://www.numeralhq.com) sales-tax compliance from Claude, Cursor, or any MCP client
— calculate sales tax and VAT, record transactions and refunds, and manage products and customers.
Hosted, no local install: connect with your Numeral API key.

**Live endpoint:** `https://numeral.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "numeral": {
      "url": "https://numeral.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Numeral API key** (from the Numeral dashboard). It's validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `numeral_ping` | read | Ping (health check) |
| `numeral_calculate_tax` | read | Calculate tax |
| `numeral_get_transaction` | read | Get transaction |
| `numeral_list_transaction_refunds` | read | List transaction refunds |
| `numeral_list_products` | read | List products |
| `numeral_get_product` | read | Get product |
| `numeral_get_customer` | read | Get customer |
| `numeral_create_transaction` | **write** | Create transaction |
| `numeral_create_refund` | **write** | Create refund |
| `numeral_create_product` | **write** | Create product |
| `numeral_create_customer` | **write** | Create customer |
| `numeral_usage_status` | meta | Usage status (free-tier meter) |
| `numeral_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
