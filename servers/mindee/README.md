# Mindee MCP by usefulapi

Extract structured data from any document with Mindee, from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Mindee API key.

**Live endpoint:** `https://mindee.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/mindee

## Add to Claude

```json
{
  "mcpServers": {
    "mindee": {
      "url": "https://mindee.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Mindee API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mindee_list_models` | read | List extraction models |
| `mindee_get_job` | read | Get job status |
| `mindee_get_inference` | read | Get extraction result |
| `mindee_extract_document` | read | Extract data from a document |
| `mindee_usage_status` | meta | Usage status (free-tier meter) |
| `mindee_upgrade` | meta | Upgrade to Pro (unlimited) |
| `mindee_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `mindee_upgrade` (it returns a Stripe Checkout link). Cancel any time with `mindee_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `mindee_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
