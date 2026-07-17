# MaxMind minFraud MCP by usefulapi

Score transactions for fraud risk with MaxMind minFraud from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your MaxMind account ID + license key.

**Live endpoint:** `https://maxmind-minfraud.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/maxmind-minfraud

## Add to Claude

```json
{
  "mcpServers": {
    "maxmind-minfraud": {
      "url": "https://maxmind-minfraud.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your MaxMind account ID and license key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `minfraud_score` | read | Minfraud score |
| `minfraud_insights` | read | Minfraud insights |
| `minfraud_factors` | read | Minfraud factors |
| `minfraud_report_transaction` | **write** | Minfraud report transaction |
| `maxmind_minfraud_usage_status` | meta | Usage status (free-tier meter) |
| `maxmind_minfraud_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
