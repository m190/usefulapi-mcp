# Microkeeper MCP by usefulapi

Use your [Microkeeper](https://microkeeper.com.au) account from Claude, Cursor, or any MCP client. Read staff, locations, roles, jobs, rosters, timesheets and leave, and add or update staff, locations and jobs. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://microkeeper.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://microkeeper.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http microkeeper https://microkeeper.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=microkeeper&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmicrokeeper.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "microkeeper": {
      "url": "https://microkeeper.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Microkeeper credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/microkeeper/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Microkeeper business key** (Menu → Settings → General → Global → Developers → Manage Business API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `microkeeper_get_employees` | read | Get employees |
| `microkeeper_get_group_config` | read | Get groups |
| `microkeeper_get_locations` | read | Get locations |
| `microkeeper_get_roles` | read | Get roles |
| `microkeeper_get_jobs` | read | Get jobs |
| `microkeeper_get_roster` | read | Get roster |
| `microkeeper_get_timesheet` | read | Get timesheets |
| `microkeeper_get_leave` | read | Get leave requests |
| `microkeeper_upsert_employees` | **write** | Add or update employees |
| `microkeeper_upsert_locations` | **write** | Add or update locations |
| `microkeeper_update_jobs` | **write** | Add or update jobs |
| `microkeeper_usage_status` | meta | Usage status (free-tier meter) |
| `microkeeper_request_feature` | meta | Request a missing feature |
| `microkeeper_upgrade` | meta | Upgrade to Pro or Pro+ |
| `microkeeper_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `microkeeper_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `microkeeper_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `microkeeper_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
