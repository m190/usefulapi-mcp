# TourCMS MCP by usefulapi

Use your [TourCMS](https://www.tourcms.com) account from Claude, Cursor, or any MCP client. It reads tours, departures, availability, bookings and payments for one operator channel, and it adds booking notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://tourcms.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tourcms.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tourcms https://tourcms.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tourcms&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftourcms.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tourcms": {
      "url": "https://tourcms.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TourCMS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tourcms/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **TourCMS channel ID** and **channel API key**. Find both in TourCMS under your account's **API settings**, and use an operator key, not a marketplace agent key. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tourcms_check_rate_limit` | read | Check rate limit |
| `tourcms_show_channel` | read | Show channel |
| `tourcms_search_tours` | read | Search tours |
| `tourcms_list_tours` | read | List tours |
| `tourcms_show_tour` | read | Show tour |
| `tourcms_show_tour_dates` | read | Show tour dates and deals |
| `tourcms_check_tour_availability` | read | Check tour availability |
| `tourcms_list_departures` | read | List departures |
| `tourcms_show_departure` | read | Show departure |
| `tourcms_search_bookings` | read | Search bookings |
| `tourcms_show_booking` | read | Show booking |
| `tourcms_list_payments` | read | List payments |
| `tourcms_add_booking_note` | **write** | Add booking note |
| `tourcms_search_enquiries` | read | Search enquiries |
| `tourcms_show_customer` | read | Show customer |
| `tourcms_list_staff` | read | List staff members |
| `tourcms_usage_status` | meta | Usage status (free-tier meter) |
| `tourcms_request_feature` | meta | Request a missing feature |
| `tourcms_upgrade` | meta | Upgrade to Pro or Pro+ |
| `tourcms_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `tourcms_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `tourcms_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `tourcms_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
