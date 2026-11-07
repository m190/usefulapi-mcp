# Parseo MCP by usefulapi

Use your Parseo account from Claude, Cursor, or any MCP client. Upload invoices for OCR, follow the jobs, and read, export and correct the extracted invoices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://parseo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://parseo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http parseo https://parseo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=parseo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fparseo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "parseo": {
      "url": "https://parseo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Parseo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/parseo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Parseo API key** (Parseo → Settings → API Keys) and an optional **client id** (`cl_…`) for a team-wide key. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `parseo_get_key_info` | read | Get API key info |
| `parseo_get_credit_balance` | read | Get credit balance |
| `parseo_get_quota` | read | Get quota snapshot |
| `parseo_get_usage` | read | Get usage metrics |
| `parseo_list_invoices` | read | List invoices |
| `parseo_get_invoice` | read | Get an invoice |
| `parseo_get_invoice_status` | read | Get invoice status |
| `parseo_export_invoice` | read | Export an invoice |
| `parseo_list_jobs` | read | List ingestion jobs |
| `parseo_get_job` | read | Get an ingestion job |
| `parseo_list_clients` | read | List clients |
| `parseo_get_client` | read | Get a client |
| `parseo_list_contacts` | read | List contacts |
| `parseo_get_contact` | read | Get a contact |
| `parseo_list_audit_logs` | read | List audit log |
| `parseo_upload_invoice` | **write** | Upload an invoice |
| `parseo_upload_invoices_batch` | **write** | Upload several invoices |
| `parseo_update_invoice` | **write** | Update an invoice |
| `parseo_mark_invoice_exported` | **write** | Mark an invoice as exported |
| `parseo_create_client` | **write** | Create a client |
| `parseo_update_client` | **write** | Update a client |
| `parseo_create_contact` | **write** | Create a contact |
| `parseo_update_contact` | **write** | Update a contact |
| `parseo_usage_status` | meta | Usage status (free-tier meter) |
| `parseo_request_feature` | meta | Request a missing feature |
| `parseo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `parseo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `parseo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `parseo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `parseo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
