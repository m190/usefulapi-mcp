# ChargeOver MCP by usefulapi

Use [ChargeOver](https://chargeover.com) from Claude, Cursor, or any MCP client — customers, contacts, invoices, transactions, quotes, subscriptions, usage and reports, plus new customers, contacts, notes and quotes.
Hosted, no local install: connect with your own ChargeOver credentials.

**Live endpoint:** `https://chargeover.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/chargeover

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://chargeover.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http chargeover https://chargeover.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=chargeover&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fchargeover.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "chargeover": {
      "url": "https://chargeover.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ChargeOver credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/chargeover/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `chargeover_list_customers` | read | List or search customers |
| `chargeover_list_contacts` | read | List or search contacts |
| `chargeover_list_invoices` | read | List or search invoices |
| `chargeover_list_transactions` | read | List or search transactions (read only) |
| `chargeover_list_quotes` | read | List or search quotes |
| `chargeover_list_subscriptions` | read | List or search subscriptions |
| `chargeover_list_items` | read | List or search items (products and discounts) |
| `chargeover_list_notes` | read | List notes |
| `chargeover_list_usage` | read | List usage (metered) data |
| `chargeover_list_coupons` | read | List coupons |
| `chargeover_get_customer` | read | Get a customer |
| `chargeover_get_contact` | read | Get a contact |
| `chargeover_get_invoice` | read | Get an invoice |
| `chargeover_get_transaction` | read | Get a transaction (read only) |
| `chargeover_get_quote` | read | Get a quote |
| `chargeover_get_subscription` | read | Get a subscription |
| `chargeover_get_item` | read | Get an item |
| `chargeover_list_reports` | read | List reports |
| `chargeover_get_report` | read | Get a report's definition |
| `chargeover_run_report` | read | Run a report |
| `chargeover_create_customer` | **write** | Create a customer |
| `chargeover_update_customer` | **write** | Update a customer |
| `chargeover_create_contact` | **write** | Add a contact to a customer |
| `chargeover_create_note` | **write** | Add a note |
| `chargeover_create_quote` | **write** | Create a quote |
| `chargeover_usage_status` | meta | Usage status (free-tier meter) |
| `chargeover_request_feature` | meta | Request a missing feature |
| `chargeover_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `chargeover_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `chargeover_upgrade` (it returns a Stripe Checkout link). Cancel any time with `chargeover_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `chargeover_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by ChargeOver.
