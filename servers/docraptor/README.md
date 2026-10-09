# DocRaptor MCP by usefulapi

Generate PDF & Excel documents from HTML or a URL, from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your DocRaptor API key.

**Live endpoint:** `https://docraptor.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/docraptor

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://docraptor.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http docraptor https://docraptor.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=docraptor&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdocraptor.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "docraptor": {
      "url": "https://docraptor.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your DocRaptor credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/docraptor/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your DocRaptor API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `docraptor_create_document` | **write** | Create a document (PDF/XLS/XLSX) |
| `docraptor_get_document_status` | read | Get async document status |
| `docraptor_list_documents` | read | List documents |
| `docraptor_list_ip_addresses` | read | List DocRaptor IP addresses |
| `docraptor_usage_status` | meta | Usage status (free-tier meter) |
| `docraptor_request_feature` | meta | Request a missing feature |
| `docraptor_upgrade` | meta | Upgrade to Pro (unlimited) |
| `docraptor_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `docraptor_upgrade` (it returns a Stripe Checkout link). Cancel any time with `docraptor_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `docraptor_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
