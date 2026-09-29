# OfficeRnD MCP by usefulapi

Use [OfficeRnD](https://www.officernd.com) from Claude, Cursor, or any MCP client — browse members, bookings, memberships, contracts, payments and tickets, and optionally create members, bookings and tickets.
Hosted, no local install: connect with your own OfficeRnD credentials.

**Live endpoint:** `https://officernd.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/officernd

## Add to Claude

```json
{
  "mcpServers": {
    "officernd": {
      "url": "https://officernd.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **OfficeRnD organization slug**, **client ID** and **client secret** (Settings > Developer Tools), with a read-only or read + write choice.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `officernd_get_organization` | read | Get the organization |
| `officernd_list_locations` | read | List locations |
| `officernd_list_members` | read | List members |
| `officernd_get_member` | read | Get one member |
| `officernd_list_companies` | read | List companies |
| `officernd_list_resources` | read | List resources |
| `officernd_list_bookings` | read | List bookings |
| `officernd_list_booking_occurrences` | read | List booking occurrences |
| `officernd_get_booking` | read | Get one booking |
| `officernd_list_memberships` | read | List memberships |
| `officernd_list_contracts` | read | List contracts |
| `officernd_list_checkins` | read | List check-ins |
| `officernd_list_payments` | read | List invoices and payments |
| `officernd_list_tickets` | read | List helpdesk tickets |
| `officernd_list_ticket_options` | read | List ticket options |
| `officernd_create_member` | **write** | Create a member |
| `officernd_update_member` | **write** | Update a member |
| `officernd_create_booking` | **write** | Create a booking |
| `officernd_create_ticket` | **write** | Open a helpdesk ticket |
| `officernd_add_ticket_comment` | **write** | Comment on a ticket |
| `officernd_usage_status` | meta | Usage status (free-tier meter) |
| `officernd_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by OfficeRnD.
