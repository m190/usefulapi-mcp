# CentralStationCRM MCP by usefulapi

Read CentralStationCRM people, companies, deals, tasks; create and update people, companies, deals.

**Live endpoint:** `https://centralstationcrm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/centralstationcrm

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://centralstationcrm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http centralstationcrm https://centralstationcrm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=centralstationcrm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcentralstationcrm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "centralstationcrm": {
      "url": "https://centralstationcrm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CentralStationCRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/centralstationcrm/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your CentralStationCRM **API key** (CentralStationCRM → My settings → API key).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `centralstationcrm_get_current_user` | read | Get current user |
| `centralstationcrm_list_users` | read | List users |
| `centralstationcrm_list_people` | read | List people |
| `centralstationcrm_search_people` | read | Search people |
| `centralstationcrm_get_person` | read | Get person |
| `centralstationcrm_list_companies` | read | List companies |
| `centralstationcrm_search_companies` | read | Search companies |
| `centralstationcrm_get_company` | read | Get company |
| `centralstationcrm_list_deals` | read | List deals |
| `centralstationcrm_search_deals` | read | Search deals |
| `centralstationcrm_get_deal` | read | Get deal |
| `centralstationcrm_get_deal_stats` | read | Get deal statistics |
| `centralstationcrm_list_deal_types` | read | List deal pipelines |
| `centralstationcrm_list_projects` | read | List projects |
| `centralstationcrm_search_projects` | read | Search projects |
| `centralstationcrm_get_project` | read | Get project |
| `centralstationcrm_list_tasks` | read | List tasks |
| `centralstationcrm_get_task` | read | Get task |
| `centralstationcrm_list_notes` | read | List notes and activity log entries |
| `centralstationcrm_get_note` | read | Get note |
| `centralstationcrm_list_calendar_events` | read | List calendar events |
| `centralstationcrm_search_all` | read | Search everything |
| `centralstationcrm_list_tags` | read | List tags |
| `centralstationcrm_count_records` | read | Count records |
| `centralstationcrm_create_person` | **write** | Create person |
| `centralstationcrm_update_person` | **write** | Update person |
| `centralstationcrm_create_company` | **write** | Create company |
| `centralstationcrm_update_company` | **write** | Update company |
| `centralstationcrm_create_deal` | **write** | Create deal |
| `centralstationcrm_update_deal` | **write** | Update deal |
| `centralstationcrm_create_task` | **write** | Create task |
| `centralstationcrm_update_task` | **write** | Update task |
| `centralstationcrm_create_note` | **write** | Create note |
| `centralstationcrm_usage_status` | meta | Usage status (free-tier meter) |
| `centralstationcrm_request_feature` | meta | Request a missing feature |
| `centralstationcrm_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `centralstationcrm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `centralstationcrm_upgrade` (it returns a Stripe Checkout link). Cancel any time with `centralstationcrm_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `centralstationcrm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by CentralStationCRM.
