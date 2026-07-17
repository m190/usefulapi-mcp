# Mixpanel MCP by usefulapi

Query Mixpanel events, funnels, retention, segmentation and insights from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Mixpanel project API secret.

**Live endpoint:** `https://mixpanel.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/mixpanel

## Add to Claude

```json
{
  "mcpServers": {
    "mixpanel": {
      "url": "https://mixpanel.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Mixpanel project API secret. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mixpanel_top_events` | read | Top events (today) |
| `mixpanel_segmentation` | read | Segment an event |
| `mixpanel_retention` | read | Retention report |
| `mixpanel_list_funnels` | read | List saved funnels |
| `mixpanel_query_funnel` | read | Query a saved funnel |
| `mixpanel_query_insights` | read | Query a saved Insights report |
| `mixpanel_jql` | read | Run a JQL query |
| `mixpanel_usage_status` | meta | Usage status (free-tier meter) |
| `mixpanel_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
