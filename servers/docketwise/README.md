# Docketwise MCP by usefulapi

Use your [Docketwise](https://www.docketwise.com) account from Claude, Cursor, or any MCP client. It reads contacts, matters, receipts, invoices and documents, and it creates contacts, matters and notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://docketwise.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://docketwise.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http docketwise https://docketwise.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=docketwise&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdocketwise.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "docketwise": {
      "url": "https://docketwise.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Docketwise account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/docketwise/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Docketwise and approve access. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `docketwise_list_contacts` | read | List contacts |
| `docketwise_get_contact` | read | Get a contact |
| `docketwise_list_matters` | read | List matters |
| `docketwise_get_matter` | read | Get a matter |
| `docketwise_list_matter_receipts` | read | List a matter's receipts |
| `docketwise_list_matter_types` | read | List matter types |
| `docketwise_list_matter_statuses` | read | List matter statuses |
| `docketwise_list_invoices` | read | List invoices |
| `docketwise_get_invoice` | read | Get an invoice |
| `docketwise_list_invoice_charges` | read | List an invoice's charges |
| `docketwise_list_documents` | read | List documents |
| `docketwise_get_document` | read | Get a document |
| `docketwise_get_document_download_url` | read | Get a document download link |
| `docketwise_list_users` | read | List users |
| `docketwise_list_countries` | read | List countries |
| `docketwise_create_contact` | **write** | Create a contact |
| `docketwise_update_contact` | **write** | Update a contact |
| `docketwise_create_matter` | **write** | Create a matter |
| `docketwise_create_note` | **write** | Create a note |
| `docketwise_update_note` | **write** | Update a note |
| `docketwise_usage_status` | meta | Usage status (free-tier meter) |
| `docketwise_request_feature` | meta | Request a missing feature |
| `docketwise_upgrade` | meta | Upgrade to Pro or Pro+ |
| `docketwise_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `docketwise_upgrade` (it returns a Stripe Checkout link). Cancel any time with `docketwise_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `docketwise_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
