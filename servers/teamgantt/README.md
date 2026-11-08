# TeamGantt MCP by usefulapi

Use your [TeamGantt](https://www.teamgantt.com) account from Claude, Cursor, or any MCP client. Read projects, schedules, tasks, comments, resources, timesheets and workload, and create tasks and comments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://teamgantt.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://teamgantt.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http teamgantt https://teamgantt.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=teamgantt&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fteamgantt.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "teamgantt": {
      "url": "https://teamgantt.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TeamGantt credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/teamgantt/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **client id**, the **client secret** and the **refresh token** of your own TeamGantt API app (steps in the login page: TeamGantt has no API key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `teamgantt_get_current_user` | read | Get the current user |
| `teamgantt_list_projects` | read | List projects |
| `teamgantt_get_project` | read | Get a project |
| `teamgantt_get_project_schedule` | read | Get the groups and tasks of a project |
| `teamgantt_list_groups` | read | List groups of projects |
| `teamgantt_list_tasks` | read | List or search tasks |
| `teamgantt_get_task` | read | Get a task |
| `teamgantt_list_comments` | read | List comments and notes |
| `teamgantt_list_company_users` | read | List company users |
| `teamgantt_list_resources` | read | List resources |
| `teamgantt_get_timesheets` | read | Get timesheets |
| `teamgantt_get_workload` | read | Get workload |
| `teamgantt_create_task` | **write** | Create a task |
| `teamgantt_create_comment` | **write** | Add a comment |
| `teamgantt_usage_status` | meta | Usage status (free-tier meter) |
| `teamgantt_request_feature` | meta | Request a missing feature |
| `teamgantt_upgrade` | meta | Upgrade to Pro or Pro+ |
| `teamgantt_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `teamgantt_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `teamgantt_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `teamgantt_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
