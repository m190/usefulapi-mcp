# Oblio MCP by usefulapi

Use [Oblio](https://www.oblio.eu) from Claude, Cursor, or any MCP client — companies, VAT rates, series, clients, products, stock, invoices with e-Factura (SPV) status and webhooks, plus creating proformas, issuing, collecting, cancelling and restoring invoices and sending them to SPV (each fiscal write needs an explicit confirmation).
Hosted, no local install: connect with your own Oblio credentials.

**Live endpoint:** `https://oblio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/oblio

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://oblio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http oblio https://oblio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=oblio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Foblio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "oblio": {
      "url": "https://oblio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Oblio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/oblio/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `oblio_list_companies` | read | List companies |
| `oblio_list_vat_rates` | read | List VAT rates |
| `oblio_list_series` | read | List document series |
| `oblio_list_languages` | read | List document languages |
| `oblio_list_management` | read | List stock managements |
| `oblio_list_clients` | read | List or search clients |
| `oblio_list_products` | read | List or search products |
| `oblio_get_document` | read | Get a document |
| `oblio_list_invoices` | read | List invoices |
| `oblio_list_webhooks` | read | List webhooks |
| `oblio_create_proforma` | **write** | Create a proforma |
| `oblio_issue_invoice` | **write** | Issue an invoice (fiscal, irreversible) |
| `oblio_collect_invoice` | **write** | Record an invoice payment (collect) |
| `oblio_cancel_document` | **write** | Cancel a document (fiscal) |
| `oblio_restore_document` | **write** | Restore a cancelled document (fiscal) |
| `oblio_send_einvoice_to_spv` | **write** | Send an invoice to e-Factura (SPV) |
| `oblio_create_webhook` | **write** | Create a webhook |
| `oblio_delete_webhook` | **write** | Delete a webhook |
| `oblio_usage_status` | meta | Usage status (free-tier meter) |
| `oblio_request_feature` | meta | Request a missing feature |
| `oblio_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `oblio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `oblio_upgrade` (it returns a Stripe Checkout link). Cancel any time with `oblio_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `oblio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Oblio.
