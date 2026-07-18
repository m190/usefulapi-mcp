# YouCanBook.me MCP by usefulapi

Manage your YouCanBook.me scheduling from Claude, Cursor, or any MCP client — read and edit bookings, booking pages, appointment types, team members and locations.

**Live endpoint:** `https://youcanbookme.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/youcanbookme

## Add to Claude

```json
{
  "mcpServers": {
    "youcanbookme": {
      "url": "https://youcanbookme.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste **two** values — your **Account ID** and **API key** (YCBM dashboard → My Account → Security). They're sent as HTTP Basic auth; your Account ID is your stable identity for metering.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `list_bookings` | read | List bookings |
| `get_booking` | read | Get a booking |
| `list_profiles` | read | List profiles (booking pages) |
| `get_profile` | read | Get a profile (booking page) |
| `list_team_members` | read | List a profile's team members |
| `list_appointment_types` | read | List a profile's appointment types |
| `list_locations` | read | List a profile's locations |
| `list_available_accounts` | read | List available accounts (calendars) |
| `youcanbookme_request` | read | Raw read request |
| `create_booking` | **write** | Create a booking |
| `update_booking` | **write** | Update a booking |
| `cancel_booking` | **write** | Cancel a booking |
| `update_profile` | **write** | Update a profile (booking page) |
| `create_appointment_type` | **write** | Create an appointment type |
| `update_appointment_type` | **write** | Update an appointment type |
| `create_team_member` | **write** | Add a team member |
| `update_team_member` | **write** | Update a team member |
| `create_location` | **write** | Add a location |
| `youcanbookme_usage_status` | meta | Usage status (free-tier meter) |
| `youcanbookme_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by YouCanBook.me.
