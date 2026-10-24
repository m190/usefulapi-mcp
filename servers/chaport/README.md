# Chaport MCP by usefulapi

Read Chaport visitors, chats, operators and webhooks; update visitors and chats; message visitors.

**Live endpoint:** `https://chaport.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/chaport

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://chaport.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http chaport https://chaport.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=chaport&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fchaport.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "chaport": {
      "url": "https://chaport.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Chaport credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/chaport/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Chaport **REST API access token** (Chaport → Settings → API).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `chaport_whoami` | read | Check connection |
| `chaport_list_operators` | read | List operators |
| `chaport_get_operator` | read | Get operator |
| `chaport_set_operator_status` | **write** | Set operator status |
| `chaport_list_visitors` | read | List visitors |
| `chaport_get_visitor` | read | Get visitor |
| `chaport_update_visitor` | **write** | Update visitor |
| `chaport_get_last_visitor_chat` | read | Get visitor's latest chat |
| `chaport_get_chat` | read | Get chat |
| `chaport_list_chat_events` | read | List chat events |
| `chaport_get_chat_event` | read | Get chat event |
| `chaport_update_last_visitor_chat` | **write** | Update visitor's latest chat |
| `chaport_send_operator_message` | **write** | Send message to visitor |
| `chaport_list_webhooks` | read | List webhooks |
| `chaport_usage_status` | meta | Usage status (free-tier meter) |
| `chaport_request_feature` | meta | Request a missing feature |
| `chaport_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `chaport_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `chaport_upgrade` (it returns a Stripe Checkout link). Cancel any time with `chaport_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `chaport_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Chaport.
