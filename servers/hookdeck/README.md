# Hookdeck MCP by usefulapi

Use your [Hookdeck](https://hookdeck.com) account from Claude, Cursor, or any MCP client. Inspect connections, events, requests and delivery attempts, and retry events or pause connections. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://hookdeck.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hookdeck.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hookdeck https://hookdeck.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hookdeck&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhookdeck.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hookdeck": {
      "url": "https://hookdeck.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Hookdeck credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hookdeck/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Hookdeck project API key** (project settings → API keys in Hookdeck).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hookdeck_list_connections` | read | List connections |
| `hookdeck_get_connection` | read | Get a connection |
| `hookdeck_list_sources` | read | List sources |
| `hookdeck_get_source` | read | Get a source |
| `hookdeck_list_destinations` | read | List destinations |
| `hookdeck_get_destination` | read | Get a destination |
| `hookdeck_list_events` | read | List events |
| `hookdeck_get_event` | read | Get an event |
| `hookdeck_retry_event` | **write** | Retry an event |
| `hookdeck_list_requests` | read | List requests |
| `hookdeck_get_request` | read | Get a request |
| `hookdeck_list_attempts` | read | List attempts |
| `hookdeck_get_attempt` | read | Get an attempt |
| `hookdeck_list_issues` | read | List issues |
| `hookdeck_get_issue` | read | Get an issue |
| `hookdeck_list_transformations` | read | List transformations |
| `hookdeck_get_transformation` | read | Get a transformation |
| `hookdeck_pause_connection` | **write** | Pause a connection |
| `hookdeck_unpause_connection` | **write** | Unpause a connection |
| `hookdeck_usage_status` | meta | Usage status (free-tier meter) |
| `hookdeck_request_feature` | meta | Request a missing feature |
| `hookdeck_upgrade` | meta | Upgrade to Pro or Pro+ |
| `hookdeck_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `hookdeck_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `hookdeck_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `hookdeck_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
