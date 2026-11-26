# Loop MCP by usefulapi

Use your [Loop](https://loopwork.co) account from Claude, Cursor, or any MCP client. Read subscriptions, orders, customers and selling plans, pause, resume or reactivate subscriptions, or skip the next order. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://loop-subscriptions.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://loop-subscriptions.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http loop-subscriptions https://loop-subscriptions.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=loop-subscriptions&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Floop-subscriptions.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "loop-subscriptions": {
      "url": "https://loop-subscriptions.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Loop credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/loop-subscriptions/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Loop store API token** (Loop app → Settings → API tokens and webhooks → Generate New Token; needs Loop's PRO plan). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `loopsubscriptions_get_subscription` | read | Get subscription |
| `loopsubscriptions_list_subscriptions` | read | List subscriptions |
| `loopsubscriptions_list_customer_subscriptions` | read | List subscriptions for a customer |
| `loopsubscriptions_find_subscriptions_by_email` | read | Find subscriptions by email |
| `loopsubscriptions_list_order_schedule` | read | List upcoming orders |
| `loopsubscriptions_list_order_history` | read | List past orders of a subscription |
| `loopsubscriptions_list_activity_logs` | read | List subscription activity |
| `loopsubscriptions_get_customer` | read | Get customer |
| `loopsubscriptions_list_customers` | read | List customers |
| `loopsubscriptions_list_scheduled_orders` | read | List scheduled orders |
| `loopsubscriptions_list_past_orders` | read | List past orders |
| `loopsubscriptions_list_products` | read | List products |
| `loopsubscriptions_list_selling_plan_groups` | read | List selling plan groups |
| `loopsubscriptions_pause_subscription` | **write** | Pause subscription |
| `loopsubscriptions_resume_subscription` | **write** | Resume subscription |
| `loopsubscriptions_skip_next_order` | **write** | Skip next order |
| `loopsubscriptions_reactivate_subscription` | **write** | Reactivate subscription |
| `loopsubscriptions_update_note` | **write** | Update subscription note |
| `loopsubscriptions_usage_status` | meta | Usage status (free-tier meter) |
| `loopsubscriptions_request_feature` | meta | Request a missing feature |
| `loopsubscriptions_upgrade` | meta | Upgrade to Pro or Pro+ |
| `loopsubscriptions_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `loopsubscriptions_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `loopsubscriptions_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `loopsubscriptions_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
