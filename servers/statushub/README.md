# StatusHub MCP by usefulapi

Use your [StatusHub](https://statushub.com) account from Claude, Cursor, or any MCP client. Read status pages, services, incidents, maintenance and uptime, and create incidents and updates as drafts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://statushub.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://statushub.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http statushub https://statushub.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=statushub&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstatushub.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "statushub": {
      "url": "https://statushub.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your StatusHub credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/statushub/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **StatusHub account subdomain** (the `acme` in `acme.app.statushub.io`), your **region** (default, or EU for `app-eu1.statushub.io`), and your **StatusHub API key** (created in your StatusHub account). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `statushub_list_hubs` | read | List status pages |
| `statushub_get_hub` | read | Get a status page |
| `statushub_get_status_counters` | read | Get service status counters |
| `statushub_list_services` | read | List services |
| `statushub_get_service_statuses` | read | Get a service's status history |
| `statushub_list_incidents` | read | List incidents |
| `statushub_get_incident` | read | Get an incident |
| `statushub_list_incident_updates` | read | List incident updates |
| `statushub_list_maintenances` | read | List maintenance events |
| `statushub_get_maintenance` | read | Get a maintenance event |
| `statushub_get_uptime` | read | Get status page uptime |
| `statushub_get_service_uptime` | read | Get service uptime |
| `statushub_create_incident` | **write** | Create an incident |
| `statushub_create_incident_update` | **write** | Post an incident update |
| `statushub_usage_status` | meta | Usage status (free-tier meter) |
| `statushub_request_feature` | meta | Request a missing feature |
| `statushub_upgrade` | meta | Upgrade to Pro or Pro+ |
| `statushub_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `statushub_upgrade` (it returns a Stripe Checkout link). Cancel any time with `statushub_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `statushub_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
