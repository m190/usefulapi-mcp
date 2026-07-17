# api.video MCP by usefulapi

Manage videos, live streams, and analytics on api.video from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your api.video API key.

**Live endpoint:** `https://apivideo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/apivideo

## Add to Claude

```json
{
  "mcpServers": {
    "apivideo": {
      "url": "https://apivideo.usefulapi.io/mcp"
    }
  }
}
```

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
| `apivideo_get_video_analytics` | read | Get video analytics |
| `apivideo_get_live_stream_analytics` | read | Get live stream analytics |
| `apivideo_create_video` | **write** | Create video |
| `apivideo_update_video` | **write** | Update video |
| `apivideo_delete_video` | **write** | Delete video |
| `apivideo_create_live_stream` | **write** | Create live stream |
| `apivideo_usage_status` | meta | Usage status (free-tier meter) |
| `apivideo_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
