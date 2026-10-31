# Recurpay MCP server

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://recurpay.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http recurpay https://recurpay.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=recurpay&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frecurpay.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "recurpay": {
      "url": "https://recurpay.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Recurpay credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/recurpay/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `recurpay_get_access_scopes` | read | Get the token's API scopes |
| `recurpay_list_subscriptions` | read | List subscriptions |
| `recurpay_get_subscription` | read | Get a subscription |
| `recurpay_list_subscribers` | read | List subscribers |
| `recurpay_get_subscriber` | read | Get a subscriber |
| `recurpay_list_orders` | read | List orders |
| `recurpay_get_order` | read | Get an order |
| `recurpay_list_order_subscriptions` | read | List an order's subscriptions |
| `recurpay_list_plans` | read | List plans |
| `recurpay_get_plan` | read | Get a plan |
| `recurpay_list_plan_products` | read | List a plan's products |
| `recurpay_list_webhooks` | read | List webhooks |
| `recurpay_cancel_customer_subscription` | **write** | Cancel a customer's subscription |
| `recurpay_skip_next_billing` | **write** | Skip the next billing |
| `recurpay_renew_subscription` | **write** | Renew a subscription now |
| `recurpay_send_payment_link` | **write** | Send a payment link to the subscriber |
| `recurpay_update_subscriber` | **write** | Update a subscriber |
| `recurpay_update_subscription_coupon` | **write** | Add or remove a subscription coupon |
| `recurpay_usage_status` | meta | Usage status (free-tier meter) |
| `recurpay_request_feature` | meta | Request a missing feature |
| `recurpay_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `recurpay_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** (per Recurpay store) | $0 | 50 tool calls / month |
| **Pro** (per Recurpay store) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `recurpay_upgrade` (it returns a Stripe Checkout link). Cancel any time with `recurpay_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `recurpay_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT

## Store access and billing actions

Create a custom app in your own Recurpay store: Settings → Integrations → Develop apps → Create new app. Grant only the needed scopes. Recurpay documents this per-store custom-app route as approval-free. This independent connector is not a Recurpay public app or marketplace listing. Your vendor account, API eligibility and any vendor charges remain separate.

The token is encrypted for authorized API calls. Requested subscriber, subscription and order records pass through UsefulAPI to your chosen AI client and LLM provider. Connected-token values and credential fields are removed from results. Revoke the custom app/token in Recurpay to end vendor access; disconnect UsefulAPI to stop this connection. Billing follows the store, normally including token rotation.

Immediate renewal can charge a saved payment method; generating a payment link notifies the subscriber. Both tools require explicit confirmation. Cancelling a customer subscription stops its billing and deliveries; skipping advances the next cycle. Contact and discount changes can affect future billing. These are separate from cancelling your UsefulAPI plan.

No vendor operation is automatically replayed. A timeout or unreadable reply can leave a write uncertain; check Recurpay before repeating it. Repeated explicit renewal or payment-link calls can repeat charges or notifications. An acknowledged renewal record is not independent proof that a payment settled. Operations have a 30-second deadline and an 8-MiB response cap.

The 18 tools were checked against current vendor definitions and local mocks. Release authentication checks used a nonexistent token on the vendor-owned demo. No real customer reads, charges, customer messages or business writes were tested.
