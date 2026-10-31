# TextUs MCP by usefulapi

Use your [TextUs](https://www.textus.com) account from Claude, Cursor, or any MCP client. Read conversations, contacts and campaigns, and send texts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://textus.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://textus.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http textus https://textus.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=textus&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftextus.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "textus": {
      "url": "https://textus.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TextUs credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/textus/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **TextUs API token** (TextUs → Profile → Advanced user settings → API Tokens). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `textus_get_profile` | read | Get my profile |
| `textus_list_accounts` | read | List accounts |
| `textus_get_account` | read | Get an account |
| `textus_list_account_users` | read | List account users |
| `textus_list_contacts` | read | List or search contacts |
| `textus_list_contact_filters` | read | List contact filters |
| `textus_get_contact` | read | Get a contact |
| `textus_list_contact_notes` | read | List contact notes |
| `textus_list_conversation_filters` | read | List conversation filters |
| `textus_list_conversations` | read | List or search conversations |
| `textus_get_conversation` | read | Get a conversation |
| `textus_get_conversation_timeline` | read | Get conversation timeline |
| `textus_get_conversation_stats` | read | Get conversation stats |
| `textus_list_campaign_filters` | read | List campaign filters |
| `textus_list_campaigns` | read | List campaigns |
| `textus_get_campaign` | read | Get a campaign |
| `textus_get_campaign_analytics` | read | Get campaign analytics |
| `textus_list_groups` | read | List groups |
| `textus_list_group_contacts` | read | List group contacts |
| `textus_list_opt_outs` | read | List opt-outs |
| `textus_list_saved_replies` | read | List saved replies |
| `textus_send_message` | **write** | Send a text message |
| `textus_create_contact` | **write** | Create a contact |
| `textus_add_contact_note` | **write** | Add a contact note |
| `textus_usage_status` | meta | Usage status (free-tier meter) |
| `textus_request_feature` | meta | Request a missing feature |
| `textus_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `textus_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `textus_upgrade` (it returns a Stripe Checkout link). Cancel any time with `textus_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `textus_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
