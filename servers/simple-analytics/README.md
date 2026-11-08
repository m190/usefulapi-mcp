# Simple Analytics MCP by usefulapi

Use [Simple Analytics](https://www.simpleanalytics.com) from Claude, Cursor, or any MCP client — pageviews, visitors, pages, referrers, countries, events and data exports.
Hosted, no local install: connect with your own Simple Analytics credentials.

**Live endpoint:** `https://simple-analytics.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/simple-analytics

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://simple-analytics.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http simple-analytics https://simple-analytics.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=simple-analytics&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsimple-analytics.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "simple-analytics": {
      "url": "https://simple-analytics.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Simple Analytics credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/simple-analytics/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `simpleanalytics_list_websites` | read | List websites |
| `simpleanalytics_get_stats` | read | Get traffic summary |
| `simpleanalytics_get_timeseries` | read | Get traffic over time |
| `simpleanalytics_get_breakdown` | read | Get top pages, referrers, countries or devices |
| `simpleanalytics_get_events` | read | Get event counts |
| `simpleanalytics_export_datapoints` | read | Export raw data points |
| `simpleanalytics_usage_status` | meta | Usage status (free-tier meter) |
| `simpleanalytics_request_feature` | meta | Request a missing feature |
| `simpleanalytics_upgrade` | meta | Upgrade to Pro or Pro+ |
| `simpleanalytics_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `simpleanalytics_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `simpleanalytics_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `simpleanalytics_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Simple Analytics.
