# Everhour MCP by usefulapi

Use your [Everhour](https://everhour.com) account from Claude, Cursor, or any MCP client. Start and stop timers, log and edit time records, and read tasks, projects and team time. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://everhour.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://everhour.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http everhour https://everhour.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=everhour&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Feverhour.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "everhour": {
      "url": "https://everhour.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Everhour credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/everhour/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Everhour API key** (Everhour → your profile page, at the bottom). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `everhour_get_current_user` | read | Get current user |
| `everhour_list_users` | read | List team members |
| `everhour_list_clients` | read | List clients |
| `everhour_list_projects` | read | List projects |
| `everhour_get_project` | read | Get a project |
| `everhour_list_project_tasks` | read | List project tasks |
| `everhour_search_tasks` | read | Search tasks |
| `everhour_get_task` | read | Get a task |
| `everhour_list_time_records` | read | List team time records |
| `everhour_list_user_time_records` | read | List a user's time records |
| `everhour_list_task_time_records` | read | List a task's time records |
| `everhour_get_running_timer` | read | Get the running timer |
| `everhour_start_timer` | **write** | Start a timer |
| `everhour_stop_timer` | **write** | Stop the running timer |
| `everhour_add_time` | **write** | Log time on a task |
| `everhour_update_time_record` | **write** | Update a time record |
| `everhour_delete_time_record` | **write** | Delete a time record |
| `everhour_usage_status` | meta | Usage status (free-tier meter) |
| `everhour_request_feature` | meta | Request a missing feature |
| `everhour_upgrade` | meta | Upgrade to Pro or Pro+ |
| `everhour_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `everhour_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `everhour_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `everhour_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
