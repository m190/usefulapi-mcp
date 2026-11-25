# Vidyard MCP by usefulapi

Use your [Vidyard](https://www.vidyard.com) account from Claude, Cursor, or any MCP client. Read players, videos, tags and encoding status, and rename players or create tags. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://vidyard.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://vidyard.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http vidyard https://vidyard.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=vidyard&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvidyard.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "vidyard": {
      "url": "https://vidyard.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Vidyard credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/vidyard/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Vidyard API token** (Vidyard → Admin → API Tokens). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `vidyard_list_accounts` | read | List accounts |
| `vidyard_list_organizations` | read | List organizations |
| `vidyard_get_organization` | read | Get an organization |
| `vidyard_list_roles` | read | List roles |
| `vidyard_list_users` | read | List users |
| `vidyard_list_hubs` | read | List hubs |
| `vidyard_list_players` | read | List players |
| `vidyard_search_players` | read | Search players |
| `vidyard_get_player` | read | Get a player |
| `vidyard_get_player_by_uuid` | read | Get a player by UUID |
| `vidyard_get_player_tags` | read | Get a player's tags |
| `vidyard_list_videos` | read | List videos |
| `vidyard_get_video` | read | Get a video |
| `vidyard_get_video_status` | read | Get a video's length and status |
| `vidyard_get_video_encoding_status` | read | Get a video's encoding status |
| `vidyard_list_tags` | read | List tags |
| `vidyard_list_tag_names` | read | List tag names |
| `vidyard_search_events` | read | Search events |
| `vidyard_update_player` | **write** | Update a player |
| `vidyard_create_tag` | **write** | Create a tag |
| `vidyard_usage_status` | meta | Usage status (free-tier meter) |
| `vidyard_request_feature` | meta | Request a missing feature |
| `vidyard_upgrade` | meta | Upgrade to Pro or Pro+ |
| `vidyard_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `vidyard_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `vidyard_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `vidyard_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
