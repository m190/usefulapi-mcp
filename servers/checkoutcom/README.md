# Checkout.com MCP by usefulapi

Read Checkout.com payments, disputes, reports and payouts. Hosted, no local install.

**Live endpoint:** `https://checkoutcom.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "checkoutcom": {
      "url": "https://checkoutcom.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Checkout.com credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `checkout_get_payment` | read | Get payment |
| `checkout_list_payments` | read | List payments by reference |
| `checkout_search_payments` | read | Search payments |
| `checkout_get_payment_actions` | read | Get payment actions |
| `checkout_get_payment_link` | read | Get payment link |
| `checkout_get_customer` | read | Get customer |
| `checkout_get_instrument` | read | Get instrument |
| `checkout_list_disputes` | read | List disputes |
| `checkout_get_dispute` | read | Get dispute |
| `checkout_list_reports` | read | List reports |
| `checkout_get_report` | read | Get report |
| `checkout_get_forex_rates` | read | Get forex rates |
| `checkout_create_payment` | **write** | Create payment |
| `checkout_capture_payment` | **write** | Capture payment |
| `checkout_refund_payment` | **write** | Refund payment |
| `checkout_void_payment` | **write** | Void payment |
| `checkout_create_payment_link` | **write** | Create payment link |
| `checkout_create_customer` | **write** | Create customer |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
