# Brother POS MCP by usefulapi

Use your [Brother POS](https://brotherpos.ca) account from Claude, Cursor, or any MCP client. It reads products, sales, customers, purchase orders and loyalty data. It creates or updates customers and adjusts stock. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://brother-pos.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://brother-pos.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http brother-pos https://brother-pos.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=brother-pos&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbrother-pos.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "brother-pos": {
      "url": "https://brother-pos.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Brother POS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/brother-pos/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Brother POS store name** (the part before .brotherpos.ca) and a **Developer API key** (Store Settings → Sales & Integrations → Developer API → Manage API keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `brotherpos_list_products` | read | List products |
| `brotherpos_get_product` | read | Get a product |
| `brotherpos_list_categories` | read | List categories |
| `brotherpos_list_brands` | read | List brands |
| `brotherpos_list_customers` | read | List customers |
| `brotherpos_get_customer` | read | Get a customer |
| `brotherpos_find_customer_by_code` | read | Find a customer by code |
| `brotherpos_find_customer_by_card` | read | Find a customer by loyalty card |
| `brotherpos_get_customer_recent_sales` | read | Get a customer's recent sales |
| `brotherpos_create_customer` | **write** | Create a customer |
| `brotherpos_update_customer` | **write** | Update a customer |
| `brotherpos_list_sales` | read | List sales |
| `brotherpos_get_sale` | read | Get a sale |
| `brotherpos_list_purchase_orders` | read | List purchase orders |
| `brotherpos_get_purchase_order` | read | Get a purchase order |
| `brotherpos_list_stock_adjustments` | read | List stock adjustments |
| `brotherpos_adjust_stock` | **write** | Adjust stock |
| `brotherpos_list_loyalty_tiers` | read | List loyalty tiers |
| `brotherpos_list_loyalty_rewards` | read | List loyalty rewards |
| `brotherpos_get_customer_available_rewards` | read | Get a customer's available rewards |
| `brotherpos_usage_status` | meta | Usage status (free-tier meter) |
| `brotherpos_request_feature` | meta | Request a missing feature |
| `brotherpos_upgrade` | meta | Upgrade to Pro or Pro+ |
| `brotherpos_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `brotherpos_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `brotherpos_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `brotherpos_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
