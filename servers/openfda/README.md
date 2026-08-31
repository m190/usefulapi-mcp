# openFDA MCP by usefulapi

Search openFDA drug, device, food and adverse-event datasets. Hosted, no local install.

**Live endpoint:** `https://openfda.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "openfda": {
      "url": "https://openfda.usefulapi.io/mcp"
    }
  }
}
```

This server needs **no credential** — openFDA is a public data source. On first
connect you approve the link, and your usage is metered to a private id.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `search_drug_events` | read | Search drug adverse-event reports (FAERS) |
| `search_drug_labels` | read | Search drug product labels (SPL) |
| `search_drug_ndc` | read | Search the National Drug Code directory |
| `search_drug_recalls` | read | Search drug recall enforcement reports |
| `search_drugsfda` | read | Search Drugs@FDA approved products |
| `search_drug_shortages` | read | Search drug shortages |
| `search_device_events` | read | Search device adverse-event reports (MAUDE) |
| `search_device_510k` | read | Search 510(k) premarket clearances |
| `search_device_recalls` | read | Search device recalls |
| `search_device_classification` | read | Search device classification |
| `search_food_events` | read | Search food/supplement/cosmetic adverse events (CAERS) |
| `search_food_recalls` | read | Search food recall enforcement reports |
| `count` | read | Count/aggregate over an openFDA dataset |
| `openfda_query` | read | Query any openFDA endpoint (generic) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
