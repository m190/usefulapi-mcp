# Insightly MCP by usefulapi

Use [Insightly](https://www.insightly.com) from Claude, Cursor, or any MCP client — search and read contacts, organisations, leads, opportunities, projects and tasks, and create or update records and notes.
Hosted, no local install: connect with your own Insightly credentials.

**Live endpoint:** `https://insightly.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/insightly

## Add to Claude

```json
{
  "mcpServers": {
    "insightly": {
      "url": "https://insightly.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Insightly API key and pod** (User Settings → API).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `insightly_get_current_user` | read | Get the current user |
| `insightly_list_users` | read | List users |
| `insightly_list_records` | read | List or search records |
| `insightly_get_record` | read | Get one record |
| `insightly_list_record_activity` | read | List a record's notes, tasks or events |
| `insightly_search_by_tag` | read | Find records by tag |
| `insightly_list_pipelines` | read | List pipelines |
| `insightly_list_pipeline_stages` | read | List pipeline stages |
| `insightly_list_lead_statuses` | read | List lead statuses |
| `insightly_list_lead_sources` | read | List lead sources |
| `insightly_create_contact` | **write** | Create a contact |
| `insightly_update_contact` | **write** | Update a contact |
| `insightly_create_organisation` | **write** | Create an organisation |
| `insightly_update_organisation` | **write** | Update an organisation |
| `insightly_create_lead` | **write** | Create a lead |
| `insightly_update_lead` | **write** | Update a lead |
| `insightly_create_opportunity` | **write** | Create an opportunity |
| `insightly_update_opportunity` | **write** | Update an opportunity |
| `insightly_create_task` | **write** | Create a task |
| `insightly_update_task` | **write** | Update a task |
| `insightly_add_note` | **write** | Add a note to a record |
| `insightly_usage_status` | meta | Usage status (free-tier meter) |
| `insightly_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by Insightly.
