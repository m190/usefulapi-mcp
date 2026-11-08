# Airbrake MCP by usefulapi

Use [Airbrake](https://airbrake.io) from Claude, Cursor, or any MCP client — read Airbrake projects, error groups, notices, deploys and stats; mute or unmute error groups.
Hosted, no local install: connect with your own Airbrake credentials.

**Live endpoint:** `https://airbrake.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/airbrake

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://airbrake.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http airbrake https://airbrake.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=airbrake&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fairbrake.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "airbrake": {
      "url": "https://airbrake.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Airbrake credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/airbrake/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Airbrake User API key**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `airbrake_list_projects` | read | List projects |
| `airbrake_get_project` | read | Get a project |
| `airbrake_list_groups` | read | List error groups |
| `airbrake_get_group` | read | Get an error group |
| `airbrake_get_group_stats` | read | Get error group statistics |
| `airbrake_list_notices` | read | List notices of an error group |
| `airbrake_get_notice_status` | read | Get a notice's processing status |
| `airbrake_list_deploys` | read | List deploys |
| `airbrake_get_deploy` | read | Get a deploy |
| `airbrake_list_activities` | read | List project activity |
| `airbrake_get_project_stats` | read | Get project statistics |
| `airbrake_mute_group` | **write** | Mute an error group |
| `airbrake_unmute_group` | **write** | Unmute an error group |
| `airbrake_usage_status` | meta | Usage status (free-tier meter) |
| `airbrake_request_feature` | meta | Request a missing feature |
| `airbrake_upgrade` | meta | Upgrade to Pro or Pro+ |
| `airbrake_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `airbrake_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `airbrake_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `airbrake_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Airbrake.
