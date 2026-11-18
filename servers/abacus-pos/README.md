# Abacus POS MCP by usefulapi

Use your [Abacus POS](https://nomni.ai) account from Claude, Cursor, or any MCP client. Read products, stock, customers, invoices and orders, and add reward points to a customer. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://abacus-pos.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://abacus-pos.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http abacus-pos https://abacus-pos.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=abacus-pos&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fabacus-pos.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "abacus-pos": {
      "url": "https://abacus-pos.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Abacus POS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/abacus-pos/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Abacus POS API key**, generated for your Abacus POS account. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `abacuspos_list_products` | read | List products |
| `abacuspos_list_stock_levels` | read | List stock levels |
| `abacuspos_list_locations` | read | List locations |
| `abacuspos_list_purchase_orders` | read | List purchase orders |
| `abacuspos_get_purchase_order` | read | Get a purchase order |
| `abacuspos_list_suppliers` | read | List suppliers |
| `abacuspos_list_tax_rates` | read | List tax rates |
| `abacuspos_list_customers` | read | List customers |
| `abacuspos_get_customer` | read | Get a customer |
| `abacuspos_find_customer_by_email` | read | Find a customer by email |
| `abacuspos_list_memberships` | read | List memberships |
| `abacuspos_list_invoices` | read | List invoices |
| `abacuspos_get_invoice` | read | Get an invoice |
| `abacuspos_get_order_status` | read | Get an order status |
| `abacuspos_list_top_selling_products` | read | List top-selling products |
| `abacuspos_list_cash_registers` | read | List cash registers |
| `abacuspos_list_staff` | read | List staff |
| `abacuspos_get_store_info` | read | Get store info |
| `abacuspos_create_customer` | **write** | Create a customer |
| `abacuspos_add_customer_points` | **write** | Add reward points |
| `abacuspos_usage_status` | meta | Usage status (free-tier meter) |
| `abacuspos_request_feature` | meta | Request a missing feature |
| `abacuspos_upgrade` | meta | Upgrade to Pro or Pro+ |
| `abacuspos_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `abacuspos_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `abacuspos_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `abacuspos_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
