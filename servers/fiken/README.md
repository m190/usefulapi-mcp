# Fiken MCP by usefulapi

Use your [Fiken](https://fiken.no) account from Claude, Cursor, or any MCP client. Read companies, contacts, invoices, purchases, sales, ledger and bank balances, and create contacts, products and invoice drafts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://fiken.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fiken.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fiken https://fiken.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fiken&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffiken.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fiken": {
      "url": "https://fiken.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Fiken account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fiken/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Fiken and approve access for the companies you choose. The company needs Fiken's API module, ordered in Fiken under Innstillinger. The server stores the access per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fiken_get_user` | read | Get the signed-in user |
| `fiken_list_companies` | read | List companies |
| `fiken_get_company` | read | Get a company |
| `fiken_list_accounts` | read | List chart-of-accounts accounts |
| `fiken_get_account_balances` | read | Get account balances on a date |
| `fiken_list_bank_accounts` | read | List bank accounts |
| `fiken_get_bank_balances` | read | Get bank balances |
| `fiken_list_contacts` | read | List contacts (customers and suppliers) |
| `fiken_get_contact` | read | Get a contact |
| `fiken_list_invoices` | read | List issued invoices |
| `fiken_get_invoice` | read | Get an invoice |
| `fiken_list_invoice_drafts` | read | List invoice drafts |
| `fiken_list_credit_notes` | read | List credit notes |
| `fiken_list_offers` | read | List offers |
| `fiken_list_order_confirmations` | read | List order confirmations |
| `fiken_list_products` | read | List products |
| `fiken_get_product` | read | Get a product |
| `fiken_list_sales` | read | List sales |
| `fiken_get_sale` | read | Get a sale |
| `fiken_list_purchases` | read | List purchases (supplier bills and expenses) |
| `fiken_get_purchase` | read | Get a purchase |
| `fiken_list_journal_entries` | read | List journal entries |
| `fiken_list_transactions` | read | List transactions |
| `fiken_list_projects` | read | List projects |
| `fiken_list_time_entries` | read | List time entries |
| `fiken_list_inbox_documents` | read | List inbox documents |
| `fiken_create_contact` | **write** | Create a contact |
| `fiken_create_product` | **write** | Create a product |
| `fiken_create_invoice_draft` | **write** | Create an invoice draft |
| `fiken_issue_invoice_from_draft` | **write** | Issue an invoice from a draft (IRREVERSIBLE) |
| `fiken_send_invoice` | **write** | Send an invoice to the customer (IRREVERSIBLE) |
| `fiken_usage_status` | meta | Usage status (free-tier meter) |
| `fiken_request_feature` | meta | Request a missing feature |
| `fiken_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fiken_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `fiken_upgrade` (it returns a Stripe Checkout link). Cancel any time with `fiken_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `fiken_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
