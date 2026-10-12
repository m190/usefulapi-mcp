# CraftMyPDF MCP by usefulapi

Use [CraftMyPDF](https://craftmypdf.com) from Claude, Cursor, or any MCP client — templates, versions, usage and transactions, plus PDF and image generation and PDF merges.
Hosted, no local install: connect with your own CraftMyPDF credentials.

**Live endpoint:** `https://craftmypdf.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/craftmypdf

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://craftmypdf.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http craftmypdf https://craftmypdf.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=craftmypdf&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcraftmypdf.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "craftmypdf": {
      "url": "https://craftmypdf.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CraftMyPDF credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/craftmypdf/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `craftmypdf_get_account_info` | read | Get account info |
| `craftmypdf_list_transactions` | read | List transactions |
| `craftmypdf_list_templates` | read | List templates |
| `craftmypdf_get_template` | read | Get template |
| `craftmypdf_list_template_versions` | read | List template versions |
| `craftmypdf_query_template_usage` | read | Query template usage |
| `craftmypdf_get_pdf_info` | read | Get PDF info |
| `craftmypdf_create_pdf` | **write** | Create PDF from template |
| `craftmypdf_create_image` | **write** | Create image from template |
| `craftmypdf_create_pdf_from_templates` | **write** | Create one PDF from several templates |
| `craftmypdf_merge_pdfs` | **write** | Merge PDFs by URL |
| `craftmypdf_usage_status` | meta | Usage status (free-tier meter) |
| `craftmypdf_request_feature` | meta | Request a missing feature |
| `craftmypdf_upgrade` | meta | Upgrade to Pro (unlimited) |
| `craftmypdf_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `craftmypdf_upgrade` (it returns a Stripe Checkout link). Cancel any time with `craftmypdf_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `craftmypdf_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by CraftMyPDF.
