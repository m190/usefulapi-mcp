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
| `givingfuel_upgrade` | meta | Upgrade to Pro or Pro+ |
| `givingfuel_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `givingfuel_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `givingfuel_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `givingfuel_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by GivingFuel.
