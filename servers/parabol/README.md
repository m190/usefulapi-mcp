# Parabol MCP by usefulapi

Run [Parabol](https://www.parabol.co) agile meetings from Claude, Cursor, or any MCP client — start
retrospectives, standups and sprint poker, read teams, meetings and tasks, and create tasks,
reflections and comments. Hosted, no local install: connect with your Parabol personal access token.

**Live endpoint:** `https://parabol.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/parabol

## Add to Claude

```json
{
  "mcpServers": {
    "parabol": {
      "url": "https://parabol.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Parabol personal access token** (`pat_...`) — create one in
Parabol under your profile settings → personal access tokens. It's validated, stored per-user, and
scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `get_viewer` | read | Get current user (viewer) |
| `list_teams` | read | List teams |
| `get_team` | read | Get a team |
| `list_team_members` | read | List team members |
| `list_organizations` | read | List organizations |
| `get_organization` | read | Get an organization |
| `list_organization_users` | read | List organization users |
| `list_meetings` | read | List meetings (history) |
| `get_meeting` | read | Get a meeting |
| `list_active_meetings` | read | List active meetings |
| `list_tasks` | read | List tasks |
| `parabol_query` | read | Run a GraphQL query (read-only) |
| `create_task` | **write** | Create a task |
| `update_task` | **write** | Update a task |
| `create_reflection` | **write** | Create a reflection |
| `add_comment` | **write** | Add a comment |
| `start_retrospective` | **write** | Start a retrospective |
| `start_checkin` | **write** | Start a check-in meeting |
| `start_team_prompt` | **write** | Start a standup (team prompt) |
| `invite_to_team` | **write** | Invite users to a team |
| `parabol_graphql` | **write** | Run a GraphQL operation (query or mutation) |
| `parabol_usage_status` | meta | Usage status (free-tier meter) |
| `parabol_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
