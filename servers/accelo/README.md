# Accelo MCP by usefulapi

Manage Accelo companies, contacts, jobs, tasks, tickets and time. Hosted, no local install.

**Live endpoint:** `https://accelo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://accelo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http accelo https://accelo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=accelo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faccelo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "accelo": {
      "url": "https://accelo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Accelo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/accelo/

<!-- connect:end (generated above, edit below) -->

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
| `accelo_request_feature` | meta | Request a missing feature |
| `accelo_upgrade` | meta | Upgrade to Pro (unlimited) |
| `accelo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `accelo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `accelo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `accelo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
