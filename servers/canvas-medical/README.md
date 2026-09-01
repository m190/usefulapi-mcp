# Canvas Medical MCP by usefulapi

Search and read a patient chart over the Canvas FHIR R4 API. Read-only. Hosted, no local install.

**Live endpoint:** `https://canvas-medical.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "canvas-medical": {
      "url": "https://canvas-medical.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Canvas Medical credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `canvas_search` | read | Search a FHIR resource |
| `canvas_read` | read | Read one FHIR resource |
| `canvas_get_patient_everything` | read | Get everything for one patient |
| `canvas_get_capability_statement` | read | Get the FHIR capability statement |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
