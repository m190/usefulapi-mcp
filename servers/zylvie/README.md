# Zylvie MCP by usefulapi

Hosted at https://zylvie.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zylvie.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zylvie https://zylvie.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zylvie&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzylvie.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zylvie": {
      "url": "https://zylvie.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zylvie credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zylvie/

<!-- connect:end (generated above, edit below) -->

Create an API key in Zylvie under Settings → API. Usage and billing are per API key. This integration provides read-only account, coupon, transaction and subscription queries.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zylvie_get_account` | read | Get authenticating account |
| `zylvie_list_coupons` | read | List coupons |
| `zylvie_list_transactions` | read | List transactions |
| `zylvie_list_subscriptions` | read | List subscriptions |
| `zylvie_usage_status` | meta | Usage status (free-tier meter) |
| `zylvie_request_feature` | meta | Request a missing feature |
| `zylvie_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `zylvie_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `zylvie_upgrade` (it returns a Stripe Checkout link). Cancel any time with `zylvie_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `zylvie_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT.
