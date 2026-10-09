# Freshdesk MCP by usefulapi

Use your [Freshdesk](https://freshdesk.com) account from Claude, Cursor, or any MCP client — read tickets, contacts, companies, agents and groups, and create, update or reply to tickets. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://freshdesk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://freshdesk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http freshdesk https://freshdesk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=freshdesk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffreshdesk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "freshdesk": {
      "url": "https://freshdesk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Freshdesk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/freshdesk/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Freshdesk domain** and **API key** (Profile settings). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `freshdesk_list_tickets` | read | List tickets |
| `freshdesk_get_ticket` | read | Get ticket |
| `freshdesk_search_tickets` | read | Search tickets |
| `freshdesk_list_ticket_conversations` | read | List ticket conversations |
| `freshdesk_list_contacts` | read | List contacts |
| `freshdesk_get_contact` | read | Get contact |
| `freshdesk_search_contacts` | read | Search contacts |
| `freshdesk_list_companies` | read | List companies |
| `freshdesk_get_company` | read | Get company |
| `freshdesk_list_agents` | read | List agents |
| `freshdesk_get_agent` | read | Get agent |
| `freshdesk_list_groups` | read | List groups |
| `freshdesk_create_ticket` | **write** | Create ticket |
| `freshdesk_update_ticket` | **write** | Update ticket |
| `freshdesk_reply_ticket` | **write** | Reply to ticket |
| `freshdesk_add_note` | **write** | Add note to ticket |
| `freshdesk_create_contact` | **write** | Create contact |
| `freshdesk_update_contact` | **write** | Update contact |
| `freshdesk_create_company` | **write** | Create company |
| `freshdesk_usage_status` | meta | Usage status (free-tier meter) |
| `freshdesk_upgrade` | meta | Upgrade to Pro (unlimited) |
| `freshdesk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `freshdesk_upgrade` (it returns a Stripe Checkout link). Cancel any time with `freshdesk_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `freshdesk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
