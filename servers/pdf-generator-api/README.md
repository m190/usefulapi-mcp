# PDF Generator API MCP by usefulapi

Use your [PDF Generator API](https://pdfgeneratorapi.com) account from Claude, Cursor, or any MCP client. It lists templates and documents, generates PDFs, copies templates, and converts HTML or web pages to PDF. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://pdf-generator-api.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pdf-generator-api.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pdf-generator-api https://pdf-generator-api.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pdf-generator-api&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpdf-generator-api.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pdf-generator-api": {
      "url": "https://pdf-generator-api.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PDF Generator API credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pdf-generator-api/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API key** and **API secret** (Settings → API Integration in PDF Generator API) and your **workspace identifier** (your account email). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pdfgeneratorapi_get_workspace` | read | Get workspace |
| `pdfgeneratorapi_list_templates` | read | List templates |
| `pdfgeneratorapi_get_template` | read | Get template |
| `pdfgeneratorapi_get_template_data_fields` | read | Get template data fields |
| `pdfgeneratorapi_list_documents` | read | List generated documents |
| `pdfgeneratorapi_generate_document` | **write** | Generate document from template |
| `pdfgeneratorapi_copy_template` | **write** | Copy template |
| `pdfgeneratorapi_convert_html_to_pdf` | **write** | Convert HTML to PDF |
| `pdfgeneratorapi_convert_url_to_pdf` | **write** | Convert web page to PDF |
| `pdfgeneratorapi_usage_status` | meta | Usage status (free-tier meter) |
| `pdfgeneratorapi_request_feature` | meta | Request a missing feature |
| `pdfgeneratorapi_upgrade` | meta | Upgrade to Pro or Pro+ |
| `pdfgeneratorapi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `pdfgeneratorapi_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `pdfgeneratorapi_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `pdfgeneratorapi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
