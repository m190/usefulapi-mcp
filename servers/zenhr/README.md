# ZenHR MCP by usefulapi

Use your [ZenHR](https://zenhr.com) account from Claude, Cursor, or any MCP client. Read branches, departments, employees, job records, time-off types and entries, and attendance records, with no write access. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://zenhr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zenhr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zenhr https://zenhr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zenhr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzenhr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zenhr": {
      "url": "https://zenhr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you enter your own ZenHR app's client ID and secret, then sign in with your ZenHR account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zenhr/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **ZenHR address** (for example `app.zenhr.com`) and the **UID and secret** of a ZenHR OAuth app that your global admin creates at `/en/oauth/applications`. Then you sign in to ZenHR and approve access. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zenhr_who_am_i` | read | Who am I |
| `zenhr_get_company` | read | Get company |
| `zenhr_list_branches` | read | List branches |
| `zenhr_list_departments` | read | List departments |
| `zenhr_list_employees` | read | List employees |
| `zenhr_get_employee` | read | Get an employee |
| `zenhr_get_active_professional_data` | read | Get active job record |
| `zenhr_list_timeoffs` | read | List time-off types |
| `zenhr_list_timeoff_transactions` | read | List time-off entries |
| `zenhr_list_attendance_records` | read | List attendance records |
| `zenhr_usage_status` | meta | Usage status (free-tier meter) |
| `zenhr_request_feature` | meta | Request a missing feature |
| `zenhr_upgrade` | meta | Upgrade to Pro or Pro+ |
| `zenhr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `zenhr_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `zenhr_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `zenhr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
