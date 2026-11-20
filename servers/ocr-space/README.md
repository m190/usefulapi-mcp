# OCR.space MCP by usefulapi

Use your [OCR.space](https://ocr.space) account from Claude, Cursor, or any MCP client. Read text and tables from images and PDFs, and make searchable PDFs. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ocr-space.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ocr-space.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ocr-space https://ocr-space.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ocr-space&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Focr-space.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ocr-space": {
      "url": "https://ocr-space.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your OCR.space credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ocr-space/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **OCR.space API key**. Request it at ocr.space/ocrapi/freekey; the key arrives by e-mail. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ocrspace_ocr_url` | **write** | OCR an image or PDF from a URL |
| `ocrspace_ocr_base64` | **write** | OCR a base64-encoded image or PDF |
| `ocrspace_create_searchable_pdf` | **write** | Create a searchable PDF from a URL |
| `ocrspace_list_languages` | read | List OCR languages, engines and limits |
| `ocrspace_usage_status` | meta | Usage status (free-tier meter) |
| `ocrspace_request_feature` | meta | Request a missing feature |
| `ocrspace_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ocrspace_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ocrspace_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ocrspace_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ocrspace_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
