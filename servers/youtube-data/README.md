# YouTube Data MCP by usefulapi

Use your [YouTube](https://www.youtube.com) account from Claude, Cursor, or any MCP client. Search videos and read videos, channels, playlists, comments and popular videos through the YouTube Data API. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://youtube-data.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://youtube-data.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http youtube-data https://youtube-data.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=youtube-data&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fyoutube-data.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "youtube-data": {
      "url": "https://youtube-data.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your YouTube Data credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/youtube-data/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **YouTube Data API key** (Google Cloud Console → APIs & Services → Credentials, with YouTube Data API v3 enabled). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `youtube_search` | read | Search YouTube |
| `youtube_get_videos` | read | Get videos |
| `youtube_list_popular_videos` | read | List most popular videos |
| `youtube_get_channels` | read | Get channels |
| `youtube_list_playlists` | read | List playlists |
| `youtube_list_playlist_items` | read | List playlist items |
| `youtube_list_comment_threads` | read | List comment threads |
| `youtube_list_comment_replies` | read | List comment replies |
| `youtube_list_video_categories` | read | List video categories |
| `youtube_usage_status` | meta | Usage status (free-tier meter) |
| `youtube_request_feature` | meta | Request a missing feature |
| `youtube_upgrade` | meta | Upgrade to Pro or Pro+ |
| `youtube_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `youtube_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `youtube_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `youtube_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
