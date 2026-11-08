# CentreCareOS MCP by usefulapi

Use your [CentreCareOS](https://www.centrecareos.com) account from Claude, Cursor, or any MCP client. Read the students, parents, rooms, attendance, invoices and daily reports of your child care center. This server only reads data. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://centrecareos.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://centrecareos.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http centrecareos https://centrecareos.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=centrecareos&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcentrecareos.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "centrecareos": {
      "url": "https://centrecareos.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CentreCareOS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/centrecareos/

<!-- connect:end (generated above, edit below) -->

On first connect you enter an **API key id and API secret** (CentreCareOS → API Settings, Enterprise plan; give the key read scopes only). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `centrecareos_list_students` | read | List students |
| `centrecareos_list_parents` | read | List parents |
| `centrecareos_list_rooms` | read | List rooms |
| `centrecareos_list_staff` | read | List staff |
| `centrecareos_list_billing_plans` | read | List billing plans |
| `centrecareos_list_student_billing_plans` | read | List student plan assignments |
| `centrecareos_list_billing_students` | read | List billing summary by student |
| `centrecareos_billing_overview` | read | Billing overview |
| `centrecareos_list_waitlist` | read | List waitlist |
| `centrecareos_list_calendar_events` | read | List calendar events |
| `centrecareos_list_menus` | read | List menus |
| `centrecareos_list_incident_reports` | read | List incident reports |
| `centrecareos_list_forms` | read | List forms |
| `centrecareos_get_school` | read | Get school profile |
| `centrecareos_get_student` | read | Get student |
| `centrecareos_get_parent` | read | Get parent |
| `centrecareos_get_room` | read | Get room |
| `centrecareos_get_staff_member` | read | Get staff member |
| `centrecareos_get_attendance_record` | read | Get attendance record |
| `centrecareos_get_invoice` | read | Get invoice |
| `centrecareos_list_attendance` | read | List attendance |
| `centrecareos_list_invoices` | read | List invoices |
| `centrecareos_list_payments` | read | List payments |
| `centrecareos_daily_report_summary` | read | Daily report summary |
| `centrecareos_usage_status` | meta | Usage status (free-tier meter) |
| `centrecareos_request_feature` | meta | Request a missing feature |
| `centrecareos_upgrade` | meta | Upgrade to Pro or Pro+ |
| `centrecareos_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `centrecareos_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `centrecareos_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `centrecareos_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
