# Breathe HR MCP by usefulapi

Use [Breathe HR](https://www.breathehr.com) from Claude, Cursor, or any MCP client — employees, departments, absences, sickness, holiday allowances, leave requests and change requests.
Hosted, no local install: connect with your own Breathe HR credentials.

**Live endpoint:** `https://breathe-hr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/breathe-hr

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://breathe-hr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http breathe-hr https://breathe-hr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=breathe-hr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbreathe-hr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "breathe-hr": {
      "url": "https://breathe-hr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Breathe HR credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/breathe-hr/

<!-- connect:end (generated above, edit below) -->

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Breathe HR credentials.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `breathehr_get_account` | read | Get account |
| `breathehr_list_departments` | read | List departments |
| `breathehr_list_divisions` | read | List divisions |
| `breathehr_list_locations` | read | List locations |
| `breathehr_list_working_patterns` | read | List working patterns |
| `breathehr_list_holiday_allowances` | read | List holiday allowances |
| `breathehr_list_other_leave_reasons` | read | List other leave reasons |
| `breathehr_list_employees` | read | List employees |
| `breathehr_get_employee` | read | Get employee |
| `breathehr_get_holiday_years` | read | Get holiday years (allowance balance) |
| `breathehr_list_absences` | read | List absences |
| `breathehr_list_leave_requests` | read | List leave requests |
| `breathehr_get_leave_request` | read | Get leave request |
| `breathehr_list_sicknesses` | read | List sickness records |
| `breathehr_list_salaries` | read | List salaries |
| `breathehr_list_bonuses` | read | List bonuses |
| `breathehr_list_benefits` | read | List benefits |
| `breathehr_list_employee_jobs` | read | List employee jobs |
| `breathehr_list_training_courses` | read | List training courses |
| `breathehr_list_expense_claims` | read | List expense claims |
| `breathehr_list_expenses` | read | List expenses |
| `breathehr_list_change_requests` | read | List change requests |
| `breathehr_create_leave_request` | **write** | Create leave request |
| `breathehr_approve_leave_request` | **write** | Approve leave request |
| `breathehr_reject_leave_request` | **write** | Reject leave request |
| `breathehr_usage_status` | meta | Usage status (free-tier meter) |
| `breathehr_request_feature` | meta | Request a missing feature |
| `breathehr_upgrade` | meta | Upgrade to Pro (unlimited) |
| `breathehr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `breathehr_upgrade` (it returns a Stripe Checkout link). Cancel any time with `breathehr_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `breathehr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Breathe HR.
