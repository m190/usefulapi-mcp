# Vporiadku MCP by usefulapi

Use your Vporiadku account from Claude, Cursor, or any MCP client. Read and change invoices, clients, payments and expenses in the company you choose, within the scopes you approve. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://vporiadku.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://vporiadku.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http vporiadku https://vporiadku.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=vporiadku&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvporiadku.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "vporiadku": {
      "url": "https://vporiadku.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Vporiadku account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/vporiadku/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Vporiadku and approve access. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `vporiadku_list_invoices` | read | List invoices |
| `vporiadku_get_invoice` | read | Get an invoice |
| `vporiadku_list_invoice_payments` | read | List invoice payments |
| `vporiadku_list_clients` | read | List clients |
| `vporiadku_get_client` | read | Get a client |
| `vporiadku_list_items` | read | List catalogue items |
| `vporiadku_get_item` | read | Get a catalogue item |
| `vporiadku_list_expenses` | read | List expenses |
| `vporiadku_get_expense` | read | Get an expense |
| `vporiadku_list_due_payments` | read | List supplier payments due |
| `vporiadku_list_payment_orders` | read | List payment orders |
| `vporiadku_list_received_invoices` | read | List received e-invoices |
| `vporiadku_get_received_invoice` | read | Get a received e-invoice |
| `vporiadku_list_recurring_invoices` | read | List recurring invoices |
| `vporiadku_list_companies` | read | List companies |
| `vporiadku_list_bank_accounts` | read | List bank accounts |
| `vporiadku_create_invoice` | **write** | Create an invoice draft |
| `vporiadku_update_invoice` | **write** | Update an invoice |
| `vporiadku_issue_invoice` | **write** | Issue an invoice |
| `vporiadku_send_invoice` | **write** | Send an invoice by e-mail |
| `vporiadku_send_invoice_reminder` | **write** | Send a payment reminder |
| `vporiadku_record_invoice_payment` | **write** | Record a payment |
| `vporiadku_mark_invoice_paid` | **write** | Mark an invoice as paid |
| `vporiadku_create_client` | **write** | Create a client |
| `vporiadku_update_client` | **write** | Update a client |
| `vporiadku_create_item` | **write** | Create a catalogue item |
| `vporiadku_create_expense` | **write** | Record an expense |
| `vporiadku_usage_status` | meta | Usage status (free-tier meter) |
| `vporiadku_request_feature` | meta | Request a missing feature |
| `vporiadku_upgrade` | meta | Upgrade to Pro or Pro+ |
| `vporiadku_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `vporiadku_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `vporiadku_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `vporiadku_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
