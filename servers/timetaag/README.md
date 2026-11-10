# Timetaag MCP by usefulapi

Use your [Timetaag](https://timetaag.com) account from Claude, Cursor, or any MCP client. It reads employees, leave, attendance, punches, shifts, holidays, requests and setup lists. It is read only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://timetaag.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://timetaag.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http timetaag https://timetaag.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=timetaag&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftimetaag.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "timetaag": {
      "url": "https://timetaag.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Timetaag credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/timetaag/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Timetaag API key** with the **read** scope, created by a super admin under **Master Setup → API Settings** after the API is turned on. Leave the key's IP allowlist empty. Reports such as daily attendance need a plan that includes them. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `timetaag_list_employees` | read | List employees |
| `timetaag_get_employee` | read | Get an employee |
| `timetaag_list_leave_types` | read | List leave types |
| `timetaag_list_leave_balances` | read | List leave balances |
| `timetaag_list_leaves` | read | List leaves |
| `timetaag_get_leave` | read | Get a leave |
| `timetaag_list_daily_attendance` | read | Daily attendance |
| `timetaag_list_punches` | read | List punches |
| `timetaag_list_shift_assignments` | read | List shift assignments |
| `timetaag_list_holidays` | read | List holidays |
| `timetaag_list_regularizations` | read | List regularizations |
| `timetaag_list_work_requests` | read | List work requests |
| `timetaag_list_expense_claims` | read | List expense claims |
| `timetaag_list_setup` | read | List setup items |
| `timetaag_usage_status` | meta | Usage status (free-tier meter) |
| `timetaag_request_feature` | meta | Request a missing feature |
| `timetaag_upgrade` | meta | Upgrade to Pro or Pro+ |
| `timetaag_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `timetaag_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `timetaag_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `timetaag_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
