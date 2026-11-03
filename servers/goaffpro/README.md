# GoAffPro MCP by usefulapi

Use your [GoAffPro](https://goaffpro.com) account from Claude, Cursor, or any MCP client. Read affiliates, orders, commissions, payouts and traffic, and set an affiliate's status or add a coupon to one affiliate. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://goaffpro.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://goaffpro.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http goaffpro https://goaffpro.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=goaffpro&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgoaffpro.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "goaffpro": {
      "url": "https://goaffpro.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your GoAffPro credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/goaffpro/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **GoAffPro API key**, created in the GoAffPro admin under **Settings → Advanced → API Keys → New API Key**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `goaffpro_list_affiliates` | read | List affiliates |
| `goaffpro_search_affiliates` | read | Search affiliates |
| `goaffpro_list_orders` | read | List orders |
| `goaffpro_list_rewards` | read | List rewards |
| `goaffpro_list_payments` | read | List payments |
| `goaffpro_list_payment_requests` | read | List payment requests |
| `goaffpro_get_pending_payouts` | read | Get pending payouts |
| `goaffpro_list_transactions` | read | List transactions |
| `goaffpro_list_traffic` | read | List affiliate traffic |
| `goaffpro_list_coupons` | read | List coupons |
| `goaffpro_list_groups` | read | List affiliate groups |
| `goaffpro_list_special_commissions` | read | List special commission rates |
| `goaffpro_list_connections` | read | List affiliate-customer connections |
| `goaffpro_set_affiliate_status` | **write** | Set affiliate status |
| `goaffpro_add_affiliate_coupon` | **write** | Add a coupon to an affiliate |
| `goaffpro_usage_status` | meta | Usage status (free-tier meter) |
| `goaffpro_request_feature` | meta | Request a missing feature |
| `goaffpro_upgrade` | meta | Upgrade to Pro or Pro+ |
| `goaffpro_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `goaffpro_upgrade` (it returns a Stripe Checkout link). Cancel any time with `goaffpro_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `goaffpro_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
