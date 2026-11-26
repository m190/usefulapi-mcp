# Time Doctor MCP by usefulapi

Use your [Time Doctor](https://www.timedoctor.com) account from Claude, Cursor, or any MCP client. Read users, projects, tracked time, activity timelines, productivity and work schedules. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://time-doctor.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://time-doctor.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http time-doctor https://time-doctor.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=time-doctor&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftime-doctor.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "time-doctor": {
      "url": "https://time-doctor.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Time Doctor credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/time-doctor/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Time Doctor email** and **password**, and the **6-digit code** if two-factor sign-in is on. The server signs in once and keeps only a read-only token per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `timedoctor_whoami` | read | Show connected user and companies |
| `timedoctor_list_company_timezones` | read | List company timezones |
| `timedoctor_list_users` | read | List users |
| `timedoctor_get_user` | read | Get user |
| `timedoctor_list_groups` | read | List groups |
| `timedoctor_get_group` | read | Get group |
| `timedoctor_list_projects` | read | List projects |
| `timedoctor_list_tasks` | read | List tasks |
| `timedoctor_get_task` | read | Get task |
| `timedoctor_get_worklog` | read | Get activity timeline |
| `timedoctor_get_time_summary` | read | Get tracked time summary |
| `timedoctor_get_productivity_breakdown` | read | Get productivity breakdown |
| `timedoctor_list_work_schedules` | read | List work schedules |
| `timedoctor_usage_status` | meta | Usage status (free-tier meter) |
| `timedoctor_request_feature` | meta | Request a missing feature |
| `timedoctor_upgrade` | meta | Upgrade to Pro or Pro+ |
| `timedoctor_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `timedoctor_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `timedoctor_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `timedoctor_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
