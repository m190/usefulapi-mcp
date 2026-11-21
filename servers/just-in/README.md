# Just-In MCP by usefulapi

Use your [Just-In](https://just-in.co.il) account from Claude, Cursor, or any MCP client. Read employees, attendance, leave, shifts and timesheets, and create, approve or reject leave requests, and create draft shifts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://just-in.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://just-in.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http just-in https://just-in.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=just-in&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjust-in.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "just-in": {
      "url": "https://just-in.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Just-In credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/just-in/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Just-In API token** (Just-In → Company Settings → API Tokens). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `justin_get_account` | read | Check the API token |
| `justin_list_employees` | read | List employees |
| `justin_get_employee` | read | Get an employee |
| `justin_list_attendance` | read | List attendance records |
| `justin_get_attendance_record` | read | Get an attendance record |
| `justin_list_leave_requests` | read | List leave requests |
| `justin_get_leave_request` | read | Get a leave request |
| `justin_list_schedule_shifts` | read | List scheduled shifts |
| `justin_get_schedule_shift` | read | Get a scheduled shift |
| `justin_list_sites` | read | List sites |
| `justin_list_departments` | read | List departments |
| `justin_list_branches` | read | List branches |
| `justin_get_timesheets` | read | Get monthly timesheets |
| `justin_create_leave_request` | **write** | Create a leave request |
| `justin_resolve_leave_requests` | **write** | Approve or reject leave requests |
| `justin_create_schedule_shift` | **write** | Create a draft shift |
| `justin_usage_status` | meta | Usage status (free-tier meter) |
| `justin_request_feature` | meta | Request a missing feature |
| `justin_upgrade` | meta | Upgrade to Pro or Pro+ |
| `justin_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `justin_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `justin_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `justin_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
