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
| `mixpanel_top_events` | read | Top events |
| `mixpanel_segmentation` | read | Segmentation report |
| `mixpanel_retention` | read | Retention report |
| `mixpanel_list_funnels` | read | List saved funnels |
| `mixpanel_query_funnel` | read | Query a funnel |
| `mixpanel_query_insights` | read | Query a saved insights report |
| `mixpanel_jql` | read | Run a raw JQL query |
| `mixpanel_usage_status` | meta | Your tier + usage this month |
| `mixpanel_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
