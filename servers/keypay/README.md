# Employment Hero Payroll MCP by usefulapi

Use [Employment Hero Payroll](https://employmenthero.com/payroll/) (formerly KeyPay) from Claude, Cursor, or any MCP client — read your businesses, employees, pay runs, payslips and pay run totals, timesheets, leave requests and balances, pay schedules, locations, pay categories and work types, run gross-to-net and leave-balance reports, and approve or decline leave requests. Known tax, identity and bank-account fields are removed from replies, and labelled identifiers in free text are masked on a best-effort basis; unlabelled identifiers may remain, and names, pay and other personal details are visible to your AI assistant.
Hosted, no local install: connect with your Employment Hero Payroll API key and pick your region (AU, NZ, SG, MY or UK).

**Live endpoint:** `https://keypay.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/keypay

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://keypay.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http keypay https://keypay.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=keypay&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkeypay.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "keypay": {
      "url": "https://keypay.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Employment Hero Payroll credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/keypay/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `keypay_get_user` | read | Get current user |
| `keypay_list_businesses` | read | List businesses |
| `keypay_get_business` | read | Get business |
| `keypay_list_employees` | read | List employees |
| `keypay_get_employee` | read | Get employee |
| `keypay_get_leave_balances` | read | Get employee leave balances |
| `keypay_list_pay_runs` | read | List pay runs |
| `keypay_get_pay_run` | read | Get pay run |
| `keypay_list_pay_run_summaries` | read | List pay run summaries |
| `keypay_get_pay_run_summary` | read | Get pay run summary |
| `keypay_get_pay_run_totals` | read | Get pay run totals per employee |
| `keypay_get_pay_run_payslips` | read | Get pay slip data of a pay run |
| `keypay_list_pay_run_warnings` | read | List pay run warnings |
| `keypay_list_timesheets` | read | List timesheets |
| `keypay_get_timesheet` | read | Get timesheet line |
| `keypay_list_leave_requests` | read | List leave requests |
| `keypay_get_leave_request` | read | Get leave request |
| `keypay_list_leave_categories` | read | List leave categories |
| `keypay_list_pay_schedules` | read | List pay schedules |
| `keypay_list_locations` | read | List locations |
| `keypay_list_pay_categories` | read | List pay categories |
| `keypay_list_work_types` | read | List work types |
| `keypay_report_gross_to_net` | read | Gross to net report |
| `keypay_report_leave_balances` | read | Leave balances report |
| `keypay_approve_leave_request` | **write** | Approve leave request |
| `keypay_decline_leave_request` | **write** | Decline leave request |
| `keypay_usage_status` | meta | Usage status (free-tier meter) |
| `keypay_request_feature` | meta | Request a missing feature |
| `keypay_upgrade` | meta | Upgrade to Pro or Pro+ |
| `keypay_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `keypay_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `keypay_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `keypay_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Employment Hero.
