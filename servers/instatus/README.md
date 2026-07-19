# Instatus MCP by usefulapi

Manage [Instatus](https://instatus.com) from Claude, Cursor, or any MCP client — manage status pages — components, incidents and scheduled maintenances, and set live status. Hosted, no local install: connect with your Instatus API token.

**Live endpoint:** `https://instatus.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "instatus": {
      "url": "https://instatus.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Instatus API token** (Instatus → Developers → API).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `instatus_list_pages` | read | List pages |
| `instatus_list_components` | read | List components |
| `instatus_get_component` | read | Get component |
| `instatus_list_incidents` | read | List incidents |
| `instatus_get_incident` | read | Get incident |
| `instatus_list_maintenances` | read | List maintenances |
| `instatus_get_maintenance` | read | Get maintenance |
| `instatus_update_component` | **write** | Update component |
| `instatus_create_incident` | **write** | Create incident |
| `instatus_update_incident` | **write** | Update incident |
| `instatus_delete_incident` | **write** | Delete incident |
| `instatus_create_maintenance` | **write** | Create maintenance |
| `instatus_update_maintenance` | **write** | Update maintenance |
| `instatus_delete_maintenance` | **write** | Delete maintenance |
| `instatus_usage_status` | meta | Usage status (free-tier meter) |
| `instatus_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
