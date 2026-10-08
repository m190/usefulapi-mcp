# Checkout.com MCP by usefulapi

Read Checkout.com payments, disputes, reports and payouts. Hosted, no local install.

**Live endpoint:** `https://checkoutcom.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://checkoutcom.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http checkoutcom https://checkoutcom.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=checkoutcom&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcheckoutcom.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "checkoutcom": {
      "url": "https://checkoutcom.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/checkoutcom/

<!-- connect:end (generated above, edit below) -->

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
| `checkoutcom_usage_status` | meta | Usage status (free-tier meter) |
| `checkoutcom_upgrade` | meta | Upgrade to Pro (unlimited) |
| `checkoutcom_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `checkoutcom_upgrade` (it returns a Stripe Checkout link). Cancel any time with `checkoutcom_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `checkoutcom_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
