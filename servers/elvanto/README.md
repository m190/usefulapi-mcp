# Elvanto MCP by usefulapi

Use [Elvanto](https://www.elvanto.com) from Claude, Cursor, or any MCP client — look up people, groups, service rosters, songs, follow-up flows and giving records.
Hosted, no local install: connect with your own Elvanto credentials.

**Live endpoint:** `https://elvanto.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/elvanto

## Add to Claude

```json
{
  "mcpServers": {
    "elvanto": {
      "url": "https://elvanto.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Elvanto API key** (Settings → Account Settings → API, administrators only).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `elvanto_list_people` | read | List people |
| `elvanto_search_people` | read | Search people |
| `elvanto_get_person` | read | Get one person |
| `elvanto_list_people_categories` | read | List people categories |
| `elvanto_list_custom_fields` | read | List custom person fields |
| `elvanto_list_groups` | read | List groups |
| `elvanto_get_group` | read | Get one group |
| `elvanto_list_services` | read | List services |
| `elvanto_get_service` | read | Get one service |
| `elvanto_list_songs` | read | List songs |
| `elvanto_list_song_arrangements` | read | List a song's arrangements |
| `elvanto_list_calendars` | read | List calendars |
| `elvanto_list_calendar_events` | read | List calendar events |
| `elvanto_list_people_flows` | read | List people flows |
| `elvanto_list_people_flow_steps` | read | List a people flow's steps |
| `elvanto_list_people_flow_step_people` | read | List people in a flow step |
| `elvanto_list_financial_categories` | read | List financial categories |
| `elvanto_list_transactions` | read | List giving transactions |
| `elvanto_create_person` | **write** | Create a person |
| `elvanto_update_person` | **write** | Update a person |
| `elvanto_add_person_to_group` | **write** | Add a person to a group |
| `elvanto_add_person_to_flow_step` | **write** | Add a person to a people-flow step |
| `elvanto_create_calendar_event` | **write** | Create a calendar event |
| `elvanto_usage_status` | meta | Usage status (free-tier meter) |
| `elvanto_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by Elvanto.
