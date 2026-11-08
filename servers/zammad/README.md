# Zammad MCP by usefulapi

Use [Zammad](https://zammad.com) from Claude, Cursor, or any MCP client — search and read tickets and their articles, look up customers and organizations, plus four labeled writes: an internal note, one e-mail reply, a ticket update and a new ticket.
Hosted, no local install: connect with your own Zammad address (Zammad Cloud or self-hosted) and a personal access token.

**Live endpoint:** `https://zammad.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/zammad

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zammad.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zammad https://zammad.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zammad&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzammad.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zammad": {
      "url": "https://zammad.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zammad credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zammad/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zammad_get_me` | read | Get current user |
| `zammad_search_tickets` | read | Search tickets |
| `zammad_list_tickets` | read | List tickets |
| `zammad_get_ticket` | read | Get ticket |
| `zammad_list_ticket_articles` | read | List ticket articles |
| `zammad_get_ticket_article` | read | Get ticket article |
| `zammad_list_ticket_tags` | read | List ticket tags |
| `zammad_list_ticket_states` | read | List ticket states |
| `zammad_list_ticket_priorities` | read | List ticket priorities |
| `zammad_list_groups` | read | List groups |
| `zammad_search_users` | read | Search users |
| `zammad_get_user` | read | Get user |
| `zammad_search_organizations` | read | Search organizations |
| `zammad_list_organizations` | read | List organizations |
| `zammad_get_organization` | read | Get organization |
| `zammad_add_internal_note` | **write** | Add internal note |
| `zammad_reply_to_ticket` | **write** | Reply to ticket (e-mails the customer) |
| `zammad_update_ticket` | **write** | Update ticket |
| `zammad_create_ticket` | **write** | Create ticket |
| `zammad_usage_status` | meta | Usage status (free-tier meter) |
| `zammad_request_feature` | meta | Request a missing feature |
| `zammad_upgrade` | meta | Upgrade to Pro or Pro+ |
| `zammad_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `zammad_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `zammad_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `zammad_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Zammad.
