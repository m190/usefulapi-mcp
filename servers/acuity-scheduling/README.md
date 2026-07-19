# Acuity Scheduling MCP by usefulapi

Manage [Acuity Scheduling](https://acuityscheduling.com) from Claude, Cursor, or any MCP client —
read appointments, appointment types, calendars and availability, and create, cancel or reschedule
bookings. Hosted, no local install: connect with your Acuity credentials.

**Live endpoint:** `https://acuity-scheduling.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "acuity-scheduling": {
      "url": "https://acuity-scheduling.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Acuity User ID and API Key** (Acuity → Integrations → API).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `acuity_list_appointments` | read | List appointments |
| `acuity_get_appointment` | read | Get appointment |
| `acuity_list_appointment_types` | read | List appointment types |
| `acuity_list_calendars` | read | List calendars |
| `acuity_availability_dates` | read | Get available dates |
| `acuity_availability_times` | read | Get available times |
| `acuity_availability_classes` | read | Get available classes |
| `acuity_list_clients` | read | List clients |
| `acuity_list_forms` | read | List intake forms |
| `acuity_list_products` | read | List products |
| `acuity_list_orders` | read | List orders |
| `acuity_list_blocks` | read | List blocked-off times |
| `acuity_list_labels` | read | List labels |
| `acuity_get_me` | read | Get account info |
| `acuity_create_appointment` | **write** | Create appointment |
| `acuity_cancel_appointment` | **write** | Cancel appointment |
| `acuity_reschedule_appointment` | **write** | Reschedule appointment |
| `acuity_create_client` | **write** | Create client |
| `acuity_usage_status` | meta | Usage status (free-tier meter) |
| `acuity_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
