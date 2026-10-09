# Shiftbase MCP by usefulapi

Use [Shiftbase](https://www.shiftbase.com) from Claude, Cursor, or any MCP client — read Shiftbase rosters, timesheets, absences and availability; schedule shifts and review absences.
Hosted, no local install: connect with your own Shiftbase credentials.

**Live endpoint:** `https://shiftbase.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/shiftbase

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shiftbase.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shiftbase https://shiftbase.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shiftbase&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshiftbase.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shiftbase": {
      "url": "https://shiftbase.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Shiftbase credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shiftbase/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Shiftbase API key**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shiftbase_get_account` | read | Get account |
| `shiftbase_list_users` | read | List employees |
| `shiftbase_get_user` | read | Get employee |
| `shiftbase_list_departments` | read | List departments |
| `shiftbase_list_teams` | read | List teams |
| `shiftbase_list_locations` | read | List locations |
| `shiftbase_list_shift_types` | read | List shift types |
| `shiftbase_list_rosters` | read | List scheduled shifts |
| `shiftbase_get_roster` | read | Get scheduled shift |
| `shiftbase_list_open_shifts` | read | List open shifts |
| `shiftbase_get_availability` | read | Get employee availability |
| `shiftbase_list_timesheets` | read | List timesheets |
| `shiftbase_get_timesheet` | read | Get timesheet |
| `shiftbase_list_clocked_in` | read | List clocked-in employees |
| `shiftbase_list_absences` | read | List absences |
| `shiftbase_get_absence` | read | Get absence |
| `shiftbase_list_absence_types` | read | List absence types |
| `shiftbase_get_expected_absence_hours` | read | Get expected absence hours |
| `shiftbase_create_roster` | **write** | Schedule a shift |
| `shiftbase_update_roster` | **write** | Change a scheduled shift |
| `shiftbase_request_absence` | **write** | Request an absence |
| `shiftbase_review_absence` | **write** | Approve or decline an absence |
| `shiftbase_usage_status` | meta | Usage status (free-tier meter) |
| `shiftbase_upgrade` | meta | Upgrade to Pro (unlimited) |
| `shiftbase_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `shiftbase_upgrade` (it returns a Stripe Checkout link). Cancel any time with `shiftbase_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `shiftbase_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Shiftbase.
