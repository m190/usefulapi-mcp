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
| `ably_get_channel_history` | read | Get channel message history |
| `ably_get_presence` | read | Get channel presence set |
| `ably_get_presence_history` | read | Get channel presence history |
| `ably_get_channel_details` | read | Get channel details / occupancy |
| `ably_list_channels` | read | List active channels |
| `ably_get_stats` | read | Get app statistics |
| `ably_get_service_time` | read | Get Ably service time |
| `ably_publish_message` | **write** | Publish a message to a channel |
| `ably_whoami` | read | Get control token / account info |
| `ably_list_apps` | read | List Ably apps |
| `ably_list_keys` | read | List an app's API keys |
| `ably_list_namespaces` | read | List an app's channel namespaces |
| `ably_list_queues` | read | List an app's queues |
| `ably_list_rules` | read | List an app's integration rules |
| `ably_get_account_stats` | read | Get account-level statistics |
| `ably_usage_status` | meta | Usage status (free-tier meter) |
| `ably_request_feature` | meta | Request a missing feature |
| `ably_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ably_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ably_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ably_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ably_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
