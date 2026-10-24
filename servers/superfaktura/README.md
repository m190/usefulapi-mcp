# SuperFaktura MCP by usefulapi

Use [SuperFaktura](https://www.superfaktura.sk) from Claude, Cursor, or any MCP client — invoices, clients, expenses, bank accounts, cash registers and stock, plus draft invoices, clients and expenses.
Hosted, no local install: connect with your own SuperFaktura credentials.

**Live endpoint:** `https://superfaktura.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/superfaktura

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://superfaktura.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http superfaktura https://superfaktura.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=superfaktura&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsuperfaktura.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "superfaktura": {
      "url": "https://superfaktura.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SuperFaktura credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/superfaktura/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `superfaktura_get_company` | read | Get the company profile and API limits |
| `superfaktura_list_invoices` | read | List or search invoices |
| `superfaktura_get_invoice` | read | Get an invoice |
| `superfaktura_list_clients` | read | List or search clients |
| `superfaktura_get_client` | read | Get a client |
| `superfaktura_list_contact_persons` | read | List a client's contact persons |
| `superfaktura_list_expenses` | read | List or search expenses |
| `superfaktura_get_expense` | read | Get an expense |
| `superfaktura_list_expense_categories` | read | List expense categories |
| `superfaktura_list_bank_accounts` | read | List bank accounts |
| `superfaktura_list_bank_moves` | read | List imported bank account moves |
| `superfaktura_list_cash_registers` | read | List cash registers |
| `superfaktura_get_cash_register` | read | Get a cash register |
| `superfaktura_list_stock_items` | read | List or search stock items |
| `superfaktura_get_stock_item` | read | Get a stock item |
| `superfaktura_list_stock_movements` | read | List stock movements of an item |
| `superfaktura_list_tags` | read | List tags |
| `superfaktura_list_sequences` | read | List numbering sequences |
| `superfaktura_list_countries` | read | List countries |
| `superfaktura_get_response_by_checksum` | read | Recover the reply of a create by its checksum |
| `superfaktura_create_client` | **write** | Create a client |
| `superfaktura_add_contact_person` | **write** | Add a contact person to a client |
| `superfaktura_create_tag` | **write** | Create a tag |
| `superfaktura_create_expense` | **write** | Record a received expense |
| `superfaktura_create_invoice` | **write** | Create an unsent invoice document |
| `superfaktura_usage_status` | meta | Usage status (free-tier meter) |
| `superfaktura_request_feature` | meta | Request a missing feature |
| `superfaktura_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `superfaktura_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `superfaktura_upgrade` (it returns a Stripe Checkout link). Cancel any time with `superfaktura_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `superfaktura_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by SuperFaktura.
