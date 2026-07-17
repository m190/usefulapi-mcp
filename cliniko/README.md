# Cliniko MCP by usefulapi

Manage your Cliniko practice — patients, appointments, availability, invoices and treatment notes — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Cliniko API key.

**Live endpoint:** `https://cliniko.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/cliniko

## Add to Claude

```json
{
  "mcpServers": {
    "cliniko": {
      "url": "https://cliniko.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Cliniko API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cliniko_get_account` | read | Get account |
| `cliniko_list_patients` | read | List patients |
| `cliniko_get_patient` | read | Get patient |
| `cliniko_list_appointments` | read | List appointments |
| `cliniko_get_appointment` | read | Get appointment |
| `cliniko_list_practitioners` | read | List practitioners |
| `cliniko_list_businesses` | read | List businesses |
| `cliniko_list_appointment_types` | read | List appointment types |
| `cliniko_list_products` | read | List products |
| `cliniko_list_invoices` | read | List invoices |
| `cliniko_get_invoice` | read | Get invoice |
| `cliniko_list_treatment_notes` | read | List treatment notes |
| `cliniko_get_treatment_note` | read | Get treatment note |
| `cliniko_list_available_times` | read | List available times |
| `cliniko_next_available_time` | read | Next available time |
| `cliniko_create_patient` | **write** | Create patient |
| `cliniko_create_appointment` | **write** | Create appointment |
| `cliniko_usage_status` | meta | Usage status (free-tier meter) |
| `cliniko_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
