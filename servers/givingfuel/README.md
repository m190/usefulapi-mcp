# GivingFuel MCP by usefulapi

Read GivingFuel forms, donations, transactions, recurring gifts and donors; manage coupons.

**Live endpoint:** `https://givingfuel.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/givingfuel

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://givingfuel.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http givingfuel https://givingfuel.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=givingfuel&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgivingfuel.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "givingfuel": {
      "url": "https://givingfuel.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your GivingFuel credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/givingfuel/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your GivingFuel **API key** (create it in your GivingFuel dashboard under Account settings → Integrations).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `givingfuel_list_forms` | read | List donation forms |
| `givingfuel_get_form` | read | Get donation form |
| `givingfuel_get_form_inventory` | read | Get form inventory |
| `givingfuel_list_orders` | read | List donation orders |
| `givingfuel_get_order` | read | Get donation order |
| `givingfuel_list_transactions` | read | List transactions |
| `givingfuel_get_transaction` | read | Get transaction |
| `givingfuel_list_subscriptions` | read | List recurring gifts |
| `givingfuel_get_subscription` | read | Get recurring gift |
| `givingfuel_list_customers` | read | List donors |
| `givingfuel_get_customer` | read | Get donor |
| `givingfuel_list_coupons` | read | List coupons |
| `givingfuel_get_coupon` | read | Get coupon |
| `givingfuel_create_coupon` | **write** | Create coupon |
| `givingfuel_delete_coupon` | **write** | Delete coupon |
| `givingfuel_usage_status` | meta | Usage status (free-tier meter) |
| `givingfuel_request_feature` | meta | Request a missing feature |
| `givingfuel_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `givingfuel_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `givingfuel_upgrade` (it returns a Stripe Checkout link). Cancel any time with `givingfuel_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `givingfuel_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by GivingFuel.
