# Pirsch Analytics MCP by usefulapi

Use [Pirsch Analytics](https://pirsch.io) from Claude, Cursor, or any MCP client — visitors, pages, referrers, UTM, events, goals, funnels and sessions.
Hosted, no local install: connect with your own Pirsch Analytics credentials.

**Live endpoint:** `https://pirsch.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/pirsch

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pirsch.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pirsch https://pirsch.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pirsch&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpirsch.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pirsch": {
      "url": "https://pirsch.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Pirsch Analytics credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pirsch/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pirsch_list_domains` | read | List domains (dashboards) |
| `pirsch_get_domain` | read | Get domain |
| `pirsch_get_overview` | read | Get overview |
| `pirsch_get_totals` | read | Get total visitors |
| `pirsch_get_visitors_time_series` | read | Get visitors time series |
| `pirsch_get_growth` | read | Get growth rates |
| `pirsch_get_active_visitors` | read | Get active visitors |
| `pirsch_get_time_distribution` | read | Get visitors by time |
| `pirsch_get_duration` | read | Get time spent |
| `pirsch_list_pages` | read | List pages |
| `pirsch_list_hostnames` | read | List hostnames |
| `pirsch_list_referrers` | read | List referrers |
| `pirsch_list_utm` | read | List UTM parameters |
| `pirsch_list_geography` | read | List countries, regions, cities and languages |
| `pirsch_list_devices` | read | List browsers, operating systems and screens |
| `pirsch_get_platforms` | read | Get platform split |
| `pirsch_list_events` | read | List events |
| `pirsch_get_event_breakdown` | read | Get event metadata breakdown |
| `pirsch_list_event_pages` | read | List pages of an event |
| `pirsch_list_goals` | read | List conversion goals |
| `pirsch_list_funnels` | read | List funnels |
| `pirsch_get_funnel` | read | Get funnel statistics |
| `pirsch_list_tags` | read | List tags |
| `pirsch_get_tag_breakdown` | read | Get tag breakdown |
| `pirsch_list_sessions` | read | List sessions |
| `pirsch_get_session` | read | Get session details |
| `pirsch_list_filter_values` | read | List filter values |
| `pirsch_usage_status` | meta | Usage status (free-tier meter) |
| `pirsch_request_feature` | meta | Request a missing feature |
| `pirsch_upgrade` | meta | Upgrade to Pro (unlimited) |
| `pirsch_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `pirsch_upgrade` (it returns a Stripe Checkout link). Cancel any time with `pirsch_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `pirsch_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Pirsch Analytics.
