# HolidayPitches MCP by usefulapi

Use your [HolidayPitches](https://app.holidaypitches.com) account from Claude, Cursor, or any MCP client. Reads pitches, availability, bookings and campsite details, and creates bookings or moves them through check-in and check-out. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://holidaypitches.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://holidaypitches.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http holidaypitches https://holidaypitches.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=holidaypitches&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fholidaypitches.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "holidaypitches": {
      "url": "https://holidaypitches.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your HolidayPitches credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/holidaypitches/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **HolidayPitches API key** (Admin → API Keys; the key needs the read_campsite scope). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `holidaypitches_get_campsite` | read | Get campsite details |
| `holidaypitches_list_pitches` | read | List pitches |
| `holidaypitches_check_availability` | read | Check pitch availability |
| `holidaypitches_list_bookings` | read | List bookings |
| `holidaypitches_get_booking` | read | Get a booking |
| `holidaypitches_create_booking` | **write** | Create a booking |
| `holidaypitches_update_booking_status` | **write** | Update a booking status |
| `holidaypitches_usage_status` | meta | Usage status (free-tier meter) |
| `holidaypitches_request_feature` | meta | Request a missing feature |
| `holidaypitches_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `holidaypitches_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `holidaypitches_upgrade` (it returns a Stripe Checkout link). Cancel any time with `holidaypitches_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `holidaypitches_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
