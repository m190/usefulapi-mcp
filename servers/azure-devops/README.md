# Azure DevOps MCP by usefulapi

Use your [Azure DevOps](https://azure.microsoft.com/products/devops) account from Claude, Cursor, or any MCP client. Read projects, Git repositories, pull requests, pipeline runs and work items in one Azure DevOps organization, and create work items or pull request comments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://azure-devops.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://azure-devops.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http azure-devops https://azure-devops.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=azure-devops&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fazure-devops.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "azure-devops": {
      "url": "https://azure-devops.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Azure DevOps credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/azure-devops/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **organization name** (the part after dev.azure.com/) and a **personal access token** (User settings → Personal access tokens, Organization scope). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `azuredevops_list_projects` | read | List projects |
| `azuredevops_get_project` | read | Get a project |
| `azuredevops_list_repositories` | read | List repositories |
| `azuredevops_list_pull_requests` | read | List pull requests |
| `azuredevops_get_pull_request` | read | Get a pull request |
| `azuredevops_list_build_definitions` | read | List pipelines |
| `azuredevops_list_builds` | read | List builds |
| `azuredevops_get_build` | read | Get a build |
| `azuredevops_query_work_items` | read | Query work items |
| `azuredevops_get_work_items` | read | Get work items |
| `azuredevops_create_work_item` | **write** | Create a work item |
| `azuredevops_create_pull_request_comment` | **write** | Comment on a pull request |
| `azuredevops_usage_status` | meta | Usage status (free-tier meter) |
| `azuredevops_request_feature` | meta | Request a missing feature |
| `azuredevops_upgrade` | meta | Upgrade to Pro or Pro+ |
| `azuredevops_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `azuredevops_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `azuredevops_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `azuredevops_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
