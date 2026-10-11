# MailBluster MCP by usefulapi

Use [MailBluster](https://mailbluster.com) from Claude, Cursor, or any MCP client — look up and add leads, custom fields, products and orders for your e-commerce email marketing.
Hosted, no local install: connect with your own MailBluster credentials.

**Live endpoint:** `https://mailbluster.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/mailbluster

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mailbluster.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mailbluster https://mailbluster.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mailbluster&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmailbluster.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mailbluster": {
      "url": "https://mailbluster.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MailBluster credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mailbluster/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mailbluster_list_fields` | read | List custom lead fields |
| `mailbluster_create_field` | **write** | Create custom lead field |
| `mailbluster_get_lead` | read | Get lead |
| `mailbluster_create_lead` | **write** | Create lead |
| `mailbluster_update_lead` | **write** | Update lead |
| `mailbluster_list_products` | read | List products |
| `mailbluster_get_product` | read | Get product |
| `mailbluster_create_product` | **write** | Create product |
| `mailbluster_update_product` | **write** | Update product |
| `mailbluster_list_orders` | read | List orders |
| `mailbluster_get_order` | read | Get order |
| `mailbluster_create_order` | **write** | Create order record |
| `mailbluster_update_order` | **write** | Update order record |
| `mailbluster_usage_status` | meta | Usage status (free-tier meter) |
| `mailbluster_request_feature` | meta | Request a missing feature |
| `mailbluster_upgrade` | meta | Upgrade to Pro (unlimited) |
| `mailbluster_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `mailbluster_upgrade` (it returns a Stripe Checkout link). Cancel any time with `mailbluster_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `mailbluster_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by MailBluster.
