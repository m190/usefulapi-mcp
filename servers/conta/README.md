# Conta MCP by usefulapi

Use your [Conta](https://conta.no) account from Claude, Cursor, or any MCP client. It reads customers, invoices, payments, drafts, products, bank accounts, ledgers and reports. It creates customers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://conta.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://conta.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http conta https://conta.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=conta&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fconta.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "conta": {
      "url": "https://conta.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Conta credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/conta/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Conta API key** (User → Data & Access → Create new API key) and an environment, **Production** or **Sandbox**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `conta_list_organizations` | read | List organizations |
| `conta_search_customers` | read | Search customers |
| `conta_get_customer` | read | Get a customer |
| `conta_create_customer` | **write** | Create a customer |
| `conta_search_invoices` | read | Search invoices |
| `conta_get_invoice` | read | Get an invoice |
| `conta_get_unpaid_invoices` | read | Get unpaid invoices |
| `conta_search_invoice_payments` | read | Search invoice payments |
| `conta_search_invoice_drafts` | read | Search invoice drafts |
| `conta_search_products` | read | Search products |
| `conta_list_bank_accounts` | read | List bank accounts |
| `conta_get_open_receivables` | read | Get open receivables |
| `conta_get_trial_balance` | read | Get trial balance |
| `conta_get_profit_and_loss` | read | Get profit and loss report |
| `conta_search_suppliers` | read | Search suppliers |
| `conta_list_transactions` | read | List transactions |
| `conta_usage_status` | meta | Usage status (free-tier meter) |
| `conta_request_feature` | meta | Request a missing feature |
| `conta_upgrade` | meta | Upgrade to Pro or Pro+ |
| `conta_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `conta_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `conta_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `conta_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
