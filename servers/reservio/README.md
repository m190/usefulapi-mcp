# Reservio MCP by usefulapi

Use your [Reservio](https://www.reservio.com) account from Claude, Cursor, or any MCP client. It can read your services, staff, rosters, events, bookings and open slots, and create appointment or group bookings. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://reservio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://reservio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http reservio https://reservio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=reservio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Freservio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "reservio": {
      "url": "https://reservio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Reservio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/reservio/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Reservio API access token** and your **Business id**. Reservio customer care issues the token and can tell you the business id. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `reservio_get_business` | read | Get a business |
| `reservio_list_services` | read | List services |
| `reservio_get_service` | read | Get a service |
| `reservio_list_resources` | read | List resources (staff) |
| `reservio_get_resource` | read | Get a resource |
| `reservio_list_events` | read | List events |
| `reservio_list_bookings` | read | List bookings |
| `reservio_list_coupons` | read | List coupons |
| `reservio_get_coupon` | read | Get a coupon |
| `reservio_list_opening_hours` | read | List opening hours |
| `reservio_list_rosters` | read | List rosters |
| `reservio_get_booking_slots` | read | Get free booking slots |
| `reservio_get_booking_days` | read | Get bookable days |
| `reservio_get_event_days` | read | Get days with open events |
| `reservio_create_appointment_booking` | **write** | Create an appointment booking |
| `reservio_create_group_booking` | **write** | Book a group event |
| `reservio_usage_status` | meta | Usage status (free-tier meter) |
| `reservio_request_feature` | meta | Request a missing feature |
| `reservio_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `reservio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `reservio_upgrade` (it returns a Stripe Checkout link). Cancel any time with `reservio_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `reservio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
