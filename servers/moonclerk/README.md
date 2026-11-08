# MoonClerk MCP by usefulapi

Read MoonClerk payment forms, customers (plans with subscriptions) and payments. Read-only.

**Live endpoint:** `https://moonclerk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/moonclerk

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://moonclerk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http moonclerk https://moonclerk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=moonclerk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmoonclerk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "moonclerk": {
      "url": "https://moonclerk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MoonClerk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/moonclerk/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your MoonClerk **API key** (in MoonClerk under Settings → API Key, app.moonclerk.com/settings/api-key).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `moonclerk_list_forms` | read | List payment forms |
| `moonclerk_get_form` | read | Get payment form |
| `moonclerk_list_customers` | read | List customers (plans) |
| `moonclerk_get_customer` | read | Get customer (plan) |
| `moonclerk_list_payments` | read | List payments |
| `moonclerk_get_payment` | read | Get payment |
| `moonclerk_usage_status` | meta | Usage status (free-tier meter) |
| `moonclerk_request_feature` | meta | Request a missing feature |
| `moonclerk_upgrade` | meta | Upgrade to Pro or Pro+ |
| `moonclerk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `moonclerk_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `moonclerk_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `moonclerk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by MoonClerk.
