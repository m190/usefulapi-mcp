# Api2Pdf MCP by usefulapi

Generate PDFs and images from HTML, URLs, Markdown or office files, from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Api2Pdf API key.

**Live endpoint:** `https://api2pdf.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/api2pdf

## Add to Claude

```json
{
  "mcpServers": {
    "api2pdf": {
      "url": "https://api2pdf.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Api2Pdf API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `api2pdf_get_balance` | read | Get balance |
| `api2pdf_get_status` | read | Get status |
| `api2pdf_html_to_pdf` | **write** | Html to pdf |
| `api2pdf_url_to_pdf` | **write** | Url to pdf |
| `api2pdf_markdown_to_pdf` | **write** | Markdown to pdf |
| `api2pdf_html_to_image` | **write** | Html to image |
| `api2pdf_url_to_image` | **write** | Url to image |
| `api2pdf_wkhtml_to_pdf` | **write** | Wkhtml to pdf |
| `api2pdf_office_to_pdf` | **write** | Office to pdf |
| `api2pdf_merge_pdfs` | **write** | Merge pdfs |
| `api2pdf_compress_pdf` | **write** | Compress pdf |
| `api2pdf_extract_pages` | **write** | Extract pages |
| `api2pdf_add_password` | **write** | Add password |
| `api2pdf_convert_to_markdown` | **write** | Convert to markdown |
| `api2pdf_generate_barcode` | **write** | Generate barcode |
| `api2pdf_delete_file` | **write** | Delete file |
| `api2pdf_usage_status` | meta | Usage status (free-tier meter) |
| `api2pdf_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
