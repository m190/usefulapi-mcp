# Metriport MCP by usefulapi

Query patients, facilities, medical documents, and FHIR records from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Metriport API key.

**Live endpoint:** `https://metriport.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/metriport

## Add to Claude

```json
{
  "mcpServers": {
    "metriport": {
      "url": "https://metriport.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Metriport API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `metriport_list_facilities` | read | List facilities |
| `metriport_get_facility` | read | Get facility |
| `metriport_list_patients` | read | List patients |
| `metriport_get_patient` | read | Get patient |
| `metriport_list_documents` | read | List documents |
| `metriport_get_document_query_status` | read | Get document query status |
| `metriport_get_document_url` | read | Get document url |
| `metriport_list_consolidated_queries` | read | List consolidated queries |
| `metriport_get_medical_record_summary` | read | Get medical record summary |
| `metriport_create_patient` | **write** | Create patient |
| `metriport_start_document_query` | **write** | Start document query |
| `metriport_start_consolidated_query` | **write** | Start consolidated query |
| `metriport_usage_status` | meta | Usage status (free-tier meter) |
| `metriport_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
