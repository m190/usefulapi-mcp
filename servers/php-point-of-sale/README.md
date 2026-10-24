# PHP Point of Sale MCP by usefulapi

Read PHP Point of Sale items, sales, customers and 138 reports; manage customers, items, expenses.

**Live endpoint:** `https://php-point-of-sale.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/php-point-of-sale

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://php-point-of-sale.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http php-point-of-sale https://php-point-of-sale.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=php-point-of-sale&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fphp-point-of-sale.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "php-point-of-sale": {
      "url": "https://php-point-of-sale.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PHP Point of Sale credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/php-point-of-sale/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your PHP Point of Sale **store name** (acme for acme.phppointofsale.com) and an **API key**.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `phppos_list_locations` | read | List locations |
| `phppos_list_items` | read | List items |
| `phppos_get_item` | read | Get item |
| `phppos_list_categories` | read | List categories |
| `phppos_list_item_kits` | read | List item kits |
| `phppos_list_sales` | read | List sales |
| `phppos_get_sale` | read | Get sale |
| `phppos_list_receivings` | read | List receivings |
| `phppos_get_receiving` | read | Get receiving |
| `phppos_list_customers` | read | List customers |
| `phppos_get_customer` | read | Get customer |
| `phppos_list_suppliers` | read | List suppliers |
| `phppos_get_supplier` | read | Get supplier |
| `phppos_list_employees` | read | List employees |
| `phppos_list_invoices` | read | List invoices |
| `phppos_list_expenses` | read | List expenses |
| `phppos_list_gift_cards` | read | List gift cards |
| `phppos_get_gift_card` | read | Get gift card |
| `phppos_list_appointments` | read | List appointments |
| `phppos_list_reports` | read | List reports |
| `phppos_run_report` | read | Run report |
| `phppos_create_customer` | **write** | Create customer |
| `phppos_update_customer` | **write** | Update customer |
| `phppos_create_item` | **write** | Create item |
| `phppos_update_item` | **write** | Update item |
| `phppos_create_expense` | **write** | Create expense |
| `phppos_usage_status` | meta | Usage status (free-tier meter) |
| `phppos_request_feature` | meta | Request a missing feature |
| `phppos_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `phppos_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `phppos_upgrade` (it returns a Stripe Checkout link). Cancel any time with `phppos_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `phppos_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by PHP Point of Sale.
