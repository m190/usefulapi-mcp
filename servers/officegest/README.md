# OfficeGest MCP by usefulapi

Use your [OfficeGest](https://global.officegest.com) account from Claude, Cursor, or any MCP client. It reads customers, suppliers, articles and stock, sale documents, and sales and receivables reports. It can also create a customer record. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://officegest.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://officegest.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http officegest https://officegest.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=officegest&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fofficegest.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "officegest": {
      "url": "https://officegest.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your OfficeGest credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/officegest/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **OfficeGest web address** (for example `company.officegest.com`), an **employee username** and an **employee password**. Use a dedicated employee account, and your company needs the Webservices module active. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `officegest_list_customers` | read | List customers |
| `officegest_get_customer` | read | Get a customer |
| `officegest_get_customer_balance` | read | Get a customer balance |
| `officegest_create_customer` | **write** | Create a customer |
| `officegest_list_suppliers` | read | List suppliers |
| `officegest_get_supplier` | read | Get a supplier |
| `officegest_search_articles` | read | Search articles |
| `officegest_get_article` | read | Get an article |
| `officegest_list_stock_quantities` | read | List stock quantities |
| `officegest_list_sale_document_types` | read | List sale document types |
| `officegest_list_sale_documents` | read | List sale documents |
| `officegest_get_sale_document` | read | Get a sale document |
| `officegest_get_sales_summary` | read | Get the sales summary |
| `officegest_list_customer_invoices_due` | read | List customer invoices due |
| `officegest_list_top_debtors` | read | List top debtors |
| `officegest_list_supplier_invoices_due` | read | List supplier invoices due |
| `officegest_usage_status` | meta | Usage status (free-tier meter) |
| `officegest_request_feature` | meta | Request a missing feature |
| `officegest_upgrade` | meta | Upgrade to Pro or Pro+ |
| `officegest_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `officegest_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `officegest_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `officegest_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
