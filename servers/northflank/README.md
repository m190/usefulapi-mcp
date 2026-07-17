# Northflank MCP by usefulapi

Inspect and control your Northflank projects, services, and deployments from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Northflank API token.

**Live endpoint:** `https://northflank.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/northflank

## Add to Claude

```json
{
  "mcpServers": {
    "northflank": {
      "url": "https://northflank.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Northflank API token. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `northflank_list_projects` | read | List projects |
| `northflank_get_project` | read | Get project |
| `northflank_list_services` | read | List services |
| `northflank_get_service` | read | Get service |
| `northflank_list_jobs` | read | List jobs |
| `northflank_get_job` | read | Get job |
| `northflank_list_addons` | read | List addons |
| `northflank_get_addon` | read | Get addon |
| `northflank_list_service_builds` | read | List service builds |
| `northflank_get_service_metrics` | read | Get service metrics |
| `northflank_list_secret_groups` | read | List secret groups |
| `northflank_list_domains` | read | List domains |
| `northflank_trigger_service_build` | **write** | Trigger service build |
| `northflank_restart_service` | **write** | Restart service |
| `northflank_scale_service` | **write** | Scale service |
| `northflank_pause_service` | **write** | Pause service |
| `northflank_resume_service` | **write** | Resume service |
| `northflank_usage_status` | meta | Usage status (free-tier meter) |
| `northflank_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
