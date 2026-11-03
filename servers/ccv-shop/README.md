# CCV Shop MCP by usefulapi

Use your [CCV Shop](https://ccvshop.nl) account from Claude, Cursor, or any MCP client. It reads products, orders, order lines, customers, invoices, categories, brands and suppliers, and it can add an internal note to an order. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ccv-shop.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ccv-shop.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ccv-shop https://ccv-shop.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ccv-shop&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fccv-shop.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ccv-shop": {
      "url": "https://ccv-shop.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CCV Shop credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ccv-shop/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **CCV Shop shop name**, **API key** and **API secret** (in CCV Shop under My web shop, Settings, API settings; the shop name is the part before .ccvshop.nl). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ccvshop_list_products` | read | List products |
| `ccvshop_get_product` | read | Get a product |
| `ccvshop_list_orders` | read | List orders |
| `ccvshop_get_order` | read | Get an order |
| `ccvshop_list_order_rows` | read | List order rows |
| `ccvshop_add_order_note` | **write** | Add an internal order note |
| `ccvshop_list_categories` | read | List categories |
| `ccvshop_list_brands` | read | List brands |
| `ccvshop_list_suppliers` | read | List suppliers |
| `ccvshop_list_invoices` | read | List invoices |
| `ccvshop_get_invoice` | read | Get an invoice |
| `ccvshop_list_users` | read | List customers |
| `ccvshop_get_user` | read | Get a customer |
| `ccvshop_usage_status` | meta | Usage status (free-tier meter) |
| `ccvshop_request_feature` | meta | Request a missing feature |
| `ccvshop_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ccvshop_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `ccvshop_upgrade` (it returns a Stripe Checkout link). Cancel any time with `ccvshop_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `ccvshop_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
