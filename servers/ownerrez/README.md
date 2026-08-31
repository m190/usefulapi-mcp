# OwnerRez MCP by usefulapi

Manage OwnerRez properties, bookings, guests, quotes and inquiries. Hosted, no local install.

**Live endpoint:** `https://ownerrez.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "ownerrez": {
      "url": "https://ownerrez.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **OwnerRez credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `get_me` | read | Get current user |
| `list_properties` | read | List properties |
| `get_property` | read | Get a property |
| `list_bookings` | read | List bookings |
| `get_booking` | read | Get a booking |
| `list_guests` | read | List guests |
| `get_guest` | read | Get a guest |
| `list_quotes` | read | List quotes |
| `get_quote` | read | Get a quote |
| `list_listings` | read | List listings |
| `get_listing` | read | Get a listing |
| `list_listing_sites` | read | List listing sites |
| `list_owners` | read | List owners |
| `list_inquiries` | read | List inquiries |
| `list_messages` | read | List messages |
| `list_payments` | read | List payments |
| `get_payment` | read | Get a payment |
| `list_field_definitions` | read | List custom-field definitions |
| `ownerrez_request` | read | Raw read request |
| `create_guest` | **write** | Create a guest |
| `update_guest` | **write** | Update a guest |
| `create_booking` | **write** | Create a booking |
| `update_booking` | **write** | Update a booking |
| `create_quote` | **write** | Create a quote |
| `create_message` | **write** | Create a message |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
