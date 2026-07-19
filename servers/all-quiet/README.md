# All Quiet MCP by usefulapi

Manage [All Quiet](https://allquiet.app) incident management and on-call from Claude, Cursor, or any MCP
client — list, create and update incidents, see who's on call, run on-call reports, and set on-call
overrides. Hosted, no local install: connect with your All Quiet API key.

**Live endpoint:** `https://all-quiet.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "all-quiet": {
      "url": "https://all-quiet.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **All Quiet API key** (All Quiet → Settings → API keys). It's validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `allquiet_list_incidents` | read | List incidents |
| `allquiet_get_incident` | read | Get incident |
| `allquiet_get_incident_markdown` | read | Get incident as markdown |
| `allquiet_who_is_on_call` | read | Who is on call |
| `allquiet_on_call_report` | read | On-call report |
| `allquiet_list_teams` | read | List teams |
| `allquiet_list_users` | read | List users |
| `allquiet_list_on_call_overrides` | read | List on-call overrides |
| `allquiet_create_incident` | **write** | Create incident |
| `allquiet_update_incident` | **write** | Update incident |
| `allquiet_create_on_call_override` | **write** | Create on-call override |
| `allquiet_usage_status` | meta | Usage status (free-tier meter) |
| `allquiet_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
