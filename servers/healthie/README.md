# Healthie MCP by usefulapi

Query patients, appointments, charting forms, tasks and metrics in your Healthie practice — and create tasks and notes — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Healthie API key.

**Live endpoint:** `https://healthie.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/healthie

## Add to Claude

```json
{
  "mcpServers": {
    "healthie": {
      "url": "https://healthie.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Healthie API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `healthie_current_user` | read | Current user |
| `healthie_get_organization` | read | Get organization |
| `healthie_list_patients` | read | List patients |
| `healthie_get_user` | read | Get user |
| `healthie_list_appointments` | read | List appointments |
| `healthie_get_appointment` | read | Get appointment |
| `healthie_list_appointment_types` | read | List appointment types |
| `healthie_list_forms` | read | List forms |
| `healthie_list_form_answer_groups` | read | List form answer groups |
| `healthie_list_documents` | read | List documents |
| `healthie_list_tasks` | read | List tasks |
| `healthie_list_goals` | read | List goals |
| `healthie_list_metric_entries` | read | List metric entries |
| `healthie_list_conversations` | read | List conversations |
| `healthie_create_task` | **write** | Create task |
| `healthie_create_note` | **write** | Create note |
| `healthie_usage_status` | meta | Usage status (free-tier meter) |
| `healthie_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
