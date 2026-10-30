# Talenox MCP by usefulapi

Hosted at https://talenox.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://talenox.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http talenox https://talenox.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=talenox&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftalenox.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "talenox": {
      "url": "https://talenox.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Talenox credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/talenox/

<!-- connect:end (generated above, edit below) -->

Connect your Talenox account using the credentials described on the login page.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `talenox_list_employees` | read | List employees |
| `talenox_get_employee` | read | Get an employee |
| `talenox_get_job` | read | Get a job record |
| `talenox_list_branches` | read | List branches |
| `talenox_get_branch` | read | Get a branch |
| `talenox_list_cost_centres` | read | List cost centres |
| `talenox_list_roles` | read | List employee roles |
| `talenox_get_role` | read | Get an employee role |
| `talenox_get_company_settings` | read | Get company settings |
| `talenox_list_working_days` | read | List working-day schedules |
| `talenox_get_working_day` | read | Get a working-day schedule |
| `talenox_list_holiday_policies` | read | List holiday policies |
| `talenox_get_holiday_policy` | read | Get a holiday policy |
| `talenox_list_company_holidays` | read | List company holidays |
| `talenox_list_leave_applications` | read | List leave applications |
| `talenox_get_leave_application` | read | Get a leave application |
| `talenox_list_leave_types` | read | List leave types |
| `talenox_get_leave_type` | read | Get a leave type |
| `talenox_get_leave_balance` | read | Get leave balances |
| `talenox_get_leave_entitlement_period` | read | Get leave entitlement periods |
| `talenox_list_off_in_lieus` | read | List off in lieu types |
| `talenox_get_off_in_lieu_balance` | read | Get off in lieu balances |
| `talenox_list_payroll_payments` | read | List payroll payments |
| `talenox_get_payroll_payment` | read | Get a payroll payment |
| `talenox_list_custom_pay_items` | read | List custom pay items |
| `talenox_get_payslips_data` | read | Get payslip data |
| `talenox_approve_leave_application` | **write** | Approve a leave application |
| `talenox_reject_leave_application` | **write** | Reject a leave application |
| `talenox_usage_status` | meta | Usage status (free-tier meter) |
| `talenox_request_feature` | meta | Request a missing feature |
| `talenox_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `talenox_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API token) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `talenox_upgrade` (it returns a Stripe Checkout link). Cancel any time with `talenox_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `talenox_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
