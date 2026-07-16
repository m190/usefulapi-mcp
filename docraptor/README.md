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
| `docraptor_get_document_status` | read | Poll an async render job; returns status + download URL |
| `docraptor_list_documents` | read | List documents created on the account |
| `docraptor_list_ip_addresses` | read | List DocRaptor's outbound IPs for allowlisting |
| `docraptor_create_document` | **write** | Render a PDF/XLS/XLSX from HTML or a URL (test:true = free watermarked) |
| `docraptor_usage_status` | meta | Your tier + usage this month |
| `docraptor_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
