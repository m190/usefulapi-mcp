# DeskTime MCP by usefulapi

Use your [DeskTime](https://desktime.com) account from Claude, Cursor, or any MCP client. It reads tracked time, projects and tasks, and it can create projects and start or stop project timers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://desktime.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://desktime.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http desktime https://desktime.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=desktime&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdesktime.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "desktime": {
      "url": "https://desktime.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your DeskTime credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/desktime/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **DeskTime API key** (desktime.com/app/api). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `desktime_get_company` | read | Get company |
| `desktime_list_employees` | read | List employees with tracking data |
| `desktime_get_employee` | read | Get employee day summary |
| `desktime_get_employee_projects` | read | Get employee day with projects |
| `desktime_get_employee_apps` | read | Get employee day with apps |
| `desktime_get_employee_full` | read | Get employee day with projects and apps |
| `desktime_list_projects` | read | List projects |
| `desktime_create_project` | **write** | Create project |
| `desktime_start_project` | **write** | Start project timer |
| `desktime_stop_project` | **write** | Stop project timer |
| `desktime_usage_status` | meta | Usage status (free-tier meter) |
| `desktime_request_feature` | meta | Request a missing feature |
| `desktime_upgrade` | meta | Upgrade to Pro or Pro+ |
| `desktime_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `desktime_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `desktime_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `desktime_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
