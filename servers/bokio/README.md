# Bokio MCP by usefulapi

Hosted at https://bokio.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bokio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bokio https://bokio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bokio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbokio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bokio": {
      "url": "https://bokio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Bokio account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bokio/

<!-- connect:end (generated above, edit below) -->

Sign in with Bokio and choose the company to connect. Approve access in Bokio to continue. The company needs a plan with API access.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bokio_get_company_information` | read | Get company information |
| `bokio_list_fiscal_years` | read | List fiscal years |
| `bokio_get_fiscal_year` | read | Get a fiscal year |
| `bokio_list_chart_of_accounts` | read | List chart of accounts |
| `bokio_get_account` | read | Get an account |
| `bokio_list_journal_entries` | read | List journal entries |
| `bokio_get_journal_entry` | read | Get a journal entry |
| `bokio_list_customers` | read | List customers |
| `bokio_get_customer` | read | Get a customer |
| `bokio_list_invoices` | read | List invoices |
| `bokio_get_invoice` | read | Get an invoice |
| `bokio_list_invoice_payments` | read | List invoice payments |
| `bokio_list_credit_notes` | read | List credit notes |
| `bokio_get_credit_note` | read | Get a credit note |
| `bokio_list_items` | read | List items (products and services) |
| `bokio_list_suppliers` | read | List suppliers |
| `bokio_list_supplier_invoices` | read | List supplier invoices |
| `bokio_create_customer` | **write** | Create a customer |
| `bokio_create_invoice_draft` | **write** | Create an invoice draft |
| `bokio_publish_invoice` | **write** | Publish an invoice (IRREVERSIBLE) |
| `bokio_record_invoice` | **write** | Bookkeep an invoice (IRREVERSIBLE) |
| `bokio_create_journal_entry` | **write** | Create a journal entry (IRREVERSIBLE) |
| `bokio_reverse_journal_entry` | **write** | Reverse a journal entry (IRREVERSIBLE) |
| `bokio_usage_status` | meta | Usage status (free-tier meter) |
| `bokio_request_feature` | meta | Request a missing feature |
| `bokio_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `bokio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |

Pro covers this server only. Subscribe with `bokio_upgrade` (it returns a Stripe Checkout link). Cancel any time with `bokio_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `bokio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT.
