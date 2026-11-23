# tipee MCP by usefulapi

Use your [tipee](https://www.tipee.ch) account from Claude, Cursor, or any MCP client. Read employees, teams, absences, schedules, time clock entries, projects and activities. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://tipee.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tipee.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tipee https://tipee.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tipee&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftipee.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tipee": {
      "url": "https://tipee.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your tipee credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tipee/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **tipee instance** (the `acme` part of `acme.tipee.net`) and a **tipee API key**, which a tipee administrator creates: enable API access, create an integration, then generate its key. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tipee_list_kinds` | read | List resource kinds |
| `tipee_list_resources` | read | List resources |
| `tipee_list_teams` | read | List teams |
| `tipee_show_team` | read | Show a team |
| `tipee_show_resource_teams` | read | Show a resource's teams |
| `tipee_list_absence_types` | read | List absence types |
| `tipee_list_absences` | read | List absences |
| `tipee_list_schedules` | read | List schedules |
| `tipee_list_timechecks` | read | List timechecks |
| `tipee_list_projects` | read | List projects |
| `tipee_show_project` | read | Show a project |
| `tipee_list_project_tasks` | read | List project tasks |
| `tipee_list_activities` | read | List activities |
| `tipee_show_activity_totals` | read | Show activity totals |
| `tipee_list_day_tasks` | read | List day tasks |
| `tipee_usage_status` | meta | Usage status (free-tier meter) |
| `tipee_request_feature` | meta | Request a missing feature |
| `tipee_upgrade` | meta | Upgrade to Pro or Pro+ |
| `tipee_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `tipee_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `tipee_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `tipee_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
