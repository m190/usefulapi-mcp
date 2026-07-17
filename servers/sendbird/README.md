# Sendbird MCP by usefulapi

Read and manage your Sendbird chat — users, channels, members, and messages — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Sendbird App ID + API token.

**Live endpoint:** `https://sendbird.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/sendbird

## Add to Claude

```json
{
  "mcpServers": {
    "sendbird": {
      "url": "https://sendbird.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Sendbird App ID and API token. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sendbird_list_users` | read | List users |
| `sendbird_get_user` | read | Get user |
| `sendbird_list_group_channels` | read | List group channels |
| `sendbird_get_group_channel` | read | Get group channel |
| `sendbird_list_group_channel_members` | read | List group channel members |
| `sendbird_list_group_channels_by_user` | read | List group channels by user |
| `sendbird_list_open_channels` | read | List open channels |
| `sendbird_get_open_channel` | read | Get open channel |
| `sendbird_list_messages` | read | List messages |
| `sendbird_request` | read | Request |
| `sendbird_send_message` | **write** | Send message |
| `sendbird_create_user` | **write** | Create user |
| `sendbird_update_user` | **write** | Update user |
| `sendbird_create_group_channel` | **write** | Create group channel |
| `sendbird_usage_status` | meta | Usage status (free-tier meter) |
| `sendbird_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
