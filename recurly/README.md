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
| `recurly_list_accounts` | read | List customer accounts |
| `recurly_get_account` | read | Get an account by id or code |
| `recurly_list_subscriptions` | read | List subscriptions (site-wide or per account) |
| `recurly_get_subscription` | read | Get a subscription by id |
| `recurly_list_invoices` | read | List invoices (site-wide or per account) |
| `recurly_list_plans` | read | List subscription plans |
| `recurly_cancel_subscription` | **write** | Cancel a subscription (term-end or next bill date) |
| `recurly_pause_subscription` | **write** | Pause or resume a subscription for N cycles |
| `recurly_usage_status` | meta | Your tier + usage this month |
| `recurly_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
