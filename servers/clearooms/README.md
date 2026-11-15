# Clearooms MCP by usefulapi

Use your [Clearooms](https://clearooms.com) account from Claude, Cursor, or any MCP client. Check desk and room availability, read bookings and reports, book a desk and cancel bookings. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://clearooms.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://clearooms.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http clearooms https://clearooms.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=clearooms&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fclearooms.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "clearooms": {
      "url": "https://clearooms.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Clearooms credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/clearooms/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Clearooms personal access token**, created in Clearooms under **Settings → APIs**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `clearooms_get_current_user` | read | Get current user |
| `clearooms_list_offices` | read | List offices |
| `clearooms_list_rooms` | read | List meeting rooms |
| `clearooms_get_room` | read | Get a meeting room |
| `clearooms_check_room_availability` | read | Check room availability |
| `clearooms_list_meetings` | read | List meetings |
| `clearooms_list_bookings` | read | List desk bookings |
| `clearooms_get_booking` | read | Get a booking |
| `clearooms_list_my_bookings` | read | List my bookings |
| `clearooms_list_desks` | read | List desks |
| `clearooms_check_desk_availability` | read | Check desk availability |
| `clearooms_get_bookings_report` | read | Get a bookings report |
| `clearooms_create_desk_booking` | **write** | Book a desk |
| `clearooms_cancel_booking` | **write** | Cancel a booking |
| `clearooms_usage_status` | meta | Usage status (free-tier meter) |
| `clearooms_request_feature` | meta | Request a missing feature |
| `clearooms_upgrade` | meta | Upgrade to Pro or Pro+ |
| `clearooms_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `clearooms_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `clearooms_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `clearooms_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
