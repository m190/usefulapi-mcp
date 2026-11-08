# ExpenseIn MCP by usefulapi

Use your [ExpenseIn](https://www.expensein.com) account from Claude, Cursor, or any MCP client. Read expenses, approvals, invoices, receipts and card transactions, and create expenses or invoice notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://expensein.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://expensein.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http expensein https://expensein.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=expensein&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fexpensein.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "expensein": {
      "url": "https://expensein.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ExpenseIn credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/expensein/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **ExpenseIn API key** (Admin → Integration → ExpenseIn API → New API Key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `expensein_list_expenses` | read | List expenses |
| `expensein_get_expense` | read | Get an expense |
| `expensein_list_expenses_for_approval` | read | List expenses for approval |
| `expensein_list_invoices` | read | List invoices |
| `expensein_get_invoice` | read | Get an invoice |
| `expensein_add_invoice_note` | **write** | Add a note to an invoice |
| `expensein_list_receipts` | read | List receipts |
| `expensein_get_receipt` | read | Get a receipt |
| `expensein_list_users` | read | List users |
| `expensein_get_user` | read | Get a user |
| `expensein_list_categories` | read | List categories |
| `expensein_list_projects` | read | List projects |
| `expensein_list_departments` | read | List departments |
| `expensein_list_suppliers` | read | List suppliers |
| `expensein_list_merchants` | read | List merchants |
| `expensein_list_tax_rates` | read | List tax rates |
| `expensein_list_policies` | read | List expense policies |
| `expensein_list_card_transactions` | read | List card transactions |
| `expensein_list_purchase_requests` | read | List purchase requests |
| `expensein_get_server_change_counter` | read | Get the server change counter |
| `expensein_create_expense` | **write** | Create an expense |
| `expensein_usage_status` | meta | Usage status (free-tier meter) |
| `expensein_request_feature` | meta | Request a missing feature |
| `expensein_upgrade` | meta | Upgrade to Pro or Pro+ |
| `expensein_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `expensein_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `expensein_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `expensein_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
