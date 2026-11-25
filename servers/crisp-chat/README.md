# Crisp MCP by usefulapi

Use your [Crisp](https://crisp.chat) account from Claude, Cursor, or any MCP client. Read conversations, visitor details, messages and operators, and send replies or notes and set conversation states. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://crisp-chat.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://crisp-chat.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http crisp-chat https://crisp-chat.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=crisp-chat&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcrisp-chat.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "crisp-chat": {
      "url": "https://crisp-chat.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Crisp credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/crisp-chat/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **website token identifier**, the **website token key** and the **website ID**, a UUID. Create the token in Crisp under **Settings → Workspace Settings → Advanced configuration**. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `crisp_get_website` | read | Get website |
| `crisp_list_operators` | read | List operators |
| `crisp_list_conversations` | read | List conversations |
| `crisp_get_conversation` | read | Get conversation |
| `crisp_get_conversation_meta` | read | Get conversation contact details |
| `crisp_list_messages` | read | List messages |
| `crisp_send_message` | **write** | Send operator message |
| `crisp_set_conversation_state` | **write** | Set conversation state |
| `crisp_usage_status` | meta | Usage status (free-tier meter) |
| `crisp_request_feature` | meta | Request a missing feature |
| `crisp_upgrade` | meta | Upgrade to Pro or Pro+ |
| `crisp_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `crisp_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `crisp_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `crisp_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
