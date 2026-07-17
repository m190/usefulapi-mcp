# Recurly MCP by usefulapi

Query and manage your Recurly subscription billing from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Recurly API key.

**Live endpoint:** `https://recurly.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/recurly

## Add to Claude

```json
{
  "mcpServers": {
    "recurly": {
      "url": "https://recurly.usefulapi.io/mcp"
    }
  }
}
```

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
| `recurly_cancel_subscription` | **write** | Cancel subscription (WRITE — changes billing) |
| `recurly_pause_subscription` | **write** | Pause subscription (WRITE — changes billing) |
| `recurly_usage_status` | meta | Usage status (free-tier meter) |
| `recurly_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
