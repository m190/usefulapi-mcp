# Doklado MCP by usefulapi

Use your [Doklado](https://doklado.com/sk) account from Claude, Cursor, or any MCP client. Read documents, unprocessed documents, bank transactions and organizations, and set the export status of documents. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://doklado.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://doklado.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http doklado https://doklado.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=doklado&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdoklado.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "doklado": {
      "url": "https://doklado.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Doklado credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/doklado/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Doklado API key** (Prehľad účtu → API prepojenia → + Nové API prepojenie; a valid subscription is needed). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `doklado_list_organizations` | read | List organizations |
| `doklado_list_organization_members` | read | List organization members |
| `doklado_list_documents` | read | List documents |
| `doklado_get_document` | read | Get a document |
| `doklado_get_document_changes` | read | Get document changes |
| `doklado_get_attachments` | read | Get attachment download links |
| `doklado_list_unprocessed_documents` | read | List unprocessed documents |
| `doklado_list_bank_transactions` | read | List bank transactions |
| `doklado_set_exported` | **write** | Set exported status |
| `doklado_usage_status` | meta | Usage status (free-tier meter) |
| `doklado_request_feature` | meta | Request a missing feature |
| `doklado_upgrade` | meta | Upgrade to Pro or Pro+ |
| `doklado_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `doklado_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `doklado_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `doklado_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
