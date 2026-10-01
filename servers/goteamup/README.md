# TeamUp MCP by usefulapi

Use [TeamUp](https://goteamup.com) from Claude, Cursor, or any MCP client — check classes, attendance, customers, memberships and invoices, and register customers for events.
Hosted, no local install: connect with your own TeamUp credentials.

**Live endpoint:** `https://goteamup.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/goteamup

## Add to Claude

```json
{
  "mcpServers": {
    "goteamup": {
      "url": "https://goteamup.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide a **TeamUp M2M API token** (Business Dashboard → Settings → Integrations → API Integration → M2M Tokens), plus an optional provider ID.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `goteamup_get_authenticated_application` | read | Get the authenticated application |
| `goteamup_list_customers` | read | List customers |
| `goteamup_get_customer` | read | Get one customer |
| `goteamup_list_events` | read | List events (classes and appointments) |
| `goteamup_get_event` | read | Get one event |
| `goteamup_list_attendances` | read | List attendances (bookings) |
| `goteamup_list_customer_memberships` | read | List customer memberships |
| `goteamup_get_customer_membership` | read | Get one customer membership |
| `goteamup_list_memberships` | read | List memberships (plans) |
| `goteamup_list_offering_types` | read | List offering types (class types) |
| `goteamup_list_instructors` | read | List instructors |
| `goteamup_list_venues` | read | List venues |
| `goteamup_list_invoices` | read | List invoices |
| `goteamup_get_invoice` | read | Get one invoice |
| `goteamup_list_crm_interactions` | read | List CRM interactions |
| `goteamup_create_customer` | **write** | Create (invite) a customer |
| `goteamup_register_customer_for_event` | **write** | Book a customer into an event |
| `goteamup_unregister_customer_from_event` | **write** | Remove a customer from an event |
| `goteamup_confirm_attendance` | **write** | Check a customer in |
| `goteamup_log_crm_interaction` | **write** | Log a CRM interaction |
| `goteamup_usage_status` | meta | Usage status (free-tier meter) |
| `goteamup_upgrade` | meta | Upgrade to Pro (unlimited) |
| `goteamup_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `goteamup_upgrade` (it returns a Stripe Checkout link). Cancel any time with `goteamup_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `goteamup_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by TeamUp.
