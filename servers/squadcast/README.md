# Squadcast MCP by usefulapi

Manage [Squadcast](https://www.squadcast.com) on-call from Claude, Cursor, or any MCP client — read
incidents, services, teams, on-call schedules and escalation policies, and acknowledge, resolve or
note incidents. Hosted, no local install: connect with your Squadcast API refresh token.

**Live endpoint:** `https://squadcast.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "squadcast": {
      "url": "https://squadcast.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Squadcast API Refresh Token** (Squadcast → generate an API
Refresh Token). It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `squadcast_list_incidents` | read | List incidents |
| `squadcast_get_incident` | read | Get incident |
| `squadcast_get_incident_events` | read | Get incident events |
| `squadcast_list_incident_notes` | read | List incident notes |
| `squadcast_list_services` | read | List services |
| `squadcast_get_service` | read | Get service |
| `squadcast_list_users` | read | List users |
| `squadcast_get_user` | read | Get user |
| `squadcast_list_teams` | read | List teams |
| `squadcast_get_team` | read | Get team |
| `squadcast_list_squads` | read | List squads |
| `squadcast_list_schedules` | read | List schedules (on-call) |
| `squadcast_list_escalation_policies` | read | List escalation policies |
| `squadcast_acknowledge_incident` | **write** | Acknowledge incident |
| `squadcast_resolve_incident` | **write** | Resolve incident |
| `squadcast_add_incident_note` | **write** | Add incident note |
| `squadcast_usage_status` | meta | Usage status (free-tier meter) |
| `squadcast_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
