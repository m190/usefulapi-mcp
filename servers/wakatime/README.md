# WakaTime MCP by usefulapi

Use [WakaTime](https://wakatime.com) from Claude, Cursor, or any MCP client — coding-time summaries and stats, durations and heartbeats, projects, machines, commits, goals, organization dashboards and leaderboards. Read-only.
Hosted, no local install: connect with your own WakaTime credentials.

**Live endpoint:** `https://wakatime.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/wakatime

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://wakatime.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http wakatime https://wakatime.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=wakatime&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwakatime.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "wakatime": {
      "url": "https://wakatime.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your WakaTime credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/wakatime/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wakatime_get_user` | read | Get current user |
| `wakatime_get_summaries` | read | Get daily summaries |
| `wakatime_get_stats` | read | Get coding stats |
| `wakatime_get_all_time_since_today` | read | Get all-time total |
| `wakatime_get_status_bar_today` | read | Get today's coding time |
| `wakatime_get_insight` | read | Get insight |
| `wakatime_get_durations` | read | Get durations for a day |
| `wakatime_get_heartbeats` | read | Get heartbeats for a day |
| `wakatime_list_projects` | read | List projects |
| `wakatime_list_machines` | read | List machines |
| `wakatime_list_user_agents` | read | List editors and plugins used |
| `wakatime_list_commits` | read | List project commits |
| `wakatime_get_commit` | read | Get project commit |
| `wakatime_list_goals` | read | List goals |
| `wakatime_get_goal` | read | Get goal |
| `wakatime_list_orgs` | read | List organizations |
| `wakatime_list_org_dashboards` | read | List organization dashboards |
| `wakatime_list_org_dashboard_members` | read | List dashboard members |
| `wakatime_get_org_dashboard_summaries` | read | Get dashboard summaries for a day |
| `wakatime_get_org_member_summaries` | read | Get dashboard member summaries |
| `wakatime_list_private_leaderboards` | read | List private leaderboards |
| `wakatime_get_private_leaderboard` | read | Get private leaderboard |
| `wakatime_get_public_leaders` | read | Get public leaderboard |
| `wakatime_usage_status` | meta | Usage status (free-tier meter) |
| `wakatime_request_feature` | meta | Request a missing feature |
| `wakatime_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `wakatime_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `wakatime_upgrade` (it returns a Stripe Checkout link). Cancel any time with `wakatime_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `wakatime_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by WakaTime.
