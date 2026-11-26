# Docsumo MCP by usefulapi

Use your [Docsumo](https://www.docsumo.com) account from Claude, Cursor, or any MCP client. Read documents, extracted fields, review links, agents and cases, and upload a document from a public URL. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://docsumo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://docsumo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http docsumo https://docsumo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=docsumo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdocsumo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "docsumo": {
      "url": "https://docsumo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Docsumo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/docsumo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Docsumo API key** (Settings → Webhook API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `docsumo_get_account` | read | Get account and document types |
| `docsumo_get_documents_summary` | read | Get documents summary |
| `docsumo_list_documents` | read | List documents |
| `docsumo_get_document` | read | Get document details |
| `docsumo_get_extracted_data` | read | Get extracted data |
| `docsumo_get_review_url` | read | Get document review URL |
| `docsumo_get_folder_review_url` | read | Get folder review URL |
| `docsumo_upload_document_from_url` | **write** | Upload document from URL |
| `docsumo_list_agents` | read | List agents |
| `docsumo_get_agent` | read | Get case type details |
| `docsumo_list_cases` | read | List cases |
| `docsumo_get_case` | read | Get case overview |
| `docsumo_usage_status` | meta | Usage status (free-tier meter) |
| `docsumo_request_feature` | meta | Request a missing feature |
| `docsumo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `docsumo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `docsumo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `docsumo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `docsumo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
