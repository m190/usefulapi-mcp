# Seal Subscriptions MCP by usefulapi

Manage Seal Subscriptions on Shopify: subscriptions, billing attempts, items, discounts, rules.

**Live endpoint:** `https://seal-subscriptions.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/seal-subscriptions

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://seal-subscriptions.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http seal-subscriptions https://seal-subscriptions.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=seal-subscriptions&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fseal-subscriptions.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "seal-subscriptions": {
      "url": "https://seal-subscriptions.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Seal Subscriptions credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/seal-subscriptions/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Seal Subscriptions **API token** (the Seal app → Settings → General Settings → API; the token, not the secret).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sealsubscriptions_list_subscriptions` | read | List subscriptions |
| `sealsubscriptions_list_subscriptions_by_billing_date` | read | List subscriptions by billing date |
| `sealsubscriptions_get_subscription` | read | Get subscription |
| `sealsubscriptions_list_subscription_rules` | read | List subscription rules |
| `sealsubscriptions_get_subscription_rule` | read | Get subscription rule |
| `sealsubscriptions_list_webhooks` | read | List webhooks |
| `sealsubscriptions_pause_subscription` | **write** | Pause subscription |
| `sealsubscriptions_resume_subscription` | **write** | Resume subscription |
| `sealsubscriptions_reactivate_subscription` | **write** | Reactivate subscription |
| `sealsubscriptions_cancel_customer_subscription` | **write** | Cancel subscription |
| `sealsubscriptions_schedule_cancellation` | **write** | Schedule subscription cancellation |
| `sealsubscriptions_add_items` | **write** | Add items to subscription |
| `sealsubscriptions_edit_items` | **write** | Edit subscription items |
| `sealsubscriptions_remove_items` | **write** | Remove items from subscription |
| `sealsubscriptions_edit_subscription` | **write** | Edit subscription |
| `sealsubscriptions_reschedule_billing_attempt` | **write** | Reschedule billing attempt |
| `sealsubscriptions_skip_billing_attempt` | **write** | Skip billing attempt |
| `sealsubscriptions_unskip_billing_attempt` | **write** | Unskip billing attempt |
| `sealsubscriptions_delete_billing_attempt` | **write** | Delete billing attempt |
| `sealsubscriptions_reschedule_fulfillment_order` | **write** | Reschedule fulfillment order |
| `sealsubscriptions_create_charge_now` | **write** | Charge subscription now |
| `sealsubscriptions_process_charge` | **write** | Process a specific charge |
| `sealsubscriptions_apply_discount_code` | **write** | Apply discount code |
| `sealsubscriptions_remove_discount_code` | **write** | Remove discount code |
| `sealsubscriptions_send_payment_method_update_email` | **write** | Email customer to update payment method |
| `sealsubscriptions_edit_subscription_rule` | **write** | Edit subscription rule |
| `sealsubscriptions_append_rule_product_variants` | **write** | Add products to subscription rule |
| `sealsubscriptions_usage_status` | meta | Usage status (free-tier meter) |
| `sealsubscriptions_request_feature` | meta | Request a missing feature |
| `sealsubscriptions_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `sealsubscriptions_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `sealsubscriptions_upgrade` (it returns a Stripe Checkout link). Cancel any time with `sealsubscriptions_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `sealsubscriptions_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Seal Subscriptions.
