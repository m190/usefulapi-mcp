# Teamdeck MCP by usefulapi

Use your [Teamdeck](https://www.teamdeck.io) account from Claude, Cursor, or any MCP client. Read projects, resources, bookings, time entries and vacations, and create bookings, time entries and projects. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://teamdeck.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://teamdeck.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http teamdeck https://teamdeck.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=teamdeck&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fteamdeck.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "teamdeck": {
      "url": "https://teamdeck.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Teamdeck credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/teamdeck/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Teamdeck API key** (Teamdeck → Settings → Integrations → API keys). Pick read, or read + write if you want to create data. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `teamdeck_get_organization` | read | Get organization |
| `teamdeck_list_projects` | read | List projects |
| `teamdeck_get_project` | read | Get project |
| `teamdeck_list_resources` | read | List resources |
| `teamdeck_get_resource` | read | Get resource |
| `teamdeck_list_bookings` | read | List bookings |
| `teamdeck_get_booking` | read | Get booking |
| `teamdeck_list_time_entries` | read | List time entries |
| `teamdeck_get_time_entry` | read | Get time entry |
| `teamdeck_list_vacations` | read | List vacations |
| `teamdeck_list_milestones` | read | List milestones |
| `teamdeck_list_organization_units` | read | List organization units |
| `teamdeck_list_project_tags` | read | List project tags |
| `teamdeck_create_booking` | **write** | Create booking |
| `teamdeck_create_time_entry` | **write** | Create time entry |
| `teamdeck_create_project` | **write** | Create project |
| `teamdeck_usage_status` | meta | Usage status (free-tier meter) |
| `teamdeck_request_feature` | meta | Request a missing feature |
| `teamdeck_upgrade` | meta | Upgrade to Pro or Pro+ |
| `teamdeck_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `teamdeck_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `teamdeck_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `teamdeck_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
