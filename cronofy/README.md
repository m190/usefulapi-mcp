# Cronofy MCP by usefulapi

Read your calendars, events and free/busy, and create or delete events, from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Cronofy access token.

**Live endpoint:** `https://cronofy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/cronofy

## Add to Claude

```json
{
  "mcpServers": {
    "cronofy": {
      "url": "https://cronofy.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Cronofy access token. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cronofy_get_account` | read | Get account |
| `cronofy_get_userinfo` | read | Get userinfo |
| `cronofy_list_calendars` | read | List calendars |
| `cronofy_list_profiles` | read | List profiles |
| `cronofy_read_events` | read | Read events |
| `cronofy_get_free_busy` | read | Get free busy |
| `cronofy_upsert_event` | **write** | Upsert event |
| `cronofy_delete_event` | **write** | Delete event |
| `cronofy_usage_status` | meta | Usage status (free-tier meter) |
| `cronofy_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
