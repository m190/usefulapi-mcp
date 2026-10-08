# Workiz MCP by usefulapi

Use [Workiz](https://www.workiz.com) from Claude, Cursor, or any MCP client — read jobs, leads, team and time off, and create or update jobs and leads, assign team members and convert leads.
Hosted, no local install: connect with your own Workiz credentials.

**Live endpoint:** `https://workiz.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/workiz

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://workiz.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http workiz https://workiz.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=workiz&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fworkiz.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "workiz": {
      "url": "https://workiz.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/workiz/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Workiz API token**, plus the API secret for write tools (Settings → Integrations → Developer).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `workiz_list_jobs` | read | List jobs |
| `workiz_get_job` | read | Get one job |
| `workiz_list_leads` | read | List leads |
| `workiz_get_lead` | read | Get one lead |
| `workiz_list_team` | read | List team members |
| `workiz_get_team_member` | read | Get one team member |
| `workiz_list_time_off` | read | List upcoming time off |
| `workiz_get_user_time_off` | read | Get a team member's time off |
| `workiz_create_job` | **write** | Create a job |
| `workiz_update_job` | **write** | Update a job |
| `workiz_assign_job` | **write** | Assign a team member to a job |
| `workiz_unassign_job` | **write** | Unassign a team member from a job |
| `workiz_create_lead` | **write** | Create a lead |
| `workiz_update_lead` | **write** | Update a lead |
| `workiz_assign_lead` | **write** | Assign a team member to a lead |
| `workiz_unassign_lead` | **write** | Unassign a team member from a lead |
| `workiz_convert_lead_to_job` | **write** | Convert a lead to a job |
| `workiz_mark_lead_lost` | **write** | Mark a lead as lost |
| `workiz_activate_lead` | **write** | Reactivate a lost lead |
| `workiz_usage_status` | meta | Usage status (free-tier meter) |
| `workiz_upgrade` | meta | Upgrade to Pro (unlimited) |
| `workiz_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `workiz_upgrade` (it returns a Stripe Checkout link). Cancel any time with `workiz_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `workiz_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Workiz.
