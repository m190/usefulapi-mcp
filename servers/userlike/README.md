# Userlike MCP by usefulapi

Use your [Userlike](https://www.userlike.com) account from Claude, Cursor, or any MCP client. Read conversations, messages, contacts, notes and operators, and add notes, update contacts or set operators away. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://userlike.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://userlike.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http userlike https://userlike.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=userlike&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fuserlike.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "userlike": {
      "url": "https://userlike.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Userlike credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/userlike/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Userlike API token** (Dashboard → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `userlike_list_conversations` | read | List conversations |
| `userlike_get_conversation` | read | Get conversation |
| `userlike_list_conversation_messages` | read | List conversation messages |
| `userlike_list_contacts` | read | List contacts |
| `userlike_get_contact` | read | Get contact |
| `userlike_update_contact` | **write** | Update contact |
| `userlike_list_notes` | read | List notes |
| `userlike_get_note` | read | Get note |
| `userlike_create_note` | **write** | Create note |
| `userlike_list_operators` | read | List operators |
| `userlike_get_operator` | read | Get operator |
| `userlike_get_operator_slots` | read | Get operator slots |
| `userlike_set_operator_away` | **write** | Set operator away status |
| `userlike_usage_status` | meta | Usage status (free-tier meter) |
| `userlike_request_feature` | meta | Request a missing feature |
| `userlike_upgrade` | meta | Upgrade to Pro or Pro+ |
| `userlike_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `userlike_upgrade` (it returns a Stripe Checkout link). Cancel any time with `userlike_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `userlike_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
