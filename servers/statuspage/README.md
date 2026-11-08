# Statuspage MCP by usefulapi

Use your [Statuspage](https://www.atlassian.com/software/statuspage) account from Claude, Cursor, or any MCP client. Read status pages, components, uptime, incidents, maintenances and metrics, and create or update incidents and component status. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://statuspage.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://statuspage.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http statuspage https://statuspage.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=statuspage&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstatuspage.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "statuspage": {
      "url": "https://statuspage.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Statuspage credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/statuspage/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Statuspage API key** (Statuspage → user menu → API info). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `statuspage_list_pages` | read | List status pages |
| `statuspage_get_page` | read | Get a status page |
| `statuspage_list_components` | read | List components |
| `statuspage_get_component` | read | Get a component |
| `statuspage_get_component_uptime` | read | Get component uptime |
| `statuspage_list_component_groups` | read | List component groups |
| `statuspage_list_incidents` | read | List incidents |
| `statuspage_list_unresolved_incidents` | read | List unresolved incidents |
| `statuspage_list_maintenances` | read | List maintenances |
| `statuspage_get_incident` | read | Get an incident |
| `statuspage_count_subscribers` | read | Count subscribers |
| `statuspage_list_metrics` | read | List metrics |
| `statuspage_update_component_status` | **write** | Update a component status |
| `statuspage_create_incident` | **write** | Create an incident |
| `statuspage_update_incident` | **write** | Update an incident |
| `statuspage_usage_status` | meta | Usage status (free-tier meter) |
| `statuspage_request_feature` | meta | Request a missing feature |
| `statuspage_upgrade` | meta | Upgrade to Pro or Pro+ |
| `statuspage_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `statuspage_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `statuspage_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `statuspage_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
