# Stream MCP by usefulapi

Bring your Stream Chat app into your AI workflow — query channels, search messages, and post replies from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Stream API key + secret.

**Live endpoint:** `https://stream.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/stream

## Add to Claude

```json
{
  "mcpServers": {
    "stream": {
      "url": "https://stream.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Stream API key and secret. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `stream_get_app` | read | Get app |
| `stream_query_channels` | read | Query channels |
| `stream_get_channel` | read | Get channel |
| `stream_search_messages` | read | Search messages |
| `stream_get_message` | read | Get message |
| `stream_get_replies` | read | Get replies |
| `stream_get_reactions` | read | Get reactions |
| `stream_query_members` | read | Query members |
| `stream_query_users` | read | Query users |
| `stream_query_threads` | read | Query threads |
| `stream_get_unread_counts` | read | Get unread counts |
| `stream_send_message` | **write** | Send message |
| `stream_send_reaction` | **write** | Send reaction |
| `stream_usage_status` | meta | Usage status (free-tier meter) |
| `stream_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
