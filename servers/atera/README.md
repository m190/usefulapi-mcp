# Atera MCP by usefulapi

Use [Atera](https://www.atera.com) from Claude, Cursor, or any MCP client — look up managed devices, monitoring alerts, tickets, customers and contracts, and open, update or comment on tickets.
Hosted, no local install: connect with your own Atera credentials.

**Live endpoint:** `https://atera.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/atera

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://atera.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http atera https://atera.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=atera&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fatera.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "atera": {
      "url": "https://atera.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Atera credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/atera/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Atera API key** (Admin → Data management → API; legacy key or JWT, paid Atera plan required).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `atera_get_account` | read | Get the account |
| `atera_list_customers` | read | List customers |
| `atera_get_customer` | read | Get one customer |
| `atera_list_agents` | read | List agents (devices) |
| `atera_get_agent` | read | Get one agent (device) |
| `atera_find_agents_by_machine` | read | Find agents by machine name |
| `atera_get_agent_patches` | read | Get an agent's patches |
| `atera_list_alerts` | read | List alerts |
| `atera_list_tickets` | read | List tickets |
| `atera_get_ticket` | read | Get one ticket |
| `atera_list_ticket_comments` | read | List a ticket's comments |
| `atera_list_ticket_work_hours` | read | List a ticket's work hours |
| `atera_list_contacts` | read | List contacts |
| `atera_list_contracts` | read | List contracts |
| `atera_list_kb_articles` | read | List knowledge-base articles |
| `atera_create_ticket` | **write** | Create a ticket |
| `atera_update_ticket` | **write** | Update a ticket |
| `atera_add_ticket_comment` | **write** | Comment on a ticket |
| `atera_create_contact` | **write** | Create a contact |
| `atera_resolve_alert` | **write** | Resolve an alert |
| `atera_usage_status` | meta | Usage status (free-tier meter) |
| `atera_request_feature` | meta | Request a missing feature |
| `atera_upgrade` | meta | Upgrade to Pro or Pro+ |
| `atera_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `atera_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `atera_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `atera_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Atera.
