# Clockify MCP by usefulapi

Use [Clockify](https://clockify.me) from Claude, Cursor, or any MCP client — time entries, timers, projects, clients, tasks, tags and summary or detailed reports.
Hosted, no local install: connect with your own Clockify credentials.

**Live endpoint:** `https://clockify.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/clockify

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://clockify.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http clockify https://clockify.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=clockify&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fclockify.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "clockify": {
      "url": "https://clockify.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Clockify credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/clockify/

<!-- connect:end (generated above, edit below) -->

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Clockify credentials.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `clockify_get_current_user` | read | Get current user |
| `clockify_list_workspaces` | read | List workspaces |
| `clockify_list_users` | read | List workspace users |
| `clockify_list_clients` | read | List clients |
| `clockify_list_projects` | read | List projects |
| `clockify_get_project` | read | Get a project |
| `clockify_list_tasks` | read | List project tasks |
| `clockify_list_tags` | read | List tags |
| `clockify_list_time_entries` | read | List time entries |
| `clockify_get_time_entry` | read | Get a time entry |
| `clockify_get_running_timer` | read | Get running timer |
| `clockify_summary_report` | read | Summary report |
| `clockify_detailed_report` | read | Detailed report |
| `clockify_create_time_entry` | **write** | Log time or start a timer |
| `clockify_stop_timer` | **write** | Stop running timer |
| `clockify_update_time_entry` | **write** | Update a time entry |
| `clockify_delete_time_entry` | **write** | Delete a time entry |
| `clockify_create_project` | **write** | Create a project |
| `clockify_create_task` | **write** | Create a task |
| `clockify_create_client` | **write** | Create a client |
| `clockify_create_tag` | **write** | Create a tag |
| `clockify_usage_status` | meta | Usage status (free-tier meter) |
| `clockify_request_feature` | meta | Request a missing feature |
| `clockify_upgrade` | meta | Upgrade to Pro or Pro+ |
| `clockify_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `clockify_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `clockify_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `clockify_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Clockify.
