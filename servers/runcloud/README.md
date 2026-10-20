# RunCloud MCP by usefulapi

Use [RunCloud](https://runcloud.io) from Claude, Cursor, or any MCP client — servers, web apps, domains, SSL, databases, cron jobs and logs, plus deploys, service restarts and SSL renewal.
Hosted, no local install: connect with your own RunCloud credentials.

**Live endpoint:** `https://runcloud.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/runcloud

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://runcloud.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http runcloud https://runcloud.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=runcloud&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fruncloud.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "runcloud": {
      "url": "https://runcloud.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your RunCloud credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/runcloud/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `runcloud_ping` | read | Check API connection |
| `runcloud_list_servers` | read | List servers |
| `runcloud_get_server` | read | Get server |
| `runcloud_get_server_stats` | read | Get server counts |
| `runcloud_get_server_hardware` | read | Get server hardware info |
| `runcloud_get_server_health` | read | Get latest server health |
| `runcloud_list_server_logs` | read | List server activity logs |
| `runcloud_list_services` | read | List server services |
| `runcloud_list_system_users` | read | List system users |
| `runcloud_list_webapps` | read | List web applications |
| `runcloud_get_webapp` | read | Get web application |
| `runcloud_get_webapp_settings` | read | Get web application settings |
| `runcloud_list_webapp_logs` | read | List web application activity logs |
| `runcloud_list_domains` | read | List domain names |
| `runcloud_get_domain_dns` | read | Get domain DNS setup instructions |
| `runcloud_get_webapp_ssl` | read | Get web application SSL |
| `runcloud_get_ssl_method` | read | Check SSL method and AutoSSL status |
| `runcloud_get_git_deployment` | read | Get Git deployment |
| `runcloud_list_databases` | read | List databases |
| `runcloud_list_database_users` | read | List database users |
| `runcloud_list_cronjobs` | read | List cron jobs |
| `runcloud_list_supervisors` | read | List supervisor jobs |
| `runcloud_get_supervisor_status` | read | Get supervisor job status |
| `runcloud_list_firewall_rules` | read | List firewall rules |
| `runcloud_list_blocked_ips` | read | List Fail2Ban blocked IPs |
| `runcloud_list_backups` | read | List backups |
| `runcloud_list_backup_snapshots` | read | List backup snapshots |
| `runcloud_list_atomic_projects` | read | List atomic deployment projects |
| `runcloud_list_atomic_deployments` | read | List atomic deployments |
| `runcloud_control_service` | **write** | Start, restart or reload a service |
| `runcloud_deploy_git` | **write** | Force a Git deployment |
| `runcloud_force_deploy_atomic` | **write** | Force an atomic deployment |
| `runcloud_run_cronjob` | **write** | Run a cron job now |
| `runcloud_reload_supervisor` | **write** | Reload a supervisor job |
| `runcloud_renew_ssl` | **write** | Renew a Let's Encrypt certificate |
| `runcloud_install_letsencrypt_ssl` | **write** | Issue a Let's Encrypt certificate |
| `runcloud_usage_status` | meta | Usage status (free-tier meter) |
| `runcloud_request_feature` | meta | Request a missing feature |
| `runcloud_upgrade` | meta | Upgrade to Pro (unlimited) |
| `runcloud_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `runcloud_upgrade` (it returns a Stripe Checkout link). Cancel any time with `runcloud_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `runcloud_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by RunCloud.
