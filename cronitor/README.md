# Cronitor MCP by usefulapi

Manage Cronitor monitors and send telemetry pings from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Cronitor API key.

**Live endpoint:** `https://cronitor.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/cronitor

## Add to Claude

```json
{
  "mcpServers": {
    "cronitor": {
      "url": "https://cronitor.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Cronitor API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cronitor_list_monitors` | read | List monitors |
| `cronitor_get_monitor` | read | Get monitor |
| `cronitor_create_monitor` | **write** | Create monitor |
| `cronitor_update_monitor` | **write** | Update monitor |
| `cronitor_delete_monitor` | **write** | Delete monitor |
| `cronitor_ping_monitor` | **write** | Ping monitor (telemetry) |
| `cronitor_usage_status` | meta | Usage status (free-tier meter) |
| `cronitor_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
