# Joy Subscriptions MCP by usefulapi

Use your [Joy Subscriptions](https://joy.so) account from Claude, Cursor, or any MCP client. Read subscriptions, subscribers, orders, plans and analytics, and pause, resume or skip an order. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://joy-subscriptions.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://joy-subscriptions.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http joy-subscriptions https://joy-subscriptions.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=joy-subscriptions&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjoy-subscriptions.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "joy-subscriptions": {
      "url": "https://joy-subscriptions.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Joy Subscriptions credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/joy-subscriptions/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Joy MCP API key** (in Joy: Settings → MCP, API and webhooks → MCP → Other → API key; it starts with `joymcp_`). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `joysubscriptions_search_subscriptions` | read | Search subscriptions |
| `joysubscriptions_get_subscription_details` | read | Get subscription details |
| `joysubscriptions_get_customer_subscriptions` | read | Get customer subscriptions |
| `joysubscriptions_list_plans` | read | List plans |
| `joysubscriptions_get_subscriber` | read | Get subscriber |
| `joysubscriptions_get_upcoming_orders` | read | Get upcoming orders |
| `joysubscriptions_list_recurring_orders` | read | List recurring orders |
| `joysubscriptions_get_failed_payments` | read | Get failed payments |
| `joysubscriptions_get_dunning` | read | Get dunning |
| `joysubscriptions_get_analytics_performance` | read | Get analytics performance |
| `joysubscriptions_get_churn` | read | Get churn |
| `joysubscriptions_get_retention_cohorts` | read | Get retention cohorts |
| `joysubscriptions_list_product_bundles` | read | List product bundles |
| `joysubscriptions_list_subscription_boxes` | read | List subscription boxes |
| `joysubscriptions_get_settings` | read | Get settings |
| `joysubscriptions_pause_subscription` | **write** | Pause subscription |
| `joysubscriptions_resume_subscription` | **write** | Resume subscription |
| `joysubscriptions_skip_next_order` | **write** | Skip next order |
| `joysubscriptions_usage_status` | meta | Usage status (free-tier meter) |
| `joysubscriptions_request_feature` | meta | Request a missing feature |
| `joysubscriptions_upgrade` | meta | Upgrade to Pro or Pro+ |
| `joysubscriptions_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `joysubscriptions_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `joysubscriptions_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `joysubscriptions_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
