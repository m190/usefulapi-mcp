# SIGNL4 MCP by usefulapi

Use [SIGNL4](https://www.signl4.com) from Claude, Cursor, or any MCP client — alerts, teams, users, categories and duty schedules, plus raising and handling alerts.
Hosted, no local install: connect with your own SIGNL4 credentials.

**Live endpoint:** `https://signl4.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/signl4

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://signl4.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http signl4 https://signl4.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=signl4&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsignl4.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "signl4": {
      "url": "https://signl4.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SIGNL4 credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/signl4/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `signl4_list_teams` | read | List teams |
| `signl4_get_team` | read | Get team |
| `signl4_list_users` | read | List users |
| `signl4_get_user` | read | Get user |
| `signl4_list_team_users` | read | List users of teams |
| `signl4_list_categories` | read | List alert categories |
| `signl4_list_alerts` | read | List alerts |
| `signl4_get_alert` | read | Get alert |
| `signl4_get_alert_timeline` | read | Get alert timeline |
| `signl4_get_alert_report` | read | Get alert report |
| `signl4_raise_alert` | **write** | Raise alert |
| `signl4_acknowledge_alert` | **write** | Acknowledge alert |
| `signl4_close_alert` | **write** | Close alert |
| `signl4_annotate_alert` | **write** | Annotate alert |
| `signl4_list_duty_schedules` | read | List duty schedules |
| `signl4_get_duty_status` | read | Get user duty status |
| `signl4_get_duty_summary` | read | Get duty summary |
| `signl4_list_audit_logs` | read | List audit logs |
| `signl4_usage_status` | meta | Usage status (free-tier meter) |
| `signl4_request_feature` | meta | Request a missing feature |
| `signl4_upgrade` | meta | Upgrade to Pro or Pro+ |
| `signl4_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per account) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `signl4_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `signl4_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `signl4_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by SIGNL4.
