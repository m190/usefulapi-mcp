# tefacturo MCP by usefulapi

Use your [tefacturo](https://tefacturo.pe/) account from Claude, Cursor, or any MCP client. Read the SUNAT status, XML, PDF and CDR of your documents, and file invoices, receipts, credit notes, debit notes and voiding summaries. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://tefacturo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tefacturo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tefacturo https://tefacturo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tefacturo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftefacturo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tefacturo": {
      "url": "https://tefacturo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your tefacturo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tefacturo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your company's **RUC** (11 digits), the **tefacturo user email** that your company enabled, and that user's **clave** (password). Your company's tefacturo account owner or the Close2u team creates the user and the clave. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tefacturo_get_status` | read | Get document status |
| `tefacturo_get_xml` | read | Get document XML |
| `tefacturo_get_pdf` | read | Get document PDF |
| `tefacturo_get_cdr` | read | Get SUNAT receipt (CDR) |
| `tefacturo_preview_document` | read | Preview a document |
| `tefacturo_emit_invoice` | **write** | Emit an invoice (files with SUNAT) |
| `tefacturo_emit_receipt` | **write** | Emit a receipt (files with SUNAT) |
| `tefacturo_emit_credit_note` | **write** | Emit a credit note (files with SUNAT) |
| `tefacturo_emit_debit_note` | **write** | Emit a debit note (files with SUNAT) |
| `tefacturo_void_documents` | **write** | Void documents (files with SUNAT) |
| `tefacturo_usage_status` | meta | Usage status (free-tier meter) |
| `tefacturo_request_feature` | meta | Request a missing feature |
| `tefacturo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `tefacturo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `tefacturo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `tefacturo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `tefacturo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
