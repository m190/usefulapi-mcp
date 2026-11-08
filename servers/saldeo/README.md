# Saldeo MCP by usefulapi

**Live endpoint:** `https://saldeo.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://saldeo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http saldeo https://saldeo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=saldeo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsaldeo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "saldeo": {
      "url": "https://saldeo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Saldeo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/saldeo/

<!-- connect:end (generated above, edit below) -->

Connect with your SaldeoSMART username and the API token generated for that user under Konfiguracja → Konto → API. API access requires a supported office or company package. This server is read-only. Use sequential calls for the same Saldeo user; vendor per-user rate and concurrency limits apply.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `saldeo_list_companies` | read | List companies |
| `saldeo_list_contractors` | read | List contractors |
| `saldeo_search_documents` | read | Search documents |
| `saldeo_list_document_ids` | read | List document ids |
| `saldeo_get_documents_by_ids` | read | Get documents by id |
| `saldeo_list_invoices` | read | List invoices |
| `saldeo_list_invoice_ids` | read | List invoice ids |
| `saldeo_get_invoices_by_ids` | read | Get invoices by id |
| `saldeo_list_bank_statements` | read | List bank statements |
| `saldeo_list_employees` | read | List employees |
| `saldeo_usage_status` | meta | Usage status (free-tier meter) |
| `saldeo_request_feature` | meta | Request a missing feature |
| `saldeo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `saldeo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per Saldeo user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per Saldeo user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `saldeo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `saldeo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `saldeo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
