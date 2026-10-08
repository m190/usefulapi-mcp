# Nookal MCP by usefulapi

Use [Nookal](https://www.nookal.com) from Claude, Cursor, or any MCP client — read Nookal locations, practitioners, availability, appointments, clients, cases and invoices.
Hosted, no local install: connect with your own Nookal credentials.

**Live endpoint:** `https://nookal.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/nookal

## Add to Claude

```json
{
  "mcpServers": {
    "nookal": {
      "url": "https://nookal.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Nookal API v3.0 Basic Key and region**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nookal_list_locations` | read | List locations |
| `nookal_list_staff` | read | List practitioners and staff |
| `nookal_list_services` | read | List services (appointment types) |
| `nookal_list_classes` | read | List class types |
| `nookal_get_availability` | read | Get appointment availability |
| `nookal_list_appointments` | read | List appointments |
| `nookal_search_clients` | read | Search clients (patients) |
| `nookal_get_client` | read | Get a client (patient) |
| `nookal_list_cases` | read | List treatment cases |
| `nookal_list_invoices` | read | List invoices |
| `nookal_list_payments` | read | List invoice payments |
| `nookal_usage_status` | meta | Usage status (free-tier meter) |
| `nookal_upgrade` | meta | Upgrade to Pro (unlimited) |
| `nookal_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `nookal_upgrade` (it returns a Stripe Checkout link). Cancel any time with `nookal_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `nookal_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Nookal.
