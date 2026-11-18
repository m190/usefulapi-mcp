# DoubleTick MCP by usefulapi

Use your [DoubleTick](https://doubletick.io) account from Claude, Cursor, or any MCP client. It reads WhatsApp chats, messages, customers, templates and delivery status. It sends WhatsApp texts or templates and tags customers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://doubletick.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://doubletick.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http doubletick https://doubletick.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=doubletick&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdoubletick.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "doubletick": {
      "url": "https://doubletick.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your DoubleTick credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/doubletick/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **DoubleTick API key** (Developer Documentation in the DoubleTick dashboard). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `doubletick_list_channels` | read | List WhatsApp channels |
| `doubletick_list_chats` | read | List chats (inbox) |
| `doubletick_get_chat_messages` | read | Get chat messages |
| `doubletick_get_message_status` | read | Get message status |
| `doubletick_get_customer` | read | Get customer details |
| `doubletick_get_chat_window_status` | read | Get 24-hour window status |
| `doubletick_list_templates` | read | List WhatsApp templates |
| `doubletick_get_wallet_balance` | read | Get wallet balance |
| `doubletick_list_team` | read | List team members |
| `doubletick_send_text` | **write** | Send WhatsApp text |
| `doubletick_send_template` | **write** | Send WhatsApp template |
| `doubletick_assign_customer_tags` | **write** | Assign tags and custom fields |
| `doubletick_usage_status` | meta | Usage status (free-tier meter) |
| `doubletick_request_feature` | meta | Request a missing feature |
| `doubletick_upgrade` | meta | Upgrade to Pro or Pro+ |
| `doubletick_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `doubletick_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `doubletick_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `doubletick_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
