# Recharge MCP by usefulapi

**Live endpoint:** `https://recharge.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://recharge.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http recharge https://recharge.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=recharge&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frecharge.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "recharge": {
      "url": "https://recharge.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/recharge/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Recharge API token** (Recharge → Apps → API tokens).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `recharge_get_store` | read | Get store |
| `recharge_list_subscriptions` | read | List subscriptions |
| `recharge_get_subscription` | read | Get subscription |
| `recharge_list_customers` | read | List customers |
| `recharge_get_customer` | read | Get customer |
| `recharge_list_charges` | read | List charges |
| `recharge_get_charge` | read | Get charge |
| `recharge_list_orders` | read | List orders |
| `recharge_get_order` | read | Get order |
| `recharge_list_onetimes` | read | List one-times |
| `recharge_list_products` | read | List products |
| `recharge_list_addresses` | read | List addresses |
| `recharge_skip_charge` | **write** | Skip charge |
| `recharge_cancel_subscription` | **write** | Cancel subscription |
| `recharge_activate_subscription` | **write** | Activate subscription |
| `recharge_usage_status` | meta | Usage status (free-tier meter) |
| `recharge_upgrade` | meta | Upgrade to Pro (unlimited) |
| `recharge_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `recharge_upgrade` (it returns a Stripe Checkout link). Cancel any time with `recharge_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `recharge_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
