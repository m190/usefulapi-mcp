# ClinicalTrials.gov MCP by usefulapi

Search and read ClinicalTrials.gov studies, sites and outcomes. Hosted, no local install.

**Live endpoint:** `https://clinicaltrialsgov.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "clinicaltrialsgov": {
      "url": "https://clinicaltrialsgov.usefulapi.io/mcp"
    }
  }
}
```

This server needs **no credential** — ClinicalTrials.gov is a public data source. On first
connect you approve the link, and your usage is metered to a private id.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `search_studies` | read | Search clinical trials (ClinicalTrials.gov) |
| `get_study` | read | Get a clinical trial by NCT ID |
| `count_studies` | read | Count matching clinical trials |
| `list_field_values` | read | List value statistics for study fields |
| `get_study_metadata` | read | Get the study data-model (field tree) |
| `get_studies_stats` | read | Get study size statistics |
| `get_api_version` | read | Get the ClinicalTrials.gov API version |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
