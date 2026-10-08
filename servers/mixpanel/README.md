# Mixpanel MCP by usefulapi

Query Mixpanel events, funnels, retention, segmentation and insights from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Mixpanel project API secret.

**Live endpoint:** `https://mixpanel.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/mixpanel

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mixpanel.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mixpanel https://mixpanel.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mixpanel&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmixpanel.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mixpanel": {
      "url": "https://mixpanel.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mixpanel/

<!-- connect:end (generated above, edit below) -->

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
| `mixpanel_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `mixpanel_upgrade` (it returns a Stripe Checkout link). Cancel any time with `mixpanel_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `mixpanel_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
