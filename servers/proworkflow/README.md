# ProWorkflow MCP by usefulapi

Use your [ProWorkflow](https://www.proworkflow.com) account from Claude, Cursor, or any MCP client. Read projects, tasks, companies, invoices, quotes and time records, and create, update or complete tasks and log time. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://proworkflow.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://proworkflow.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http proworkflow https://proworkflow.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=proworkflow&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fproworkflow.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "proworkflow": {
      "url": "https://proworkflow.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ProWorkflow credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/proworkflow/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **ProWorkflow API key**, made in ProWorkflow by a staff user (client and contractor logins cannot use one). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `proworkflow_get_account` | read | Get account settings |
| `proworkflow_list_projects` | read | List projects |
| `proworkflow_get_project` | read | Get a project |
| `proworkflow_list_project_phases` | read | List project phases |
| `proworkflow_list_project_items` | read | List project items |
| `proworkflow_get_item` | read | Get an item |
| `proworkflow_list_companies` | read | List companies |
| `proworkflow_get_company` | read | Get a company |
| `proworkflow_list_contacts` | read | List contacts |
| `proworkflow_get_contact` | read | Get a contact |
| `proworkflow_list_invoices` | read | List invoices |
| `proworkflow_get_invoice` | read | Get an invoice |
| `proworkflow_list_quotes` | read | List quotes |
| `proworkflow_list_time_records` | read | List time records |
| `proworkflow_create_item` | **write** | Create an item |
| `proworkflow_update_item` | **write** | Update an item |
| `proworkflow_complete_items` | **write** | Complete items |
| `proworkflow_add_time_record` | **write** | Add a time record |
| `proworkflow_usage_status` | meta | Usage status (free-tier meter) |
| `proworkflow_request_feature` | meta | Request a missing feature |
| `proworkflow_upgrade` | meta | Upgrade to Pro or Pro+ |
| `proworkflow_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `proworkflow_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `proworkflow_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `proworkflow_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
