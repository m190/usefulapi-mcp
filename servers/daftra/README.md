# Daftra MCP by usefulapi

Use your [Daftra](https://www.daftra.com) account from Claude, Cursor, or any MCP client. Read clients, invoices, estimates, payments, products, stock, expenses and suppliers, and record clients, suppliers, expenses, invoices and notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://daftra.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://daftra.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http daftra https://daftra.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=daftra&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdaftra.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "daftra": {
      "url": "https://daftra.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Daftra credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/daftra/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Daftra subdomain** (the first part of your address, such as acme for acme.daftra.com) and a **Daftra API key** (Settings → API → API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `daftra_get_site_info` | read | Get account info |
| `daftra_list_clients` | read | List clients |
| `daftra_get_client` | read | Get client |
| `daftra_list_invoices` | read | List invoices |
| `daftra_get_invoice` | read | Get invoice |
| `daftra_list_estimates` | read | List estimates |
| `daftra_get_estimate` | read | Get estimate |
| `daftra_list_invoice_payments` | read | List invoice payments |
| `daftra_list_client_payments` | read | List client payments |
| `daftra_list_products` | read | List products |
| `daftra_get_product` | read | Get product |
| `daftra_list_product_categories` | read | List product categories |
| `daftra_list_stores` | read | List stores (warehouses) |
| `daftra_list_stock_transactions` | read | List stock transactions |
| `daftra_list_treasuries` | read | List treasuries and bank accounts |
| `daftra_list_expenses` | read | List expenses |
| `daftra_get_expense` | read | Get expense |
| `daftra_list_incomes` | read | List incomes |
| `daftra_list_taxes` | read | List taxes |
| `daftra_list_purchase_invoices` | read | List purchase invoices |
| `daftra_get_purchase_invoice` | read | Get purchase invoice |
| `daftra_list_suppliers` | read | List suppliers |
| `daftra_get_supplier` | read | Get supplier |
| `daftra_list_notes` | read | List notes |
| `daftra_create_client` | **write** | Create client |
| `daftra_update_client` | **write** | Update client |
| `daftra_create_supplier` | **write** | Create supplier |
| `daftra_create_expense` | **write** | Create expense |
| `daftra_create_invoice` | **write** | Create invoice |
| `daftra_add_note` | **write** | Add note |
| `daftra_usage_status` | meta | Usage status (free-tier meter) |
| `daftra_request_feature` | meta | Request a missing feature |
| `daftra_upgrade` | meta | Upgrade to Pro or Pro+ |
| `daftra_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `daftra_upgrade` (it returns a Stripe Checkout link). Cancel any time with `daftra_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `daftra_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
