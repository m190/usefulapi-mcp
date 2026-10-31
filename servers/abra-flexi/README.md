# ABRA Flexi MCP by usefulapi

Connect your API-enabled ABRA Flexi account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://abra-flexi.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http abra-flexi https://abra-flexi.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=abra-flexi&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fabra-flexi.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "abra-flexi": {
      "url": "https://abra-flexi.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ABRA Flexi credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/abra-flexi/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `abraflexi_get_company` | read | Get the company |
| `abraflexi_list_evidences` | read | List evidences |
| `abraflexi_list_issued_invoices` | read | List issued invoices (sales invoices to customers) |
| `abraflexi_get_issued_invoice` | read | Get an issued invoice |
| `abraflexi_list_received_invoices` | read | List received invoices (bills from suppliers) |
| `abraflexi_get_received_invoice` | read | Get an received invoice |
| `abraflexi_list_contacts` | read | List or search contacts |
| `abraflexi_get_contact` | read | Get a contact |
| `abraflexi_list_products` | read | List or search products |
| `abraflexi_list_stock_cards` | read | List stock cards |
| `abraflexi_list_stock_movements` | read | List stock movements |
| `abraflexi_list_bank_movements` | read | List bank movements |
| `abraflexi_list_cash_movements` | read | List cash movements |
| `abraflexi_list_orders` | read | List orders |
| `abraflexi_list_records` | read | List records of an evidence |
| `abraflexi_get_record` | read | Get a record of an evidence |
| `abraflexi_create_contact` | **write** | Create a contact |
| `abraflexi_update_contact` | **write** | Update a contact |
| `abraflexi_create_issued_invoice` | **write** | Create an issued invoice |
| `abraflexi_usage_status` | meta | Usage status (free-tier meter) |
| `abraflexi_request_feature` | meta | Request a missing feature |
| `abraflexi_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `abraflexi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per cloud instance and company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `abraflexi_upgrade` (it returns a Stripe Checkout link). Cancel any time with `abraflexi_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `abraflexi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
