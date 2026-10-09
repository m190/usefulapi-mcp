# Gingr MCP by usefulapi

Use [Gingr](https://www.gingrapp.com) from Claude, Cursor, or any MCP client — read Gingr reservations, owners, pets, check-ins, invoices and timeclock for your pet-care business.
Hosted, no local install: connect with your own Gingr credentials.

**Live endpoint:** `https://gingr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/gingr

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gingr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gingr https://gingr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gingr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgingr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gingr": {
      "url": "https://gingr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Gingr credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gingr/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Gingr subdomain and API key**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gingr_list_locations` | read | List locations |
| `gingr_list_reservation_types` | read | List reservation types |
| `gingr_list_services_by_type` | read | List add-on services of a reservation type |
| `gingr_list_reference` | read | List reference data |
| `gingr_list_reservations` | read | List reservations in a date range |
| `gingr_list_checked_in` | read | List pets checked in now |
| `gingr_get_daily_summary` | read | Get the day's check-in / check-out summary |
| `gingr_get_whiteboard` | read | Get today's arrivals and departures (whiteboard) |
| `gingr_list_owner_reservations` | read | List an owner's reservations |
| `gingr_list_animal_reservations` | read | List a pet's reservations |
| `gingr_list_cancelled_reservations` | read | List recently cancelled reservations |
| `gingr_get_reservation_estimate` | read | Get a reservation's cost estimate |
| `gingr_list_owners` | read | List owners (customers) |
| `gingr_get_owner` | read | Get an owner |
| `gingr_list_new_modified_owners` | read | List new or changed owners |
| `gingr_list_animals` | read | List animals (pets) |
| `gingr_get_animal_immunizations` | read | Get a pet's immunization records |
| `gingr_get_animal_feeding` | read | Get a pet's feeding instructions |
| `gingr_get_animal_medications` | read | Get a pet's medications |
| `gingr_list_invoices` | read | List invoices or estimates |
| `gingr_get_transaction` | read | Get a POS transaction |
| `gingr_list_subscriptions` | read | List subscriptions (packages) |
| `gingr_get_subscription` | read | Get a subscription |
| `gingr_get_timeclock_report` | read | Get the staff timeclock report |
| `gingr_list_report_card_files` | read | List recent report card files |
| `gingr_usage_status` | meta | Usage status (free-tier meter) |
| `gingr_request_feature` | meta | Request a missing feature |
| `gingr_upgrade` | meta | Upgrade to Pro (unlimited) |
| `gingr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per Gingr business) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `gingr_upgrade` (it returns a Stripe Checkout link). Cancel any time with `gingr_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `gingr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Gingr.
