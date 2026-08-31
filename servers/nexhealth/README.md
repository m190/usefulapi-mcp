# NexHealth MCP by usefulapi

Read and write NexHealth appointments, patients, providers and locations. Hosted, no local install.

**Live endpoint:** `https://nexhealth.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "nexhealth": {
      "url": "https://nexhealth.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **NexHealth credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nexhealth_list_locations` | read | List locations |
| `nexhealth_list_providers` | read | List providers |
| `nexhealth_search_patients` | read | Search patients |
| `nexhealth_get_patient` | read | Get patient |
| `nexhealth_list_appointments` | read | List appointments |
| `nexhealth_get_appointment` | read | Get appointment |
| `nexhealth_list_appointment_slots` | read | List appointment slots |
| `nexhealth_list_appointment_types` | read | List appointment types |
| `nexhealth_list_operatories` | read | List operatories |
| `nexhealth_list_insurance_plans` | read | List insurance plans |
| `nexhealth_list_insurance_coverages` | read | List insurance coverages |
| `nexhealth_list_procedures` | read | List procedures |
| `nexhealth_sync_status` | read | Sync status |
| `nexhealth_create_patient` | **write** | Create patient |
| `nexhealth_book_appointment` | **write** | Book appointment |
| `nexhealth_update_appointment` | **write** | Update appointment |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
