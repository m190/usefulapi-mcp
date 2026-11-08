# StatusPage.me MCP by usefulapi

Use your [StatusPage.me](https://statuspage.me) account from Claude, Cursor, or any MCP client. Read status pages, incidents, maintenance windows and monitors, and post incidents or maintenance updates. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://statuspage-me.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://statuspage-me.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http statuspage-me https://statuspage-me.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=statuspage-me&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstatuspage-me.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "statuspage-me": {
      "url": "https://statuspage-me.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your StatusPage.me credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/statuspage-me/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **StatusPage.me personal API key** (create it in your StatusPage.me account). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `statuspageme_list_status_pages` | read | List status pages |
| `statuspageme_get_status_page` | read | Get a status page |
| `statuspageme_list_incidents` | read | List incidents |
| `statuspageme_get_incident` | read | Get an incident |
| `statuspageme_list_maintenances` | read | List maintenance windows |
| `statuspageme_get_maintenance` | read | Get a maintenance window |
| `statuspageme_list_monitors` | read | List monitors |
| `statuspageme_get_monitor` | read | Get a monitor |
| `statuspageme_get_monitor_availability` | read | Get monitor availability |
| `statuspageme_list_metrics` | read | List status page metrics |
| `statuspageme_create_incident` | **write** | Create an incident |
| `statuspageme_add_incident_update` | **write** | Add an incident update |
| `statuspageme_create_maintenance` | **write** | Create a maintenance window |
| `statuspageme_update_maintenance` | **write** | Update a maintenance window |
| `statuspageme_usage_status` | meta | Usage status (free-tier meter) |
| `statuspageme_request_feature` | meta | Request a missing feature |
| `statuspageme_upgrade` | meta | Upgrade to Pro or Pro+ |
| `statuspageme_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `statuspageme_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `statuspageme_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `statuspageme_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
