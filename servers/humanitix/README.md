# Humanitix MCP by usefulapi

Use [Humanitix](https://humanitix.com) from Claude, Cursor, or any MCP client — read events, orders, tickets and live check-in counts, and check tickets in or out.
Hosted, no local install: connect with your own Humanitix credentials.

**Live endpoint:** `https://humanitix.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/humanitix

## Add to Claude

```json
{
  "mcpServers": {
    "humanitix": {
      "url": "https://humanitix.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Humanitix Public API key** (console → Account → Advanced → Public API key).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `humanitix_list_events` | read | List events |
| `humanitix_get_event` | read | Get one event |
| `humanitix_get_check_in_count` | read | Get check-in count |
| `humanitix_list_orders` | read | List an event's orders |
| `humanitix_get_order` | read | Get one order |
| `humanitix_list_tickets` | read | List an event's tickets |
| `humanitix_get_ticket` | read | Get one ticket |
| `humanitix_list_tags` | read | List tags |
| `humanitix_get_tag` | read | Get one tag |
| `humanitix_list_global_events` | read | List platform-wide events |
| `humanitix_list_global_event_dates` | read | List platform-wide event dates |
| `humanitix_check_in_ticket` | **write** | Check in a ticket |
| `humanitix_check_out_ticket` | **write** | Check out a ticket |
| `humanitix_create_event` | **write** | Create an event |
| `humanitix_update_event` | **write** | Update an event |
| `humanitix_usage_status` | meta | Usage status (free-tier meter) |
| `humanitix_upgrade` | meta | Upgrade to Pro (unlimited) |
| `humanitix_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `humanitix_upgrade` (it returns a Stripe Checkout link). Cancel any time with `humanitix_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `humanitix_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Humanitix.
