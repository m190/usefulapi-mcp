# Helpwise MCP by usefulapi

Use [Helpwise](https://helpwise.io) from Claude, Cursor, or any MCP client — shared-inbox conversations, contacts, tags, inboxes and reports, plus triage and a single e-mail send.
Hosted, no local install: connect with your own Helpwise credentials.

**Live endpoint:** `https://helpwise.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/helpwise

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://helpwise.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http helpwise https://helpwise.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=helpwise&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhelpwise.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "helpwise": {
      "url": "https://helpwise.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Helpwise credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/helpwise/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `helpwise_list_conversations` | read | List conversations |
| `helpwise_get_conversation` | read | Get conversation |
| `helpwise_list_contacts` | read | List contacts |
| `helpwise_search_contacts` | read | Search contacts |
| `helpwise_get_contact` | read | Get contact |
| `helpwise_list_tags` | read | List tags |
| `helpwise_get_tag` | read | Get tag |
| `helpwise_get_report` | read | Overall report |
| `helpwise_get_tags_report` | read | Tags report |
| `helpwise_list_inboxes` | read | List inboxes |
| `helpwise_list_users` | read | List users |
| `helpwise_get_current_user` | read | Get current user |
| `helpwise_create_contact` | **write** | Create contact |
| `helpwise_update_contact` | **write** | Update contact |
| `helpwise_add_note` | **write** | Add note |
| `helpwise_assign_conversation` | **write** | Assign conversation |
| `helpwise_close_conversations` | **write** | Close conversations |
| `helpwise_reopen_conversations` | **write** | Reopen conversations |
| `helpwise_apply_tags` | **write** | Apply tags |
| `helpwise_remove_tags` | **write** | Remove tags from conversations |
| `helpwise_send_email` | **write** | Send email |
| `helpwise_usage_status` | meta | Usage status (free-tier meter) |
| `helpwise_request_feature` | meta | Request a missing feature |
| `helpwise_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `helpwise_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `helpwise_upgrade` (it returns a Stripe Checkout link). Cancel any time with `helpwise_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `helpwise_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Helpwise.
