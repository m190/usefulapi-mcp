# Reviso MCP by usefulapi

Use your [Reviso](https://www.reviso.com) account from Claude, Cursor, or any MCP client. Read customers, invoices, orders and ledger entries, and create customers, suppliers, products and draft invoices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://reviso.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://reviso.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http reviso https://reviso.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=reviso&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Freviso.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "reviso": {
      "url": "https://reviso.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Reviso credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/reviso/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Agreement Grant Token**: a Reviso Superuser opens the [UsefulAPI access link](https://app.reviso.com/api1/requestaccess.aspx?appId=kmQMhLjVLVle2z9XpWG6PLRBWXAClwJPmR5PRIdyAB41&locale=en-GB), grants access and copies the token Reviso shows. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `reviso_get_company` | read | Get the connected company |
| `reviso_list_customers` | read | List or search customers |
| `reviso_get_customer` | read | Get a customer |
| `reviso_list_suppliers` | read | List or search suppliers |
| `reviso_get_supplier` | read | Get a supplier |
| `reviso_list_products` | read | List or search products |
| `reviso_get_product` | read | Get a product |
| `reviso_list_invoices` | read | List sales invoices |
| `reviso_get_invoice` | read | Get a sales invoice |
| `reviso_list_orders` | read | List sales orders |
| `reviso_get_order` | read | Get a order |
| `reviso_list_quotations` | read | List quotations |
| `reviso_get_quotation` | read | Get a quotation |
| `reviso_list_accounts` | read | List the chart of accounts |
| `reviso_list_accounting_years` | read | List accounting years |
| `reviso_list_account_totals` | read | Get account totals for a year |
| `reviso_list_entries` | read | List ledger entries for a year |
| `reviso_list_projects` | read | List projects |
| `reviso_list_reference` | read | List reference data |
| `reviso_create_customer` | **write** | Create a customer |
| `reviso_create_supplier` | **write** | Create a supplier |
| `reviso_create_product` | **write** | Create a product |
| `reviso_create_draft_invoice` | **write** | Create a draft sales invoice |
| `reviso_usage_status` | meta | Usage status (free-tier meter) |
| `reviso_request_feature` | meta | Request a missing feature |
| `reviso_upgrade` | meta | Upgrade to Pro or Pro+ |
| `reviso_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `reviso_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `reviso_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `reviso_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
