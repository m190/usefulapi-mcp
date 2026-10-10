# eDesk MCP by usefulapi

Use [eDesk](https://www.edesk.com) from Claude, Cursor, or any MCP client — tickets, replies, notes, contacts, templates and sales orders.
Hosted, no local install: connect with your own eDesk credentials.

**Live endpoint:** `https://edesk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/edesk

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://edesk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http edesk https://edesk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=edesk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fedesk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "edesk": {
      "url": "https://edesk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your eDesk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/edesk/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `edesk_whoami` | read | Who am I |
| `edesk_list_users` | read | List users (agents) |
| `edesk_list_channels` | read | List channels |
| `edesk_list_tag_groups` | read | List tag groups |
| `edesk_list_tags` | read | List tags |
| `edesk_list_templates` | read | List reply templates |
| `edesk_get_template` | read | Get reply template |
| `edesk_list_tickets` | read | List tickets |
| `edesk_get_ticket` | read | Get ticket |
| `edesk_get_message` | read | Get message |
| `edesk_list_contacts` | read | List contacts |
| `edesk_list_sales_orders` | read | List sales orders |
| `edesk_get_sales_order` | read | Get sales order |
| `edesk_list_order_notes` | read | List order notes |
| `edesk_update_ticket` | **write** | Update ticket |
| `edesk_add_ticket_note` | **write** | Add internal ticket note |
| `edesk_reply_to_ticket` | **write** | Reply to customer |
| `edesk_add_order_note` | **write** | Add order note |
| `edesk_usage_status` | meta | Usage status (free-tier meter) |
| `edesk_request_feature` | meta | Request a missing feature |
| `edesk_upgrade` | meta | Upgrade to Pro (unlimited) |
| `edesk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `edesk_upgrade` (it returns a Stripe Checkout link). Cancel any time with `edesk_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `edesk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by eDesk.
