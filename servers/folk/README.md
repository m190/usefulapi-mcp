# Folk MCP by usefulapi

Read and write Folk CRM people, companies, groups and notes. Hosted, no local install.

**Live endpoint:** `https://folk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "folk": {
      "url": "https://folk.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Folk credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `folk_get_current_user` | read | Get current user |
| `folk_list_users` | read | List users |
| `folk_list_people` | read | List people |
| `folk_get_person` | read | Get person |
| `folk_list_companies` | read | List companies |
| `folk_get_company` | read | Get company |
| `folk_list_groups` | read | List groups |
| `folk_list_notes` | read | List notes |
| `folk_get_note` | read | Get note |
| `folk_create_person` | **write** | Create person |
| `folk_update_person` | **write** | Update person |
| `folk_create_company` | **write** | Create company |
| `folk_update_company` | **write** | Update company |
| `folk_create_note` | **write** | Create note |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
