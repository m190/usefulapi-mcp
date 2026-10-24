# kiwiHR MCP by usefulapi

Read kiwiHR employees, time off, timesheets, projects; create and update employees, timesheets.

**Live endpoint:** `https://kiwihr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/kiwihr

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kiwihr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kiwihr https://kiwihr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kiwihr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkiwihr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kiwihr": {
      "url": "https://kiwihr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your kiwiHR credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kiwihr/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your kiwiHR (Tellent HR) company **API key** (create it in the kiwiHR web app under Company Settings / Configuration > Integrations > API Keys).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kiwihr_list_users` | read | List employees |
| `kiwihr_get_user` | read | Get employee |
| `kiwihr_list_teams` | read | List teams |
| `kiwihr_list_locations` | read | List locations |
| `kiwihr_list_positions` | read | List positions |
| `kiwihr_list_custom_fields` | read | List custom fields |
| `kiwihr_list_time_off_types` | read | List time off types |
| `kiwihr_list_time_off_balances` | read | List time off balances |
| `kiwihr_get_time_off_usage` | read | Get time off usage |
| `kiwihr_list_timesheets` | read | List timesheets |
| `kiwihr_get_timesheet` | read | Get timesheet |
| `kiwihr_get_attendance_statement` | read | Get attendance statement |
| `kiwihr_list_attendance_statements` | read | List attendance statements |
| `kiwihr_list_overtime_balances` | read | List overtime balances |
| `kiwihr_list_projects` | read | List projects |
| `kiwihr_get_project` | read | Get project |
| `kiwihr_list_journeys` | read | List journeys |
| `kiwihr_get_journey` | read | Get journey |
| `kiwihr_list_journey_templates` | read | List journey templates |
| `kiwihr_list_journey_types` | read | List journey types |
| `kiwihr_create_timesheet_entry` | **write** | Create timesheet entry |
| `kiwihr_update_timesheet_entry` | **write** | Update timesheet entry |
| `kiwihr_delete_timesheet_entry` | **write** | Delete timesheet entry |
| `kiwihr_create_project` | **write** | Create project |
| `kiwihr_update_project` | **write** | Update project |
| `kiwihr_create_user` | **write** | Create employee |
| `kiwihr_update_user` | **write** | Update employee |
| `kiwihr_deactivate_user` | **write** | Deactivate employee |
| `kiwihr_activate_user` | **write** | Activate employee |
| `kiwihr_create_journey` | **write** | Create journey |
| `kiwihr_usage_status` | meta | Usage status (free-tier meter) |
| `kiwihr_request_feature` | meta | Request a missing feature |
| `kiwihr_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `kiwihr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `kiwihr_upgrade` (it returns a Stripe Checkout link). Cancel any time with `kiwihr_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `kiwihr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by kiwiHR.
