# Copper MCP by usefulapi

Read and write Copper CRM people, companies, opportunities and activities. Hosted, no local install.

**Live endpoint:** `https://copper.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "copper": {
      "url": "https://copper.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Copper credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `copper_get_account` | read | Get account |
| `copper_list_users` | read | List users |
| `copper_search_people` | read | Search people |
| `copper_get_person` | read | Get person |
| `copper_search_companies` | read | Search companies |
| `copper_get_company` | read | Get company |
| `copper_search_opportunities` | read | Search opportunities |
| `copper_get_opportunity` | read | Get opportunity |
| `copper_search_leads` | read | Search leads |
| `copper_get_lead` | read | Get lead |
| `copper_search_tasks` | read | Search tasks |
| `copper_get_task` | read | Get task |
| `copper_list_activities` | read | List activities |
| `copper_list_activity_types` | read | List activity types |
| `copper_list_pipelines` | read | List pipelines |
| `copper_create_person` | **write** | Create person |
| `copper_update_person` | **write** | Update person |
| `copper_create_company` | **write** | Create company |
| `copper_create_opportunity` | **write** | Create opportunity |
| `copper_create_lead` | **write** | Create lead |
| `copper_create_task` | **write** | Create task |
| `copper_log_activity` | **write** | Log activity |
| `copper_usage_status` | meta | Usage status (free-tier meter) |
| `copper_upgrade` | meta | Upgrade to Pro (unlimited) |
| `copper_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `copper_upgrade` (it returns a Stripe Checkout link). Cancel any time with `copper_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `copper_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
