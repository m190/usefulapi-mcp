# PeopleForce MCP by usefulapi

Use your [PeopleForce](https://peopleforce.io/) account from Claude, Cursor, or any MCP client. Read-only: employees, organisation structure, leave, timesheets and recruitment data. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://peopleforce.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://peopleforce.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http peopleforce https://peopleforce.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=peopleforce&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpeopleforce.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "peopleforce": {
      "url": "https://peopleforce.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PeopleForce credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/peopleforce/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **PeopleForce Company API key**, found in PeopleForce under Settings → API keys. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `peopleforce_list_employees` | read | List employees |
| `peopleforce_get_employee` | read | Get an employee |
| `peopleforce_list_terminated_employees` | read | List terminated employees |
| `peopleforce_list_employee_leave_balances` | read | List an employee's leave balances |
| `peopleforce_list_employee_tasks` | read | List an employee's tasks |
| `peopleforce_list_departments` | read | List departments |
| `peopleforce_list_divisions` | read | List divisions |
| `peopleforce_list_locations` | read | List locations |
| `peopleforce_list_teams` | read | List teams |
| `peopleforce_list_positions` | read | List positions |
| `peopleforce_list_job_profiles` | read | List job profiles |
| `peopleforce_list_leave_requests` | read | List leave requests |
| `peopleforce_list_pending_leave_requests` | read | List pending leave requests |
| `peopleforce_get_leave_request` | read | Get a leave request |
| `peopleforce_list_leave_types` | read | List leave types |
| `peopleforce_list_holidays` | read | List public holidays |
| `peopleforce_list_timesheets` | read | List monthly timesheets |
| `peopleforce_list_timesheet_entries` | read | List timesheet entries |
| `peopleforce_list_recruitment_vacancies` | read | List vacancies |
| `peopleforce_get_recruitment_vacancy` | read | Get a vacancy |
| `peopleforce_list_recruitment_candidates` | read | List candidates |
| `peopleforce_usage_status` | meta | Usage status (free-tier meter) |
| `peopleforce_request_feature` | meta | Request a missing feature |
| `peopleforce_upgrade` | meta | Upgrade to Pro or Pro+ |
| `peopleforce_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `peopleforce_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `peopleforce_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `peopleforce_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
