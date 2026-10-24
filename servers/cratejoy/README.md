# Cratejoy MCP by usefulapi

Use [Cratejoy](https://www.cratejoy.com) from Claude, Cursor, or any MCP client — read your subscription-box store's customers, subscriptions and their coupons, orders, shipments, products and transactions, and skip, cancel, reactivate or retry the renewal of a subscription (each write needs an explicit confirmation).
Hosted, no local install: connect with the Client ID and Client Secret Key of an API key that you generate in Cratejoy.

**Live endpoint:** `https://cratejoy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/cratejoy

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cratejoy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cratejoy https://cratejoy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cratejoy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcratejoy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cratejoy": {
      "url": "https://cratejoy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Cratejoy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cratejoy/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cratejoy_get_store_metadata` | read | Get store metadata |
| `cratejoy_list_customers` | read | List customers |
| `cratejoy_get_customer` | read | Get customer |
| `cratejoy_list_subscriptions` | read | List subscriptions |
| `cratejoy_get_subscription` | read | Get subscription |
| `cratejoy_list_subscription_coupons` | read | List subscription coupons |
| `cratejoy_list_orders` | read | List orders |
| `cratejoy_get_order` | read | Get order |
| `cratejoy_list_shipments` | read | List shipments |
| `cratejoy_get_shipment` | read | Get shipment |
| `cratejoy_list_products` | read | List products |
| `cratejoy_get_product` | read | Get product |
| `cratejoy_list_transactions` | read | List transactions |
| `cratejoy_get_transaction` | read | Get transaction |
| `cratejoy_skip_subscription_renewal` | **write** | Skip or unskip next renewal |
| `cratejoy_cancel_customer_subscription` | **write** | Cancel a customer's subscription |
| `cratejoy_reactivate_subscription` | **write** | Reactivate a customer's subscription |
| `cratejoy_retry_subscription_renewal` | **write** | Retry a failed renewal |
| `cratejoy_usage_status` | meta | Usage status (free-tier meter) |
| `cratejoy_request_feature` | meta | Request a missing feature |
| `cratejoy_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `cratejoy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per store) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `cratejoy_upgrade` (it returns a Stripe Checkout link). Cancel any time with `cratejoy_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `cratejoy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Cratejoy.
