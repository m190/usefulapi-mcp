# bexio MCP by usefulapi

Work with your [bexio](https://www.bexio.com) company from Claude, Cursor, or any MCP client — look up contacts, sales invoices and their payments, quotes, orders, items, projects, time sheets, supplier bills, the chart of accounts, the journal, VAT codes and bank accounts; create contacts and notes, log time and create draft invoices. Hosted, no local install: connect with your bexio account over OAuth.

**Live endpoint:** `https://bexio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/bexio

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bexio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bexio https://bexio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bexio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbexio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bexio": {
      "url": "https://bexio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your bexio account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bexio/

<!-- connect:end (generated above, edit below) -->

On first connect you'll be sent to bexio to sign in and approve access for your company; no API keys to paste.
Draft invoices are never issued, sent or booked: you review and issue them in bexio. You can remove the access any
time in bexio. One subscription covers one bexio user in one company.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bexio_get_company_profile` | read | Get company profile |
| `bexio_get_current_user` | read | Get current user |
| `bexio_list_users` | read | List users |
| `bexio_list_contacts` | read | List contacts |
| `bexio_get_contact` | read | Get contact |
| `bexio_list_invoices` | read | List invoices |
| `bexio_get_invoice` | read | Get invoice |
| `bexio_list_invoice_payments` | read | List invoice payments |
| `bexio_list_quotes` | read | List quotes |
| `bexio_get_quote` | read | Get quote |
| `bexio_list_orders` | read | List orders |
| `bexio_get_order` | read | Get order |
| `bexio_list_articles` | read | List items |
| `bexio_list_projects` | read | List projects |
| `bexio_get_project` | read | Get project |
| `bexio_list_timesheets` | read | List timesheets |
| `bexio_list_business_activities` | read | List business activities |
| `bexio_list_accounts` | read | List accounts |
| `bexio_list_journal` | read | List journal entries |
| `bexio_list_taxes` | read | List taxes |
| `bexio_list_bank_accounts` | read | List bank accounts |
| `bexio_list_currencies` | read | List currencies |
| `bexio_list_business_years` | read | List business years |
| `bexio_list_bills` | read | List supplier bills |
| `bexio_create_contact` | **write** | Create contact |
| `bexio_create_note` | **write** | Create note |
| `bexio_create_timesheet` | **write** | Create timesheet entry |
| `bexio_create_draft_invoice` | **write** | Create draft invoice |
| `bexio_usage_status` | meta | Usage status (free-tier meter) |
| `bexio_request_feature` | meta | Request a missing feature |
| `bexio_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `bexio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `bexio_upgrade` (it returns a Stripe Checkout link). Cancel any time with `bexio_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `bexio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). This repo contains documentation only; the server is hosted.
