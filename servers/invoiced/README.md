# Invoiced MCP by usefulapi

Use [Invoiced](https://www.invoiced.com) from Claude, Cursor, or any MCP client — customers, invoices, payments, credit notes, estimates, subscriptions, plus draft invoices, notes and tasks.
Hosted, no local install: connect with your own Invoiced credentials.

**Live endpoint:** `https://invoiced.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/invoiced

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://invoiced.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http invoiced https://invoiced.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=invoiced&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finvoiced.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "invoiced": {
      "url": "https://invoiced.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Invoiced credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/invoiced/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `invoiced_list_customers` | read | List customers |
| `invoiced_get_customer` | read | Get customer |
| `invoiced_get_customer_balance` | read | Get customer balance |
| `invoiced_list_contacts` | read | List customer contacts |
| `invoiced_list_invoices` | read | List invoices |
| `invoiced_get_invoice` | read | Get invoice |
| `invoiced_get_invoice_payment_plan` | read | Get invoice payment plan |
| `invoiced_list_payments` | read | List payments |
| `invoiced_get_payment` | read | Get payment |
| `invoiced_list_credit_notes` | read | List credit notes |
| `invoiced_get_credit_note` | read | Get credit note |
| `invoiced_list_estimates` | read | List estimates |
| `invoiced_get_estimate` | read | Get estimate |
| `invoiced_list_items` | read | List catalog items |
| `invoiced_get_item` | read | Get catalog item |
| `invoiced_list_tax_rates` | read | List tax rates |
| `invoiced_list_plans` | read | List subscription plans |
| `invoiced_get_plan` | read | Get subscription plan |
| `invoiced_list_subscriptions` | read | List subscriptions |
| `invoiced_get_subscription` | read | Get subscription |
| `invoiced_list_notes` | read | List notes |
| `invoiced_list_tasks` | read | List tasks |
| `invoiced_list_events` | read | List events |
| `invoiced_create_customer` | **write** | Create customer |
| `invoiced_create_draft_invoice` | **write** | Create draft invoice |
| `invoiced_add_note` | **write** | Add note |
| `invoiced_create_task` | **write** | Create task |
| `invoiced_usage_status` | meta | Usage status (free-tier meter) |
| `invoiced_request_feature` | meta | Request a missing feature |
| `invoiced_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `invoiced_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `invoiced_upgrade` (it returns a Stripe Checkout link). Cancel any time with `invoiced_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `invoiced_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Invoiced.
