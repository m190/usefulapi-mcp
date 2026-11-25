# PDF.co MCP by usefulapi

Use your [PDF.co](https://pdf.co) account from Claude, Cursor, or any MCP client. Read and parse PDFs, extract text and tables, and create processed copies such as merged, split or searchable PDFs. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://pdf-co.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pdf-co.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pdf-co https://pdf-co.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pdf-co&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpdf-co.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pdf-co": {
      "url": "https://pdf-co.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PDF.co credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pdf-co/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **PDF.co API key** (PDF.co dashboard → API Key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pdfco_get_credit_balance` | read | Get credit balance |
| `pdfco_get_pdf_info` | read | Get PDF info |
| `pdfco_find_text` | read | Find text in PDF |
| `pdfco_list_parser_templates` | read | List document parser templates |
| `pdfco_parse_document` | read | Parse document with template |
| `pdfco_pdf_to_text` | read | Extract text from PDF |
| `pdfco_pdf_to_csv` | read | Convert PDF tables to CSV |
| `pdfco_merge_pdfs` | **write** | Merge PDFs |
| `pdfco_split_pdf` | **write** | Split PDF |
| `pdfco_compress_pdf` | **write** | Compress PDF |
| `pdfco_add_pdf_password` | **write** | Add password to PDF |
| `pdfco_remove_pdf_password` | **write** | Remove password from PDF |
| `pdfco_url_to_pdf` | **write** | Web page to PDF |
| `pdfco_markdown_to_pdf` | **write** | Markdown to PDF |
| `pdfco_excel_to_pdf` | **write** | Excel to PDF |
| `pdfco_make_searchable` | **write** | Make PDF searchable (OCR) |
| `pdfco_delete_pages` | **write** | Delete PDF pages |
| `pdfco_rotate_pages` | **write** | Rotate PDF pages |
| `pdfco_usage_status` | meta | Usage status (free-tier meter) |
| `pdfco_request_feature` | meta | Request a missing feature |
| `pdfco_upgrade` | meta | Upgrade to Pro or Pro+ |
| `pdfco_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `pdfco_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `pdfco_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `pdfco_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
