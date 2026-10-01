# Hostfully MCP by usefulapi

Use [Hostfully](https://www.hostfully.com) from Claude, Cursor, or any MCP client — check properties, calendars, leads, quotes, guests and messages, and reply to guests.
Hosted, no local install: connect with your own Hostfully credentials.

**Live endpoint:** `https://hostfully.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/hostfully

## Add to Claude

```json
{
  "mcpServers": {
    "hostfully": {
      "url": "https://hostfully.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Hostfully agency API key** (Agency Settings), plus an optional default agency UID and a sandbox toggle.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hostfully_list_agencies` | read | List agencies |
| `hostfully_list_properties` | read | List properties |
| `hostfully_get_property` | read | Get one property |
| `hostfully_get_property_calendar` | read | Get a property's calendar |
| `hostfully_get_pricing_periods` | read | Get pricing periods |
| `hostfully_search_leads` | read | Search leads and bookings |
| `hostfully_get_lead` | read | Get one lead or booking |
| `hostfully_calculate_quote` | read | Calculate a stay quote |
| `hostfully_list_orders` | read | List orders |
| `hostfully_list_threads` | read | List message threads |
| `hostfully_list_messages` | read | List messages |
| `hostfully_list_guests` | read | List guests |
| `hostfully_list_jobs` | read | List jobs |
| `hostfully_list_services` | read | List services |
| `hostfully_list_reviews` | read | List guest reviews |
| `hostfully_list_owners` | read | List property owners |
| `hostfully_create_lead` | **write** | Create a calendar block or inquiry |
| `hostfully_update_lead` | **write** | Update a lead's notes or guest details |
| `hostfully_send_message` | **write** | Send a message to a guest |
| `hostfully_create_job` | **write** | Schedule a job |
| `hostfully_usage_status` | meta | Usage status (free-tier meter) |
| `hostfully_upgrade` | meta | Upgrade to Pro (unlimited) |
| `hostfully_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `hostfully_upgrade` (it returns a Stripe Checkout link). Cancel any time with `hostfully_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `hostfully_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Hostfully.
