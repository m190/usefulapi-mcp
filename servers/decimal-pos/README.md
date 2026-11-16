# Decimal POS MCP by usefulapi

Use your Decimal POS account from Claude, Cursor, or any MCP client. Read products, customers, orders, invoices, vendor bills and sale history from your store. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://decimal-pos.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://decimal-pos.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http decimal-pos https://decimal-pos.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=decimal-pos&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdecimal-pos.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "decimal-pos": {
      "url": "https://decimal-pos.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Decimal POS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/decimal-pos/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Decimal POS API key** from the back office, in the **API Keys** section. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `decimalpos_list_products` | read | List products |
| `decimalpos_get_product` | read | Get product by id |
| `decimalpos_get_product_by_code` | read | Get product by code |
| `decimalpos_list_customers` | read | List customers |
| `decimalpos_get_customer` | read | Get customer by id |
| `decimalpos_find_customer_by_phone` | read | Find customer by phone |
| `decimalpos_get_order` | read | Get order by id |
| `decimalpos_get_order_by_external_id` | read | Get order by external id |
| `decimalpos_get_invoice` | read | Get invoice by id |
| `decimalpos_get_invoice_for_order` | read | Get invoice for order |
| `decimalpos_get_invoice_by_external_order_id` | read | Get invoice by external order id |
| `decimalpos_get_invoice_by_external_invoice_id` | read | Get invoice by external invoice id |
| `decimalpos_list_sale_permissions` | read | List items open for sale history |
| `decimalpos_list_sale_records` | read | List sale records for one item |
| `decimalpos_get_ticket_item_quantity` | read | Get quantity sold on one ticket |
| `decimalpos_list_vendors` | read | List vendors |
| `decimalpos_get_vendor` | read | Get vendor by code |
| `decimalpos_list_vendor_products` | read | List vendor products |
| `decimalpos_list_bills` | read | List vendor bills |
| `decimalpos_get_bill` | read | Get vendor bill by id |
| `decimalpos_find_bills_by_invoice_number` | read | Find vendor bills by invoice number |
| `decimalpos_list_payment_terms` | read | List payment terms |
| `decimalpos_usage_status` | meta | Usage status (free-tier meter) |
| `decimalpos_request_feature` | meta | Request a missing feature |
| `decimalpos_upgrade` | meta | Upgrade to Pro or Pro+ |
| `decimalpos_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `decimalpos_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `decimalpos_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `decimalpos_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
