# Briox MCP by usefulapi

Use your [Briox](https://www.briox.se) account from Claude, Cursor, or any MCP client. Read invoices, customers, suppliers, items, journals, accounts and bank balances, and create customers, items and unposted invoices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://briox.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://briox.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http briox https://briox.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=briox&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbriox.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "briox": {
      "url": "https://briox.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Briox credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/briox/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Country of your Briox account** (Sweden or Finland), your **Account ID** (the long number in parentheses next to your company name) and an **Authentication token** (Admin → Users → Application Token; Briox registers API developers first). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `briox_get_company_info` | read | Get the company information |
| `briox_list_customers` | read | List customers |
| `briox_list_suppliers` | read | List suppliers |
| `briox_list_customer_invoices` | read | List customer invoices |
| `briox_list_supplier_invoices` | read | List supplier invoices |
| `briox_list_items` | read | List items (articles) |
| `briox_get_customer` | read | Get a customer |
| `briox_get_supplier` | read | Get a supplier |
| `briox_get_customer_invoice` | read | Get a customer invoice |
| `briox_get_supplier_invoice` | read | Get a supplier invoice |
| `briox_get_item` | read | Get an item (article) |
| `briox_list_accounts` | read | List accounts (chart of accounts) |
| `briox_list_financial_years` | read | List financial years |
| `briox_list_journal_series` | read | List journal (voucher) series |
| `briox_list_journals` | read | List journals (vouchers) |
| `briox_get_journal` | read | Get a journal (voucher) |
| `briox_get_bank_account_balances` | read | Get bank account balances |
| `briox_list_vat_codes` | read | List VAT codes |
| `briox_list_payment_terms` | read | List payment terms |
| `briox_list_projects` | read | List projects |
| `briox_list_cost_centers` | read | List cost centers |
| `briox_list_sales_orders` | read | List sales orders |
| `briox_create_customer` | **write** | Create a customer |
| `briox_create_item` | **write** | Create an item (article) |
| `briox_create_customer_invoice` | **write** | Create an unposted customer invoice |
| `briox_usage_status` | meta | Usage status (free-tier meter) |
| `briox_request_feature` | meta | Request a missing feature |
| `briox_upgrade` | meta | Upgrade to Pro or Pro+ |
| `briox_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `briox_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `briox_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `briox_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
