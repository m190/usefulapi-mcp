# Teamup Calendar MCP by usefulapi

Use [Teamup Calendar](https://www.teamup.com) from Claude, Cursor, or any MCP client — calendar configuration, sub-calendars and access keys, list, search and read events (also changes since a time and signups), and create, update, delete and undo events and create or edit sub-calendars.
Hosted, no local install: connect with your own Teamup Calendar credentials.

**Live endpoint:** `https://teamup-calendar.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/teamup-calendar

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://teamup-calendar.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http teamup-calendar https://teamup-calendar.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=teamup-calendar&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fteamup-calendar.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "teamup-calendar": {
      "url": "https://teamup-calendar.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Teamup Calendar credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/teamup-calendar/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `teamup_get_calendar` | read | Get calendar |
| `teamup_list_subcalendars` | read | List sub-calendars |
| `teamup_get_subcalendar` | read | Get sub-calendar |
| `teamup_list_access_keys` | read | List access keys |
| `teamup_list_events` | read | List events |
| `teamup_search_events` | read | Search events |
| `teamup_get_event` | read | Get event |
| `teamup_list_changed_events` | read | List changed events |
| `teamup_list_event_signups` | read | List event signups |
| `teamup_create_event` | **write** | Create event |
| `teamup_update_event` | **write** | Update event |
| `teamup_delete_event` | **write** | Delete event |
| `teamup_undo_event_action` | **write** | Undo event change |
| `teamup_create_subcalendar` | **write** | Create sub-calendar |
| `teamup_update_subcalendar` | **write** | Update sub-calendar |
| `teamup_usage_status` | meta | Usage status (free-tier meter) |
| `teamup_request_feature` | meta | Request a missing feature |
| `teamup_upgrade` | meta | Upgrade to Pro (unlimited) |
| `teamup_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per calendar) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `teamup_upgrade` (it returns a Stripe Checkout link). Cancel any time with `teamup_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `teamup_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Teamup Calendar.
