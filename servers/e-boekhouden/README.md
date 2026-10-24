# e-Boekhouden MCP by usefulapi

Use [e-Boekhouden](https://www.e-boekhouden.nl) (.nl and .be) from Claude, Cursor, or any MCP client — relations, invoices and outstanding items, bookings (mutations), ledgers and balances, products, cost centers and members, plus creating relations, products and invoices (never e-mailed or booked).
Hosted, no local install: connect with your own e-Boekhouden credentials.

**Live endpoint:** `https://e-boekhouden.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/e-boekhouden

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://e-boekhouden.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http e-boekhouden https://e-boekhouden.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=e-boekhouden&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fe-boekhouden.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "e-boekhouden": {
      "url": "https://e-boekhouden.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your e-Boekhouden credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/e-boekhouden/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `eboekhouden_list_relations` | read | List or search relations |
| `eboekhouden_get_relation` | read | Get a relation |
| `eboekhouden_list_invoices` | read | List or search invoices |
| `eboekhouden_get_invoice` | read | Get an invoice |
| `eboekhouden_list_outstanding_invoices` | read | List outstanding invoices |
| `eboekhouden_list_mutations` | read | List or search mutations (bookings) |
| `eboekhouden_get_mutation` | read | Get a mutation (booking) |
| `eboekhouden_list_ledgers` | read | List ledgers (chart of accounts) |
| `eboekhouden_get_ledger` | read | Get a ledger |
| `eboekhouden_get_ledger_balance` | read | Get a ledger's balance |
| `eboekhouden_list_ledger_balances` | read | List all ledger balances |
| `eboekhouden_list_products` | read | List products |
| `eboekhouden_get_product` | read | Get a product |
| `eboekhouden_list_product_groups` | read | List product groups |
| `eboekhouden_list_cost_centers` | read | List cost centers |
| `eboekhouden_get_cost_center` | read | Get a cost center |
| `eboekhouden_list_units` | read | List units |
| `eboekhouden_list_invoice_templates` | read | List invoice templates |
| `eboekhouden_list_email_templates` | read | List e-mail templates |
| `eboekhouden_list_members` | read | List members (clubs and associations) |
| `eboekhouden_get_member` | read | Get a member (clubs and associations) |
| `eboekhouden_create_relation` | **write** | Create a relation |
| `eboekhouden_update_relation` | **write** | Update a relation |
| `eboekhouden_create_product` | **write** | Create a product |
| `eboekhouden_create_invoice` | **write** | Create an invoice |
| `eboekhouden_usage_status` | meta | Usage status (free-tier meter) |
| `eboekhouden_request_feature` | meta | Request a missing feature |
| `eboekhouden_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `eboekhouden_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API token) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `eboekhouden_upgrade` (it returns a Stripe Checkout link). Cancel any time with `eboekhouden_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `eboekhouden_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by e-Boekhouden.
