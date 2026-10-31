# Gorelo MCP by usefulapi

Use your [Gorelo](https://www.gorelo.io) account from Claude, Cursor, or any MCP client. Read clients, tickets, managed devices, alerts, projects and invoices, and create tickets, add comments or log time. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://gorelo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gorelo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gorelo https://gorelo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gorelo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgorelo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gorelo": {
      "url": "https://gorelo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Gorelo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gorelo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Gorelo API key** and your **data region** (Gorelo → Settings → Integrations → Generate New Key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gorelo_list_clients` | read | List clients |
| `gorelo_get_client` | read | Get a client |
| `gorelo_list_client_locations` | read | List client locations |
| `gorelo_list_contacts` | read | List contacts |
| `gorelo_get_contact` | read | Get a contact |
| `gorelo_list_tickets` | read | List tickets |
| `gorelo_get_ticket` | read | Get a ticket |
| `gorelo_list_ticket_comments` | read | List ticket comments |
| `gorelo_list_ticket_statuses` | read | List ticket statuses |
| `gorelo_list_ticket_types` | read | List ticket types |
| `gorelo_list_ticket_priorities` | read | List ticket priorities |
| `gorelo_list_agent_assets` | read | List managed devices |
| `gorelo_get_agent_asset` | read | Get a managed device |
| `gorelo_get_agent_hardware` | read | Get device hardware |
| `gorelo_list_agent_pending_updates` | read | List device pending updates |
| `gorelo_list_custom_assets` | read | List custom assets |
| `gorelo_list_alerts` | read | List alerts |
| `gorelo_get_alert` | read | Get an alert |
| `gorelo_list_projects` | read | List projects |
| `gorelo_list_project_tasks` | read | List project tasks |
| `gorelo_list_time_entries` | read | List time entries |
| `gorelo_list_invoices` | read | List invoices |
| `gorelo_get_invoice` | read | Get an invoice |
| `gorelo_list_contracts` | read | List contracts |
| `gorelo_list_users` | read | List technicians |
| `gorelo_list_groups` | read | List technician groups |
| `gorelo_create_ticket` | **write** | Create a ticket |
| `gorelo_update_ticket` | **write** | Update a ticket |
| `gorelo_add_ticket_comment` | **write** | Add a ticket comment |
| `gorelo_update_alert_status` | **write** | Update an alert status |
| `gorelo_log_time_entry` | **write** | Log time on a ticket |
| `gorelo_usage_status` | meta | Usage status (free-tier meter) |
| `gorelo_request_feature` | meta | Request a missing feature |
| `gorelo_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `gorelo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `gorelo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `gorelo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `gorelo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
