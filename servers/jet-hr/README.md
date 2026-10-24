# Jet HR MCP by usefulapi

Read Jet HR employees, absences, clockings, payroll; create, approve, delete leave; create expenses.

**Live endpoint:** `https://jet-hr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/jet-hr

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://jet-hr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http jet-hr https://jet-hr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=jet-hr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjet-hr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "jet-hr": {
      "url": "https://jet-hr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Jet HR credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/jet-hr/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste a Jet HR **API token** (starts with T_), which a Jet HR admin creates under Company Settings (Impostazioni azienda) → API → + Nuova.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `jethr_list_employees` | read | List employees |
| `jethr_get_employee` | read | Get an employee |
| `jethr_list_employee_overviews` | read | List employees (overview) |
| `jethr_get_employee_overview` | read | Get an employee (overview) |
| `jethr_list_terminations` | read | List terminations |
| `jethr_list_hirings` | read | List hirings |
| `jethr_get_hiring` | read | Get a hiring |
| `jethr_list_contractors` | read | List contractors |
| `jethr_get_contractor` | read | Get a contractor |
| `jethr_list_absence_requests` | read | List presence and absence requests |
| `jethr_list_absence_policies` | read | List absence policies |
| `jethr_get_absence_request_kind` | read | Get an absence request kind |
| `jethr_list_clockings` | read | List clockings |
| `jethr_list_payrolls` | read | List payrolls |
| `jethr_list_payslips` | read | List payslips |
| `jethr_list_bonuses` | read | List bonuses |
| `jethr_list_bonus_kinds` | read | List bonus kinds |
| `jethr_list_fringe_benefits` | read | List fringe benefits |
| `jethr_list_fringe_benefit_kinds` | read | List fringe benefit kinds |
| `jethr_list_payslip_extra_deductions` | read | List payslip extra deductions |
| `jethr_list_payslip_extra_deduction_kinds` | read | List payslip extra deduction kinds |
| `jethr_list_documents` | read | List documents |
| `jethr_list_expenses` | read | List expense reimbursement requests |
| `jethr_list_expense_policies` | read | List expense policies |
| `jethr_list_devices` | read | List devices |
| `jethr_get_device` | read | Get a device |
| `jethr_list_company_headquarters` | read | List company headquarters |
| `jethr_list_company_ccnl` | read | List company CCNL |
| `jethr_list_trip_refund_policies` | read | List trip daily refund policies |
| `jethr_create_absence_request` | **write** | Create a presence or absence request |
| `jethr_update_absence_request` | **write** | Update, approve or reject an absence request |
| `jethr_delete_absence_request` | **write** | Delete a presence or absence request |
| `jethr_create_expense` | **write** | Create an expense reimbursement request |
| `jethr_usage_status` | meta | Usage status (free-tier meter) |
| `jethr_request_feature` | meta | Request a missing feature |
| `jethr_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `jethr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `jethr_upgrade` (it returns a Stripe Checkout link). Cancel any time with `jethr_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `jethr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Jet HR.
