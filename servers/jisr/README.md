# Jisr MCP by usefulapi

Connect your Jisr organization.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://jisr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http jisr https://jisr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=jisr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjisr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "jisr": {
      "url": "https://jisr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Jisr credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/jisr/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `jisr_list_employees` | read | List employees |
| `jisr_get_employee` | read | Get employee |
| `jisr_get_employee_financial_info` | read | Get employee financial info |
| `jisr_list_lookup` | read | List lookup values |
| `jisr_list_attendance_summary` | read | List attendance summary |
| `jisr_list_attendance_punches` | read | List attendance punches |
| `jisr_get_annual_leave_balances` | read | Get annual leave balances |
| `jisr_list_paygroups` | read | List pay groups |
| `jisr_list_payroll_transactions` | read | List payroll transactions |
| `jisr_list_accrual_transactions` | read | List accrual transactions |
| `jisr_get_employee_monthly_payables` | read | Get employee monthly payables |
| `jisr_list_gl_transaction_types` | read | List transaction types |
| `jisr_list_audit_events` | read | List audit events |
| `jisr_list_webhooks` | read | List webhooks |
| `jisr_create_employee` | **write** | Create employee |
| `jisr_create_attendance_punches` | **write** | Import attendance punches |
| `jisr_usage_status` | meta | Usage status (free-tier meter) |
| `jisr_request_feature` | meta | Request a missing feature |
| `jisr_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `jisr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per Jisr organization) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `jisr_upgrade` (it returns a Stripe Checkout link). Cancel any time with `jisr_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `jisr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT. Unofficial integration; no Jisr endorsement is claimed.

## Data and write effects

Requested HR, identity, salary and bank/IBAN records pass to your chosen AI client and LLM provider. Authorize only the scoped APIs and data appropriate for that service. Creating an employee sends an invitation; imported device punches may affect attendance and payroll after asynchronous processing. Submission does not mean all punches were accepted. No salary transfers, payments or accounting-journal posting tools are exposed.

Mutations are never automatically replayed, including after a cached-session rejection. Inspect uncertain writes before repeating them. Revoke the key in Jisr; existing vendor session revocation timing has not been verified. Mock, security and Worker checks pass; authenticated customer reads, invitations and attendance writes have not been tested.
