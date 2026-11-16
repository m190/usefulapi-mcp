# Pawoon MCP by usefulapi

Use your [Pawoon](https://www.pawoon.com) account from Claude, Cursor, or any MCP client. Read outlets, products, customers, transactions, stock cards and sales reports. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://pawoon.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pawoon.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pawoon https://pawoon.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pawoon&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpawoon.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pawoon": {
      "url": "https://pawoon.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Pawoon credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pawoon/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **client ID** and **client secret**, which you create in the Pawoon dashboard under **Integration settings** (Open API). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pawoon_get_company` | read | Get company |
| `pawoon_list_payment_methods` | read | List payment methods |
| `pawoon_list_outlets` | read | List outlets |
| `pawoon_list_devices` | read | List devices |
| `pawoon_list_users` | read | List users |
| `pawoon_list_taxes` | read | List taxes |
| `pawoon_list_services` | read | List service charges |
| `pawoon_list_customers` | read | List customers |
| `pawoon_get_customer` | read | Get customer |
| `pawoon_list_products` | read | List products |
| `pawoon_get_product` | read | Get product |
| `pawoon_list_product_categories` | read | List product categories |
| `pawoon_list_product_variants` | read | List product variants |
| `pawoon_list_modifier_groups` | read | List modifier groups |
| `pawoon_list_modifiers` | read | List modifiers |
| `pawoon_list_stock_cards` | read | List stock cards |
| `pawoon_list_purchase_orders` | read | List purchase orders |
| `pawoon_list_suppliers` | read | List suppliers |
| `pawoon_list_promos` | read | List promos |
| `pawoon_get_promo` | read | Get promo detail |
| `pawoon_list_vouchers` | read | List vouchers |
| `pawoon_list_transactions` | read | List transactions |
| `pawoon_get_transaction_payments` | read | Get transaction payments |
| `pawoon_get_transaction_items` | read | Get transaction items |
| `pawoon_get_sales_summary` | read | Get sales summary |
| `pawoon_get_product_sales_report` | read | Get product sales report |
| `pawoon_get_payment_method_report` | read | Get payment method report |
| `pawoon_get_promo_report` | read | Get promo report |
| `pawoon_usage_status` | meta | Usage status (free-tier meter) |
| `pawoon_request_feature` | meta | Request a missing feature |
| `pawoon_upgrade` | meta | Upgrade to Pro or Pro+ |
| `pawoon_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `pawoon_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `pawoon_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `pawoon_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
