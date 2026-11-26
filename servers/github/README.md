# GitHub MCP by usefulapi

Use your [GitHub](https://github.com) account from Claude, Cursor, or any MCP client. Read repositories, pull requests, issues, commits and workflow runs, and create or update issues or add comments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://github.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://github.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http github https://github.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=github&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "github": {
      "url": "https://github.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your GitHub credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/github/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **GitHub personal access token** (Settings → Developer settings → Personal access tokens in GitHub). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `github_get_authenticated_user` | read | Get the authenticated user |
| `github_list_my_repos` | read | List my repositories |
| `github_list_my_orgs` | read | List my organizations |
| `github_get_repo` | read | Get a repository |
| `github_list_branches` | read | List branches |
| `github_list_releases` | read | List releases |
| `github_list_commits` | read | List commits |
| `github_get_commit` | read | Get a commit |
| `github_list_issues` | read | List issues |
| `github_get_issue` | read | Get an issue |
| `github_list_issue_comments` | read | List issue comments |
| `github_list_pull_requests` | read | List pull requests |
| `github_get_pull_request` | read | Get a pull request |
| `github_list_pull_request_files` | read | List pull request files |
| `github_list_pull_request_reviews` | read | List pull request reviews |
| `github_list_workflow_runs` | read | List workflow runs |
| `github_search_repositories` | read | Search repositories |
| `github_search_issues` | read | Search issues and pull requests |
| `github_create_issue` | **write** | Create an issue |
| `github_add_issue_comment` | **write** | Add an issue comment |
| `github_update_issue` | **write** | Update an issue |
| `github_usage_status` | meta | Usage status (free-tier meter) |
| `github_request_feature` | meta | Request a missing feature |
| `github_upgrade` | meta | Upgrade to Pro or Pro+ |
| `github_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `github_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `github_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `github_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
