# Stream MCP by usefulapi

Bring your Stream Chat app into your AI workflow — query channels, search messages, and post replies from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Stream API key + secret.

**Live endpoint:** `https://stream.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/stream

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://stream.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http stream https://stream.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=stream&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstream.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "stream": {
      "url": "https://stream.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Stream credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/stream/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Stream API key and secret. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `stream_get_app` | read | Get app |
| `stream_query_channels` | read | Query channels |
| `stream_get_channel` | read | Get channel |
| `stream_search_messages` | read | Search messages |
| `stream_get_message` | read | Get message |
| `stream_get_replies` | read | Get replies |
| `stream_get_reactions` | read | Get reactions |
| `stream_query_members` | read | Query members |
| `stream_query_users` | read | Query users |
| `stream_query_threads` | read | Query threads |
| `stream_get_unread_counts` | read | Get unread counts |
| `stream_send_message` | **write** | Send message |
| `stream_send_reaction` | **write** | Send reaction |
| `stream_usage_status` | meta | Usage status (free-tier meter) |
| `stream_request_feature` | meta | Request a missing feature |
| `stream_upgrade` | meta | Upgrade to Pro (unlimited) |
| `stream_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `stream_upgrade` (it returns a Stripe Checkout link). Cancel any time with `stream_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `stream_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
