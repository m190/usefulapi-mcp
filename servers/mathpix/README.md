# Mathpix MCP by usefulapi

Use your [Mathpix](https://mathpix.com) account from Claude, Cursor, or any MCP client. Run OCR on images and PDFs into Mathpix Markdown or LaTeX, billed by Mathpix, then read the results and check usage. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://mathpix.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mathpix.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mathpix https://mathpix.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mathpix&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmathpix.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mathpix": {
      "url": "https://mathpix.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Mathpix credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mathpix/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Mathpix app_id** and **Mathpix app_key** (console.mathpix.com → your OCR API organization → API keys) and pick a **Data region** (Global or EU). The server validates the keys and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mathpix_get_usage` | read | Get API usage |
| `mathpix_list_image_results` | read | List image OCR results |
| `mathpix_list_documents` | read | List processed documents |
| `mathpix_get_document_status` | read | Get document status |
| `mathpix_get_conversion_status` | read | Get conversion status |
| `mathpix_get_document_output` | read | Get document output |
| `mathpix_get_conversion_output` | read | Get Markdown conversion output |
| `mathpix_ocr_image` | **write** | OCR an image (billed) |
| `mathpix_submit_document` | **write** | Submit a document (billed) |
| `mathpix_convert_markdown` | **write** | Convert Markdown |
| `mathpix_delete_document` | **write** | Delete a document |
| `mathpix_delete_conversion` | **write** | Delete a Markdown conversion |
| `mathpix_usage_status` | meta | Usage status (free-tier meter) |
| `mathpix_request_feature` | meta | Request a missing feature |
| `mathpix_upgrade` | meta | Upgrade to Pro or Pro+ |
| `mathpix_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `mathpix_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `mathpix_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `mathpix_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
