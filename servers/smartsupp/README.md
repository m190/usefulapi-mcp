# Smartsupp MCP by usefulapi

Use your [Smartsupp](https://www.smartsupp.com) account from Claude, Cursor, or any MCP client. Read chats, contacts and statistics, reply to customers, add internal notes, and assign, close or tag chats. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://smartsupp.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://smartsupp.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http smartsupp https://smartsupp.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=smartsupp&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsmartsupp.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "smartsupp": {
      "url": "https://smartsupp.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Smartsupp credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/smartsupp/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Smartsupp API token** (Settings → API tokens in Smartsupp). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smartsupp_list_agents` | read | List agents |
| `smartsupp_get_agent` | read | Get agent |
| `smartsupp_search_conversations` | read | Search conversations |
| `smartsupp_find_conversation` | read | Find conversation by external id |
| `smartsupp_get_conversation` | read | Get conversation |
| `smartsupp_list_conversation_messages` | read | List conversation messages |
| `smartsupp_find_contact` | read | Find contact by email |
| `smartsupp_get_contact` | read | Get contact |
| `smartsupp_get_visitor` | read | Get visitor |
| `smartsupp_list_tags` | read | List tags |
| `smartsupp_get_statistics` | read | Get statistics |
| `smartsupp_get_office_hours` | read | Get office hours |
| `smartsupp_reply_to_conversation` | **write** | Reply to conversation |
| `smartsupp_add_internal_note` | **write** | Add internal note |
| `smartsupp_assign_conversation` | **write** | Assign conversation |
| `smartsupp_close_conversation` | **write** | Close conversation |
| `smartsupp_tag_conversation` | **write** | Tag conversation |
| `smartsupp_usage_status` | meta | Usage status (free-tier meter) |
| `smartsupp_request_feature` | meta | Request a missing feature |
| `smartsupp_upgrade` | meta | Upgrade to Pro or Pro+ |
| `smartsupp_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `smartsupp_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `smartsupp_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `smartsupp_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
