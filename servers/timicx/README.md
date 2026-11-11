# Timicx MCP by usefulapi

Use your [Timicx](https://timicx.net) account from Claude, Cursor, or any MCP client. It reads projects, tasks and time bookings, books and changes time entries, runs live timers and deletes bookings. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://timicx.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://timicx.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http timicx https://timicx.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=timicx&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftimicx.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "timicx": {
      "url": "https://timicx.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Timicx credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/timicx/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Timicx subdomain** (the part before `.timicx.net` in your Timicx address), your **Timicx user name** and your **Timicx password** (the login you use in the Timicx web app). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `timicx_list_time_entries` | read | List time entries |
| `timicx_get_time_entry` | read | Get a time entry |
| `timicx_list_running_timers` | read | List running timers |
| `timicx_list_employees` | read | List employees |
| `timicx_get_employee` | read | Get an employee |
| `timicx_list_projects` | read | List projects |
| `timicx_get_project` | read | Get a project |
| `timicx_list_tasks` | read | List tasks |
| `timicx_get_task` | read | Get a task |
| `timicx_create_time_entry` | **write** | Create a time entry |
| `timicx_update_time_entry` | **write** | Update a time entry |
| `timicx_start_timer` | **write** | Start a live timer |
| `timicx_pause_timer` | **write** | Pause a live timer |
| `timicx_resume_timer` | **write** | Resume a live timer |
| `timicx_finish_timer` | **write** | Finish a live timer |
| `timicx_delete_time_entry` | **write** | Delete a time entry |
| `timicx_usage_status` | meta | Usage status (free-tier meter) |
| `timicx_request_feature` | meta | Request a missing feature |
| `timicx_upgrade` | meta | Upgrade to Pro or Pro+ |
| `timicx_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `timicx_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `timicx_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `timicx_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
