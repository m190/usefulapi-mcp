# Bookingmood MCP by usefulapi

Read Bookingmood bookings, availability, guests, payments and invoices; update bookings, contacts.

**Live endpoint:** `https://bookingmood.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/bookingmood

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bookingmood.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bookingmood https://bookingmood.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bookingmood&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbookingmood.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bookingmood": {
      "url": "https://bookingmood.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bookingmood credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bookingmood/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste a **Bookingmood API key** (admin dashboard → **Settings** of your organization → **API keys** at the bottom of the page). The key belongs to your organization.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bookingmood_get_organization` | read | Get organization |
| `bookingmood_list_products` | read | List products (rentals) |
| `bookingmood_get_product` | read | Get product |
| `bookingmood_list_bookings` | read | List bookings |
| `bookingmood_get_booking` | read | Get booking with details |
| `bookingmood_list_calendar_events` | read | List calendar events |
| `bookingmood_check_availability` | read | Check availability |
| `bookingmood_search_products` | read | Search available products |
| `bookingmood_list_contacts` | read | List contacts (guests) |
| `bookingmood_get_contact` | read | Get contact |
| `bookingmood_list_payments` | read | List payments |
| `bookingmood_list_invoices` | read | List invoices |
| `bookingmood_list_line_items` | read | List line items |
| `bookingmood_list_coupons` | read | List coupons |
| `bookingmood_list_services` | read | List services (extras and fees) |
| `bookingmood_list_tasks` | read | List tasks |
| `bookingmood_list_messages` | read | List guest messages |
| `bookingmood_update_event_notes` | **write** | Set calendar event notes |
| `bookingmood_set_event_status` | **write** | Set calendar event status (confirm / cancel) |
| `bookingmood_create_contact` | **write** | Create contact |
| `bookingmood_update_contact` | **write** | Update contact |
| `bookingmood_usage_status` | meta | Usage status (free-tier meter) |
| `bookingmood_request_feature` | meta | Request a missing feature |
| `bookingmood_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `bookingmood_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per organization) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `bookingmood_upgrade` (it returns a Stripe Checkout link). Cancel any time with `bookingmood_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `bookingmood_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
