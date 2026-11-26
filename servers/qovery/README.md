# Qovery MCP by usefulapi

Use your [Qovery](https://www.qovery.com) account from Claude, Cursor, or any MCP client. Read environments, services and deployments, and deploy or stop environments or restart apps. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://qovery.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://qovery.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http qovery https://qovery.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=qovery&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fqovery.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "qovery": {
      "url": "https://qovery.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Qovery credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/qovery/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Qovery API token** (Qovery Console → Settings → API Tokens). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `qovery_list_organizations` | read | List organizations |
| `qovery_list_projects` | read | List projects |
| `qovery_get_project` | read | Get a project |
| `qovery_list_environments` | read | List environments |
| `qovery_get_environment` | read | Get an environment |
| `qovery_get_environment_status` | read | Get environment status |
| `qovery_list_services` | read | List services |
| `qovery_list_applications` | read | List applications |
| `qovery_list_containers` | read | List containers |
| `qovery_list_databases` | read | List databases |
| `qovery_list_jobs` | read | List jobs |
| `qovery_get_service_status` | read | Get service status |
| `qovery_list_deployments` | read | List environment deployments |
| `qovery_list_clusters` | read | List clusters |
| `qovery_get_cluster_status` | read | Get cluster status |
| `qovery_deploy_environment` | **write** | Deploy an environment |
| `qovery_stop_environment` | **write** | Stop an environment |
| `qovery_redeploy_application` | **write** | Redeploy an application |
| `qovery_restart_application` | **write** | Restart an application |
| `qovery_stop_application` | **write** | Stop an application |
| `qovery_usage_status` | meta | Usage status (free-tier meter) |
| `qovery_request_feature` | meta | Request a missing feature |
| `qovery_upgrade` | meta | Upgrade to Pro or Pro+ |
| `qovery_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `qovery_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `qovery_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `qovery_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
