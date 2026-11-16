# Hosthub MCP by usefulapi

Use your [Hosthub](https://www.hosthub.com) account from Claude, Cursor, or any MCP client. Read rentals, channels, rate plans, users and calendar events, and create, change, or delete bookings and holds. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://hosthub.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hosthub.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hosthub https://hosthub.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hosthub&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhosthub.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hosthub": {
      "url": "https://hosthub.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Hosthub credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hosthub/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Hosthub API key** (Hosthub → Settings; if the key is missing, ask Hosthub support to turn on API access). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hosthub_list_rentals` | read | List rentals |
| `hosthub_get_rental` | read | Get a rental |
| `hosthub_list_rental_channels` | read | List channels of a rental |
| `hosthub_list_rate_plans` | read | List rate plans of a rental |
| `hosthub_get_rate_plan` | read | Get a rate plan |
| `hosthub_get_rate_plan_daily_rates` | read | Get daily rates of a rate plan |
| `hosthub_list_users` | read | List users |
| `hosthub_get_user` | read | Get a user |
| `hosthub_list_team_members` | read | List team members |
| `hosthub_list_calendar_events` | read | List calendar events |
| `hosthub_get_calendar_event` | read | Get a calendar event |
| `hosthub_list_calendar_event_notes` | read | List notes of a calendar event |
| `hosthub_create_calendar_event` | **write** | Create a booking or hold |
| `hosthub_update_calendar_event` | **write** | Update a calendar event |
| `hosthub_delete_calendar_event` | **write** | Delete a calendar event |
| `hosthub_add_calendar_event_note` | **write** | Add a note to a calendar event |
| `hosthub_usage_status` | meta | Usage status (free-tier meter) |
| `hosthub_request_feature` | meta | Request a missing feature |
| `hosthub_upgrade` | meta | Upgrade to Pro or Pro+ |
| `hosthub_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `hosthub_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `hosthub_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `hosthub_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
