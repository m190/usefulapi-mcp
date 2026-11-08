# Smaregi MCP by usefulapi

**Live endpoint:** `https://smaregi.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/smaregi

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://smaregi.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http smaregi https://smaregi.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=smaregi&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsmaregi.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "smaregi": {
      "url": "https://smaregi.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Smaregi credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/smaregi/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smaregi_list_stores` | read | List stores |
| `smaregi_get_store` | read | Get store |
| `smaregi_list_staffs` | read | List staff |
| `smaregi_get_staff` | read | Get staff member |
| `smaregi_list_categories` | read | List categories |
| `smaregi_get_category` | read | Get category |
| `smaregi_list_products` | read | List products |
| `smaregi_get_product` | read | Get product |
| `smaregi_list_customers` | read | List customers |
| `smaregi_get_customer` | read | Get customer |
| `smaregi_list_stock` | read | List stock levels |
| `smaregi_list_stock_changes` | read | List stock history |
| `smaregi_list_transactions` | read | List transactions |
| `smaregi_get_transaction` | read | Get transaction |
| `smaregi_create_customer` | **write** | Create customer |
| `smaregi_update_customer` | **write** | Update customer |
| `smaregi_create_product` | **write** | Create product |
| `smaregi_update_product` | **write** | Update product |
| `smaregi_set_stock` | **write** | Set stock level |
| `smaregi_adjust_stock` | **write** | Adjust stock level |
| `smaregi_usage_status` | meta | Usage status (free-tier meter) |
| `smaregi_request_feature` | meta | Request a missing feature |
| `smaregi_upgrade` | meta | Upgrade to Pro or Pro+ |
| `smaregi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per account) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `smaregi_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `smaregi_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `smaregi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
