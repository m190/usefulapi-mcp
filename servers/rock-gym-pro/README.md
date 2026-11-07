# Rock Gym Pro MCP by usefulapi

Use your [Rock Gym Pro](https://www.rockgympro.com) account from Claude, Cursor, or any MCP client. Read customers, bookings, check-ins, invoices, sales and daily numbers, read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://rock-gym-pro.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rock-gym-pro.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rock-gym-pro https://rock-gym-pro.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rock-gym-pro&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frock-gym-pro.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rock-gym-pro": {
      "url": "https://rock-gym-pro.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Rock Gym Pro credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rock-gym-pro/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API username**, **API key** (created by a Cloud Org Admin in RGP Cloud) and **facility code** (the 3 capital letters of your gym). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rockgympro_list_facilities` | read | List facilities |
| `rockgympro_get_connection_info` | read | Get API connection info |
| `rockgympro_get_setting` | read | Get a setting |
| `rockgympro_list_customers` | read | List customers |
| `rockgympro_get_customer` | read | Get a customer |
| `rockgympro_list_bookings` | read | List bookings |
| `rockgympro_get_booking` | read | Get a booking |
| `rockgympro_list_checkins` | read | List check-ins |
| `rockgympro_get_checkin` | read | Get a check-in |
| `rockgympro_get_active_checkin_count` | read | Count active check-ins |
| `rockgympro_list_invoices` | read | List invoices |
| `rockgympro_get_invoice` | read | Get an invoice |
| `rockgympro_list_sales` | read | List sales |
| `rockgympro_list_timeclock_entries` | read | List timeclock entries |
| `rockgympro_get_timeclock_entry` | read | Get a timeclock entry |
| `rockgympro_list_daily_numbers` | read | List daily numbers |
| `rockgympro_list_staff` | read | List staff |
| `rockgympro_list_event_widgets` | read | List event widgets |
| `rockgympro_get_event_widget_events` | read | Get event widget events |
| `rockgympro_usage_status` | meta | Usage status (free-tier meter) |
| `rockgympro_request_feature` | meta | Request a missing feature |
| `rockgympro_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rockgympro_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `rockgympro_upgrade` (it returns a Stripe Checkout link). Cancel any time with `rockgympro_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `rockgympro_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
