# People Data Labs MCP by usefulapi

Enrich and search people and companies, resolve identities, and enrich IPs — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your People Data Labs API key.

**Live endpoint:** `https://peopledatalabs.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/peopledatalabs

## Add to Claude

```json
{
  "mcpServers": {
    "peopledatalabs": {
      "url": "https://peopledatalabs.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your People Data Labs API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pdl_person_enrich` | read | Pdl person enrich |
| `pdl_person_identify` | read | Pdl person identify |
| `pdl_person_search` | read | Pdl person search |
| `pdl_company_enrich` | read | Pdl company enrich |
| `pdl_company_search` | read | Pdl company search |
| `pdl_ip_enrich` | read | Pdl ip enrich |
| `pdl_autocomplete` | read | Pdl autocomplete |
| `pdl_job_posting_search` | read | Pdl job posting search |
| `peopledatalabs_usage_status` | meta | Usage status (free-tier meter) |
| `peopledatalabs_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
