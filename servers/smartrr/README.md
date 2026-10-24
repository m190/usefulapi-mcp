# Smartrr MCP by usefulapi

Manage Smartrr subscriptions on Shopify: customers, orders, bills; pause, resume, cancel.

**Live endpoint:** `https://smartrr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/smartrr

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://smartrr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http smartrr https://smartrr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=smartrr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsmartrr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "smartrr": {
      "url": "https://smartrr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Smartrr credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/smartrr/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Smartrr **API access token** (Shopify admin → Apps → Smartrr → Integrations).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smartrr_list_subscriptions` | read | List subscriptions |
| `smartrr_get_subscription` | read | Get subscription |
| `smartrr_list_customer_subscriptions` | read | List a customer's subscriptions |
| `smartrr_get_subscription_events` | read | Get subscription history |
| `smartrr_get_subscription_orders` | read | List a subscription's orders |
| `smartrr_get_subscription_bills` | read | List a subscription's bills |
| `smartrr_list_customers` | read | List customers |
| `smartrr_list_orders` | read | List orders |
| `smartrr_get_order` | read | Get order |
| `smartrr_list_bills` | read | List bills |
| `smartrr_get_bill_history` | read | Get bill history |
| `smartrr_list_selling_plan_groups` | read | List subscription programs |
| `smartrr_list_cancellation_reasons` | read | List cancellation reasons |
| `smartrr_get_analytics` | read | Get subscription analytics |
| `smartrr_pause_subscription` | **write** | Pause a subscription |
| `smartrr_resume_subscription` | **write** | Resume a subscription |
| `smartrr_cancel_customer_subscription` | **write** | Cancel a customer's subscription |
| `smartrr_skip_order` | **write** | Skip a subscription order |
| `smartrr_unskip_order` | **write** | Unskip a subscription order |
| `smartrr_set_next_billing_date` | **write** | Set next billing date |
| `smartrr_retry_bill` | **write** | Retry a failed bill |
| `smartrr_usage_status` | meta | Usage status (free-tier meter) |
| `smartrr_request_feature` | meta | Request a missing feature |
| `smartrr_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `smartrr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `smartrr_upgrade` (it returns a Stripe Checkout link). Cancel any time with `smartrr_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `smartrr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Smartrr.
