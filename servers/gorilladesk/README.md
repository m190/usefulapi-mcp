# GorillaDesk MCP by usefulapi

Use your [GorillaDesk](https://www.gorilladesk.com) account from Claude, Cursor, or any MCP client. Read customers, jobs, invoices, payments and schedules, and create leads, update customers and add notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://gorilladesk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gorilladesk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gorilladesk https://gorilladesk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gorilladesk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgorilladesk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gorilladesk": {
      "url": "https://gorilladesk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your GorillaDesk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gorilladesk/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **GorillaDesk API key** (Add-Ons → API, then add a key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gorilladesk_get_company` | read | Get company |
| `gorilladesk_list_users` | read | List users |
| `gorilladesk_get_user` | read | Get a user |
| `gorilladesk_list_customers` | read | List customers |
| `gorilladesk_get_customer` | read | Get a customer |
| `gorilladesk_create_customer` | **write** | Create a customer |
| `gorilladesk_update_customer` | **write** | Update a customer |
| `gorilladesk_add_customer_location` | **write** | Add a customer location |
| `gorilladesk_add_customer_note` | **write** | Add a customer note |
| `gorilladesk_list_leads` | read | List leads |
| `gorilladesk_create_lead` | **write** | Create a lead |
| `gorilladesk_list_jobs` | read | List jobs |
| `gorilladesk_get_job` | read | Get a job |
| `gorilladesk_list_job_activities` | read | List job activities |
| `gorilladesk_list_job_statuses` | read | List job statuses |
| `gorilladesk_list_schedules` | read | List schedules |
| `gorilladesk_list_invoices` | read | List invoices |
| `gorilladesk_get_invoice` | read | Get an invoice |
| `gorilladesk_list_estimates` | read | List estimates |
| `gorilladesk_list_payments` | read | List payments |
| `gorilladesk_list_line_items` | read | List line items |
| `gorilladesk_list_service_templates` | read | List service templates |
| `gorilladesk_list_time_entries` | read | List time entries |
| `gorilladesk_usage_status` | meta | Usage status (free-tier meter) |
| `gorilladesk_request_feature` | meta | Request a missing feature |
| `gorilladesk_upgrade` | meta | Upgrade to Pro or Pro+ |
| `gorilladesk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `gorilladesk_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `gorilladesk_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `gorilladesk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
