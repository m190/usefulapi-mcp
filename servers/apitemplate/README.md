# APITemplate.io MCP by usefulapi

Use [APITemplate.io](https://apitemplate.io) from Claude, Cursor, or any MCP client — templates and generated objects, plus PDF and image generation from templates, HTML, Markdown or a URL.
Hosted, no local install: connect with your own APITemplate.io credentials.

**Live endpoint:** `https://apitemplate.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/apitemplate

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://apitemplate.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http apitemplate https://apitemplate.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=apitemplate&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fapitemplate.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "apitemplate": {
      "url": "https://apitemplate.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your APITemplate.io credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/apitemplate/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `apitemplate_get_account` | read | Get account and quota |
| `apitemplate_list_templates` | read | List templates |
| `apitemplate_get_template` | read | Get PDF template source |
| `apitemplate_list_objects` | read | List generated files |
| `apitemplate_create_pdf` | **write** | Create a PDF from a template |
| `apitemplate_create_image` | **write** | Create an image from a template |
| `apitemplate_create_pdf_from_html` | **write** | Create a PDF from HTML |
| `apitemplate_create_pdf_from_markdown` | **write** | Create a PDF from Markdown |
| `apitemplate_create_pdf_from_url` | **write** | Create a PDF from a web page URL |
| `apitemplate_merge_pdfs` | **write** | Merge PDFs |
| `apitemplate_usage_status` | meta | Usage status (free-tier meter) |
| `apitemplate_request_feature` | meta | Request a missing feature |
| `apitemplate_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `apitemplate_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `apitemplate_upgrade` (it returns a Stripe Checkout link). Cancel any time with `apitemplate_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `apitemplate_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by APITemplate.io.
