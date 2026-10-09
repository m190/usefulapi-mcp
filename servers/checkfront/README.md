# Checkfront MCP by usefulapi

Use [Checkfront](https://www.checkfront.com) from Claude, Cursor, or any MCP client — check item availability and rates, build booking sessions, create bookings, change status, and read customers and events.
Hosted, no local install: connect with your own Checkfront credentials.

**Live endpoint:** `https://checkfront.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/checkfront

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://checkfront.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http checkfront https://checkfront.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=checkfront&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcheckfront.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "checkfront": {
      "url": "https://checkfront.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Checkfront credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/checkfront/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Checkfront host, API key and API secret** (Manage → Developer → API; paid plan).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `checkfront_get_company` | read | Get company settings |
| `checkfront_list_categories` | read | List item categories |
| `checkfront_list_items` | read | List inventory items (optionally with availability and rates) |
| `checkfront_get_item` | read | Get an item (optionally with availability and rates) |
| `checkfront_get_availability_calendar` | read | Get an availability calendar |
| `checkfront_list_bookings` | read | List bookings |
| `checkfront_get_booking` | read | Get a booking |
| `checkfront_list_booking_notes` | read | List booking notes |
| `checkfront_get_booking_form` | read | Get the booking form fields |
| `checkfront_get_booking_session` | read | Get a booking session (cart) |
| `checkfront_search_customers` | read | Search customers |
| `checkfront_get_customer` | read | Get a customer |
| `checkfront_list_events` | read | List events (seasons, specials, closures, discounts) |
| `checkfront_list_staff_accounts` | read | List staff accounts |
| `checkfront_add_to_booking_session` | **write** | Add items to a booking session (cart) |
| `checkfront_end_booking_session` | **write** | End or clear a booking session |
| `checkfront_create_booking` | **write** | Create a booking |
| `checkfront_update_booking_status` | **write** | Change a booking's status |
| `checkfront_add_booking_note` | **write** | Add a note to a booking |
| `checkfront_check_in_booking` | **write** | Check a booking in or out |
| `checkfront_usage_status` | meta | Usage status (free-tier meter) |
| `checkfront_request_feature` | meta | Request a missing feature |
| `checkfront_upgrade` | meta | Upgrade to Pro (unlimited) |
| `checkfront_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `checkfront_upgrade` (it returns a Stripe Checkout link). Cancel any time with `checkfront_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `checkfront_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Checkfront.
