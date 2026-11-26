# Resource Guru MCP by usefulapi

Use your [Resource Guru](https://resourceguru.co) account from Claude, Cursor, or any MCP client. Read accounts, resources, projects, bookings, timesheets and utilization reports, and create bookings. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://resource-guru.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://resource-guru.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http resource-guru https://resource-guru.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=resource-guru&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fresource-guru.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "resource-guru": {
      "url": "https://resource-guru.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Resource Guru account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/resource-guru/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Resource Guru and approve access. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `resourceguru_list_accounts` | read | List accounts |
| `resourceguru_get_my_user` | read | Get my user |
| `resourceguru_list_users` | read | List users |
| `resourceguru_list_resources` | read | List resources |
| `resourceguru_get_resource` | read | Get a resource |
| `resourceguru_list_resource_types` | read | List resource types |
| `resourceguru_list_clients` | read | List clients |
| `resourceguru_get_client` | read | Get a client |
| `resourceguru_list_projects` | read | List projects |
| `resourceguru_get_project` | read | Get a project |
| `resourceguru_list_tasks` | read | List tasks |
| `resourceguru_list_phases` | read | List phases |
| `resourceguru_list_milestones` | read | List milestones |
| `resourceguru_list_bookings` | read | List bookings |
| `resourceguru_get_booking` | read | Get a booking |
| `resourceguru_create_booking` | **write** | Create a booking |
| `resourceguru_list_downtimes` | read | List downtimes |
| `resourceguru_list_timesheets` | read | List timesheet entries |
| `resourceguru_get_timesheet_report_by_resource` | read | Timesheet report by resource |
| `resourceguru_get_timesheet_report_by_project` | read | Timesheet report by project |
| `resourceguru_get_utilization_report` | read | Resource utilization report |
| `resourceguru_list_rates` | read | List rates |
| `resourceguru_list_custom_fields` | read | List custom fields |
| `resourceguru_usage_status` | meta | Usage status (free-tier meter) |
| `resourceguru_request_feature` | meta | Request a missing feature |
| `resourceguru_upgrade` | meta | Upgrade to Pro or Pro+ |
| `resourceguru_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `resourceguru_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `resourceguru_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `resourceguru_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
