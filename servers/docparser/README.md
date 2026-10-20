# Docparser MCP by usefulapi

Use [Docparser](https://docparser.com) from Claude, Cursor, or any MCP client — list parsers, import documents, poll their status and read the parsed data.
Hosted, no local install: connect with your own Docparser credentials.

**Live endpoint:** `https://docparser.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/docparser

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://docparser.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http docparser https://docparser.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=docparser&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdocparser.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "docparser": {
      "url": "https://docparser.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Docparser credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/docparser/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `docparser_ping` | read | Check API key |
| `docparser_list_parsers` | read | List parsers |
| `docparser_list_parser_models` | read | List parser model layouts |
| `docparser_get_document_status` | read | Get document status |
| `docparser_get_document_results` | read | Get parsed data of one document |
| `docparser_list_document_results` | read | List parsed data of many documents |
| `docparser_fetch_document_from_url` | **write** | Import a document from a URL |
| `docparser_upload_document` | **write** | Upload a document (base64) |
| `docparser_reparse_documents` | **write** | Re-parse documents |
| `docparser_usage_status` | meta | Usage status (free-tier meter) |
| `docparser_request_feature` | meta | Request a missing feature |
| `docparser_upgrade` | meta | Upgrade to Pro (unlimited) |
| `docparser_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `docparser_upgrade` (it returns a Stripe Checkout link). Cancel any time with `docparser_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `docparser_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Docparser.
