# Beds24 MCP by usefulapi

Use [Beds24](https://beds24.com) from Claude, Cursor, or any MCP client — check bookings, quote stays, read guest messages and reviews, and update your calendar.
Hosted, no local install: connect with your own Beds24 credentials.

**Live endpoint:** `https://beds24.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/beds24

## Add to Claude

```json
{
  "mcpServers": {
    "beds24": {
      "url": "https://beds24.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide a **Beds24 invite code** (or a refresh or read-only long life token) from Beds24 → Settings → Account → API.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `beds24_get_token_details` | read | Get token details |
| `beds24_list_properties` | read | List properties |
| `beds24_list_bookings` | read | List bookings |
| `beds24_get_booking` | read | Get a booking |
| `beds24_list_booking_messages` | read | List booking messages |
| `beds24_list_booking_invoices` | read | List booking invoices |
| `beds24_get_room_offers` | read | Get room offers (quote) |
| `beds24_get_room_availability` | read | Get room availability |
| `beds24_get_unit_bookings` | read | Get unit bookings (occupancy grid) |
| `beds24_get_room_calendar` | read | Get room calendar |
| `beds24_list_fixed_prices` | read | List fixed prices |
| `beds24_list_booking_com_reviews` | read | List Booking.com reviews |
| `beds24_list_airbnb_reviews` | read | List Airbnb reviews |
| `beds24_create_booking` | **write** | Create a booking |
| `beds24_update_booking` | **write** | Update a booking |
| `beds24_send_booking_message` | **write** | Send a booking message |
| `beds24_mark_messages_read` | **write** | Mark messages read |
| `beds24_update_room_calendar` | **write** | Update room calendar |
| `beds24_usage_status` | meta | Usage status (free-tier meter) |
| `beds24_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by Beds24.
