# RotaCloud MCP by usefulapi

Use [RotaCloud](https://rotacloud.com) from Claude, Cursor, or any MCP client — read RotaCloud shifts, attendance, leave, availability and payroll; create shifts and handle leave.
Hosted, no local install: connect with your own RotaCloud credentials.

**Live endpoint:** `https://rotacloud.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/rotacloud

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rotacloud.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rotacloud https://rotacloud.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rotacloud&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frotacloud.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rotacloud": {
      "url": "https://rotacloud.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your RotaCloud credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rotacloud/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **RotaCloud API key**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rotacloud_list_accounts` | read | List accounts |
| `rotacloud_list_users` | read | List users |
| `rotacloud_get_user` | read | Get user |
| `rotacloud_list_locations` | read | List locations |
| `rotacloud_list_roles` | read | List roles |
| `rotacloud_list_shifts` | read | List shifts |
| `rotacloud_get_shift` | read | Get shift |
| `rotacloud_list_swap_requests` | read | List shift swap requests |
| `rotacloud_list_day_notes` | read | List day notes |
| `rotacloud_list_attendance` | read | List attendance records |
| `rotacloud_list_clocked_in` | read | List clocked-in users |
| `rotacloud_list_leave` | read | List leave |
| `rotacloud_list_leave_requests` | read | List leave requests |
| `rotacloud_get_leave_request` | read | Get leave request |
| `rotacloud_list_leave_types` | read | List leave types |
| `rotacloud_list_holiday_allowances` | read | List holiday allowances |
| `rotacloud_get_availability` | read | Get availability |
| `rotacloud_list_days_off` | read | List days off |
| `rotacloud_list_pay_periods` | read | List pay periods |
| `rotacloud_get_payroll` | read | Get payroll for a pay period |
| `rotacloud_create_shift` | **write** | Create shift |
| `rotacloud_update_shift` | **write** | Update shift |
| `rotacloud_publish_shifts` | **write** | Publish shifts |
| `rotacloud_create_leave_request` | **write** | Request leave |
| `rotacloud_approve_leave_request` | **write** | Approve leave request |
| `rotacloud_deny_leave_request` | **write** | Deny leave request |
| `rotacloud_usage_status` | meta | Usage status (free-tier meter) |
| `rotacloud_upgrade` | meta | Upgrade to Pro (unlimited) |
| `rotacloud_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `rotacloud_upgrade` (it returns a Stripe Checkout link). Cancel any time with `rotacloud_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `rotacloud_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by RotaCloud.
