# LeagueApps MCP by usefulapi

Use your [LeagueApps](https://leagueapps.com) account from Claude, Cursor, or any MCP client. It can read the public data of your site: programs, game schedules, teams, locations, sports, announcements and blog posts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://leagueapps.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://leagueapps.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http leagueapps https://leagueapps.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=leagueapps&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fleagueapps.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "leagueapps": {
      "url": "https://leagueapps.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your LeagueApps credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/leagueapps/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **LeagueApps site id** (the number after sites/ in your console URL) and a **Public API key** (console: Connect → API Settings → Generate Public API Key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `leagueapps_get_site` | read | Get site info |
| `leagueapps_list_programs` | read | List programs |
| `leagueapps_list_current_programs` | read | List current programs |
| `leagueapps_get_program` | read | Get a program |
| `leagueapps_get_program_schedule` | read | Get a program schedule |
| `leagueapps_list_program_teams` | read | List program teams |
| `leagueapps_list_locations` | read | List locations |
| `leagueapps_get_location` | read | Get a location |
| `leagueapps_list_sports` | read | List sports |
| `leagueapps_list_announcements` | read | List announcements |
| `leagueapps_list_blog_posts` | read | List blog posts |
| `leagueapps_usage_status` | meta | Usage status (free-tier meter) |
| `leagueapps_request_feature` | meta | Request a missing feature |
| `leagueapps_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `leagueapps_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `leagueapps_upgrade` (it returns a Stripe Checkout link). Cancel any time with `leagueapps_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `leagueapps_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
