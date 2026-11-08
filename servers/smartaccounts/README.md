# SmartAccounts MCP by usefulapi

Use [SmartAccounts](https://www.smartaccounts.eu) from Claude, Cursor, or any MCP client — clients and vendors with balances, articles, sales and purchase invoices, payments, ledger entries, accounts, VAT rates, bank and cash accounts and payment methods, plus creating clients, sales invoices, payments and ledger entries (this server cannot edit or delete them afterwards).
Hosted, no local install: connect with your own SmartAccounts credentials.

**Live endpoint:** `https://smartaccounts.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/smartaccounts

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://smartaccounts.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http smartaccounts https://smartaccounts.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=smartaccounts&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsmartaccounts.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "smartaccounts": {
      "url": "https://smartaccounts.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SmartAccounts credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/smartaccounts/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smartaccounts_list_clients` | read | List or search clients |
| `smartaccounts_get_client_balance` | read | Get a client's outstanding balance |
| `smartaccounts_list_vendors` | read | List or search vendors |
| `smartaccounts_get_vendor_balance` | read | Get a vendor's outstanding balance |
| `smartaccounts_list_articles` | read | List or search articles |
| `smartaccounts_list_sales_invoices` | read | List sales invoices |
| `smartaccounts_list_purchase_invoices` | read | List purchase invoices |
| `smartaccounts_list_payments` | read | List payments |
| `smartaccounts_list_ledger_entries` | read | List general ledger entries |
| `smartaccounts_list_accounts` | read | List the chart of accounts |
| `smartaccounts_list_vat_rates` | read | List VAT rates |
| `smartaccounts_list_bank_accounts` | read | List bank accounts |
| `smartaccounts_list_cash_accounts` | read | List cash accounts |
| `smartaccounts_list_payment_methods` | read | List payment methods |
| `smartaccounts_create_client` | **write** | Create a client |
| `smartaccounts_create_sales_invoice` | **write** | Create a sales invoice |
| `smartaccounts_create_payment` | **write** | Create a payment |
| `smartaccounts_create_ledger_entry` | **write** | Create a manual ledger entry |
| `smartaccounts_usage_status` | meta | Usage status (free-tier meter) |
| `smartaccounts_request_feature` | meta | Request a missing feature |
| `smartaccounts_upgrade` | meta | Upgrade to Pro or Pro+ |
| `smartaccounts_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per API key) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `smartaccounts_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `smartaccounts_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `smartaccounts_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by SmartAccounts.
