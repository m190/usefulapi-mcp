# Pin Payments MCP by usefulapi

Read payment records at https://pin-payments.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pin-payments.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pin-payments https://pin-payments.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pin-payments&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpin-payments.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pin-payments": {
      "url": "https://pin-payments.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Pin Payments credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pin-payments/

<!-- connect:end (generated above, edit below) -->

Use your Pin Payments secret API key and select its live or test environment. Pin Payments has no read-only API key: the secret can create charges, refunds and bank transfers if misused. This server only sends GET requests and exposes no money-moving tools. Requested payment and customer records pass to your chosen AI client and its LLM provider. Revoke or replace the key in Pin Payments to stop vendor access. Rotating the key starts a new usage and billing identity.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pinpayments_get_balance` | read | Get balance |
| `pinpayments_list_charges` | read | List charges |
| `pinpayments_search_charges` | read | Search charges |
| `pinpayments_get_charge` | read | Get charge |
| `pinpayments_list_charge_refunds` | read | List refunds of a charge |
| `pinpayments_list_refunds` | read | List refunds |
| `pinpayments_get_refund` | read | Get refund |
| `pinpayments_list_authorisations` | read | List authorisations |
| `pinpayments_get_authorisation` | read | Get authorisation |
| `pinpayments_list_customers` | read | List customers |
| `pinpayments_get_customer` | read | Get customer |
| `pinpayments_list_customer_charges` | read | List a customer's charges |
| `pinpayments_list_customer_cards` | read | List a customer's cards |
| `pinpayments_list_customer_subscriptions` | read | List a customer's subscriptions |
| `pinpayments_list_deposits` | read | List deposits |
| `pinpayments_get_deposit` | read | Get deposit |
| `pinpayments_list_transfers` | read | List transfers |
| `pinpayments_search_transfers` | read | Search transfers |
| `pinpayments_get_transfer` | read | Get transfer |
| `pinpayments_list_transfer_line_items` | read | List transfer line items |
| `pinpayments_list_recipients` | read | List recipients |
| `pinpayments_get_recipient` | read | Get recipient |
| `pinpayments_list_recipient_transfers` | read | List a recipient's transfers |
| `pinpayments_list_disputes` | read | List disputes |
| `pinpayments_search_disputes` | read | Search disputes |
| `pinpayments_get_dispute` | read | Get dispute |
| `pinpayments_get_dispute_activity` | read | Get dispute activity |
| `pinpayments_list_plans` | read | List plans |
| `pinpayments_get_plan` | read | Get plan |
| `pinpayments_list_plan_subscriptions` | read | List a plan's subscriptions |
| `pinpayments_list_subscriptions` | read | List subscriptions |
| `pinpayments_get_subscription` | read | Get subscription |
| `pinpayments_get_subscription_ledger` | read | Get subscription ledger |
| `pinpayments_list_events` | read | List events |
| `pinpayments_get_event` | read | Get event |
| `pinpayments_usage_status` | meta | Usage status (free-tier meter) |
| `pinpayments_request_feature` | meta | Request a missing feature |
| `pinpayments_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `pinpayments_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key and environment) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `pinpayments_upgrade` (it returns a Stripe Checkout link). Cancel any time with `pinpayments_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `pinpayments_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

Independent integration by usefulapi. See [Terms](https://usefulapi.io/terms/) and [Privacy](https://usefulapi.io/privacy/).
