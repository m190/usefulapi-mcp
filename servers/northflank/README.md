# Northflank MCP by usefulapi

Inspect and control your Northflank projects, services, and deployments from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Northflank API token.

**Live endpoint:** `https://northflank.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/northflank

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://northflank.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http northflank https://northflank.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=northflank&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnorthflank.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "northflank": {
      "url": "https://northflank.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Northflank credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/northflank/

<!-- connect:end (generated above, edit below) -->

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
| `northflank_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `northflank_upgrade` (it returns a Stripe Checkout link). Cancel any time with `northflank_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `northflank_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
