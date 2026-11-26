# Mercury MCP by usefulapi

Use your [Mercury](https://mercury.com) account from Claude, Cursor, or any MCP client. Read accounts, balances, transactions and invoices, and request payments that wait for admin approval. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://mercury.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mercury.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mercury https://mercury.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mercury&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmercury.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mercury": {
      "url": "https://mercury.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Mercury credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mercury/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Mercury API token** (Mercury → Settings → Tokens), including its `secret-token:` prefix. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mercury_get_organization` | read | Get organization |
| `mercury_list_accounts` | read | List accounts |
| `mercury_list_account_statements` | read | List account statements |
| `mercury_list_treasury_accounts` | read | List treasury accounts |
| `mercury_list_transactions` | read | List transactions |
| `mercury_list_account_transactions` | read | List account transactions |
| `mercury_get_transaction` | read | Get a transaction |
| `mercury_list_categories` | read | List categories |
| `mercury_list_recipients` | read | List recipients |
| `mercury_get_recipient` | read | Get a recipient |
| `mercury_list_send_money_requests` | read | List send-money requests |
| `mercury_get_send_money_request` | read | Get a send-money request |
| `mercury_list_transfer_requests` | read | List transfer requests |
| `mercury_request_send_money` | **write** | Request a payment (needs approval) |
| `mercury_list_customers` | read | List invoice customers |
| `mercury_list_invoices` | read | List invoices |
| `mercury_get_invoice` | read | Get an invoice |
| `mercury_list_reimbursements` | read | List reimbursements |
| `mercury_get_reimbursement` | read | Get a reimbursement |
| `mercury_usage_status` | meta | Usage status (free-tier meter) |
| `mercury_request_feature` | meta | Request a missing feature |
| `mercury_upgrade` | meta | Upgrade to Pro or Pro+ |
| `mercury_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `mercury_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `mercury_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `mercury_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
