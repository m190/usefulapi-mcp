# Telegram MCP by usefulapi

Use your [Telegram](https://telegram.org) account from Claude, Cursor, or any MCP client. Read chats, members and administrators of your bot, and send, edit and delete messages with the bot. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://telegram.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://telegram.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http telegram https://telegram.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=telegram&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftelegram.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "telegram": {
      "url": "https://telegram.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Telegram credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/telegram/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Telegram bot token** (open @BotFather in Telegram, send /newbot or /mybots, then API Token). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `telegram_get_me` | read | Get the bot |
| `telegram_get_chat` | read | Get a chat |
| `telegram_get_chat_member_count` | read | Count chat members |
| `telegram_get_chat_member` | read | Get a chat member |
| `telegram_get_chat_administrators` | read | List chat administrators |
| `telegram_get_updates` | **write** | Get pending updates |
| `telegram_send_message` | **write** | Send a message |
| `telegram_edit_message_text` | **write** | Edit a message |
| `telegram_delete_message` | **write** | Delete a message |
| `telegram_usage_status` | meta | Usage status (free-tier meter) |
| `telegram_request_feature` | meta | Request a missing feature |
| `telegram_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `telegram_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `telegram_upgrade` (it returns a Stripe Checkout link). Cancel any time with `telegram_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `telegram_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
