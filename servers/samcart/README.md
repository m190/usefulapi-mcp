# SamCart MCP by usefulapi

Use your [SamCart](https://samcart.com) account from Claude, Cursor, or any MCP client. Read orders, customers, subscriptions, charges, refunds and sales reports, and update order custom fields or cancel subscriptions. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://samcart.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://samcart.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http samcart https://samcart.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=samcart&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsamcart.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "samcart": {
      "url": "https://samcart.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SamCart credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/samcart/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **SamCart API key** (User Profile → API Keys in SamCart). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `samcart_list_orders` | read | List orders |
| `samcart_get_order` | read | Get an order |
| `samcart_list_customers` | read | List customers |
| `samcart_get_customer` | read | Get a customer |
| `samcart_list_subscriptions` | read | List subscriptions |
| `samcart_get_subscription` | read | Get a subscription |
| `samcart_get_subscription_history` | read | Get subscription history |
| `samcart_list_products` | read | List products |
| `samcart_get_product` | read | Get a product |
| `samcart_list_charges` | read | List charges |
| `samcart_list_refunds` | read | List refunds |
| `samcart_list_prospects` | read | List prospects |
| `samcart_get_daily_sales_report` | read | Daily sales report |
| `samcart_get_mrr_report` | read | Monthly recurring revenue |
| `samcart_update_order_custom_fields` | **write** | Update order custom fields |
| `samcart_cancel_customer_subscription` | **write** | Cancel a subscription now |
| `samcart_schedule_customer_cancellation` | **write** | Schedule a subscription cancellation |
| `samcart_usage_status` | meta | Usage status (free-tier meter) |
| `samcart_request_feature` | meta | Request a missing feature |
| `samcart_upgrade` | meta | Upgrade to Pro or Pro+ |
| `samcart_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `samcart_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `samcart_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `samcart_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
