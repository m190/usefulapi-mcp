# Cloudways MCP by usefulapi

Use your [Cloudways](https://www.cloudways.com) account from Claude, Cursor, or any MCP client. Read servers, apps, logs, traffic, vulnerabilities and billing, and restart a server or clear an app cache. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://cloudways.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cloudways.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cloudways https://cloudways.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cloudways&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcloudways.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cloudways": {
      "url": "https://cloudways.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Cloudways credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cloudways/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a Cloudways **Access Token** (Platform, API Integration; only the primary account owner can create it). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cloudways_list_servers` | read | List servers |
| `cloudways_get_server` | read | Get server |
| `cloudways_get_server_settings` | read | Get server settings |
| `cloudways_get_server_usage` | read | Get server usage |
| `cloudways_get_operation` | read | Get operation status |
| `cloudways_list_regions` | read | List regions |
| `cloudways_list_server_sizes` | read | List server sizes |
| `cloudways_list_apps` | read | List applications |
| `cloudways_get_app` | read | Get application |
| `cloudways_list_app_types` | read | List application types |
| `cloudways_get_app_traffic` | read | Get application traffic |
| `cloudways_get_app_logs` | read | Get application logs |
| `cloudways_get_app_cron_jobs` | read | Get application cron jobs |
| `cloudways_get_app_vulnerabilities` | read | Get application vulnerabilities |
| `cloudways_list_projects` | read | List projects |
| `cloudways_list_team_members` | read | List team members |
| `cloudways_list_alerts` | read | List CloudwaysBot alerts |
| `cloudways_get_billing_summary` | read | Get billing summary |
| `cloudways_list_invoices` | read | List invoices |
| `cloudways_restart_server` | **write** | Restart server |
| `cloudways_clear_app_cache` | **write** | Clear application cache |
| `cloudways_update_server_label` | **write** | Rename server |
| `cloudways_usage_status` | meta | Usage status (free-tier meter) |
| `cloudways_request_feature` | meta | Request a missing feature |
| `cloudways_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cloudways_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `cloudways_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `cloudways_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `cloudways_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
