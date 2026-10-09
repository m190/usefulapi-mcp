# Ably MCP by usefulapi

Query Ably realtime channels and manage your apps from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Ably API key.

**Live endpoint:** `https://ably.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/ably

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ably.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ably https://ably.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ably&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fably.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ably": {
      "url": "https://ably.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Ably credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ably/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Ably API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ably_get_channel_history` | read | Get channel history |
| `ably_get_presence` | read | Get presence |
| `ably_get_presence_history` | read | Get presence history |
| `ably_get_channel_details` | read | Get channel details |
| `ably_list_channels` | read | List channels |
| `ably_get_stats` | read | Get stats |
| `ably_get_service_time` | read | Get service time |
| `ably_whoami` | read | Whoami |
| `ably_list_apps` | read | List apps |
| `ably_list_keys` | read | List keys |
| `ably_list_namespaces` | read | List namespaces |
| `ably_list_queues` | read | List queues |
| `ably_list_rules` | read | List rules |
| `ably_get_account_stats` | read | Get account stats |
| `ably_publish_message` | **write** | Publish message |
| `ably_usage_status` | meta | Usage status (free-tier meter) |
| `ably_upgrade` | meta | Upgrade to Pro (unlimited) |
| `ably_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `ably_upgrade` (it returns a Stripe Checkout link). Cancel any time with `ably_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `ably_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
