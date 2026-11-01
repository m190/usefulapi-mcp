# Nozbe Teams MCP by usefulapi

Use your [Nozbe Teams](https://nozbe.com) account from Claude, Cursor, or any MCP client. Read spaces, projects, tasks, comments and tags, and create tasks and comments or update tasks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://nozbe-teams.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nozbe-teams.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nozbe-teams https://nozbe-teams.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nozbe-teams&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnozbe-teams.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nozbe-teams": {
      "url": "https://nozbe-teams.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Nozbe Teams credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nozbe-teams/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Nozbe API token** (Nozbe → API tokens). Turn on **Add it as global token** to reach all spaces. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nozbeteams_list_teams` | read | List spaces |
| `nozbeteams_get_team` | read | Get a space |
| `nozbeteams_list_team_members` | read | List space members |
| `nozbeteams_list_users` | read | List users |
| `nozbeteams_list_projects` | read | List projects |
| `nozbeteams_get_project` | read | Get a project |
| `nozbeteams_list_project_sections` | read | List project sections |
| `nozbeteams_list_tasks` | read | List tasks |
| `nozbeteams_get_task` | read | Get a task |
| `nozbeteams_list_comments` | read | List comments |
| `nozbeteams_list_task_events` | read | List task events |
| `nozbeteams_list_tags` | read | List tags |
| `nozbeteams_list_tag_assignments` | read | List tag assignments |
| `nozbeteams_create_task` | **write** | Create a task |
| `nozbeteams_update_task` | **write** | Update a task |
| `nozbeteams_create_comment` | **write** | Add a comment to a task |
| `nozbeteams_usage_status` | meta | Usage status (free-tier meter) |
| `nozbeteams_request_feature` | meta | Request a missing feature |
| `nozbeteams_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `nozbeteams_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `nozbeteams_upgrade` (it returns a Stripe Checkout link). Cancel any time with `nozbeteams_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `nozbeteams_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
