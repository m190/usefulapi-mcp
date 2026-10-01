# Atera MCP by usefulapi

Use [Atera](https://www.atera.com) from Claude, Cursor, or any MCP client — look up managed devices, monitoring alerts, tickets, customers and contracts, and open, update or comment on tickets.
Hosted, no local install: connect with your own Atera credentials.

**Live endpoint:** `https://atera.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/atera

## Add to Claude

```json
{
  "mcpServers": {
    "atera": {
      "url": "https://atera.usefulapi.io/mcp"
    }
  }
}
```

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
| `atera_upgrade` | meta | Upgrade to Pro (unlimited) |
| `atera_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `atera_upgrade` (it returns a Stripe Checkout link). Cancel any time with `atera_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `atera_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Atera.
