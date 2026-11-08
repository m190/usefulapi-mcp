# AbleSign MCP by usefulapi

Use your [AbleSign](https://www.ablesign.tv) account from Claude, Cursor, or any MCP client. Read screens, playlists, media and proof of play, and add items to a screen playlist. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ablesign.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ablesign.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ablesign https://ablesign.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ablesign&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fablesign.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ablesign": {
      "url": "https://ablesign.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your AbleSign credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ablesign/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **AbleSign API key** (AbleSign CMS, Account > API Keys) and, optionally, a **workspace id** (leave it empty for the default workspace). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ablesign_list_workspaces` | read | List workspaces |
| `ablesign_list_workspace_users` | read | List workspace users |
| `ablesign_list_screens` | read | List screens |
| `ablesign_get_screen` | read | Get screen details |
| `ablesign_get_screen_playlist` | read | Get screen playlist |
| `ablesign_list_screen_groups` | read | List screen groups |
| `ablesign_get_screen_group` | read | Get screen group |
| `ablesign_list_screen_group_members` | read | List screen group members |
| `ablesign_list_folders` | read | List folders |
| `ablesign_list_media_files` | read | List media files |
| `ablesign_get_media_file` | read | Get media file |
| `ablesign_list_web_apps` | read | List web apps |
| `ablesign_list_proof_of_play_records` | read | List proof of play records |
| `ablesign_summarize_plays_by_asset` | read | Summarize plays by asset |
| `ablesign_summarize_asset_plays_by_screen` | read | Summarize one asset's plays by screen |
| `ablesign_create_folder` | **write** | Create folder |
| `ablesign_rename_folder` | **write** | Rename folder |
| `ablesign_add_screen_playlist_items` | **write** | Add items to screen playlist |
| `ablesign_usage_status` | meta | Usage status (free-tier meter) |
| `ablesign_request_feature` | meta | Request a missing feature |
| `ablesign_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ablesign_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ablesign_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ablesign_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ablesign_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
