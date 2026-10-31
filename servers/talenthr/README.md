# TalentHR MCP by usefulapi

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://talenthr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http talenthr https://talenthr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=talenthr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftalenthr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "talenthr": {
      "url": "https://talenthr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TalentHR credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/talenthr/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `talenthr_list_employees` | read | List employees (directory) |
| `talenthr_get_directory_filters` | read | Get directory filters |
| `talenthr_get_employee` | read | Get an employee |
| `talenthr_get_employee_job` | read | Get an employee's job history |
| `talenthr_get_organization_chart` | read | Get the organization chart |
| `talenthr_list_departments` | read | List departments |
| `talenthr_list_divisions` | read | List divisions |
| `talenthr_list_locations` | read | List locations |
| `talenthr_list_job_titles` | read | List job titles |
| `talenthr_list_time_off_types` | read | List time off types |
| `talenthr_list_employee_time_off_requests` | read | List an employee's time off requests |
| `talenthr_get_employee_time_off_budgets` | read | Get an employee's time off balances |
| `talenthr_get_calendar` | read | Get the time off calendar |
| `talenthr_list_holidays` | read | List holidays |
| `talenthr_list_benefits` | read | List benefits |
| `talenthr_get_employee_benefits` | read | Get an employee's benefits |
| `talenthr_list_assets` | read | List company assets |
| `talenthr_get_employee_assets` | read | Get an employee's assets |
| `talenthr_list_job_positions` | read | List job positions |
| `talenthr_list_job_position_applicants` | read | List applicants of a job position |
| `talenthr_list_applicants` | read | List all applicants |
| `talenthr_get_applicant` | read | Get an applicant |
| `talenthr_get_headcount_report` | read | Get the headcount report |
| `talenthr_get_hires_leaves_report` | read | Get the hires and leaves report |
| `talenthr_get_time_off_report` | read | Get the time off report |
| `talenthr_list_time_tracking_entries` | read | List time tracking entries |
| `talenthr_create_time_off_request` | **write** | Book a time off request |
| `talenthr_reply_time_off_request` | **write** | Approve or reject a time off request |
| `talenthr_create_applicant_note` | **write** | Add a note to a job application |
| `talenthr_usage_status` | meta | Usage status (free-tier meter) |
| `talenthr_request_feature` | meta | Request a missing feature |
| `talenthr_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `talenthr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** (per TalentHR tenant/key) | $0 | 50 tool calls / month |
| **Pro** (per TalentHR tenant/key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `talenthr_upgrade` (it returns a Stripe Checkout link). Cancel any time with `talenthr_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `talenthr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT.

## HR data, notifications and access

Requested employee, candidate, compensation and other HR records pass to your chosen AI client and LLM provider; API keys do not. Only connect data authorized for that processing. Scope and revoke a dedicated API key in TalentHR to control access.

Booking time off emails the manager, or notifies the employee when the manager is unavailable. Preapproved requests bypass manager approval when permitted and should be used only for an explicitly approved request. Approving/rejecting pending time off emails the employee. Applicant notes are internal and visible to hiring staff. No hires, terminations, pay changes or attachments are exposed.

No request is automatically retried; check TalentHR before repeating an uncertain write. Usage and billing follow the tenant domain when the key can read domain settings, otherwise the key itself. Rotating a key without domain-settings access can change that identity. Independent integration; no vendor approval or endorsement claimed.
