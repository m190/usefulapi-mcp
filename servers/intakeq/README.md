# IntakeQ MCP by usefulapi

Use [IntakeQ](https://intakeq.com) from Claude, Cursor, or any MCP client — search clients, review intake forms and treatment notes, check invoices, and book or reschedule appointments.
Hosted, no local install: connect with your own IntakeQ credentials.

**Live endpoint:** `https://intakeq.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/intakeq

## Add to Claude

```json
{
  "mcpServers": {
    "intakeq": {
      "url": "https://intakeq.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **IntakeQ API key** (More > Settings > Integrations > Developer API; main account owner only, paid plan), no other setup.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `intakeq_list_clients` | read | Search clients |
| `intakeq_get_client_diagnoses` | read | Get a client's diagnoses |
| `intakeq_list_appointments` | read | List appointments |
| `intakeq_get_appointment` | read | Get one appointment |
| `intakeq_get_booking_settings` | read | Get booking settings |
| `intakeq_list_intakes` | read | List intake forms |
| `intakeq_get_intake` | read | Get a full intake form |
| `intakeq_list_questionnaires` | read | List questionnaire templates |
| `intakeq_list_practitioners` | read | List practitioners |
| `intakeq_list_notes` | read | List treatment notes |
| `intakeq_get_note` | read | Get a full treatment note |
| `intakeq_list_invoices` | read | List invoices |
| `intakeq_get_invoice` | read | Get one invoice |
| `intakeq_save_client` | **write** | Create or update a client |
| `intakeq_add_client_tag` | **write** | Tag a client |
| `intakeq_create_appointment` | **write** | Create an appointment |
| `intakeq_update_appointment` | **write** | Update or reschedule an appointment |
| `intakeq_cancel_appointment` | **write** | Cancel an appointment |
| `intakeq_send_questionnaire` | **write** | Send an intake questionnaire |
| `intakeq_usage_status` | meta | Usage status (free-tier meter) |
| `intakeq_upgrade` | meta | Upgrade to Pro (unlimited) |
| `intakeq_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `intakeq_upgrade` (it returns a Stripe Checkout link). Cancel any time with `intakeq_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `intakeq_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by IntakeQ.
