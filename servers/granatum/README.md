# Granatum MCP by usefulapi

Use your [Granatum](https://granatum.com.br) account from Claude, Cursor, or any MCP client. Read bank accounts, transactions, charges and financial reports, and create or update transactions. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://granatum.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://granatum.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http granatum https://granatum.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=granatum&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgranatum.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "granatum": {
      "url": "https://granatum.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Granatum credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/granatum/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Granatum access token** (Configurações → Minha Empresa → API; only a Super admin can see that screen). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `granatum_list_bank_accounts` | read | List bank accounts |
| `granatum_get_bank_account` | read | Get a bank account |
| `granatum_list_transactions` | read | List transactions |
| `granatum_get_transaction` | read | Get a transaction |
| `granatum_list_charges` | read | List charges |
| `granatum_get_charge` | read | Get a charge |
| `granatum_list_categories` | read | List categories |
| `granatum_list_customers` | read | List customers |
| `granatum_list_suppliers` | read | List suppliers |
| `granatum_list_cost_centers` | read | List cost centers |
| `granatum_list_payment_methods` | read | List payment methods |
| `granatum_list_tags` | read | List tags |
| `granatum_cash_flow_report` | read | Cash flow report |
| `granatum_profit_loss_report` | read | Profit and loss report |
| `granatum_create_transaction` | **write** | Create a transaction |
| `granatum_update_transaction` | **write** | Update a transaction |
| `granatum_usage_status` | meta | Usage status (free-tier meter) |
| `granatum_request_feature` | meta | Request a missing feature |
| `granatum_upgrade` | meta | Upgrade to Pro or Pro+ |
| `granatum_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `granatum_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `granatum_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `granatum_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
