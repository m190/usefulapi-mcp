# Atlassian Jira MCP by usefulapi

Use your [Atlassian](https://www.atlassian.com/software/jira) account from Claude, Cursor, or any MCP client. Search and read Jira issues, projects, comments and workflow states, and create issues, add comments or move issues when you ask. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://atlassian-jira.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://atlassian-jira.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http atlassian-jira https://atlassian-jira.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=atlassian-jira&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fatlassian-jira.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "atlassian-jira": {
      "url": "https://atlassian-jira.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Atlassian Jira account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/atlassian-jira/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Atlassian and approve access. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `jira_get_current_user` | read | Get current user |
| `jira_find_users` | read | Find users |
| `jira_search_issues` | read | Search issues |
| `jira_get_issue` | read | Get issue |
| `jira_get_issue_comments` | read | Get issue comments |
| `jira_get_issue_transitions` | read | Get issue transitions |
| `jira_get_issue_changelog` | read | Get issue changelog |
| `jira_get_issue_worklogs` | read | Get issue worklogs |
| `jira_search_projects` | read | Search projects |
| `jira_get_project` | read | Get project |
| `jira_get_project_statuses` | read | Get project statuses |
| `jira_list_fields` | read | List fields |
| `jira_list_priorities` | read | List priorities |
| `jira_list_issue_types` | read | List issue types |
| `jira_list_statuses` | read | List statuses |
| `jira_get_my_filters` | read | Get my filters |
| `jira_create_issue` | **write** | Create issue |
| `jira_add_comment` | **write** | Add comment |
| `jira_transition_issue` | **write** | Transition issue |
| `jira_usage_status` | meta | Usage status (free-tier meter) |
| `jira_request_feature` | meta | Request a missing feature |
| `jira_upgrade` | meta | Upgrade to Pro or Pro+ |
| `jira_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `jira_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `jira_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `jira_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
