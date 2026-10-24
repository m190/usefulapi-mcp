# Instamojo MCP by usefulapi

Read Instamojo payment requests, payments and refunds; create payment links and refund payments.

**Live endpoint:** `https://instamojo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/instamojo

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://instamojo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http instamojo https://instamojo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=instamojo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finstamojo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "instamojo": {
      "url": "https://instamojo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Instamojo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/instamojo/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Instamojo **Private API Key** and **Private Auth Token** (both on https://www.instamojo.com/integrations/).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `instamojo_list_payment_requests` | read | List payment requests |
| `instamojo_get_payment_request` | read | Get payment request |
| `instamojo_create_payment_request` | **write** | Create payment request |
| `instamojo_disable_payment_request` | **write** | Disable payment request |
| `instamojo_enable_payment_request` | **write** | Enable payment request |
| `instamojo_get_payment` | read | Get payment |
| `instamojo_list_refunds` | read | List refunds |
| `instamojo_get_refund` | read | Get refund |
| `instamojo_create_refund` | **write** | Create refund |
| `instamojo_usage_status` | meta | Usage status (free-tier meter) |
| `instamojo_request_feature` | meta | Request a missing feature |
| `instamojo_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `instamojo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `instamojo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `instamojo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `instamojo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Instamojo.
