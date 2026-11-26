# Productive.io MCP by usefulapi

Use your [Productive.io](https://productive.io) account from Claude, Cursor, or any MCP client. Read projects, tasks, time entries, clients and invoices, create or update tasks, and log time. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://productive-io.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://productive-io.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http productive-io https://productive-io.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=productive-io&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fproductive-io.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "productive-io": {
      "url": "https://productive-io.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Productive.io credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/productive-io/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Productive API token** (Settings → API integrations → Generate new token) and your numeric **Organization ID** (for example 12345). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `productiveio_list_projects` | read | List projects |
| `productiveio_get_project` | read | Get a project |
| `productiveio_list_task_lists` | read | List task lists |
| `productiveio_list_workflow_statuses` | read | List workflow statuses |
| `productiveio_list_tasks` | read | List tasks |
| `productiveio_get_task` | read | Get a task |
| `productiveio_list_time_entries` | read | List time entries |
| `productiveio_list_people` | read | List people |
| `productiveio_list_companies` | read | List companies |
| `productiveio_list_deals` | read | List deals |
| `productiveio_list_services` | read | List services |
| `productiveio_list_bookings` | read | List bookings |
| `productiveio_list_invoices` | read | List invoices |
| `productiveio_get_invoice` | read | Get an invoice |
| `productiveio_create_time_entry` | **write** | Log time |
| `productiveio_create_task` | **write** | Create a task |
| `productiveio_update_task` | **write** | Update a task |
| `productiveio_usage_status` | meta | Usage status (free-tier meter) |
| `productiveio_request_feature` | meta | Request a missing feature |
| `productiveio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `productiveio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `productiveio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `productiveio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `productiveio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
