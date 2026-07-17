# Ably MCP by usefulapi

Query Ably realtime channels and manage your apps from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Ably API key.

**Live endpoint:** `https://ably.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/ably

## Add to Claude

```json
{
  "mcpServers": {
    "ably": {
      "url": "https://ably.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Ably API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ably_get_channel_history` | read | Get channel history |
| `ably_get_presence` | read | Get presence |
| `ably_get_presence_history` | read | Get presence history |
| `ably_get_channel_details` | read | Get channel details |
| `ably_list_channels` | read | List channels |
| `ably_get_stats` | read | Get stats |
| `ably_get_service_time` | read | Get service time |
| `ably_whoami` | read | Whoami |
| `ably_list_apps` | read | List apps |
| `ably_list_keys` | read | List keys |
| `ably_list_namespaces` | read | List namespaces |
| `ably_list_queues` | read | List queues |
| `ably_list_rules` | read | List rules |
| `ably_get_account_stats` | read | Get account stats |
| `ably_publish_message` | **write** | Publish message |
| `ably_usage_status` | meta | Usage status (free-tier meter) |
| `ably_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
