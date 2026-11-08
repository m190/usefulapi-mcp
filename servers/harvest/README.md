# Harvest MCP by usefulapi

Use your [Harvest](https://www.getharvest.com) account from Claude, Cursor, or any MCP client — read time entries, projects, clients, tasks and invoices, and log or update tracked time. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://harvest.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://harvest.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http harvest https://harvest.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=harvest&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fharvest.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "harvest": {
      "url": "https://harvest.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Harvest credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/harvest/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Harvest personal access token** and **Account ID** (id.getharvest.com → Developers). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `harvest_list_time_entries` | read | List time entries |
| `harvest_get_time_entry` | read | Get time entry |
| `harvest_list_projects` | read | List projects |
| `harvest_get_project` | read | Get project |
| `harvest_list_clients` | read | List clients |
| `harvest_get_client` | read | Get client |
| `harvest_list_tasks` | read | List tasks |
| `harvest_list_users` | read | List users |
| `harvest_get_current_user` | read | Get current user |
| `harvest_list_project_assignments` | read | List my project assignments |
| `harvest_list_invoices` | read | List invoices |
| `harvest_get_invoice` | read | Get invoice |
| `harvest_list_estimates` | read | List estimates |
| `harvest_list_expenses` | read | List expenses |
| `harvest_get_company` | read | Get company |
| `harvest_create_time_entry` | **write** | Create time entry |
| `harvest_update_time_entry` | **write** | Update time entry |
| `harvest_stop_time_entry` | **write** | Stop running time entry |
| `harvest_restart_time_entry` | **write** | Restart stopped time entry |
| `harvest_delete_time_entry` | **write** | Delete time entry |
| `harvest_usage_status` | meta | Usage status (free-tier meter) |
| `harvest_request_feature` | meta | Request a missing feature |
| `harvest_upgrade` | meta | Upgrade to Pro or Pro+ |
| `harvest_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `harvest_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `harvest_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `harvest_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
