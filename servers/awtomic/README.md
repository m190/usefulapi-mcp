# Awtomic MCP by usefulapi

Read Awtomic subscriptions, customers and billing attempts; pause, skip, reschedule, cancel.

**Live endpoint:** `https://awtomic.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/awtomic

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://awtomic.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http awtomic https://awtomic.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=awtomic&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fawtomic.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "awtomic": {
      "url": "https://awtomic.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Awtomic credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/awtomic/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Awtomic **API key** (in the Awtomic Subscriptions app settings in your Shopify admin).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `awtomic_list_subscriptions` | read | List shop subscriptions |
| `awtomic_get_subscription` | read | Get subscription |
| `awtomic_list_customer_subscriptions` | read | List a customer's subscriptions |
| `awtomic_list_billing_attempts` | read | List billing attempts |
| `awtomic_get_successful_billing_count` | read | Get successful billing count |
| `awtomic_get_origin_order` | read | Get subscription origin order |
| `awtomic_get_origin_order_fulfillments` | read | Get origin order fulfillments |
| `awtomic_get_customer` | read | Get customer |
| `awtomic_get_customer_addresses` | read | Get customer addresses |
| `awtomic_get_customer_payment_methods` | read | Get customer payment methods |
| `awtomic_list_selling_plan_groups` | read | List selling plan groups |
| `awtomic_get_selling_plan_group` | read | Get selling plan group |
| `awtomic_pause_subscription` | **write** | Pause subscription |
| `awtomic_reactivate_subscription` | **write** | Reactivate subscription |
| `awtomic_skip_next_order` | **write** | Skip next order |
| `awtomic_undo_skip` | **write** | Undo skip |
| `awtomic_set_next_billing_date` | **write** | Set next billing date |
| `awtomic_update_frequency` | **write** | Update subscription frequency |
| `awtomic_cancel_customer_subscription` | **write** | Cancel a customer's subscription |
| `awtomic_order_now` | **write** | Charge and order now |
| `awtomic_send_payment_update_email` | **write** | Email customer to update payment method |
| `awtomic_usage_status` | meta | Usage status (free-tier meter) |
| `awtomic_request_feature` | meta | Request a missing feature |
| `awtomic_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `awtomic_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `awtomic_upgrade` (it returns a Stripe Checkout link). Cancel any time with `awtomic_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `awtomic_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Awtomic.
