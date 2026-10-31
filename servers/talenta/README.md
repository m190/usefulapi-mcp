# Talenta MCP by usefulapi

Connect your API-enabled Talenta account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://talenta.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http talenta https://talenta.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=talenta&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftalenta.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "talenta": {
      "url": "https://talenta.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Talenta credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/talenta/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `talenta_list_employees` | read | List employees |
| `talenta_get_employee` | read | Get employee |
| `talenta_get_employment_info` | read | Get employment info |
| `talenta_list_family_info` | read | List employee family members |
| `talenta_list_formal_education` | read | List employee formal education |
| `talenta_get_company_info` | read | Get company info |
| `talenta_list_branches` | read | List branches |
| `talenta_list_organizations` | read | List organizations |
| `talenta_list_job_positions` | read | List job positions |
| `talenta_list_job_levels` | read | List job levels |
| `talenta_list_employment_statuses` | read | List employment statuses |
| `talenta_list_time_off_requests` | read | List time off requests |
| `talenta_time_off_balance_history` | read | Time off balance history |
| `talenta_time_off_balance_log` | read | Time off balance log |
| `talenta_attendance_summary` | read | Attendance summary for a day |
| `talenta_list_live_attendance` | read | List live attendance of an employee |
| `talenta_list_schedules` | read | List employee schedules |
| `talenta_list_overtime_requests` | read | List overtime requests |
| `talenta_list_timesheets` | read | List timesheets |
| `talenta_list_payroll_info` | read | List employee payroll info |
| `talenta_get_payroll_report` | read | Get monthly payroll report |
| `talenta_list_reimbursements` | read | List reimbursement requests |
| `talenta_list_reprimands` | read | List reprimands |
| `talenta_list_employee_transfers` | read | List employee transfers |
| `talenta_list_delegations` | read | List delegations |
| `talenta_list_jobs` | read | List recruitment jobs |
| `talenta_get_job` | read | Get recruitment job |
| `talenta_list_candidates` | read | List candidates |
| `talenta_get_candidate` | read | Get candidate application |
| `talenta_list_hiring_stages` | read | Hiring pipeline counts |
| `talenta_usage_status` | meta | Usage status (free-tier meter) |
| `talenta_request_feature` | meta | Request a missing feature |
| `talenta_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `talenta_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per company and environment) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `talenta_upgrade` (it returns a Stripe Checkout link). Cancel any time with `talenta_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `talenta_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
