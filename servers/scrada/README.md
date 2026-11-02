# Scrada MCP by usefulapi

Use your [Scrada](https://scrada.be) account from Claude, Cursor, or any MCP client. It reads journals, journal lines, cash books, VAT periods and Peppol documents, and it can record payments and confirm Peppol documents. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://scrada.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://scrada.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http scrada https://scrada.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=scrada&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fscrada.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "scrada": {
      "url": "https://scrada.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Scrada credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/scrada/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Scrada company ID**, **API key** and **API password** (Scrada web client → Settings → API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `scrada_get_company` | read | Get company |
| `scrada_list_journals` | read | List journals |
| `scrada_get_journal` | read | Get journal |
| `scrada_list_journal_lines` | read | List journal lines |
| `scrada_list_payment_methods` | read | List payment methods |
| `scrada_list_vat_categories` | read | List VAT categories |
| `scrada_list_vat_periods` | read | List VAT periods |
| `scrada_list_cash_books` | read | List cash books |
| `scrada_get_cash_book` | read | Get cash book |
| `scrada_list_transaction_types` | read | List transaction types |
| `scrada_list_sales_invoice_journals` | read | List sales invoice journals |
| `scrada_get_sales_invoice_journal` | read | Get sales invoice journal |
| `scrada_get_sales_invoice_send_status` | read | Get sales invoice send status |
| `scrada_add_sales_invoice_payment` | **write** | Add sales invoice payment |
| `scrada_list_pos_receipts` | read | List POS receipts |
| `scrada_peppol_lookup` | read | Look up a Peppol participant |
| `scrada_list_unconfirmed_peppol_documents` | read | List unconfirmed Peppol documents |
| `scrada_get_peppol_inbound_document` | read | Get Peppol inbound document |
| `scrada_confirm_peppol_inbound_document` | **write** | Confirm Peppol inbound document |
| `scrada_get_peppol_outbound_status` | read | Get Peppol outbound document status |
| `scrada_usage_status` | meta | Usage status (free-tier meter) |
| `scrada_request_feature` | meta | Request a missing feature |
| `scrada_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `scrada_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `scrada_upgrade` (it returns a Stripe Checkout link). Cancel any time with `scrada_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `scrada_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
