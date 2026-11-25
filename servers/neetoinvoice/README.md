# NeetoInvoice MCP by usefulapi

Use your [NeetoInvoice](https://www.neetoinvoice.com) account from Claude, Cursor, or any MCP client. Read clients, projects, unbilled time, invoices and timesheet reports, and create or update clients, log time and manage invoices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://neetoinvoice.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://neetoinvoice.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http neetoinvoice https://neetoinvoice.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=neetoinvoice&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fneetoinvoice.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "neetoinvoice": {
      "url": "https://neetoinvoice.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your NeetoInvoice credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/neetoinvoice/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **NeetoInvoice workspace subdomain** (the `acme` part of `acme.neetoinvoice.com`) and a **NeetoInvoice API key** of type General, not Zapier, created under Admin panel → API keys. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `neetoinvoice_list_clients` | read | List clients |
| `neetoinvoice_get_client` | read | Get a client |
| `neetoinvoice_create_client` | **write** | Create a client |
| `neetoinvoice_update_client` | **write** | Update a client |
| `neetoinvoice_list_projects` | read | List projects |
| `neetoinvoice_get_project` | read | Get a project |
| `neetoinvoice_create_project` | **write** | Create a project |
| `neetoinvoice_list_project_users` | read | List project users |
| `neetoinvoice_list_team_members` | read | List team members |
| `neetoinvoice_list_time_entries` | read | List unbilled time entries |
| `neetoinvoice_create_time_entry` | **write** | Create a time entry |
| `neetoinvoice_list_invoices` | read | List invoices |
| `neetoinvoice_generate_invoice` | **write** | Generate an invoice |
| `neetoinvoice_send_invoice` | **write** | Send an invoice |
| `neetoinvoice_mark_invoice_paid` | **write** | Mark an invoice as paid |
| `neetoinvoice_void_invoice` | **write** | Void an invoice |
| `neetoinvoice_list_monthly_ptos` | read | List monthly PTO |
| `neetoinvoice_get_payroll_summary` | read | Get the payroll summary |
| `neetoinvoice_list_missing_timesheet_entries` | read | List missing timesheet days |
| `neetoinvoice_get_timesheet_summary` | read | Get the timesheet summary |
| `neetoinvoice_usage_status` | meta | Usage status (free-tier meter) |
| `neetoinvoice_request_feature` | meta | Request a missing feature |
| `neetoinvoice_upgrade` | meta | Upgrade to Pro or Pro+ |
| `neetoinvoice_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `neetoinvoice_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `neetoinvoice_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `neetoinvoice_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
