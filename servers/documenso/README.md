# Documenso MCP by usefulapi

Read and send documents for signature — templates, recipients, fields and folders. Hosted, no local install.

**Live endpoint:** `https://documenso.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://documenso.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http documenso https://documenso.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=documenso&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdocumenso.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "documenso": {
      "url": "https://documenso.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Documenso credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/documenso/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Documenso credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `documenso_list_documents` | read | List documents |
| `documenso_get_document` | read | Get one document |
| `documenso_get_documents_by_ids` | read | Get several documents by id |
| `documenso_get_recipient` | read | Get one recipient |
| `documenso_get_field` | read | Get one field |
| `documenso_list_document_attachments` | read | List document attachments |
| `documenso_get_document_download_url` | read | Get a document download link |
| `documenso_list_templates` | read | List templates |
| `documenso_get_template` | read | Get one template |
| `documenso_list_folders` | read | List folders |
| `documenso_create_document_from_template` | **write** | Create a document from a template |
| `documenso_add_recipient` | **write** | Add a recipient to a document |
| `documenso_distribute_document` | **write** | Send a document for signature |
| `documenso_redistribute_document` | **write** | Resend a document to recipients |
| `documenso_duplicate_document` | **write** | Duplicate a document |
| `documenso_create_folder` | **write** | Create a folder |
| `documenso_usage_status` | meta | Usage status (free-tier meter) |
| `documenso_request_feature` | meta | Request a missing feature |
| `documenso_upgrade` | meta | Upgrade to Pro or Pro+ |
| `documenso_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `documenso_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `documenso_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `documenso_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
