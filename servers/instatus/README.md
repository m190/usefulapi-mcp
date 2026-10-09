# Instatus MCP by usefulapi

Manage [Instatus](https://instatus.com) from Claude, Cursor, or any MCP client — manage status pages — components, incidents and scheduled maintenances, and set live status. Hosted, no local install: connect with your Instatus API token.

**Live endpoint:** `https://instatus.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://instatus.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http instatus https://instatus.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=instatus&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finstatus.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "instatus": {
      "url": "https://instatus.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Instatus credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/instatus/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Instatus API token** (Instatus → Developers → API).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `instatus_list_pages` | read | List pages |
| `instatus_list_components` | read | List components |
| `instatus_get_component` | read | Get component |
| `instatus_list_incidents` | read | List incidents |
| `instatus_get_incident` | read | Get incident |
| `instatus_list_maintenances` | read | List maintenances |
| `instatus_get_maintenance` | read | Get maintenance |
| `instatus_update_component` | **write** | Update component |
| `instatus_create_incident` | **write** | Create incident |
| `instatus_update_incident` | **write** | Update incident |
| `instatus_delete_incident` | **write** | Delete incident |
| `instatus_create_maintenance` | **write** | Create maintenance |
| `instatus_update_maintenance` | **write** | Update maintenance |
| `instatus_delete_maintenance` | **write** | Delete maintenance |
| `instatus_usage_status` | meta | Usage status (free-tier meter) |
| `instatus_upgrade` | meta | Upgrade to Pro (unlimited) |
| `instatus_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `instatus_upgrade` (it returns a Stripe Checkout link). Cancel any time with `instatus_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `instatus_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
