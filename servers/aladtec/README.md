# Aladtec MCP by usefulapi

Use your [Aladtec](https://www.aladtec.com) account from Claude, Cursor, or any MCP client. Read schedules, open shifts, time off, time clock records and payroll reports, with no write access. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://aladtec.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://aladtec.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http aladtec https://aladtec.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=aladtec&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faladtec.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "aladtec": {
      "url": "https://aladtec.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Aladtec credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/aladtec/

<!-- connect:end (generated above, edit below) -->

On first connect you provide **your Aladtec server name** (the `secureN` part of your API address), **the system name**, and the **client ID** and **client secret** that Aladtec Support issues for your system. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `aladtec_list_members` | read | List members |
| `aladtec_list_employee_types` | read | List employee types |
| `aladtec_list_custom_attributes` | read | List custom attributes |
| `aladtec_get_availability` | read | Get member availability |
| `aladtec_list_time_off` | read | List time off |
| `aladtec_list_schedules` | read | List schedules |
| `aladtec_list_position_qualifications` | read | List position qualifications |
| `aladtec_list_scheduled_time` | read | List scheduled time |
| `aladtec_list_open_time` | read | List open time |
| `aladtec_list_members_scheduled_now` | read | List members scheduled now |
| `aladtec_list_schedule_notes` | read | List schedule notes |
| `aladtec_list_extra_hours` | read | List extra hours |
| `aladtec_list_paycodes` | read | List paycodes |
| `aladtec_list_kiosks` | read | List time clock kiosks |
| `aladtec_list_time_clock_records` | read | List time clock records |
| `aladtec_list_clocked_in_members` | read | List clocked-in members |
| `aladtec_list_events` | read | List events |
| `aladtec_list_shift_labels` | read | List shift labels |
| `aladtec_list_work_groups` | read | List work groups |
| `aladtec_list_time_types` | read | List time types |
| `aladtec_list_accrual_banks` | read | List accrual banks |
| `aladtec_get_accrual_balances` | read | Get accrual balances |
| `aladtec_get_configuration` | read | Get configuration |
| `aladtec_get_payroll_report` | read | Get payroll report |
| `aladtec_usage_status` | meta | Usage status (free-tier meter) |
| `aladtec_request_feature` | meta | Request a missing feature |
| `aladtec_upgrade` | meta | Upgrade to Pro or Pro+ |
| `aladtec_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `aladtec_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `aladtec_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `aladtec_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
