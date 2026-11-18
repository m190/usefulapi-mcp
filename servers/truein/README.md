# Truein MCP by usefulapi

Use your [Truein](https://www.truein.com) account from Claude, Cursor, or any MCP client. It reads staff, punches, timesheets, leave, schedules, shifts and spoof alerts. It also records clock punches and leave requests. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://truein.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://truein.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http truein https://truein.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=truein&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftruein.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "truein": {
      "url": "https://truein.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Truein credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/truein/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Truein access key ID** and **secret access key** (from the Truein admin dashboard), and optionally the **Subscription-key** (the API Access Key), which the staff list and punch reports need. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `truein_list_employees` | read | List employees |
| `truein_list_punch_pairs` | read | List punch pairs |
| `truein_get_daily_attendance_log` | read | Get daily attendance log |
| `truein_get_punch_log` | read | Get punch log |
| `truein_get_timesheet_summary` | read | Get timesheet summary |
| `truein_get_leave` | read | Get leave requests |
| `truein_get_leave_lite` | read | Get leave-lite requests |
| `truein_get_schedule` | read | Get shift schedule |
| `truein_get_shifts` | read | List shifts |
| `truein_get_client_sites` | read | List client sites |
| `truein_get_regions` | read | List regions |
| `truein_get_public_holidays` | read | List public holidays |
| `truein_get_geofencing_locations` | read | List geofence locations |
| `truein_get_spoof_punches` | read | List spoof alerts |
| `truein_get_kiosk_devices` | read | List kiosk devices |
| `truein_get_punch_checklist_answers` | read | Get punch checklist answers |
| `truein_clock_in` | **write** | Clock an employee in |
| `truein_clock_out` | **write** | Clock an employee out |
| `truein_request_leave` | **write** | Request leave |
| `truein_cancel_leave_request` | **write** | Cancel a leave request |
| `truein_usage_status` | meta | Usage status (free-tier meter) |
| `truein_request_feature` | meta | Request a missing feature |
| `truein_upgrade` | meta | Upgrade to Pro or Pro+ |
| `truein_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `truein_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `truein_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `truein_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
