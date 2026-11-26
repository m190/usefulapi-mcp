# Project Insight MCP by usefulapi

Use your [Project Insight](https://www.projectinsight.net) account from Claude, Cursor, or any MCP client. It reads active projects, project search results and tasks, and it creates new projects. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://project-insight.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://project-insight.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http project-insight https://project-insight.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=project-insight&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fproject-insight.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "project-insight": {
      "url": "https://project-insight.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Project Insight credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/project-insight/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Project Insight workspace** (the part before .projectinsight.net in your address) and a **REST API token** (an administrator creates it with the REST API Access add-on). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `projectinsight_list_active_projects` | read | List active projects |
| `projectinsight_search_projects` | read | Search projects |
| `projectinsight_get_project` | read | Get a project |
| `projectinsight_list_project_tasks` | read | List a project's tasks |
| `projectinsight_search_tasks` | read | Search tasks |
| `projectinsight_create_project` | **write** | Create a project |
| `projectinsight_usage_status` | meta | Usage status (free-tier meter) |
| `projectinsight_request_feature` | meta | Request a missing feature |
| `projectinsight_upgrade` | meta | Upgrade to Pro or Pro+ |
| `projectinsight_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `projectinsight_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `projectinsight_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `projectinsight_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
