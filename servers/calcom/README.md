# Cal.com MCP by usefulapi

Use your [Cal.com](https://cal.com) account from Claude, Cursor, or any MCP client. Read bookings, event types, available slots and schedules, and create or cancel a booking. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://calcom.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://calcom.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http calcom https://calcom.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=calcom&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcalcom.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "calcom": {
      "url": "https://calcom.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Cal.com credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/calcom/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Cal.com API key** (Settings, Security, API keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `calcom_get_my_profile` | read | Get my profile |
| `calcom_list_event_types` | read | List event types |
| `calcom_get_event_type` | read | Get event type |
| `calcom_list_team_event_types` | read | List team event types |
| `calcom_list_bookings` | read | List bookings |
| `calcom_get_booking` | read | Get booking |
| `calcom_get_available_slots` | read | Get available time slots |
| `calcom_list_schedules` | read | List schedules |
| `calcom_get_schedule` | read | Get schedule |
| `calcom_get_busy_times` | read | Get busy times |
| `calcom_list_calendars` | read | List connected calendars |
| `calcom_list_teams` | read | List teams |
| `calcom_create_booking` | **write** | Create booking |
| `calcom_cancel_booking` | **write** | Cancel booking |
| `calcom_usage_status` | meta | Usage status (free-tier meter) |
| `calcom_request_feature` | meta | Request a missing feature |
| `calcom_upgrade` | meta | Upgrade to Pro or Pro+ |
| `calcom_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `calcom_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `calcom_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `calcom_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
