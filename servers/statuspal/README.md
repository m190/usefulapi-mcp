# StatusPal MCP by usefulapi

Manage [StatusPal](https://statuspal.io) status pages from Claude, Cursor, or any MCP client — read the
status-page summary, services, incidents and metrics, and create, update, post updates to, or delete
incidents. Hosted, no local install: connect with your StatusPal API key.

**Live endpoint:** `https://statuspal.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "statuspal": {
      "url": "https://statuspal.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **StatusPal API key** (StatusPal dashboard → API keys).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `statuspal_get_summary` | read | Get status page summary |
| `statuspal_get_status` | read | Get overall status |
| `statuspal_list_services` | read | List services |
| `statuspal_get_service_status` | read | Get service status |
| `statuspal_list_incidents` | read | List incidents |
| `statuspal_get_incident` | read | Get incident |
| `statuspal_list_metrics` | read | List metrics |
| `statuspal_create_incident` | **write** | Create incident |
| `statuspal_update_incident` | **write** | Update incident |
| `statuspal_create_incident_update` | **write** | Post incident update |
| `statuspal_delete_incident` | **write** | Delete incident |
| `statuspal_usage_status` | meta | Usage status (free-tier meter) |
| `statuspal_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
