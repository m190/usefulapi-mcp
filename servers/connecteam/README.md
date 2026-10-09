# Connecteam MCP by usefulapi

Use [Connecteam](https://connecteam.com) from Claude, Cursor, or any MCP client — read Connecteam users, shifts, time clock, jobs, time off, tasks and forms; create shifts and tasks.
Hosted, no local install: connect with your own Connecteam credentials.

**Live endpoint:** `https://connecteam.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/connecteam

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://connecteam.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http connecteam https://connecteam.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=connecteam&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fconnecteam.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "connecteam": {
      "url": "https://connecteam.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Connecteam credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/connecteam/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Connecteam API key and region**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `connecteam_get_account` | read | Get account |
| `connecteam_list_users` | read | List users |
| `connecteam_list_schedulers` | read | List schedulers |
| `connecteam_list_shifts` | read | List shifts |
| `connecteam_get_shift` | read | Get shift |
| `connecteam_create_shift` | **write** | Create shift |
| `connecteam_list_time_clocks` | read | List time clocks |
| `connecteam_list_time_activities` | read | List time activities |
| `connecteam_get_timesheet_totals` | read | Get timesheet totals |
| `connecteam_list_jobs` | read | List jobs |
| `connecteam_get_job` | read | Get job |
| `connecteam_list_time_off_policy_types` | read | List time-off policy types |
| `connecteam_list_time_off_requests` | read | List time-off requests |
| `connecteam_list_task_boards` | read | List task boards |
| `connecteam_list_tasks` | read | List tasks |
| `connecteam_list_task_labels` | read | List task labels |
| `connecteam_create_task` | **write** | Create task |
| `connecteam_list_forms` | read | List forms |
| `connecteam_list_form_submissions` | read | List form submissions |
| `connecteam_usage_status` | meta | Usage status (free-tier meter) |
| `connecteam_upgrade` | meta | Upgrade to Pro (unlimited) |
| `connecteam_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `connecteam_upgrade` (it returns a Stripe Checkout link). Cancel any time with `connecteam_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `connecteam_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Connecteam.
