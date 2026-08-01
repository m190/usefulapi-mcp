# Twenty MCP by usefulapi

Use your [Twenty](https://twenty.com) account from Claude, Cursor, or any MCP client — read people, companies, opportunities, notes and tasks, and create or update CRM records. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://twenty.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "twenty": {
      "url": "https://twenty.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Twenty API key** (Settings → APIs & Webhooks). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `twenty_list_metadata_objects` | read | List metadata objects |
| `twenty_list_people` | read | List people |
| `twenty_get_person` | read | Get person |
| `twenty_list_companies` | read | List companies |
| `twenty_get_company` | read | Get company |
| `twenty_list_opportunities` | read | List opportunities |
| `twenty_get_opportunity` | read | Get opportunity |
| `twenty_list_notes` | read | List notes |
| `twenty_get_note` | read | Get note |
| `twenty_list_tasks` | read | List tasks |
| `twenty_get_task` | read | Get task |
| `twenty_create_person` | **write** | Create person |
| `twenty_update_person` | **write** | Update person |
| `twenty_create_company` | **write** | Create company |
| `twenty_update_company` | **write** | Update company |
| `twenty_create_opportunity` | **write** | Create opportunity |
| `twenty_update_opportunity` | **write** | Update opportunity |
| `twenty_create_note` | **write** | Create note |
| `twenty_create_task` | **write** | Create task |
| `twenty_update_task` | **write** | Update task |
| `twenty_usage_status` | meta | Usage status (free-tier meter) |
| `twenty_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
