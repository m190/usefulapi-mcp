# Ecwid MCP by usefulapi

Manage your [Ecwid](https://www.ecwid.com) store from Claude, Cursor, or any MCP client — read
products, orders, customers, categories and coupons, adjust inventory, and update orders. Hosted,
no local install: connect with your Ecwid store ID and secret token.

**Live endpoint:** `https://ecwid.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ecwid.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ecwid https://ecwid.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ecwid&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fecwid.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ecwid": {
      "url": "https://ecwid.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Ecwid credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ecwid/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Ecwid Store ID** and **secret token** (Ecwid control panel →
Apps → "My apps" → create a custom app). They're validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ecwid_get_store_profile` | read | Get store profile |
| `ecwid_search_products` | read | Search products |
| `ecwid_get_product` | read | Get product |
| `ecwid_search_orders` | read | Search orders |
| `ecwid_get_order` | read | Get order |
| `ecwid_search_customers` | read | Search customers |
| `ecwid_get_customer` | read | Get customer |
| `ecwid_list_categories` | read | List categories |
| `ecwid_get_category` | read | Get category |
| `ecwid_list_discount_coupons` | read | List discount coupons |
| `ecwid_adjust_product_inventory` | **write** | Adjust product inventory |
| `ecwid_update_order` | **write** | Update order |
| `ecwid_usage_status` | meta | Usage status (free-tier meter) |
| `ecwid_request_feature` | meta | Request a missing feature |
| `ecwid_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ecwid_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ecwid_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ecwid_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ecwid_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
