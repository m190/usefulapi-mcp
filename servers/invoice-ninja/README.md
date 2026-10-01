# Invoice Ninja MCP by usefulapi

Use [Invoice Ninja](https://invoiceninja.com) from Claude, Cursor, or any MCP client — read and create clients, invoices, quotes, expenses, tasks and projects, convert quotes, and email invoices.
Hosted, no local install: connect with your own Invoice Ninja credentials.

**Live endpoint:** `https://invoice-ninja.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/invoice-ninja

## Add to Claude

```json
{
  "mcpServers": {
    "invoice-ninja": {
      "url": "https://invoice-ninja.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Invoice Ninja API token** (Settings → Account Management → Integrations → API tokens), plus your instance URL if you self-host.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `invoiceninja_list_clients` | read | List clients |
| `invoiceninja_get_client` | read | Get one client |
| `invoiceninja_list_invoices` | read | List invoices |
| `invoiceninja_get_invoice` | read | Get one invoice |
| `invoiceninja_list_quotes` | read | List quotes |
| `invoiceninja_get_quote` | read | Get one quote |
| `invoiceninja_list_products` | read | List products |
| `invoiceninja_list_payments` | read | List payments |
| `invoiceninja_list_expenses` | read | List expenses |
| `invoiceninja_list_vendors` | read | List vendors |
| `invoiceninja_list_tasks` | read | List tasks |
| `invoiceninja_list_projects` | read | List projects |
| `invoiceninja_list_recurring_invoices` | read | List recurring invoices |
| `invoiceninja_create_client` | **write** | Create a client |
| `invoiceninja_update_client` | **write** | Update a client |
| `invoiceninja_create_invoice` | **write** | Create an invoice |
| `invoiceninja_update_invoice` | **write** | Update an invoice |
| `invoiceninja_mark_invoice_sent` | **write** | Mark an invoice sent |
| `invoiceninja_email_invoice` | **write** | Email an invoice to the client |
| `invoiceninja_create_quote` | **write** | Create a quote |
| `invoiceninja_convert_quote_to_invoice` | **write** | Convert a quote to an invoice |
| `invoiceninja_create_expense` | **write** | Create an expense |
| `invoiceninja_create_task` | **write** | Create a task / log time |
| `invoiceninja_create_project` | **write** | Create a project |
| `invoiceninja_usage_status` | meta | Usage status (free-tier meter) |
| `invoiceninja_upgrade` | meta | Upgrade to Pro (unlimited) |
| `invoiceninja_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `invoiceninja_upgrade` (it returns a Stripe Checkout link). Cancel any time with `invoiceninja_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `invoiceninja_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Invoice Ninja.
