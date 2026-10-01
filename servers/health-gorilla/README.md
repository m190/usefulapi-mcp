# Health Gorilla MCP by usefulapi

Query Health Gorilla FHIR patients, conditions, medications and lab results. Hosted, no local install.

**Live endpoint:** `https://health-gorilla.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "health-gorilla": {
      "url": "https://health-gorilla.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Health Gorilla credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `healthgorilla_find_patients` | read | Find patients |
| `healthgorilla_get_patient` | read | Get patient |
| `healthgorilla_get_patient_everything` | read | Get patient $everything |
| `healthgorilla_list_conditions` | read | List conditions |
| `healthgorilla_list_medications` | read | List medications |
| `healthgorilla_list_allergies` | read | List allergies |
| `healthgorilla_list_immunizations` | read | List immunizations |
| `healthgorilla_list_observations` | read | List observations |
| `healthgorilla_list_diagnostic_reports` | read | List diagnostic reports |
| `healthgorilla_list_documents` | read | List documents |
| `healthgorilla_get_coverage` | read | Get coverage |
| `healthgorilla_get_binary` | read | Get binary (document content) |
| `healthgorilla_poll_query_status` | read | Poll query status |
| `healthgorilla_fhir_search` | read | Generic FHIR search |
| `healthgorilla_create_patient` | **write** | Create patient |
| `healthgorilla_start_patient360_query` | **write** | Start Patient360 query |
| `health_gorilla_usage_status` | meta | Usage status (free-tier meter) |
| `health_gorilla_upgrade` | meta | Upgrade to Pro (unlimited) |
| `health_gorilla_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `health_gorilla_upgrade` (it returns a Stripe Checkout link). Cancel any time with `health_gorilla_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `health_gorilla_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
