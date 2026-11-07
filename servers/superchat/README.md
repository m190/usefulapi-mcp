# Superchat MCP by usefulapi

Use your [Superchat](https://www.superchat.com) account from Claude, Cursor, or any MCP client. Read-only access to conversations, messages, contacts, channels and templates in your workspace. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://superchat.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://superchat.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http superchat https://superchat.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=superchat&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsuperchat.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "superchat": {
      "url": "https://superchat.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Superchat credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/superchat/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **admin API token** from Superchat → Settings → API, which only workspace administrators can see. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `superchat_get_me` | read | Get the current user |
| `superchat_list_conversations` | read | List conversations |
| `superchat_get_conversation` | read | Get a conversation |
| `superchat_list_conversation_messages` | read | List messages in a conversation |
| `superchat_get_message` | read | Get a message |
| `superchat_list_contacts` | read | List contacts |
| `superchat_get_contact` | read | Get a contact |
| `superchat_list_contact_conversations` | read | List a contact's conversations |
| `superchat_list_contact_lists` | read | List contact lists |
| `superchat_list_channels` | read | List channels |
| `superchat_get_channel` | read | Get a channel |
| `superchat_list_inboxes` | read | List inboxes |
| `superchat_list_users` | read | List users |
| `superchat_list_labels` | read | List labels |
| `superchat_list_custom_attributes` | read | List custom attributes |
| `superchat_list_templates` | read | List message templates |
| `superchat_usage_status` | meta | Usage status (free-tier meter) |
| `superchat_request_feature` | meta | Request a missing feature |
| `superchat_upgrade` | meta | Upgrade to Pro or Pro+ |
| `superchat_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `superchat_upgrade` (it returns a Stripe Checkout link). Cancel any time with `superchat_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `superchat_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
