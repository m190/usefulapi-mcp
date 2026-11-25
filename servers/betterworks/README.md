# Betterworks MCP by usefulapi

Use your [Betterworks](https://www.betterworks.com) account from Claude, Cursor, or any MCP client. Read goals, users, teams, recognitions, feedback and report runs, and create or update goals, post check-ins and start report runs. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://betterworks.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://betterworks.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http betterworks https://betterworks.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=betterworks&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbetterworks.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "betterworks": {
      "url": "https://betterworks.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Betterworks credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/betterworks/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Betterworks API token** (issued by your Betterworks admin in the Admin portal) and your **region** (US or EU). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `betterworks_list_goals` | read | List goals |
| `betterworks_search_goals` | read | Search goals by name |
| `betterworks_get_goal` | read | Get a goal |
| `betterworks_list_goal_comments` | read | List goal comments |
| `betterworks_list_goal_assessments` | read | List goal assessments |
| `betterworks_search_goal_categories` | read | Search goal categories |
| `betterworks_list_users` | read | List users |
| `betterworks_get_user` | read | Get a user |
| `betterworks_search_users` | read | Search users |
| `betterworks_list_teams` | read | List teams |
| `betterworks_get_team` | read | Get a team |
| `betterworks_list_departments` | read | List departments |
| `betterworks_list_admin_groups` | read | List admin groups |
| `betterworks_list_roles` | read | List roles |
| `betterworks_list_recognitions` | read | List recognitions |
| `betterworks_list_feedback` | read | List feedback |
| `betterworks_list_feedback_requests` | read | List feedback requests |
| `betterworks_list_hashtags` | read | List hashtags |
| `betterworks_list_report_runs` | read | List report runs |
| `betterworks_get_report_run` | read | Get a report run |
| `betterworks_create_goal` | **write** | Create a goal |
| `betterworks_update_goal` | **write** | Update a goal |
| `betterworks_post_goal_checkin` | **write** | Check in on a goal |
| `betterworks_create_report_run` | **write** | Start a report run |
| `betterworks_usage_status` | meta | Usage status (free-tier meter) |
| `betterworks_request_feature` | meta | Request a missing feature |
| `betterworks_upgrade` | meta | Upgrade to Pro or Pro+ |
| `betterworks_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `betterworks_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `betterworks_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `betterworks_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
