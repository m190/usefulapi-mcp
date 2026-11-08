# Bind ERP MCP by usefulapi

Read Bind ERP clients, products, inventory, invoices, orders; create prospects, clients, orders.

**Live endpoint:** `https://bind-erp.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/bind-erp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bind-erp.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bind-erp https://bind-erp.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bind-erp&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbind-erp.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bind-erp": {
      "url": "https://bind-erp.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bind ERP credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bind-erp/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Bind ERP **API key** (in Bind ERP click your user name, top right -> Perfil -> Integraciones tab, enter your **password**, then Generar API Key).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `binderp_get_account` | read | Get account |
| `binderp_list_catalog` | read | List catalog (branches, warehouses, price lists, currencies, bank accounts, users, categories) |
| `binderp_list_clients` | read | List clients |
| `binderp_get_client` | read | Get client |
| `binderp_get_client_addresses` | read | Get client addresses |
| `binderp_list_prospects` | read | List prospects |
| `binderp_get_prospect` | read | Get prospect |
| `binderp_list_providers` | read | List providers (suppliers) |
| `binderp_list_products` | read | List products |
| `binderp_get_product` | read | Get product |
| `binderp_list_products_with_price_and_stock` | read | List products with price and stock |
| `binderp_get_inventory` | read | Get inventory by warehouse |
| `binderp_list_invoices` | read | List invoices (sales) |
| `binderp_get_invoice` | read | Get invoice |
| `binderp_list_invoice_payments` | read | List invoice payments |
| `binderp_list_orders` | read | List sales orders |
| `binderp_get_order` | read | Get order |
| `binderp_list_quotes` | read | List quotes |
| `binderp_get_quote` | read | Get quote |
| `binderp_list_purchase_orders` | read | List purchase orders |
| `binderp_get_purchase_order` | read | Get purchase order |
| `binderp_list_activities` | read | List activities |
| `binderp_create_prospect` | **write** | Create prospect |
| `binderp_create_client` | **write** | Create client |
| `binderp_add_comment` | **write** | Add comment |
| `binderp_create_order` | **write** | Create sales order |
| `binderp_usage_status` | meta | Usage status (free-tier meter) |
| `binderp_request_feature` | meta | Request a missing feature |
| `binderp_upgrade` | meta | Upgrade to Pro or Pro+ |
| `binderp_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `binderp_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `binderp_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `binderp_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Bind ERP.
