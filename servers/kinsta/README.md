# Kinsta MCP by usefulapi

Use [Kinsta](https://kinsta.com) from Claude, Cursor, or any MCP client — sites, environments, backups, plugins, logs, analytics and domains, plus cache clears, PHP restarts and manual backups.
Hosted, no local install: connect with your own Kinsta credentials.

**Live endpoint:** `https://kinsta.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/kinsta

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kinsta.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kinsta https://kinsta.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kinsta&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkinsta.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kinsta": {
      "url": "https://kinsta.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Kinsta credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kinsta/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kinsta_get_api_key_info` | read | Get API key info |
| `kinsta_list_available_regions` | read | List data center regions |
| `kinsta_list_activity_logs` | read | List activity logs |
| `kinsta_list_sites` | read | List sites |
| `kinsta_get_site` | read | Get site |
| `kinsta_list_site_environments` | read | List site environments |
| `kinsta_get_site_usage` | read | Get site usage this month |
| `kinsta_list_environment_domains` | read | List environment domains |
| `kinsta_list_company_domains` | read | List company domains |
| `kinsta_list_backups` | read | List backups |
| `kinsta_list_plugins` | read | List WordPress plugins |
| `kinsta_list_themes` | read | List WordPress themes |
| `kinsta_get_logs` | read | Get environment logs |
| `kinsta_get_analytics` | read | Get environment analytics |
| `kinsta_get_force_https_status` | read | Get force-HTTPS status |
| `kinsta_list_redirect_rules` | read | List redirect rules |
| `kinsta_list_denied_ips` | read | List denied IPs |
| `kinsta_get_operation_status` | read | Get operation status |
| `kinsta_clear_site_cache` | **write** | Clear site cache |
| `kinsta_clear_edge_cache` | **write** | Clear edge cache |
| `kinsta_clear_cdn_cache` | **write** | Clear CDN cache |
| `kinsta_restart_php` | **write** | Restart PHP engine |
| `kinsta_create_manual_backup` | **write** | Create manual backup |
| `kinsta_usage_status` | meta | Usage status (free-tier meter) |
| `kinsta_request_feature` | meta | Request a missing feature |
| `kinsta_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `kinsta_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `kinsta_upgrade` (it returns a Stripe Checkout link). Cancel any time with `kinsta_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `kinsta_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Kinsta.
