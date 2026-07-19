# Spike.sh MCP by usefulapi

Manage [Spike.sh](https://spike.sh) incident response from Claude, Cursor, or any MCP client — read
incidents, on-call schedules, escalation policies and services, and acknowledge, resolve, or set the
priority of incidents. Hosted, no local install: connect with your Spike.sh API key.

**Live endpoint:** `https://spikesh.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "spikesh": {
      "url": "https://spikesh.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Spike.sh API key** (Spike.sh → Settings → API).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `spike_list_teams` | read | List teams |
| `spike_list_incidents` | read | List incidents |
| `spike_list_triggered_incidents` | read | List triggered incidents |
| `spike_list_acknowledged_incidents` | read | List acknowledged incidents |
| `spike_get_incident` | read | Get incident |
| `spike_get_incident_activity_log` | read | Get incident activity log |
| `spike_list_on_calls` | read | List on-call schedules |
| `spike_get_on_call` | read | Get on-call schedule |
| `spike_who_is_on_call_next` | read | Who is on call next |
| `spike_list_escalations` | read | List escalation policies |
| `spike_get_escalation` | read | Get escalation policy |
| `spike_list_services` | read | List services |
| `spike_get_service` | read | Get service |
| `spike_acknowledge_incidents` | **write** | Acknowledge incidents |
| `spike_resolve_incidents` | **write** | Resolve incidents |
| `spike_set_incident_priority` | **write** | Set incident priority |
| `spike_usage_status` | meta | Usage status (free-tier meter) |
| `spike_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
