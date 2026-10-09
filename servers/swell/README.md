# Swell MCP by usefulapi

Manage your Swell headless-commerce store — products, orders, customers, and subscriptions — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Swell store ID + secret key.

**Live endpoint:** `https://swell.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/swell

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://swell.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http swell https://swell.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=swell&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fswell.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "swell": {
      "url": "https://swell.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Swell credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/swell/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Swell store ID and secret key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `swell_list_products` | read | List products |
| `swell_get_product` | read | Get a product |
| `swell_list_categories` | read | List categories |
| `swell_list_orders` | read | List orders |
| `swell_get_order` | read | Get an order |
| `swell_list_customers` | read | List customers |
| `swell_get_customer` | read | Get a customer |
| `swell_list_carts` | read | List carts |
| `swell_list_subscriptions` | read | List subscriptions |
| `swell_get_subscription` | read | Get a subscription |
| `swell_list_invoices` | read | List invoices |
| `swell_list_coupons` | read | List coupons |
| `swell_query` | read | Query any collection (read-only) |
| `swell_create_product` | **write** | Create a product |
| `swell_update_product` | **write** | Update a product |
| `swell_update_order` | **write** | Update an order |
| `swell_usage_status` | meta | Usage status (free-tier meter) |
| `swell_request_feature` | meta | Request a missing feature |
| `swell_upgrade` | meta | Upgrade to Pro (unlimited) |
| `swell_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `swell_upgrade` (it returns a Stripe Checkout link). Cancel any time with `swell_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `swell_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
