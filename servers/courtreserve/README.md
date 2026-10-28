# CourtReserve MCP by usefulapi

Connect at `https://courtreserve.usefulapi.io/mcp`.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://courtreserve.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http courtreserve https://courtreserve.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=courtreserve&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcourtreserve.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "courtreserve": {
      "url": "https://courtreserve.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CourtReserve credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/courtreserve/

<!-- connect:end (generated above, edit below) -->

Connect your CourtReserve credentials to access your account through usefulapi.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `courtreserve_list_members` | read | List members |
| `courtreserve_get_member_reservations` | read | Get a member's reservations |
| `courtreserve_list_families` | read | List families |
| `courtreserve_list_membership_types` | read | List membership types |
| `courtreserve_membership_report` | read | Membership report |
| `courtreserve_list_courts` | read | List courts |
| `courtreserve_list_reservation_types` | read | List reservation types |
| `courtreserve_get_court_availability` | read | Get court availability |
| `courtreserve_list_reservations` | read | List active reservations |
| `courtreserve_list_cancelled_reservations` | read | List cancelled reservations |
| `courtreserve_whos_here` | read | Who is here |
| `courtreserve_court_utilization` | read | Court utilization |
| `courtreserve_list_event_categories` | read | List event categories |
| `courtreserve_list_events` | read | List events |
| `courtreserve_list_event_registrations` | read | List event registrations |
| `courtreserve_list_event_waitlist` | read | List event waitlist |
| `courtreserve_list_cancelled_event_registrations` | read | List cancelled event registrations |
| `courtreserve_list_checkins` | read | List check-ins |
| `courtreserve_list_transactions` | read | List transactions |
| `courtreserve_sales_summary` | read | Sales summary |
| `courtreserve_list_promo_codes` | read | List promo codes |
| `courtreserve_list_leagues` | read | List leagues |
| `courtreserve_list_league_sessions` | read | List league sessions |
| `courtreserve_usage_status` | meta | Usage status (free-tier meter) |
| `courtreserve_request_feature` | meta | Request a missing feature |
| `courtreserve_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `courtreserve_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per connected account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |

Pro covers this server only. Subscribe with `courtreserve_upgrade` (it returns a Stripe Checkout link). Cancel any time with `courtreserve_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `courtreserve_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
