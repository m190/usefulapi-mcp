# Channel Talk MCP by usefulapi

Use your [Channel Talk](https://channel.io) account from Claude, Cursor, or any MCP client. Read customer chats, messages, managers, groups and users, and send a reply, assign, unassign or close a chat. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://channel-talk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://channel-talk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http channel-talk https://channel-talk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=channel-talk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fchannel-talk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "channel-talk": {
      "url": "https://channel-talk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Channel Talk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/channel-talk/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Channel Talk access key** and **access secret** (Settings → API key management; the secret is shown once). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `channeltalk_get_channel` | read | Get the channel |
| `channeltalk_list_user_chats` | read | List user chats |
| `channeltalk_get_user_chat` | read | Get a user chat |
| `channeltalk_list_user_chat_messages` | read | List messages in a user chat |
| `channeltalk_get_message_file_url` | read | Get a message file download URL |
| `channeltalk_list_managers` | read | List managers |
| `channeltalk_get_manager` | read | Get a manager |
| `channeltalk_list_groups` | read | List groups |
| `channeltalk_get_group` | read | Get a group |
| `channeltalk_get_user` | read | Get a user |
| `channeltalk_get_user_by_member_id` | read | Get a user by member id |
| `channeltalk_list_chat_tags` | read | List chat tags |
| `channeltalk_send_message` | **write** | Send a message in a user chat |
| `channeltalk_assign_user_chat` | **write** | Assign a user chat to a manager |
| `channeltalk_unassign_user_chat` | **write** | Unassign a user chat |
| `channeltalk_close_user_chat` | **write** | Close a user chat |
| `channeltalk_usage_status` | meta | Usage status (free-tier meter) |
| `channeltalk_request_feature` | meta | Request a missing feature |
| `channeltalk_upgrade` | meta | Upgrade to Pro or Pro+ |
| `channeltalk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `channeltalk_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `channeltalk_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `channeltalk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
