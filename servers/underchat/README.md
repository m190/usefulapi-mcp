# UnderChat MCP by usefulapi

Use your UnderChat account from Claude, Cursor, or any MCP client. Read and act on WhatsApp chats, contacts, sectors and users: send texts, transfer chats and set labels. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://underchat.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://underchat.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http underchat https://underchat.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=underchat&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Funderchat.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "underchat": {
      "url": "https://underchat.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your UnderChat credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/underchat/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **UnderChat API token** (Integração → API pública → Gerar token in UnderChat) and an **active user id** (the UUID of an active user in your account). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `underchat_list_chats` | read | List chats |
| `underchat_search_chats` | read | Search chats |
| `underchat_get_chat_messages` | read | Get chat messages |
| `underchat_search_chat_messages` | read | Search messages in a chat |
| `underchat_get_chat_details` | read | Get chat details |
| `underchat_get_unread_summary` | read | Get unread summary |
| `underchat_list_channels` | read | List channels |
| `underchat_list_workers` | read | List workers |
| `underchat_list_contacts` | read | List contacts |
| `underchat_get_contact` | read | Get a contact |
| `underchat_find_contact_by_phone` | read | Find a contact by phone |
| `underchat_list_label_templates` | read | List label templates |
| `underchat_list_sectors` | read | List sectors |
| `underchat_list_users` | read | List users |
| `underchat_get_user` | read | Get a user |
| `underchat_send_text_message` | **write** | Send a text message |
| `underchat_update_chat_status` | **write** | Change a chat status |
| `underchat_transfer_chat` | **write** | Transfer a chat |
| `underchat_set_chat_labels` | **write** | Set chat labels |
| `underchat_create_contact` | **write** | Create a contact |
| `underchat_update_contact` | **write** | Update a contact |
| `underchat_usage_status` | meta | Usage status (free-tier meter) |
| `underchat_request_feature` | meta | Request a missing feature |
| `underchat_upgrade` | meta | Upgrade to Pro or Pro+ |
| `underchat_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `underchat_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `underchat_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `underchat_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
