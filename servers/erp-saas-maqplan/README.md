# Maqplan ERP MCP by usefulapi

Use your Maqplan ERP account from Claude, Cursor, or any MCP client. Read customers, products, sales orders, invoices, NF-e, stock balances and financial entries. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://erp-saas-maqplan.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://erp-saas-maqplan.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http erp-saas-maqplan https://erp-saas-maqplan.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=erp-saas-maqplan&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ferp-saas-maqplan.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "erp-saas-maqplan": {
      "url": "https://erp-saas-maqplan.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Maqplan ERP credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/erp-saas-maqplan/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Maqplan API key**. Create it in the ERP on the **API Keys** screen, or ask Maqplan support. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `maqplan_get_company` | read | Get the company |
| `maqplan_list_branches` | read | List branches |
| `maqplan_get_branch` | read | Get a branch |
| `maqplan_list_customers` | read | List customers |
| `maqplan_get_customer` | read | Get a customer |
| `maqplan_list_people` | read | List people |
| `maqplan_get_person` | read | Get a person |
| `maqplan_list_products` | read | List products |
| `maqplan_get_product` | read | Get a product |
| `maqplan_list_stock_balances` | read | List stock balances |
| `maqplan_list_sales_orders` | read | List sales orders |
| `maqplan_get_sales_order` | read | Get a sales order |
| `maqplan_list_invoices` | read | List invoices |
| `maqplan_get_invoice` | read | Get an invoice |
| `maqplan_list_sellers` | read | List sellers |
| `maqplan_list_fiscal_operations` | read | List fiscal operations |
| `maqplan_list_nfe` | read | List NF-e |
| `maqplan_get_nfe` | read | Get an NF-e |
| `maqplan_list_financial_entries` | read | List financial entries |
| `maqplan_get_financial_entry` | read | Get a financial entry |
| `maqplan_list_payment_methods` | read | List payment methods |
| `maqplan_list_chart_of_accounts` | read | List chart of accounts |
| `maqplan_usage_status` | meta | Usage status (free-tier meter) |
| `maqplan_request_feature` | meta | Request a missing feature |
| `maqplan_upgrade` | meta | Upgrade to Pro or Pro+ |
| `maqplan_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `maqplan_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `maqplan_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `maqplan_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
