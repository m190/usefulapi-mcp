# Better Stack MCP by usefulapi

Manage [Better Stack](https://betterstack.com) Uptime from Claude, Cursor, or any MCP client — read
monitors, incidents, heartbeats, on-call schedules and status pages, and acknowledge/resolve
incidents. Hosted, no local install: connect with your Better Stack API token.

**Live endpoint:** `https://betterstack.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "betterstack": {
      "url": "https://betterstack.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Better Stack API token** (Better Stack → Settings → API tokens).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `list_monitors` | read | List monitors |
| `get_monitor` | read | Get a monitor |
| `list_incidents` | read | List incidents |
| `get_incident` | read | Get an incident |
| `list_heartbeats` | read | List heartbeats |
| `list_on_call` | read | List on-call schedules |
| `list_status_pages` | read | List status pages |
| `acknowledge_incident` | read | Acknowledge an incident |
| `resolve_incident` | read | Resolve an incident |
| `betterstack_usage_status` | meta | Usage status (free-tier meter) |
| `betterstack_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
