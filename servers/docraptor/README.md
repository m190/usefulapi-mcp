# DocRaptor MCP by usefulapi

Generate PDF & Excel documents from HTML or a URL, from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your DocRaptor API key.

**Live endpoint:** `https://docraptor.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/docraptor

## Add to Claude

```json
{
  "mcpServers": {
    "docraptor": {
      "url": "https://docraptor.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your DocRaptor API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `docraptor_create_document` | **write** | Create a document (PDF/XLS/XLSX) |
| `docraptor_get_document_status` | read | Get async document status |
| `docraptor_list_documents` | read | List documents |
| `docraptor_list_ip_addresses` | read | List DocRaptor IP addresses |
| `docraptor_usage_status` | meta | Usage status (free-tier meter) |
| `docraptor_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
