# TicketSpice MCP by usefulapi

**Live endpoint:** `https://ticketspice.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/ticketspice

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ticketspice.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ticketspice https://ticketspice.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ticketspice&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fticketspice.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ticketspice": {
      "url": "https://ticketspice.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TicketSpice credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ticketspice/

<!-- connect:end (generated above, edit below) -->

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TicketSpice credentials.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ticketspice_list_forms` | read | List events |
| `ticketspice_get_form` | read | Get event |
| `ticketspice_get_form_inventory` | read | Get form inventory |
| `ticketspice_list_orders` | read | List orders |
| `ticketspice_get_order` | read | Get order |
| `ticketspice_list_transactions` | read | List transactions |
| `ticketspice_get_transaction` | read | Get transaction |
| `ticketspice_list_tickets` | read | List tickets |
| `ticketspice_get_ticket` | read | Get ticket |
| `ticketspice_list_customers` | read | List customers |
| `ticketspice_get_customer` | read | Get customer |
| `ticketspice_list_coupons` | read | List coupons |
| `ticketspice_get_coupon` | read | Get coupon |
| `ticketspice_create_coupon` | **write** | Create coupon |
| `ticketspice_delete_coupon` | **write** | Delete coupon |
| `ticketspice_usage_status` | meta | Usage status (free-tier meter) |
| `ticketspice_request_feature` | meta | Request a missing feature |
| `ticketspice_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `ticketspice_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `ticketspice_upgrade` (it returns a Stripe Checkout link). Cancel any time with `ticketspice_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `ticketspice_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
