# Scalingo MCP by usefulapi

Inspect and operate your Scalingo PaaS apps — deploy, scale, restart and read logs — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Scalingo API token.

**Live endpoint:** `https://scalingo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/scalingo

## Add to Claude

```json
{
  "mcpServers": {
    "scalingo": {
      "url": "https://scalingo.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Scalingo API token. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `list_apps` | read | List apps |
| `get_app` | read | Get app |
| `list_containers` | read | List containers |
| `get_app_stats` | read | Get app stats |
| `list_deployments` | read | List deployments |
| `get_deployment` | read | Get deployment |
| `get_app_logs` | read | Get app logs |
| `list_variables` | read | List variables |
| `list_collaborators` | read | List collaborators |
| `list_domains` | read | List domains |
| `list_addons` | read | List addons |
| `list_addon_providers` | read | List addon providers |
| `list_app_events` | read | List app events |
| `get_operation` | read | Get operation |
| `list_regions` | read | List regions |
| `get_account` | read | Get account |
| `scalingo_request` | read | Request |
| `restart_app` | **write** | Restart app |
| `scale_app` | **write** | Scale app |
| `set_variables` | **write** | Set variables |
| `trigger_deployment` | **write** | Trigger deployment |
| `scalingo_usage_status` | meta | Usage status (free-tier meter) |
| `scalingo_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
