# TidyCal MCP by usefulapi

Use your [TidyCal](https://tidycal.com) account from Claude, Cursor, or any MCP client. Read bookings, open slots and contacts, and change booking types, bookings and contacts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://tidycal.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tidycal.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tidycal https://tidycal.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tidycal&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftidycal.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tidycal": {
      "url": "https://tidycal.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TidyCal credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tidycal/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **TidyCal personal access token** (TidyCal → Integrations → Advanced → Manage API keys → Personal tokens). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tidycal_get_account` | read | Get account |
| `tidycal_list_booking_types` | read | List booking types |
| `tidycal_get_booking_type` | read | Get a booking type |
| `tidycal_list_booking_type_timeslots` | read | List free timeslots |
| `tidycal_enable_booking_type` | **write** | Enable a booking type |
| `tidycal_disable_booking_type` | **write** | Disable a booking type |
| `tidycal_list_bookings` | read | List bookings |
| `tidycal_get_booking` | read | Get a booking |
| `tidycal_cancel_booking` | **write** | Cancel a booking |
| `tidycal_list_contacts` | read | List contacts |
| `tidycal_get_contact` | read | Get a contact |
| `tidycal_create_contact` | **write** | Create a contact |
| `tidycal_update_contact` | **write** | Update a contact |
| `tidycal_list_subscriptions` | read | List subscriptions |
| `tidycal_get_subscription` | read | Get a subscription |
| `tidycal_list_payments` | read | List payments |
| `tidycal_list_coupons` | read | List coupons |
| `tidycal_list_store_orders` | read | List store orders |
| `tidycal_list_availability_schedules` | read | List availability schedules |
| `tidycal_get_availability_schedule` | read | Get an availability schedule |
| `tidycal_list_blocked_bookers` | read | List blocked bookers |
| `tidycal_list_teams` | read | List teams |
| `tidycal_list_team_bookings` | read | List team bookings |
| `tidycal_usage_status` | meta | Usage status (free-tier meter) |
| `tidycal_request_feature` | meta | Request a missing feature |
| `tidycal_upgrade` | meta | Upgrade to Pro or Pro+ |
| `tidycal_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `tidycal_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `tidycal_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `tidycal_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
