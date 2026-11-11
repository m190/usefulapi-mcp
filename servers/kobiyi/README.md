# Kobiyi MCP by usefulapi

Use your Kobiyi account from Claude, Cursor, or any MCP client. Read receivables, payables, contacts and bank transactions, and create contacts, receivables and payables or record payments and collections. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://kobiyi.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kobiyi.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kobiyi https://kobiyi.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kobiyi&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkobiyi.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kobiyi": {
      "url": "https://kobiyi.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Kobiyi credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kobiyi/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Kobiyi API key** (Settings → API / ERP Integration; a test key starting `ak_test_` is read-only). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kobiyi_list_contacts` | read | List contacts |
| `kobiyi_get_contact` | read | Get a contact |
| `kobiyi_create_contact` | **write** | Create a contact |
| `kobiyi_list_receivables` | read | List receivables |
| `kobiyi_get_receivable` | read | Get a receivable |
| `kobiyi_create_receivable` | **write** | Create a receivable |
| `kobiyi_list_payables` | read | List payables |
| `kobiyi_get_payable` | read | Get a payable |
| `kobiyi_create_payable` | **write** | Create a payable |
| `kobiyi_list_collections` | read | List collections |
| `kobiyi_record_collection` | **write** | Record a collection |
| `kobiyi_list_payment_transactions` | read | List payment transactions |
| `kobiyi_record_payment_transaction` | **write** | Record a payment |
| `kobiyi_list_products` | read | List products |
| `kobiyi_list_expenses` | read | List expense categories |
| `kobiyi_list_cash_accounts` | read | List cash and bank accounts |
| `kobiyi_list_cheques` | read | List cheques |
| `kobiyi_list_bank_transactions` | read | List bank transactions |
| `kobiyi_list_cari_advances` | read | List contact advances |
| `kobiyi_list_exchange_rates` | read | List exchange rates |
| `kobiyi_usage_status` | meta | Usage status (free-tier meter) |
| `kobiyi_request_feature` | meta | Request a missing feature |
| `kobiyi_upgrade` | meta | Upgrade to Pro or Pro+ |
| `kobiyi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `kobiyi_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `kobiyi_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `kobiyi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
