# NPPES NPI Registry MCP by usefulapi

Look up US healthcare providers and organisations by NPI. Hosted, no local install.

**Live endpoint:** `https://nppes-npi-registry.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "nppes-npi-registry": {
      "url": "https://nppes-npi-registry.usefulapi.io/mcp"
    }
  }
}
```

This server needs **no credential** — NPPES NPI Registry is a public data source. On first
connect you approve the link, and your usage is metered to a private id.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nppes_lookup_npi` | read | Look up a provider by NPI number |
| `nppes_search_individuals` | read | Search individual providers |
| `nppes_search_organizations` | read | Search organization providers |
| `nppes_search` | read | Search the NPI registry (all criteria) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
