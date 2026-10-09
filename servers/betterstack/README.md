# Better Stack MCP by usefulapi

Manage [Better Stack](https://betterstack.com) Uptime from Claude, Cursor, or any MCP client — read
monitors, incidents, heartbeats, on-call schedules and status pages, and acknowledge/resolve
incidents. Hosted, no local install: connect with your Better Stack API token.

**Live endpoint:** `https://betterstack.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://betterstack.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http betterstack https://betterstack.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=betterstack&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbetterstack.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "betterstack": {
      "url": "https://betterstack.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Better Stack credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/betterstack/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Better Stack API token** (Better Stack → Settings → API tokens).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `list_monitors` | read | List monitors |
| `get_monitor` | read | Get a monitor |
| `list_incidents` | read | List incidents |
| `get_incident` | read | Get an incident |
| `list_heartbeats` | read | List heartbeats |
| `list_on_call` | read | List on-call schedules |
| `list_status_pages` | read | List status pages |
| `acknowledge_incident` | read | Acknowledge an incident |
| `resolve_incident` | read | Resolve an incident |
| `betterstack_usage_status` | meta | Usage status (free-tier meter) |
| `betterstack_request_feature` | meta | Request a missing feature |
| `betterstack_upgrade` | meta | Upgrade to Pro (unlimited) |
| `betterstack_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `betterstack_upgrade` (it returns a Stripe Checkout link). Cancel any time with `betterstack_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `betterstack_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
