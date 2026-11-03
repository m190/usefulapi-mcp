# Simplecast MCP by usefulapi

Use your [Simplecast](https://simplecast.com) account from Claude, Cursor, or any MCP client. Read podcasts, episodes, seasons, distribution channels and download and listener analytics. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://simplecast.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://simplecast.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http simplecast https://simplecast.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=simplecast&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsimplecast.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "simplecast": {
      "url": "https://simplecast.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Simplecast credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/simplecast/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Simplecast API token** (Simplecast → Private Apps page). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `simplecast_get_current_user` | read | Get the current user |
| `simplecast_list_podcasts` | read | List podcasts |
| `simplecast_get_podcast` | read | Get a podcast |
| `simplecast_list_episodes` | read | List episodes of a podcast |
| `simplecast_get_episode` | read | Get an episode |
| `simplecast_get_episode_markers` | read | List ad markers of an episode |
| `simplecast_list_seasons` | read | List seasons of a podcast |
| `simplecast_list_season_episodes` | read | List episodes of a season |
| `simplecast_list_distribution_channels` | read | List distribution channels of a podcast |
| `simplecast_get_downloads` | read | Get download analytics |
| `simplecast_get_listeners` | read | Get unique listener analytics |
| `simplecast_get_episode_analytics` | read | Get analytics grouped by episode |
| `simplecast_get_top_episodes` | read | Get the top 10 episodes |
| `simplecast_get_location_analytics` | read | Get download analytics by location |
| `simplecast_get_technology_analytics` | read | Get download analytics by technology |
| `simplecast_get_time_of_week` | read | Get downloads by time of week |
| `simplecast_usage_status` | meta | Usage status (free-tier meter) |
| `simplecast_request_feature` | meta | Request a missing feature |
| `simplecast_upgrade` | meta | Upgrade to Pro or Pro+ |
| `simplecast_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `simplecast_upgrade` (it returns a Stripe Checkout link). Cancel any time with `simplecast_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `simplecast_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
