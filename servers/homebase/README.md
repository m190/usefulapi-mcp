# Homebase MCP by usefulapi

Use [Homebase](https://joinhomebase.com) from Claude, Cursor, or any MCP client — locations, employees, shifts, timecards, labor reports and time clock status.
Hosted, no local install: connect with your own Homebase credentials.

**Live endpoint:** `https://homebase.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/homebase

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://homebase.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http homebase https://homebase.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=homebase&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhomebase.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "homebase": {
      "url": "https://homebase.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Homebase credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/homebase/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `homebase_get_company` | read | Get company |
| `homebase_list_locations` | read | List locations |
| `homebase_get_location` | read | Get location |
| `homebase_get_location_plan` | read | Get location plan |
| `homebase_list_employees` | read | List employees |
| `homebase_get_employee` | read | Get employee |
| `homebase_list_shifts` | read | List shifts |
| `homebase_get_shift` | read | Get shift |
| `homebase_list_deleted_shifts` | read | List deleted shifts |
| `homebase_list_timecards` | read | List timecards |
| `homebase_get_timecard` | read | Get timecard |
| `homebase_list_deleted_timecards` | read | List deleted timecards |
| `homebase_get_labor` | read | Get labor report |
| `homebase_get_labor_by_role` | read | Get labor report by role |
| `homebase_get_labor_by_employee` | read | Get labor report by employee |
| `homebase_get_timeclock_status` | read | Get time clock status |
| `homebase_usage_status` | meta | Usage status (free-tier meter) |
| `homebase_request_feature` | meta | Request a missing feature |
| `homebase_upgrade` | meta | Upgrade to Pro (unlimited) |
| `homebase_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `homebase_upgrade` (it returns a Stripe Checkout link). Cancel any time with `homebase_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `homebase_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Homebase.
