# AddEvent MCP by usefulapi

Use [AddEvent](https://www.addevent.com) from Claude, Cursor, or any MCP client — calendars, events, RSVP attendees, calendar subscribers and templates, plus creating events and calendars.
Hosted, no local install: connect with your own AddEvent credentials.

**Live endpoint:** `https://addevent.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/addevent

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://addevent.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http addevent https://addevent.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=addevent&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faddevent.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "addevent": {
      "url": "https://addevent.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your AddEvent credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/addevent/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `addevent_list_calendars` | read | List calendars |
| `addevent_get_calendar` | read | Get calendar |
| `addevent_create_calendar` | **write** | Create calendar |
| `addevent_update_calendar` | **write** | Update calendar |
| `addevent_list_events` | read | List events |
| `addevent_get_event` | read | Get event |
| `addevent_create_event` | **write** | Create event |
| `addevent_update_event` | **write** | Update event |
| `addevent_list_rsvp_attendees` | read | List RSVP attendees |
| `addevent_get_rsvp_attendee` | read | Get RSVP attendee |
| `addevent_create_rsvp_attendee` | **write** | Create RSVP attendee |
| `addevent_update_rsvp_attendee` | **write** | Update RSVP attendee |
| `addevent_list_calendar_subscribers` | read | List calendar subscribers |
| `addevent_get_calendar_subscriber` | read | Get calendar subscriber |
| `addevent_list_rsvp_forms` | read | List RSVP forms |
| `addevent_list_event_templates` | read | List event landing page templates |
| `addevent_list_calendar_templates` | read | List calendar templates |
| `addevent_list_timezones` | read | List timezones |
| `addevent_usage_status` | meta | Usage status (free-tier meter) |
| `addevent_request_feature` | meta | Request a missing feature |
| `addevent_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `addevent_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `addevent_upgrade` (it returns a Stripe Checkout link). Cancel any time with `addevent_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `addevent_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by AddEvent.
