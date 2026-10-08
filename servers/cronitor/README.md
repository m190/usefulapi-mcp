# Cronitor MCP by usefulapi

Manage Cronitor monitors and send telemetry pings from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Cronitor API key.

**Live endpoint:** `https://cronitor.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/cronitor

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cronitor.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cronitor https://cronitor.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cronitor&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcronitor.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cronitor": {
      "url": "https://cronitor.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cronitor/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Cronitor API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cronitor_list_monitors` | read | List monitors |
| `cronitor_get_monitor` | read | Get monitor |
| `cronitor_create_monitor` | **write** | Create monitor |
| `cronitor_update_monitor` | **write** | Update monitor |
| `cronitor_delete_monitor` | **write** | Delete monitor |
| `cronitor_ping_monitor` | **write** | Ping monitor (telemetry) |
| `cronitor_usage_status` | meta | Usage status (free-tier meter) |
| `cronitor_upgrade` | meta | Upgrade to Pro (unlimited) |
| `cronitor_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `cronitor_upgrade` (it returns a Stripe Checkout link). Cancel any time with `cronitor_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `cronitor_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
