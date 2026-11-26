# Grafana MCP by usefulapi

Use your [Grafana](https://grafana.com) account from Claude, Cursor, or any MCP client. Search dashboards, query data sources, read alert rules and folders, and add annotations to a Grafana Cloud stack. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://grafana.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://grafana.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http grafana https://grafana.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=grafana&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgrafana.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "grafana": {
      "url": "https://grafana.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Grafana credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/grafana/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Grafana Cloud stack name** (the part before .grafana.net in your address) and a **service account token** (Administration → Users and access → Service accounts → Add token). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `grafana_get_current_user` | read | Get the signed-in user |
| `grafana_get_current_org` | read | Get the current organization |
| `grafana_search` | read | Search dashboards and folders |
| `grafana_get_dashboard` | read | Get a dashboard |
| `grafana_list_folders` | read | List folders |
| `grafana_list_datasources` | read | List data sources |
| `grafana_get_datasource` | read | Get a data source |
| `grafana_query_data` | read | Query data sources |
| `grafana_list_org_users` | read | List organization users |
| `grafana_list_teams` | read | Search teams |
| `grafana_list_annotations` | read | List annotations |
| `grafana_create_annotation` | **write** | Create an annotation |
| `grafana_list_alert_rules` | read | List alert rules |
| `grafana_usage_status` | meta | Usage status (free-tier meter) |
| `grafana_request_feature` | meta | Request a missing feature |
| `grafana_upgrade` | meta | Upgrade to Pro or Pro+ |
| `grafana_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `grafana_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `grafana_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `grafana_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
