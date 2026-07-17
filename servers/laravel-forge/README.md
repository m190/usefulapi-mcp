# Laravel Forge MCP by usefulapi

Manage your Laravel Forge servers, sites, and deployments from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Laravel Forge API token.

**Live endpoint:** `https://laravel-forge.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/laravel-forge

## Add to Claude

```json
{
  "mcpServers": {
    "laravel-forge": {
      "url": "https://laravel-forge.usefulapi.io/mcp"
    }
  }
}
```

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

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
