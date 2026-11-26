# SignWell MCP by usefulapi

Use your [SignWell](https://www.signwell.com) account from Claude, Cursor, or any MCP client. Create draft signature documents, send them, send reminders, and read document status and get links to signed PDFs. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://signwell.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://signwell.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http signwell https://signwell.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=signwell&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsignwell.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "signwell": {
      "url": "https://signwell.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SignWell credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/signwell/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API token** (Settings → API in SignWell).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `signwell_get_credentials` | read | Show the connected account |
| `signwell_get_account` | read | Get account settings |
| `signwell_get_document` | read | Get a document |
| `signwell_get_completed_pdf_link` | read | Get the completed PDF link |
| `signwell_get_template` | read | Get a template |
| `signwell_list_webhooks` | read | List webhooks |
| `signwell_list_bulk_sends` | read | List bulk sends |
| `signwell_get_bulk_send` | read | Get a bulk send |
| `signwell_get_bulk_send_documents` | read | List documents of a bulk send |
| `signwell_create_document` | **write** | Create a draft document |
| `signwell_create_document_from_template` | **write** | Create a draft document from a template |
| `signwell_send_document` | **write** | Send a document for signature |
| `signwell_send_reminder` | **write** | Send a signing reminder |
| `signwell_delete_document` | **write** | Delete a document |
| `signwell_usage_status` | meta | Usage status (free-tier meter) |
| `signwell_request_feature` | meta | Request a missing feature |
| `signwell_upgrade` | meta | Upgrade to Pro or Pro+ |
| `signwell_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `signwell_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `signwell_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `signwell_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
