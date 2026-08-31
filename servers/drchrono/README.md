# DrChrono MCP by usefulapi

Read and write DrChrono patients, appointments, offices and clinical notes. Hosted, no local install.

**Live endpoint:** `https://drchrono.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "drchrono": {
      "url": "https://drchrono.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **DrChrono credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `drchrono_list_patients` | read | List patients |
| `drchrono_get_patient` | read | Get a patient |
| `drchrono_list_appointments` | read | List appointments |
| `drchrono_list_offices` | read | List offices |
| `drchrono_list_doctors` | read | List doctors |
| `drchrono_list_clinical_notes` | read | List clinical notes |
| `drchrono_list_problems` | read | List problems |
| `drchrono_list_medications` | read | List medications |
| `drchrono_list_allergies` | read | List allergies |
| `drchrono_list_lab_results` | read | List lab results |
| `drchrono_list_lab_orders` | read | List lab orders |
| `drchrono_list_patient_payments` | read | List patient payments |
| `drchrono_list_line_items` | read | List line items |
| `drchrono_create_appointment` | **write** | Create appointment |
| `drchrono_create_patient` | **write** | Create patient |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
