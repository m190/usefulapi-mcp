# Smoobu MCP by usefulapi

Use [Smoobu](https://smoobu.com) from Claude, Cursor, or any MCP client — check properties, reservations, rates, availability, guest messages and guests, and create or update bookings.
Hosted, no local install: connect with your own Smoobu credentials.

**Live endpoint:** `https://smoobu.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/smoobu

## Add to Claude

```json
{
  "mcpServers": {
    "smoobu": {
      "url": "https://smoobu.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Smoobu API key and API secret** (Settings → Advanced → API Keys).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smoobu_get_user` | read | Get the current user |
| `smoobu_list_apartments` | read | List properties |
| `smoobu_get_apartment` | read | Get one property |
| `smoobu_list_reservations` | read | List reservations |
| `smoobu_get_reservation` | read | Get one reservation |
| `smoobu_list_price_elements` | read | List a reservation's price elements |
| `smoobu_get_reservation_placeholders` | read | Get a reservation's message placeholders |
| `smoobu_get_rates` | read | Get rates and availability |
| `smoobu_check_availability` | read | Check availability and quote a stay |
| `smoobu_list_message_threads` | read | List inbox threads |
| `smoobu_list_reservation_messages` | read | List a reservation's messages |
| `smoobu_list_guests` | read | List guests |
| `smoobu_get_guest` | read | Get one guest |
| `smoobu_list_addons` | read | List add-ons |
| `smoobu_list_custom_placeholders` | read | List custom placeholders |
| `smoobu_create_reservation` | **write** | Create a reservation |
| `smoobu_update_reservation` | **write** | Update a reservation |
| `smoobu_set_rates` | **write** | Set rates and minimum stays |
| `smoobu_send_message_to_guest` | **write** | Send a message to a guest |
| `smoobu_send_message_to_host` | **write** | Post a message to the host |
| `smoobu_usage_status` | meta | Usage status (free-tier meter) |
| `smoobu_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by Smoobu.
