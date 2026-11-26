# Ploi MCP by usefulapi

Use your [Ploi](https://ploi.io) account from Claude, Cursor, or any MCP client. Read servers, sites, logs, deployments, certificates, databases and cron jobs, and start a site deployment. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ploi.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ploi.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ploi https://ploi.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ploi&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fploi.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ploi": {
      "url": "https://ploi.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Ploi credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ploi/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Ploi API token** (Profile → API tokens in Ploi). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ploi_get_user` | read | Get account |
| `ploi_list_servers` | read | List servers |
| `ploi_get_server` | read | Get a server |
| `ploi_list_server_logs` | read | List server activity logs |
| `ploi_get_server_monitoring` | read | Get server monitoring data |
| `ploi_list_sites` | read | List sites on a server |
| `ploi_get_site` | read | Get a site |
| `ploi_list_site_logs` | read | List site logs |
| `ploi_get_site_log` | read | Get a site log entry |
| `ploi_list_deployments` | read | List deployments |
| `ploi_list_certificates` | read | List SSL certificates |
| `ploi_list_databases` | read | List databases on a server |
| `ploi_list_crontabs` | read | List cron jobs on a server |
| `ploi_list_daemons` | read | List daemons on a server |
| `ploi_deploy_site` | **write** | Deploy a site |
| `ploi_usage_status` | meta | Usage status (free-tier meter) |
| `ploi_request_feature` | meta | Request a missing feature |
| `ploi_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ploi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ploi_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ploi_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ploi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
