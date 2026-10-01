# Plausible MCP by usefulapi

Use your [Plausible](https://plausible.io) account from Claude, Cursor, or any MCP client — query site stats, realtime visitors, breakdowns and goals. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://plausible-analytics.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "plausible-analytics": {
      "url": "https://plausible-analytics.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Plausible API key** (Account Settings → API keys). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `plausible_query_stats` | read | Query stats |
| `plausible_aggregate` | read | Aggregate totals |
| `plausible_timeseries` | read | Timeseries |
| `plausible_breakdown` | read | Breakdown by property |
| `plausible_realtime_visitors` | read | Realtime visitors |
| `plausible_list_sites` | read | List sites |
| `plausible_get_site` | read | Get site |
| `plausible_list_goals` | read | List goals |
| `plausible_analytics_usage_status` | meta | Usage status (free-tier meter) |
| `plausible_analytics_upgrade` | meta | Upgrade to Pro (unlimited) |
| `plausible_analytics_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `plausible_analytics_upgrade` (it returns a Stripe Checkout link). Cancel any time with `plausible_analytics_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `plausible_analytics_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
