# Paymo MCP by usefulapi

Use [Paymo](https://www.paymoapp.com) from Claude, Cursor, or any MCP client — browse projects, tasks, timesheets, invoices and expenses, and create tasks, log time and run timers.
Hosted, no local install: connect with your own Paymo credentials.

**Live endpoint:** `https://paymo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/paymo

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://paymo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http paymo https://paymo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=paymo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpaymo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "paymo": {
      "url": "https://paymo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Paymo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/paymo/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Paymo API key** (My account → API keys → Generate new API key).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `paymo_get_me` | read | Get the current user |
| `paymo_get_company` | read | Get company info |
| `paymo_list_users` | read | List users |
| `paymo_list_clients` | read | List clients |
| `paymo_list_projects` | read | List projects |
| `paymo_get_project` | read | Get a project |
| `paymo_list_tasklists` | read | List task lists |
| `paymo_list_tasks` | read | List tasks |
| `paymo_get_task` | read | Get a task |
| `paymo_list_time_entries` | read | List time entries |
| `paymo_list_invoices` | read | List invoices |
| `paymo_get_invoice` | read | Get an invoice |
| `paymo_list_expenses` | read | List expenses |
| `paymo_create_project` | **write** | Create a project |
| `paymo_create_task` | **write** | Create a task |
| `paymo_update_task` | **write** | Update a task |
| `paymo_create_time_entry` | **write** | Log time |
| `paymo_update_time_entry` | **write** | Update a time entry |
| `paymo_start_timer` | **write** | Start a timer |
| `paymo_stop_timer` | **write** | Stop a timer |
| `paymo_add_task_comment` | **write** | Comment on a task |
| `paymo_usage_status` | meta | Usage status (free-tier meter) |
| `paymo_upgrade` | meta | Upgrade to Pro (unlimited) |
| `paymo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `paymo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `paymo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `paymo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Paymo.
