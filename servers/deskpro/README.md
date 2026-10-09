# Deskpro MCP by usefulapi

Use [Deskpro](https://www.deskpro.com) from Claude, Cursor, or any MCP client — search tickets, people, organizations and knowledgebase articles, and create tickets and replies.
Hosted, no local install: connect with your own Deskpro credentials.

**Live endpoint:** `https://deskpro.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/deskpro

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://deskpro.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http deskpro https://deskpro.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=deskpro&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdeskpro.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "deskpro": {
      "url": "https://deskpro.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Deskpro credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/deskpro/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Deskpro helpdesk URL** (subdomain or full https address) and an **API key** (Admin → Apps & Integrations → API Keys, `id:code` format).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `deskpro_get_me` | read | Get the authenticated agent |
| `deskpro_list_tickets` | read | List tickets |
| `deskpro_get_ticket` | read | Get one ticket |
| `deskpro_list_ticket_messages` | read | List a ticket's messages |
| `deskpro_list_people` | read | List people |
| `deskpro_get_person` | read | Get one person |
| `deskpro_list_person_tickets` | read | List a person's tickets |
| `deskpro_list_organizations` | read | List organizations |
| `deskpro_get_organization` | read | Get one organization |
| `deskpro_list_organization_tickets` | read | List an organization's tickets |
| `deskpro_list_articles` | read | List knowledgebase articles |
| `deskpro_get_article` | read | Get one article |
| `deskpro_list_departments` | read | List ticket departments |
| `deskpro_list_agents` | read | List agents |
| `deskpro_list_ticket_statuses` | read | List ticket statuses |
| `deskpro_search` | read | Search the helpdesk |
| `deskpro_create_ticket` | **write** | Create a ticket |
| `deskpro_update_ticket` | **write** | Update a ticket |
| `deskpro_add_ticket_message` | **write** | Reply to a ticket or add a note |
| `deskpro_create_organization` | **write** | Create an organization |
| `deskpro_usage_status` | meta | Usage status (free-tier meter) |
| `deskpro_upgrade` | meta | Upgrade to Pro (unlimited) |
| `deskpro_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `deskpro_upgrade` (it returns a Stripe Checkout link). Cancel any time with `deskpro_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `deskpro_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Deskpro.
