# GanttPRO MCP by usefulapi

Use your [GanttPRO](https://ganttpro.com) account from Claude, Cursor, or any MCP client. Read projects, tasks and time logs, create or update tasks, and add comments and links. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ganttpro.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ganttpro.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ganttpro https://ganttpro.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ganttpro&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fganttpro.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ganttpro": {
      "url": "https://ganttpro.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your GanttPRO credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ganttpro/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **GanttPRO team API key**, which the team owner creates in the GanttPRO web app. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ganttpro_get_team` | read | Get team |
| `ganttpro_list_projects` | read | List projects |
| `ganttpro_get_project` | read | Get a project |
| `ganttpro_get_task_fields` | read | Get task fields |
| `ganttpro_get_project_calendars` | read | Get project calendars |
| `ganttpro_list_tasks` | read | List tasks |
| `ganttpro_get_task` | read | Get a task |
| `ganttpro_list_resources` | read | List resources |
| `ganttpro_list_users` | read | List users |
| `ganttpro_get_user` | read | Get a user |
| `ganttpro_list_comments` | read | List task comments |
| `ganttpro_list_time_logs` | read | List time logs |
| `ganttpro_get_link` | read | Get a task link |
| `ganttpro_create_task` | **write** | Create a task |
| `ganttpro_update_task` | **write** | Update a task |
| `ganttpro_add_comment` | **write** | Add a task comment |
| `ganttpro_add_time_log` | **write** | Add a time log |
| `ganttpro_create_link` | **write** | Create a task link |
| `ganttpro_usage_status` | meta | Usage status (free-tier meter) |
| `ganttpro_request_feature` | meta | Request a missing feature |
| `ganttpro_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ganttpro_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ganttpro_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ganttpro_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ganttpro_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
