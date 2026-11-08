# Klipfolio MCP by usefulapi

Use your [Klipfolio](https://www.klipfolio.com) account from Claude, Cursor, or any MCP client. Read Klips, dashboards, data sources, data and users, and refresh data source instances. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://klipfolio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://klipfolio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http klipfolio https://klipfolio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=klipfolio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fklipfolio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "klipfolio": {
      "url": "https://klipfolio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Klipfolio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/klipfolio/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Klipfolio API key** (Klipfolio → My Profile, or Users for an administrator). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `klipfolio_get_profile` | read | Get my profile |
| `klipfolio_list_klips` | read | List Klips |
| `klipfolio_get_klip` | read | Get a Klip |
| `klipfolio_list_dashboards` | read | List dashboards |
| `klipfolio_get_dashboard` | read | Get a dashboard |
| `klipfolio_list_datasources` | read | List data sources |
| `klipfolio_get_datasource` | read | Get a data source |
| `klipfolio_list_datasource_instances` | read | List data source instances |
| `klipfolio_get_datasource_instance` | read | Get a data source instance |
| `klipfolio_get_datasource_instance_data` | read | Get data source data |
| `klipfolio_list_users` | read | List users |
| `klipfolio_list_groups` | read | List groups |
| `klipfolio_refresh_datasource_instance` | **write** | Refresh a data source instance |
| `klipfolio_usage_status` | meta | Usage status (free-tier meter) |
| `klipfolio_request_feature` | meta | Request a missing feature |
| `klipfolio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `klipfolio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `klipfolio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `klipfolio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `klipfolio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
