# Ausha MCP by usefulapi

Use your Ausha account from Claude, Cursor, or any MCP client. Read shows, seasons, episodes and campaigns, and manage playlists. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ausha.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ausha.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ausha https://ausha.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ausha&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fausha.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ausha": {
      "url": "https://ausha.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Ausha credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ausha/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an Ausha **public API token** (Ausha manager → My account → Public API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ausha_list_shows` | read | List shows |
| `ausha_get_show` | read | Get a show |
| `ausha_get_show_by_public_id` | read | Get a show by public id |
| `ausha_list_seasons` | read | List seasons of a show |
| `ausha_get_season` | read | Get a season |
| `ausha_list_campaigns` | read | List campaigns of a show |
| `ausha_get_campaign` | read | Get a campaign |
| `ausha_list_podcasts` | read | List podcasts of a show |
| `ausha_get_podcast` | read | Get an episode |
| `ausha_get_podcast_by_public_id` | read | Get an episode by public id |
| `ausha_list_playlists` | read | List playlists of a show |
| `ausha_get_playlist` | read | Get a playlist |
| `ausha_create_playlist` | **write** | Create a playlist |
| `ausha_update_playlist` | **write** | Update a playlist |
| `ausha_add_podcast_to_playlist` | **write** | Add an episode to a playlist |
| `ausha_move_podcast_in_playlist` | **write** | Move an episode in a playlist |
| `ausha_remove_podcast_from_playlist` | **write** | Remove an episode from a playlist |
| `ausha_usage_status` | meta | Usage status (free-tier meter) |
| `ausha_request_feature` | meta | Request a missing feature |
| `ausha_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ausha_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ausha_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ausha_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ausha_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
