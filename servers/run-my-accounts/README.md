# Run my Accounts MCP by usefulapi

Use your [Run my Accounts](https://www.runmyaccounts.com) account from Claude, Cursor, or any MCP client. Read customers, invoices, vendor bills, payments, the chart of accounts, trial balance and ledger transactions. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://run-my-accounts.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://run-my-accounts.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http run-my-accounts https://run-my-accounts.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=run-my-accounts&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frun-my-accounts.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "run-my-accounts": {
      "url": "https://run-my-accounts.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Run my Accounts credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/run-my-accounts/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **client name** (your Mandant name) and an **API key** (the API key page in Run my Accounts). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `runmyaccounts_list_customers` | read | List customers |
| `runmyaccounts_get_customer` | read | Get customer |
| `runmyaccounts_list_invoices` | read | List invoices |
| `runmyaccounts_get_invoice` | read | Get invoice |
| `runmyaccounts_list_invoice_payments` | read | List payments of an invoice |
| `runmyaccounts_list_payments_since` | read | List incoming payments not processed since a time |
| `runmyaccounts_list_parts` | read | List parts |
| `runmyaccounts_list_vendors` | read | List vendors |
| `runmyaccounts_list_vendor_invoices` | read | List vendor invoices |
| `runmyaccounts_get_vendor_invoice` | read | Get vendor invoice |
| `runmyaccounts_list_vendor_invoice_payments` | read | List payments of a vendor invoice |
| `runmyaccounts_list_charts` | read | List chart of accounts |
| `runmyaccounts_trial_balance` | read | Trial balance |
| `runmyaccounts_list_account_transactions` | read | List transactions in an account |
| `runmyaccounts_list_departments` | read | List cost and profit centers |
| `runmyaccounts_list_projects` | read | List projects |
| `runmyaccounts_usage_status` | meta | Usage status (free-tier meter) |
| `runmyaccounts_request_feature` | meta | Request a missing feature |
| `runmyaccounts_upgrade` | meta | Upgrade to Pro or Pro+ |
| `runmyaccounts_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `runmyaccounts_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `runmyaccounts_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `runmyaccounts_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
