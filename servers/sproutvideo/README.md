# SproutVideo MCP by usefulapi

Use your [SproutVideo](https://sproutvideo.com) account from Claude, Cursor, or any MCP client. Read videos, playlists and folders, and update videos, create tags, playlists and folders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sproutvideo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sproutvideo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sproutvideo https://sproutvideo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sproutvideo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsproutvideo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sproutvideo": {
      "url": "https://sproutvideo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SproutVideo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sproutvideo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **SproutVideo API key** (Account → API in SproutVideo). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sproutvideo_get_account` | read | Get account |
| `sproutvideo_list_videos` | read | List videos |
| `sproutvideo_get_video` | read | Get a video |
| `sproutvideo_list_subtitles` | read | List subtitles |
| `sproutvideo_list_calls_to_action` | read | List calls to action |
| `sproutvideo_list_tags` | read | List tags |
| `sproutvideo_get_tag` | read | Get a tag |
| `sproutvideo_create_tag` | **write** | Create a tag |
| `sproutvideo_update_tag` | **write** | Rename a tag |
| `sproutvideo_list_playlists` | read | List playlists |
| `sproutvideo_get_playlist` | read | Get a playlist |
| `sproutvideo_create_playlist` | **write** | Create a playlist |
| `sproutvideo_list_folders` | read | List folders |
| `sproutvideo_get_folder` | read | Get a folder |
| `sproutvideo_create_folder` | **write** | Create a folder |
| `sproutvideo_update_folder` | **write** | Rename or move a folder |
| `sproutvideo_list_live_streams` | read | List live streams |
| `sproutvideo_update_video` | **write** | Update a video |
| `sproutvideo_usage_status` | meta | Usage status (free-tier meter) |
| `sproutvideo_request_feature` | meta | Request a missing feature |
| `sproutvideo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sproutvideo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sproutvideo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sproutvideo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sproutvideo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
