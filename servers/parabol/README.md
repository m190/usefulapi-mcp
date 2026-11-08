# Parabol MCP by usefulapi

Run [Parabol](https://www.parabol.co) agile meetings from Claude, Cursor, or any MCP client — start
retrospectives, standups and sprint poker, read teams, meetings and tasks, and create tasks,
reflections and comments. Hosted, no local install: connect with your Parabol personal access token.

**Live endpoint:** `https://parabol.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/parabol

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://parabol.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http parabol https://parabol.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=parabol&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fparabol.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "parabol": {
      "url": "https://parabol.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Parabol credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/parabol/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Parabol personal access token** (`pat_...`) — create one in
Parabol under your profile settings → personal access tokens. It's validated, stored per-user, and
scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `parabol_get_viewer` | read | Get current user (viewer) |
| `parabol_list_teams` | read | List teams |
| `parabol_get_team` | read | Get a team |
| `parabol_list_team_members` | read | List team members |
| `parabol_list_organizations` | read | List organizations |
| `parabol_get_organization` | read | Get an organization |
| `parabol_list_organization_users` | read | List organization users |
| `parabol_list_meetings` | read | List meetings (history) |
| `parabol_get_meeting` | read | Get a meeting |
| `parabol_list_active_meetings` | read | List active meetings |
| `parabol_list_tasks` | read | List tasks |
| `parabol_query` | read | Run a GraphQL query (read-only) |
| `parabol_create_task` | **write** | Create a task |
| `parabol_update_task` | **write** | Update a task |
| `parabol_create_reflection` | **write** | Create a reflection |
| `parabol_add_comment` | **write** | Add a comment |
| `parabol_start_retrospective` | **write** | Start a retrospective |
| `parabol_start_checkin` | **write** | Start a check-in meeting |
| `parabol_start_team_prompt` | **write** | Start a standup (team prompt) |
| `parabol_invite_to_team` | **write** | Invite users to a team |
| `parabol_graphql` | **write** | Run a GraphQL operation (query or mutation) |
| `parabol_usage_status` | meta | Usage status (free-tier meter) |
| `parabol_request_feature` | meta | Request a missing feature |
| `parabol_upgrade` | meta | Upgrade to Pro or Pro+ |
| `parabol_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `parabol_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `parabol_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `parabol_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
