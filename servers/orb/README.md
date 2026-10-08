# Orb MCP by usefulapi

Query and manage your Orb usage-based billing from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Orb API key.

**Live endpoint:** `https://orb.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/orb

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://orb.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http orb https://orb.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=orb&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Forb.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "orb": {
      "url": "https://orb.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/orb/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Orb API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `orb_ping` | read | Ping / auth check |
| `orb_list_customers` | read | List customers |
| `orb_get_customer` | read | Get customer |
| `orb_get_customer_by_external_id` | read | Get customer by external id |
| `orb_get_customer_costs` | read | Get customer costs |
| `orb_get_customer_credits` | read | Get customer credit balances |
| `orb_get_customer_credits_ledger` | read | Get customer credit ledger |
| `orb_list_plans` | read | List plans |
| `orb_get_plan` | read | Get plan |
| `orb_list_subscriptions` | read | List subscriptions |
| `orb_get_subscription` | read | Get subscription |
| `orb_get_subscription_costs` | read | Get subscription costs |
| `orb_get_subscription_usage` | read | Get subscription usage |
| `orb_get_subscription_schedule` | read | Get subscription schedule |
| `orb_list_invoices` | read | List invoices |
| `orb_get_invoice` | read | Get invoice |
| `orb_get_upcoming_invoice` | read | Get upcoming invoice |
| `orb_list_items` | read | List items |
| `orb_get_item` | read | Get item |
| `orb_list_prices` | read | List prices |
| `orb_get_price` | read | Get price |
| `orb_list_metrics` | read | List billable metrics |
| `orb_list_coupons` | read | List coupons |
| `orb_list_alerts` | read | List alerts |
| `orb_create_customer` | **write** | Create customer |
| `orb_update_customer` | **write** | Update customer |
| `orb_usage_status` | meta | Usage status (free-tier meter) |
| `orb_upgrade` | meta | Upgrade to Pro (unlimited) |
| `orb_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `orb_upgrade` (it returns a Stripe Checkout link). Cancel any time with `orb_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `orb_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
