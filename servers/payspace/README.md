# PaySpace MCP by usefulapi

Use [PaySpace](https://payspace.com) from Claude, Cursor, or any MCP client — read your employees, organization, payroll runs, payslips and leave records. Read-only. Hosted, no local install: connect with your own PaySpace API credentials.

**Live endpoint:** `https://payspace.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/payspace

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://payspace.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http payspace https://payspace.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=payspace&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpayspace.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "payspace": {
      "url": "https://payspace.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PaySpace credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/payspace/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your PaySpace API **Client ID** and **Client Secret** (a company administrator creates them under Config > Basic Settings > General Company > Integrations > API Credentials). They are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `payspace_list_companies` | read | List companies |
| `payspace_list_employees` | read | List employees |
| `payspace_list_all_employees` | read | List all employees (incl. terminated) |
| `payspace_get_employee` | read | Get an employee |
| `payspace_list_employee_positions` | read | List employee positions |
| `payspace_list_employment_statuses` | read | List employment statuses |
| `payspace_list_suspensions` | read | List employee suspensions |
| `payspace_list_organization_units` | read | List organization units |
| `payspace_list_organization_positions` | read | List organization positions |
| `payspace_list_jobs` | read | List jobs |
| `payspace_list_regions` | read | List regions |
| `payspace_list_payroll_frequencies` | read | List payroll frequencies |
| `payspace_list_payroll_runs` | read | List payroll runs |
| `payspace_list_payroll_components` | read | List payroll components |
| `payspace_list_recurring_components` | read | List an employee's recurring components or loans |
| `payspace_list_payslips` | read | List payslips for a month |
| `payspace_list_payslip_lines` | read | List payslip lines for a month |
| `payspace_list_leave_applications` | read | List leave applications |
| `payspace_list_leave_adjustments` | read | List leave adjustments |
| `payspace_list_leave_entitlements` | read | List leave entitlements |
| `payspace_list_records` | read | List records of another entity |
| `payspace_usage_status` | meta | Usage status (free-tier meter) |
| `payspace_request_feature` | meta | Request a missing feature |
| `payspace_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `payspace_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `payspace_upgrade` (it returns a Stripe Checkout link). Cancel any time with `payspace_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `payspace_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
