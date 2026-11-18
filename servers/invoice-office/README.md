# Invoice Office MCP by usefulapi

Use your [Invoice Office](https://invoiceoffice.com) account from Claude, Cursor, or any MCP client. It reads customers, suppliers, invoices, quotes, payment reminders and products. It creates customers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://invoice-office.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://invoice-office.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http invoice-office https://invoice-office.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=invoice-office&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finvoice-office.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "invoice-office": {
      "url": "https://invoice-office.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Invoice Office credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/invoice-office/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Invoice Office API secret** (Security Center → API key and secret; creating a key needs a Pro license). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `invoiceoffice_list_customers` | read | List customers |
| `invoiceoffice_get_customer` | read | Get a customer |
| `invoiceoffice_list_suppliers` | read | List suppliers |
| `invoiceoffice_get_supplier` | read | Get a supplier |
| `invoiceoffice_list_invoices` | read | List invoices |
| `invoiceoffice_get_invoice` | read | Get an invoice |
| `invoiceoffice_list_quotes` | read | List quotes |
| `invoiceoffice_get_quote` | read | Get a quote |
| `invoiceoffice_list_payment_reminders` | read | List payment reminders |
| `invoiceoffice_list_products` | read | List products |
| `invoiceoffice_get_product` | read | Get a product |
| `invoiceoffice_create_customer` | **write** | Create a customer |
| `invoiceoffice_usage_status` | meta | Usage status (free-tier meter) |
| `invoiceoffice_request_feature` | meta | Request a missing feature |
| `invoiceoffice_upgrade` | meta | Upgrade to Pro or Pro+ |
| `invoiceoffice_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `invoiceoffice_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `invoiceoffice_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `invoiceoffice_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
