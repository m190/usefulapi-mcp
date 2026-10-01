# Accelo MCP by usefulapi

Manage Accelo companies, contacts, jobs, tasks, tickets and time. Hosted, no local install.

**Live endpoint:** `https://accelo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "accelo": {
      "url": "https://accelo.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Accelo credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `list_companies` | read | List companies |
| `get_company` | read | Get a company |
| `list_contacts` | read | List contacts |
| `get_contact` | read | Get a contact |
| `list_jobs` | read | List jobs (projects) |
| `get_job` | read | Get a job (project) |
| `list_tasks` | read | List tasks |
| `get_task` | read | Get a task |
| `list_activities` | read | List activities |
| `get_activity` | read | Get an activity |
| `list_invoices` | read | List invoices |
| `get_invoice` | read | Get an invoice |
| `list_prospects` | read | List prospects (sales) |
| `get_prospect` | read | Get a prospect (sale) |
| `list_staff` | read | List staff |
| `get_staff` | read | Get a staff member |
| `list_issues` | read | List issues (tickets) |
| `get_issue` | read | Get an issue (ticket) |
| `accelo_request` | read | Raw read request |
| `create_company` | **write** | Create a company |
| `create_contact` | **write** | Create a contact |
| `create_task` | **write** | Create a task |
| `create_activity` | **write** | Create an activity (log a note/email/call) |
| `accelo_usage_status` | meta | Usage status (free-tier meter) |
| `accelo_upgrade` | meta | Upgrade to Pro (unlimited) |
| `accelo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `accelo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `accelo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `accelo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
