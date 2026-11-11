# Cegid Jasmin MCP by usefulapi

Use your [Cegid Jasmin](https://apps.primaverabss.com/Jasmin) account from Claude, Cursor, or any MCP client. It reads companies, customers, sales and purchase documents and receipts, and never creates or changes a document. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://cegid-jasmin.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cegid-jasmin.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cegid-jasmin https://cegid-jasmin.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cegid-jasmin&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcegid-jasmin.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cegid-jasmin": {
      "url": "https://cegid-jasmin.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Cegid Jasmin account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cegid-jasmin/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Cegid and approve access. Then you provide your **Jasmin account key** and **Jasmin subscription key**, for example 224888 and 224888-0001. First subscribe the UsefulAPI MCP app to your Jasmin subscription in the Jasmin App Store. The server checks both keys with one read of your companies and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `jasmin_list_companies` | read | List companies |
| `jasmin_get_company` | read | Get a company |
| `jasmin_list_customers` | read | List customers |
| `jasmin_get_customer` | read | Get a customer |
| `jasmin_list_sales_items` | read | List sales items |
| `jasmin_get_sales_item` | read | Get a sales item |
| `jasmin_list_parties` | read | List parties |
| `jasmin_get_party` | read | Get a party |
| `jasmin_list_payment_terms` | read | List payment terms |
| `jasmin_list_sales_invoices` | read | List sales invoices |
| `jasmin_get_sales_invoice` | read | Get a sales invoice |
| `jasmin_get_sales_invoice_by_number` | read | Get a sales invoice by number |
| `jasmin_list_credit_debit_notes` | read | List credit and debit notes |
| `jasmin_get_credit_debit_note` | read | Get a credit or debit note |
| `jasmin_list_sales_orders` | read | List sales orders |
| `jasmin_get_sales_order` | read | Get a sales order |
| `jasmin_get_sales_order_by_number` | read | Get a sales order by number |
| `jasmin_list_sales_quotations` | read | List sales quotations |
| `jasmin_get_sales_quotation` | read | Get a sales quotation |
| `jasmin_list_purchase_orders` | read | List purchase orders |
| `jasmin_get_purchase_order` | read | Get a purchase order |
| `jasmin_list_supplier_invoices` | read | List supplier invoices |
| `jasmin_get_supplier_invoice` | read | Get a supplier invoice |
| `jasmin_list_receipts` | read | List receipts |
| `jasmin_get_receipt` | read | Get a receipt |
| `jasmin_usage_status` | meta | Usage status (free-tier meter) |
| `jasmin_request_feature` | meta | Request a missing feature |
| `jasmin_upgrade` | meta | Upgrade to Pro or Pro+ |
| `jasmin_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `jasmin_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `jasmin_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `jasmin_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
