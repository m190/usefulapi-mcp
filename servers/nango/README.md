# Nango MCP by usefulapi

Use your [Nango](https://nango.dev) account from Claude, Cursor, or any MCP client. Read integrations, connections, sync status and synced records, and start, pause or run a sync. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://nango.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nango.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nango https://nango.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nango&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnango.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nango": {
      "url": "https://nango.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Nango credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nango/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a Nango **Environment API key** (Environment Settings, API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nango_list_integrations` | read | List integrations |
| `nango_get_integration` | read | Get an integration |
| `nango_list_connections` | read | List connections |
| `nango_get_connection` | read | Get a connection |
| `nango_get_sync_status` | read | Get sync status |
| `nango_list_records` | read | List synced records |
| `nango_start_sync` | **write** | Start syncs |
| `nango_pause_sync` | **write** | Pause syncs |
| `nango_trigger_sync` | **write** | Run a sync once |
| `nango_call_tool` | **write** | Call a tool |
| `nango_usage_status` | meta | Usage status (free-tier meter) |
| `nango_request_feature` | meta | Request a missing feature |
| `nango_upgrade` | meta | Upgrade to Pro or Pro+ |
| `nango_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `nango_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `nango_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `nango_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
