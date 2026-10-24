# Lawcus MCP by usefulapi

Read Lawcus contacts, matters, leads, time and billing reports; create contacts and tasks.

**Live endpoint:** `https://lawcus.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/lawcus

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://lawcus.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http lawcus https://lawcus.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=lawcus&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flawcus.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "lawcus": {
      "url": "https://lawcus.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Lawcus credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/lawcus/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste a Lawcus **API long-life token** (Settings → API Tokens) and pick where your firm is hosted (US or EU).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lawcus_get_me` | read | Get my Lawcus user |
| `lawcus_get_firm` | read | Get firm details |
| `lawcus_list_team_members` | read | List team members |
| `lawcus_search` | read | Search Lawcus |
| `lawcus_list_contacts` | read | List contacts |
| `lawcus_get_contact` | read | Get a contact |
| `lawcus_create_contact` | **write** | Create a contact |
| `lawcus_list_matters` | read | List matters |
| `lawcus_get_matter` | read | Get a matter |
| `lawcus_list_leads` | read | List leads |
| `lawcus_get_lead` | read | Get a lead |
| `lawcus_list_lead_sources` | read | List lead sources |
| `lawcus_list_workflows` | read | List workflows |
| `lawcus_list_workflow_stages` | read | List workflow stages |
| `lawcus_list_tasks` | read | List tasks |
| `lawcus_create_task` | **write** | Create a task |
| `lawcus_list_time_entries` | read | List time entries |
| `lawcus_list_expenses` | read | List expenses |
| `lawcus_list_billing_items` | read | List billing items |
| `lawcus_list_interactions` | read | List interactions |
| `lawcus_report_accounts_receivable` | read | Accounts receivable report |
| `lawcus_report_matter_balance` | read | Matter balance report |
| `lawcus_report_revenue` | read | Attorney revenue report |
| `lawcus_report_time_entries` | read | Time entries summary report |
| `lawcus_report_payments_collected` | read | Payments collected report |
| `lawcus_report_invoice_history` | read | Invoice history report |
| `lawcus_report_client_trust` | read | Client trust balance report |
| `lawcus_usage_status` | meta | Usage status (free-tier meter) |
| `lawcus_request_feature` | meta | Request a missing feature |
| `lawcus_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `lawcus_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `lawcus_upgrade` (it returns a Stripe Checkout link). Cancel any time with `lawcus_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `lawcus_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Lawcus.
