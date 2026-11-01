# Chatwoot MCP by usefulapi

Use your [Chatwoot](https://www.chatwoot.com) account from Claude, Cursor, or any MCP client. Read conversations, contacts and inboxes, add replies or private notes, set status or priority, and assign conversations. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://chatwoot.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://chatwoot.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http chatwoot https://chatwoot.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=chatwoot&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fchatwoot.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "chatwoot": {
      "url": "https://chatwoot.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Chatwoot credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/chatwoot/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Chatwoot access token** (Profile Settings → Access Token) and your **Account ID** (the number after `/app/accounts/` in your Chatwoot URL). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `chatwoot_get_account` | read | Get account |
| `chatwoot_list_conversations` | read | List conversations |
| `chatwoot_get_conversation_counts` | read | Get conversation counts |
| `chatwoot_get_conversation` | read | Get conversation |
| `chatwoot_list_messages` | read | List messages |
| `chatwoot_list_contacts` | read | List contacts |
| `chatwoot_search_contacts` | read | Search contacts |
| `chatwoot_get_contact` | read | Get contact |
| `chatwoot_list_contact_conversations` | read | List contact conversations |
| `chatwoot_list_labels` | read | List labels |
| `chatwoot_list_inboxes` | read | List inboxes |
| `chatwoot_list_agents` | read | List agents |
| `chatwoot_list_teams` | read | List teams |
| `chatwoot_list_canned_responses` | read | List canned responses |
| `chatwoot_send_message` | **write** | Send message or private note |
| `chatwoot_set_conversation_status` | **write** | Set conversation status |
| `chatwoot_set_conversation_priority` | **write** | Set conversation priority |
| `chatwoot_assign_conversation` | **write** | Assign conversation |
| `chatwoot_usage_status` | meta | Usage status (free-tier meter) |
| `chatwoot_request_feature` | meta | Request a missing feature |
| `chatwoot_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `chatwoot_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `chatwoot_upgrade` (it returns a Stripe Checkout link). Cancel any time with `chatwoot_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `chatwoot_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
