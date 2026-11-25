# timr MCP by usefulapi

Use your [timr](https://www.timr.com) account from Claude, Cursor, or any MCP client. Read employees, teams, tasks, working times, project times and holidays, and create or update time entries. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://timr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://timr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http timr https://timr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=timr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftimr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "timr": {
      "url": "https://timr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your timr credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/timr/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **client ID** and **client secret** of an API client you create in your timr account. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `timr_list_users` | read | List users |
| `timr_get_user` | read | Get user |
| `timr_list_teams` | read | List teams |
| `timr_get_team` | read | Get team |
| `timr_list_team_members` | read | List team members |
| `timr_list_tasks` | read | List tasks |
| `timr_get_task` | read | Get task |
| `timr_list_working_times` | read | List working times |
| `timr_get_working_time` | read | Get working time |
| `timr_list_deleted_working_times` | read | List deleted working times |
| `timr_create_working_time` | **write** | Create working time |
| `timr_update_working_time` | **write** | Update working time |
| `timr_list_project_times` | read | List project times |
| `timr_get_project_time` | read | Get project time |
| `timr_create_project_time` | **write** | Create project time |
| `timr_update_project_time` | **write** | Update project time |
| `timr_list_working_time_types` | read | List working time types |
| `timr_list_holiday_calendars` | read | List holiday calendars |
| `timr_list_holidays` | read | List holidays |
| `timr_usage_status` | meta | Usage status (free-tier meter) |
| `timr_request_feature` | meta | Request a missing feature |
| `timr_upgrade` | meta | Upgrade to Pro or Pro+ |
| `timr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `timr_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `timr_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `timr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
