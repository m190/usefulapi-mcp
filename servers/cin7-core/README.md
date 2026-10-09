# Cin7 Core MCP by usefulapi

Use [Cin7 Core](https://www.cin7.com) from Claude, Cursor, or any MCP client — read Cin7 Core products, stock by location, sales, purchases, customers, suppliers and transfers.
Hosted, no local install: connect with your own Cin7 Core credentials.

**Live endpoint:** `https://cin7-core.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/cin7-core

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cin7-core.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cin7-core https://cin7-core.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cin7-core&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcin7-core.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cin7-core": {
      "url": "https://cin7-core.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Cin7 Core credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cin7-core/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Cin7 Core Account ID and API Application key**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cin7core_get_company` | read | Get company |
| `cin7core_list_locations` | read | List locations |
| `cin7core_list_products` | read | List products |
| `cin7core_get_product` | read | Get product |
| `cin7core_get_stock_availability` | read | Get stock availability |
| `cin7core_list_customers` | read | List customers |
| `cin7core_get_customer` | read | Get customer |
| `cin7core_list_suppliers` | read | List suppliers |
| `cin7core_get_supplier` | read | Get supplier |
| `cin7core_list_sales` | read | List sales |
| `cin7core_get_sale` | read | Get sale |
| `cin7core_list_purchases` | read | List purchases |
| `cin7core_get_purchase` | read | Get purchase |
| `cin7core_list_stock_adjustments` | read | List stock adjustments |
| `cin7core_get_stock_adjustment` | read | Get stock adjustment |
| `cin7core_list_stock_transfers` | read | List stock transfers |
| `cin7core_get_stock_transfer` | read | Get stock transfer |
| `cin7core_usage_status` | meta | Usage status (free-tier meter) |
| `cin7core_upgrade` | meta | Upgrade to Pro (unlimited) |
| `cin7core_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per Cin7 account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `cin7core_upgrade` (it returns a Stripe Checkout link). Cancel any time with `cin7core_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `cin7core_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Cin7 Core.
