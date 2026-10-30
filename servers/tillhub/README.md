# Tillhub MCP by usefulapi

Read retail records at https://tillhub.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tillhub.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tillhub https://tillhub.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tillhub&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftillhub.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tillhub": {
      "url": "https://tillhub.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Tillhub credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tillhub/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tillhub_get_account` | read | Get API user and account |
| `tillhub_list_products` | read | List products |
| `tillhub_search_products` | read | Search products |
| `tillhub_get_product` | read | Get product |
| `tillhub_list_product_groups` | read | List product groups |
| `tillhub_list_tags` | read | List tags |
| `tillhub_list_transactions` | read | List transactions |
| `tillhub_get_transaction` | read | Get transaction |
| `tillhub_transactions_report` | read | Transactions report |
| `tillhub_list_receipts` | read | List receipts |
| `tillhub_revenue_sum` | read | Revenue total for a period |
| `tillhub_sales_aggregate` | read | Sales per hour or day |
| `tillhub_top_products` | read | Top products |
| `tillhub_list_balances` | read | List cash-register balances |
| `tillhub_list_customers` | read | List customers |
| `tillhub_search_customers` | read | Search customers |
| `tillhub_get_customer` | read | Get customer |
| `tillhub_list_branches` | read | List branches |
| `tillhub_list_registers` | read | List registers |
| `tillhub_list_staff` | read | List staff |
| `tillhub_list_payment_options` | read | List payment options |
| `tillhub_list_taxes` | read | List taxes |
| `tillhub_list_discounts` | read | List discounts |
| `tillhub_list_stock` | read | List stock levels |
| `tillhub_list_stock_locations` | read | List stock locations |
| `tillhub_list_stock_book` | read | List stock movements |
| `tillhub_list_orders` | read | List orders |
| `tillhub_usage_status` | meta | Usage status (free-tier meter) |
| `tillhub_request_feature` | meta | Request a missing feature |
| `tillhub_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `tillhub_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per Tillhub account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `tillhub_upgrade` (it returns a Stripe Checkout link). Cancel any time with `tillhub_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `tillhub_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
