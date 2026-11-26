# Streamtime MCP by usefulapi

Use your [Streamtime](https://www.streamtime.net) account from Claude, Cursor, or any MCP client. Read jobs, quotes, invoices, logged time and reports, and add job comments or change job status. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://streamtime.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://streamtime.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http streamtime https://streamtime.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=streamtime&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstreamtime.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "streamtime": {
      "url": "https://streamtime.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Streamtime credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/streamtime/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Streamtime API key** (Streamtime → Settings → Integrations → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `streamtime_get_organisation` | read | Get organisation |
| `streamtime_list_users` | read | List users |
| `streamtime_get_user` | read | Get user |
| `streamtime_list_branches` | read | List branches |
| `streamtime_list_rate_cards` | read | List rate cards |
| `streamtime_list_roles` | read | List roles |
| `streamtime_get_company` | read | Get company |
| `streamtime_list_company_contacts` | read | List company contacts |
| `streamtime_get_contact` | read | Get contact |
| `streamtime_get_job` | read | Get job |
| `streamtime_list_job_phases` | read | List job phases |
| `streamtime_list_job_items` | read | List job items |
| `streamtime_list_job_activity_entries` | read | List job activity |
| `streamtime_add_job_comment` | **write** | Add job comment |
| `streamtime_update_job_status` | **write** | Update job status |
| `streamtime_get_quote` | read | Get quote |
| `streamtime_list_quote_line_items` | read | List quote line items |
| `streamtime_get_invoice` | read | Get invoice |
| `streamtime_list_invoice_line_items` | read | List invoice line items |
| `streamtime_list_invoice_payments` | read | List invoice payments |
| `streamtime_get_logged_time` | read | Get logged time |
| `streamtime_get_search_setup` | read | Get search setup |
| `streamtime_search_records` | read | Search records |
| `streamtime_get_report_setup` | read | Get report setup |
| `streamtime_run_report` | read | Run report |
| `streamtime_usage_status` | meta | Usage status (free-tier meter) |
| `streamtime_request_feature` | meta | Request a missing feature |
| `streamtime_upgrade` | meta | Upgrade to Pro or Pro+ |
| `streamtime_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `streamtime_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `streamtime_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `streamtime_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
