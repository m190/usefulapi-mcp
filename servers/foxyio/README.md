# Foxy.io MCP by usefulapi

Manage [Foxy.io](https://foxy.io) from Claude, Cursor, or any MCP client — read transactions,
subscriptions, customers, carts and coupons, and update customers and subscriptions. Hosted, no
local install: connect with your Foxy API credentials.

**Live endpoint:** `https://foxyio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://foxyio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http foxyio https://foxyio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=foxyio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffoxyio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "foxyio": {
      "url": "https://foxyio.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/foxyio/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Foxy Client ID, Client Secret, and Refresh Token** (Foxy admin
→ Integrations → "Get Token"). They're validated, stored per-user, and scoped to you — no keys in
config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `foxy_get_api_home` | read | Get API home |
| `foxy_get_default_store` | read | Get default store |
| `foxy_get_store` | read | Get store |
| `foxy_list_transactions` | read | List transactions |
| `foxy_get_transaction` | read | Get transaction |
| `foxy_list_subscriptions` | read | List subscriptions |
| `foxy_get_subscription` | read | Get subscription |
| `foxy_list_customers` | read | List customers |
| `foxy_get_customer` | read | Get customer |
| `foxy_list_carts` | read | List carts |
| `foxy_list_coupons` | read | List coupons |
| `foxy_list_items` | read | List transaction items |
| `foxy_update_customer` | **write** | Update customer |
| `foxy_update_subscription` | **write** | Update subscription |
| `foxy_usage_status` | meta | Usage status (free-tier meter) |
| `foxy_upgrade` | meta | Upgrade to Pro (unlimited) |
| `foxy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `foxy_upgrade` (it returns a Stripe Checkout link). Cancel any time with `foxy_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `foxy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
