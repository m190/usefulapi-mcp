# Pipedrive MCP by usefulapi

Use your [Pipedrive](https://www.pipedrive.com) account from Claude, Cursor, or any MCP client — read deals, persons, organizations, activities and pipelines, and create or update CRM records. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://pipedrive.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "pipedrive": {
      "url": "https://pipedrive.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Pipedrive API token** (Personal preferences → API), optionally with your company domain. It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pipedrive_list_deals` | read | List deals |
| `pipedrive_get_deal` | read | Get deal |
| `pipedrive_search_deals` | read | Search deals |
| `pipedrive_list_persons` | read | List persons |
| `pipedrive_get_person` | read | Get person |
| `pipedrive_search_persons` | read | Search persons |
| `pipedrive_list_organizations` | read | List organizations |
| `pipedrive_get_organization` | read | Get organization |
| `pipedrive_search_organizations` | read | Search organizations |
| `pipedrive_list_activities` | read | List activities |
| `pipedrive_list_pipelines` | read | List pipelines |
| `pipedrive_list_stages` | read | List stages |
| `pipedrive_search_items` | read | Search items |
| `pipedrive_get_current_user` | read | Get current user |
| `pipedrive_list_notes` | read | List notes |
| `pipedrive_create_deal` | **write** | Create deal |
| `pipedrive_create_person` | **write** | Create person |
| `pipedrive_create_activity` | **write** | Create activity |
| `pipedrive_add_note` | **write** | Add note |
| `pipedrive_usage_status` | meta | Usage status (free-tier meter) |
| `pipedrive_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
