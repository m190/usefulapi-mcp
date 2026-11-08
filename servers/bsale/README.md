# Bsale MCP by usefulapi

Read Bsale products, documents and stock; manage customers, prices, receipts and payments.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bsale.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bsale https://bsale.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bsale&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbsale.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bsale": {
      "url": "https://bsale.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bsale credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bsale/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bsale_list_documents` | read | List documents (sales) |
| `bsale_get_document` | read | Get document |
| `bsale_sales_summary` | read | Sales summary |
| `bsale_list_returns` | read | List returns |
| `bsale_list_document_types` | read | List document types |
| `bsale_list_clients` | read | List clients |
| `bsale_get_client` | read | Get client |
| `bsale_client_unpaid_documents` | read | Client unpaid documents |
| `bsale_list_products` | read | List products |
| `bsale_get_product` | read | Get product |
| `bsale_list_variants` | read | List variants (SKUs) |
| `bsale_get_variant` | read | Get variant |
| `bsale_list_stocks` | read | List stock levels |
| `bsale_list_price_lists` | read | List price lists |
| `bsale_list_price_list_details` | read | List price list prices |
| `bsale_list_payments` | read | List payments |
| `bsale_list_payment_types` | read | List payment types |
| `bsale_list_offices` | read | List offices (branches) |
| `bsale_list_users` | read | List users (sellers) |
| `bsale_user_sales_summary` | read | Sales by seller |
| `bsale_create_client` | **write** | Create client |
| `bsale_update_client` | **write** | Update client |
| `bsale_update_price` | **write** | Update price list price |
| `bsale_create_stock_reception` | **write** | Receive stock |
| `bsale_create_payment` | **write** | Record payment |
| `bsale_usage_status` | meta | Usage status (free-tier meter) |
| `bsale_request_feature` | meta | Request a missing feature |
| `bsale_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bsale_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per Bsale company and API host) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per Bsale company and API host) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bsale_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bsale_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bsale_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
