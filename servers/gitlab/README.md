# GitLab MCP by usefulapi

Use your [GitLab](https://about.gitlab.com) account from Claude, Cursor, or any MCP client. Read projects, issues, merge requests, pipelines and commits, and create issues or add issue comments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://gitlab.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gitlab.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gitlab https://gitlab.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gitlab&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgitlab.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gitlab": {
      "url": "https://gitlab.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your GitLab account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gitlab/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to GitLab and approve access. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gitlab_whoami` | read | Show the signed-in user |
| `gitlab_list_projects` | read | List projects |
| `gitlab_get_project` | read | Get a project |
| `gitlab_list_groups` | read | List groups |
| `gitlab_list_issues` | read | List issues |
| `gitlab_get_issue` | read | Get an issue |
| `gitlab_list_issue_notes` | read | List issue comments |
| `gitlab_list_merge_requests` | read | List merge requests |
| `gitlab_get_merge_request` | read | Get a merge request |
| `gitlab_list_pipelines` | read | List pipelines |
| `gitlab_get_pipeline` | read | Get a pipeline |
| `gitlab_list_pipeline_jobs` | read | List pipeline jobs |
| `gitlab_list_branches` | read | List branches |
| `gitlab_list_commits` | read | List commits |
| `gitlab_create_issue` | **write** | Create an issue |
| `gitlab_create_issue_note` | **write** | Add an issue comment |
| `gitlab_usage_status` | meta | Usage status (free-tier meter) |
| `gitlab_request_feature` | meta | Request a missing feature |
| `gitlab_upgrade` | meta | Upgrade to Pro or Pro+ |
| `gitlab_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `gitlab_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `gitlab_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `gitlab_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
