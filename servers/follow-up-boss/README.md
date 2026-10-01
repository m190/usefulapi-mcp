# Follow Up Boss MCP by usefulapi

Use [Follow Up Boss](https://www.followupboss.com) from Claude, Cursor, or any MCP client — search people and leads, review calls, texts, tasks, appointments and deals, and add notes, tasks and updates.
Hosted, no local install: connect with your own Follow Up Boss credentials.

**Live endpoint:** `https://follow-up-boss.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/follow-up-boss

## Add to Claude

```json
{
  "mcpServers": {
    "follow-up-boss": {
      "url": "https://follow-up-boss.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Follow Up Boss API key** (Admin → API), which has exactly the permissions of the user it belongs to.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fub_get_identity` | read | Get identity |
| `fub_search_people` | read | Search people (contacts/leads) |
| `fub_get_person` | read | Get one person |
| `fub_check_duplicate_person` | read | Check whether a person exists |
| `fub_list_events` | read | List lead events |
| `fub_list_calls` | read | List calls |
| `fub_list_text_messages` | read | List text messages |
| `fub_list_tasks` | read | List tasks |
| `fub_list_appointments` | read | List appointments |
| `fub_list_deals` | read | List deals |
| `fub_list_pipelines` | read | List deal pipelines |
| `fub_list_stages` | read | List contact stages |
| `fub_list_users` | read | List users (agents) |
| `fub_list_custom_fields` | read | List custom fields |
| `fub_send_lead_event` | **write** | Send in a lead / lead event |
| `fub_update_person` | **write** | Update a person |
| `fub_add_note` | **write** | Add a note |
| `fub_log_call` | **write** | Log a call |
| `fub_create_task` | **write** | Create a task |
| `fub_update_task` | **write** | Update a task |
| `fub_create_deal` | **write** | Create a deal |
| `fub_update_deal` | **write** | Update a deal |
| `fub_usage_status` | meta | Usage status (free-tier meter) |
| `fub_upgrade` | meta | Upgrade to Pro (unlimited) |
| `fub_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `fub_upgrade` (it returns a Stripe Checkout link). Cancel any time with `fub_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `fub_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Follow Up Boss.
