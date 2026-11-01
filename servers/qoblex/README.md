# Qoblex MCP by usefulapi

Use your [Qoblex](https://qoblex.com) account from Claude, Cursor, or any MCP client. Read products, stock levels, sale and purchase orders, customers and suppliers, without changes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://qoblex.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://qoblex.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http qoblex https://qoblex.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=qoblex&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fqoblex.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "qoblex": {
      "url": "https://qoblex.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Qoblex credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/qoblex/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Qoblex API key** (Account Settings → API Access). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `qoblex_get_current_user` | read | Get the current user |
| `qoblex_get_account` | read | Get account details |
| `qoblex_list_products` | read | List products |
| `qoblex_get_product` | read | Get a product |
| `qoblex_list_variants` | read | List product variants |
| `qoblex_get_variant_inventory` | read | Get variant inventory |
| `qoblex_list_sale_orders` | read | List sale orders |
| `qoblex_get_sale_order` | read | Get a sale order |
| `qoblex_list_purchase_orders` | read | List purchase orders |
| `qoblex_get_purchase_order` | read | Get a purchase order |
| `qoblex_list_customers` | read | List customers |
| `qoblex_get_customer` | read | Get a customer |
| `qoblex_list_suppliers` | read | List suppliers |
| `qoblex_get_supplier` | read | Get a supplier |
| `qoblex_usage_status` | meta | Usage status (free-tier meter) |
| `qoblex_request_feature` | meta | Request a missing feature |
| `qoblex_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `qoblex_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `qoblex_upgrade` (it returns a Stripe Checkout link). Cancel any time with `qoblex_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `qoblex_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
