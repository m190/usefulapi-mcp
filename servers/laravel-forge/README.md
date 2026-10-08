# Laravel Forge MCP by usefulapi

Manage your Laravel Forge servers, sites, and deployments from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Laravel Forge API token.

**Live endpoint:** `https://laravel-forge.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/laravel-forge

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://laravel-forge.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http laravel-forge https://laravel-forge.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=laravel-forge&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flaravel-forge.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "laravel-forge": {
      "url": "https://laravel-forge.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/laravel-forge/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Laravel Forge API token. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `forge_list_organizations` | read | Forge list organizations |
| `forge_get_current_user` | read | Forge get current user |
| `forge_list_servers` | read | Forge list servers |
| `forge_get_server` | read | Forge get server |
| `forge_list_server_events` | read | Forge list server events |
| `forge_list_sites` | read | Forge list sites |
| `forge_get_site` | read | Forge get site |
| `forge_list_deployments` | read | Forge list deployments |
| `forge_get_deployment` | read | Forge get deployment |
| `forge_get_deployment_log` | read | Forge get deployment log |
| `forge_get_deployment_status` | read | Forge get deployment status |
| `forge_list_databases` | read | Forge list databases |
| `forge_list_scheduled_jobs` | read | Forge list scheduled jobs |
| `forge_list_monitors` | read | Forge list monitors |
| `forge_get_site_env` | read | Forge get site env |
| `forge_deploy_site` | **write** | Forge deploy site |
| `forge_run_site_command` | **write** | Forge run site command |
| `laravel_forge_usage_status` | meta | Usage status (free-tier meter) |
| `laravel_forge_upgrade` | meta | Upgrade to Pro (unlimited) |
| `laravel_forge_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `laravel_forge_upgrade` (it returns a Stripe Checkout link). Cancel any time with `laravel_forge_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `laravel_forge_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
