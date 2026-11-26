# Koyeb MCP by usefulapi

Use your [Koyeb](https://www.koyeb.com) account from Claude, Cursor, or any MCP client. Read apps, services, deployments, logs and metrics, and pause, resume or redeploy services. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://koyeb.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://koyeb.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http koyeb https://koyeb.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=koyeb&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkoyeb.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "koyeb": {
      "url": "https://koyeb.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Koyeb credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/koyeb/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Koyeb API key** (Koyeb → Settings → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `koyeb_get_account` | read | Get current user |
| `koyeb_list_regions` | read | List regions |
| `koyeb_list_instance_types` | read | List instance types |
| `koyeb_get_usage` | read | Get organization usage |
| `koyeb_list_activities` | read | List activities |
| `koyeb_list_apps` | read | List apps |
| `koyeb_get_app` | read | Get app |
| `koyeb_pause_app` | **write** | Pause app |
| `koyeb_resume_app` | **write** | Resume app |
| `koyeb_list_services` | read | List services |
| `koyeb_get_service` | read | Get service |
| `koyeb_get_service_scaling` | read | Get service scaling |
| `koyeb_pause_service` | **write** | Pause service |
| `koyeb_resume_service` | **write** | Resume service |
| `koyeb_redeploy_service` | **write** | Redeploy service |
| `koyeb_list_deployments` | read | List deployments |
| `koyeb_get_deployment` | read | Get deployment |
| `koyeb_cancel_deployment` | **write** | Cancel deployment |
| `koyeb_list_instances` | read | List instances |
| `koyeb_get_instance` | read | Get instance |
| `koyeb_query_logs` | read | Query logs |
| `koyeb_get_metrics` | read | Get metrics |
| `koyeb_list_domains` | read | List domains |
| `koyeb_get_domain` | read | Get domain |
| `koyeb_list_volumes` | read | List volumes |
| `koyeb_get_volume` | read | Get volume |
| `koyeb_usage_status` | meta | Usage status (free-tier meter) |
| `koyeb_request_feature` | meta | Request a missing feature |
| `koyeb_upgrade` | meta | Upgrade to Pro or Pro+ |
| `koyeb_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `koyeb_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `koyeb_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `koyeb_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
