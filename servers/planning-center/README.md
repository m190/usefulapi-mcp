# Planning Center MCP by usefulapi

Use your [Planning Center](https://www.planningcenter.com) account from Claude, Cursor, or any MCP client. Read people, lists, service plans, teams, songs, calendar events and groups. Nothing is changed. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://planning-center.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://planning-center.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http planning-center https://planning-center.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=planning-center&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fplanning-center.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "planning-center": {
      "url": "https://planning-center.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Planning Center credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/planning-center/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Client ID** and **Secret** of a Planning Center Personal Access Token (created at api.planningcenteronline.com/personal_access_tokens). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `planningcenter_list_people` | read | List people |
| `planningcenter_get_person` | read | Get a person |
| `planningcenter_get_current_user` | read | Get the token owner |
| `planningcenter_list_lists` | read | List lists |
| `planningcenter_get_list` | read | Get a list |
| `planningcenter_list_people_in_list` | read | List people in a list |
| `planningcenter_list_service_types` | read | List service types |
| `planningcenter_get_service_type` | read | Get a service type |
| `planningcenter_list_plans` | read | List plans |
| `planningcenter_get_plan` | read | Get a plan |
| `planningcenter_list_plan_items` | read | List plan items |
| `planningcenter_list_plan_team_members` | read | List plan team members |
| `planningcenter_list_teams` | read | List teams |
| `planningcenter_list_team_people` | read | List team members |
| `planningcenter_list_person_schedules` | read | List a person's schedules |
| `planningcenter_search_songs` | read | Search songs |
| `planningcenter_get_song` | read | Get a song |
| `planningcenter_list_events` | read | List calendar events |
| `planningcenter_get_event` | read | Get a calendar event |
| `planningcenter_list_groups` | read | List groups |
| `planningcenter_get_group` | read | Get a group |
| `planningcenter_list_group_memberships` | read | List group members |
| `planningcenter_list_person_groups` | read | List a person's groups |
| `planningcenter_list_group_events` | read | List group meetings |
| `planningcenter_list_event_attendances` | read | List meeting attendance |
| `planningcenter_usage_status` | meta | Usage status (free-tier meter) |
| `planningcenter_request_feature` | meta | Request a missing feature |
| `planningcenter_upgrade` | meta | Upgrade to Pro or Pro+ |
| `planningcenter_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `planningcenter_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `planningcenter_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `planningcenter_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
