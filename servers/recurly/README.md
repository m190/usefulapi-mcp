# Recurly MCP by usefulapi

Query and manage your Recurly subscription billing from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Recurly API key.

**Live endpoint:** `https://recurly.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/recurly

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://recurly.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http recurly https://recurly.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=recurly&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frecurly.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "recurly": {
      "url": "https://recurly.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Recurly credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/recurly/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Recurly API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `recurly_list_accounts` | read | List accounts |
| `recurly_get_account` | read | Get account |
| `recurly_list_subscriptions` | read | List subscriptions |
| `recurly_get_subscription` | read | Get subscription |
| `recurly_list_invoices` | read | List invoices |
| `recurly_list_plans` | read | List plans |
| `recurly_cancel_customer_subscription` | **write** | Cancel subscription (WRITE — changes billing) |
| `recurly_pause_subscription` | **write** | Pause subscription (WRITE — changes billing) |
| `recurly_usage_status` | meta | Usage status (free-tier meter) |
| `recurly_request_feature` | meta | Request a missing feature |
| `recurly_upgrade` | meta | Upgrade to Pro (unlimited) |
| `recurly_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `recurly_upgrade` (it returns a Stripe Checkout link). Cancel any time with `recurly_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `recurly_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
