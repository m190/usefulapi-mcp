# api.video MCP by usefulapi

Manage videos, live streams, and analytics on api.video from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your api.video API key.

**Live endpoint:** `https://apivideo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/apivideo

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://apivideo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http apivideo https://apivideo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=apivideo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fapivideo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "apivideo": {
      "url": "https://apivideo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your api.video credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/apivideo/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your api.video API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `apivideo_list_videos` | read | List videos |
| `apivideo_get_video` | read | Get video |
| `apivideo_get_video_status` | read | Get video status |
| `apivideo_list_live_streams` | read | List live streams |
| `apivideo_get_live_stream` | read | Get live stream |
| `apivideo_list_captions` | read | List captions |
| `apivideo_list_chapters` | read | List chapters |
| `apivideo_list_players` | read | List players |
| `apivideo_list_webhooks` | read | List webhooks |
| `apivideo_get_video_analytics` | read | Video analytics (plays) |
| `apivideo_get_live_stream_analytics` | read | Live stream analytics (plays) |
| `apivideo_create_video` | **write** | Create video (write) |
| `apivideo_update_video` | **write** | Update video (write) |
| `apivideo_delete_video` | **write** | Delete video (write) |
| `apivideo_create_live_stream` | **write** | Create live stream (write) |
| `apivideo_usage_status` | meta | Usage status (free-tier meter) |
| `apivideo_request_feature` | meta | Request a missing feature |
| `apivideo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `apivideo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `apivideo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `apivideo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `apivideo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
