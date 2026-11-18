# TheBusinessApp MCP by usefulapi

Use your [TheBusinessApp](https://thebusinessapp.com) account from Claude, Cursor, or any MCP client. It reads customers, enquiries, jobs, visits, quotes, invoices and payments, and creates or updates records. It never sends a quote or invoice and never takes a payment. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://thebusinessapp.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://thebusinessapp.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http thebusinessapp https://thebusinessapp.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=thebusinessapp&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fthebusinessapp.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "thebusinessapp": {
      "url": "https://thebusinessapp.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TheBusinessApp credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/thebusinessapp/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **TheBusinessApp API key**, which starts with `tba_live_` (Settings → Developers, created by an owner or admin). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `thebusinessapp_get_account` | read | Get the connected key and company |
| `thebusinessapp_list_customers` | read | List customers |
| `thebusinessapp_get_customer` | read | Get a customer |
| `thebusinessapp_list_contacts` | read | List contacts |
| `thebusinessapp_list_sites` | read | List sites |
| `thebusinessapp_list_enquiries` | read | List enquiries |
| `thebusinessapp_get_enquiry` | read | Get an enquiry |
| `thebusinessapp_list_quotes` | read | List quotes |
| `thebusinessapp_get_quote` | read | Get a quote |
| `thebusinessapp_list_jobs` | read | List jobs |
| `thebusinessapp_get_job` | read | Get a job |
| `thebusinessapp_list_visits` | read | List visits |
| `thebusinessapp_list_invoices` | read | List invoices |
| `thebusinessapp_get_invoice` | read | Get an invoice |
| `thebusinessapp_list_payments` | read | List payments |
| `thebusinessapp_list_products` | read | List products |
| `thebusinessapp_list_staff` | read | List staff |
| `thebusinessapp_list_timesheets` | read | List timesheets |
| `thebusinessapp_list_stock_items` | read | List stock items |
| `thebusinessapp_create_customer` | **write** | Create a customer |
| `thebusinessapp_update_customer` | **write** | Update a customer |
| `thebusinessapp_create_enquiry` | **write** | Create an enquiry |
| `thebusinessapp_create_quote` | **write** | Create a draft quote |
| `thebusinessapp_create_job` | **write** | Create a job |
| `thebusinessapp_update_job` | **write** | Update a job |
| `thebusinessapp_add_job_visit` | **write** | Add a visit to a job |
| `thebusinessapp_update_visit` | **write** | Update a visit |
| `thebusinessapp_create_invoice` | **write** | Create a draft invoice |
| `thebusinessapp_create_product` | **write** | Create a product |
| `thebusinessapp_get_accounting_export` | read | Get an accounting export |
| `thebusinessapp_usage_status` | meta | Usage status (free-tier meter) |
| `thebusinessapp_request_feature` | meta | Request a missing feature |
| `thebusinessapp_upgrade` | meta | Upgrade to Pro or Pro+ |
| `thebusinessapp_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `thebusinessapp_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `thebusinessapp_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `thebusinessapp_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
