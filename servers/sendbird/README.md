# Sendbird MCP by usefulapi

Read and manage your Sendbird chat — users, channels, members, and messages — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Sendbird App ID + API token.

**Live endpoint:** `https://sendbird.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/sendbird

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sendbird.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sendbird https://sendbird.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sendbird&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsendbird.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sendbird": {
      "url": "https://sendbird.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sendbird credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sendbird/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Sendbird App ID and API token. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sendbird_list_users` | read | List users |
| `sendbird_get_user` | read | Get user |
| `sendbird_list_group_channels` | read | List group channels |
| `sendbird_get_group_channel` | read | Get group channel |
| `sendbird_list_group_channel_members` | read | List group channel members |
| `sendbird_list_group_channels_by_user` | read | List group channels by user |
| `sendbird_list_open_channels` | read | List open channels |
| `sendbird_get_open_channel` | read | Get open channel |
| `sendbird_list_messages` | read | List messages |
| `sendbird_request` | read | Request |
| `sendbird_send_message` | **write** | Send message |
| `sendbird_create_user` | **write** | Create user |
| `sendbird_update_user` | **write** | Update user |
| `sendbird_create_group_channel` | **write** | Create group channel |
| `sendbird_usage_status` | meta | Usage status (free-tier meter) |
| `sendbird_upgrade` | meta | Upgrade to Pro (unlimited) |
| `sendbird_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `sendbird_upgrade` (it returns a Stripe Checkout link). Cancel any time with `sendbird_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `sendbird_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
