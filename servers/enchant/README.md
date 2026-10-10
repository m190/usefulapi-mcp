# Enchant MCP by usefulapi

Use [Enchant](https://www.enchant.com) from Claude, Cursor, or any MCP client — tickets, replies, notes, labels and customers.
Hosted, no local install: connect with your own Enchant credentials.

**Live endpoint:** `https://enchant.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/enchant

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://enchant.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http enchant https://enchant.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=enchant&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fenchant.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "enchant": {
      "url": "https://enchant.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Enchant credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/enchant/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `enchant_list_tickets` | read | List tickets |
| `enchant_get_ticket` | read | Get ticket |
| `enchant_list_users` | read | List users (agents) |
| `enchant_list_customers` | read | List customers |
| `enchant_get_customer` | read | Get customer |
| `enchant_get_attachment` | read | Get attachment |
| `enchant_create_ticket` | **write** | Create ticket |
| `enchant_update_ticket` | **write** | Update ticket |
| `enchant_add_ticket_labels` | **write** | Add labels to ticket |
| `enchant_remove_ticket_labels` | **write** | Remove labels from ticket |
| `enchant_reply_to_ticket` | **write** | Reply to customer |
| `enchant_add_note` | **write** | Add internal note |
| `enchant_create_customer` | **write** | Create customer |
| `enchant_update_customer` | **write** | Update customer |
| `enchant_add_customer_contact` | **write** | Add customer contact |
| `enchant_delete_customer_contact` | **write** | Delete customer contact |
| `enchant_usage_status` | meta | Usage status (free-tier meter) |
| `enchant_request_feature` | meta | Request a missing feature |
| `enchant_upgrade` | meta | Upgrade to Pro (unlimited) |
| `enchant_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `enchant_upgrade` (it returns a Stripe Checkout link). Cancel any time with `enchant_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `enchant_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Enchant.
