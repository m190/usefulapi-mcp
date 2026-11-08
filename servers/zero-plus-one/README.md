# Zero Plus One MCP by usefulapi

Use your [Zero Plus One](https://xeroplusone.com/) account from Claude, Cursor, or any MCP client. Read invoices, quotes, contacts, financial reports and bank reconciliation data. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://zero-plus-one.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zero-plus-one.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zero-plus-one https://zero-plus-one.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zero-plus-one&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzero-plus-one.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zero-plus-one": {
      "url": "https://zero-plus-one.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zero Plus One credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zero-plus-one/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Zero Plus One API key** (Settings → Developer in Zero Plus One: a Custom Connection key with the View scopes you need). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zeroplusone_list_invoices` | read | List invoices |
| `zeroplusone_get_invoice` | read | Get an invoice |
| `zeroplusone_list_contacts` | read | List contacts |
| `zeroplusone_get_contact` | read | Get a contact |
| `zeroplusone_list_credit_notes` | read | List credit notes |
| `zeroplusone_get_credit_note` | read | Get a credit note |
| `zeroplusone_list_quotes` | read | List quotes |
| `zeroplusone_get_quote` | read | Get a quote |
| `zeroplusone_list_recurring_invoices` | read | List recurring invoices |
| `zeroplusone_get_recurring_invoice` | read | Get a recurring invoice |
| `zeroplusone_list_tax_rates` | read | List tax rates |
| `zeroplusone_get_tax_rate` | read | Get a tax rate |
| `zeroplusone_get_profit_and_loss` | read | Profit and loss report |
| `zeroplusone_get_balance_sheet` | read | Balance sheet |
| `zeroplusone_get_trial_balance` | read | Trial balance |
| `zeroplusone_get_cash_flow` | read | Cash flow report |
| `zeroplusone_get_vat_return` | read | VAT return (VAT 201) |
| `zeroplusone_get_kpi_summary` | read | KPI summary |
| `zeroplusone_get_aged_receivables` | read | Aged receivables |
| `zeroplusone_get_aged_payables` | read | Aged payables |
| `zeroplusone_get_open_invoices` | read | Open invoices report |
| `zeroplusone_get_reconciliation_summary` | read | Reconciliation summary |
| `zeroplusone_list_reconciliation_lines` | read | List bank lines to reconcile |
| `zeroplusone_get_reconciliation_suggestions` | read | Reconciliation suggestions |
| `zeroplusone_usage_status` | meta | Usage status (free-tier meter) |
| `zeroplusone_request_feature` | meta | Request a missing feature |
| `zeroplusone_upgrade` | meta | Upgrade to Pro or Pro+ |
| `zeroplusone_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `zeroplusone_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `zeroplusone_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `zeroplusone_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
