# Extensiv MCP by usefulapi

Read Extensiv warehouse records, create outbound orders and cancel eligible orders.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://extensiv.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http extensiv https://extensiv.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=extensiv&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fextensiv.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "extensiv": {
      "url": "https://extensiv.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Extensiv credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/extensiv/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `extensiv_list_facilities` | read | List facilities |
| `extensiv_list_carriers` | read | List carriers and services |
| `extensiv_list_customers` | read | List customers |
| `extensiv_get_customer` | read | Get a customer |
| `extensiv_list_items` | read | List a customer's items |
| `extensiv_list_orders` | read | List orders |
| `extensiv_get_order` | read | Get an order |
| `extensiv_list_stock_summaries` | read | List stock summaries |
| `extensiv_list_inventory` | read | List inventory details |
| `extensiv_list_stock_details` | read | List stock details |
| `extensiv_list_receivers` | read | List receivers |
| `extensiv_get_receiver` | read | Get a receiver |
| `extensiv_list_receiver_items` | read | List a receiver's items |
| `extensiv_list_purchase_orders` | read | List purchase orders |
| `extensiv_create_order` | **write** | Create an order |
| `extensiv_cancel_order` | **write** | Cancel an order |
| `extensiv_usage_status` | meta | Usage status (free-tier meter) |
| `extensiv_request_feature` | meta | Request a missing feature |
| `extensiv_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `extensiv_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per warehouse API user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `extensiv_upgrade` (it returns a Stripe Checkout link). Cancel any time with `extensiv_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `extensiv_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
