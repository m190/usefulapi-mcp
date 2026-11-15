# Elementary POS MCP by usefulapi

Use your [Elementary POS](https://elementarypos.com) account from Claude, Cursor, or any MCP client. Read receipts, open bills, stock and customers, edit customers and add stock changes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://elementary-pos.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://elementary-pos.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http elementary-pos https://elementary-pos.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=elementary-pos&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Felementary-pos.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "elementary-pos": {
      "url": "https://elementary-pos.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Elementary POS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/elementary-pos/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Elementary POS API key**, created or copied in the Elementary POS app under **API**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `elementarypos_list_receipts` | read | List receipts |
| `elementarypos_get_receipt` | read | Get a receipt |
| `elementarypos_list_open_bills` | read | List open bills |
| `elementarypos_get_bill` | read | Get a bill |
| `elementarypos_get_order` | read | Get an order |
| `elementarypos_list_cash_journal` | read | List cash journal |
| `elementarypos_list_devices` | read | List cash register devices |
| `elementarypos_list_items` | read | List sales items |
| `elementarypos_list_categories` | read | List categories |
| `elementarypos_get_category` | read | Get a category |
| `elementarypos_get_tax_settings` | read | Get tax settings |
| `elementarypos_list_customers` | read | List customers |
| `elementarypos_get_customer` | read | Get a customer |
| `elementarypos_create_customer` | **write** | Create a customer |
| `elementarypos_edit_customer` | **write** | Edit a customer |
| `elementarypos_list_suppliers` | read | List suppliers |
| `elementarypos_get_supplier` | read | Get a supplier |
| `elementarypos_get_stock` | read | Get current stock |
| `elementarypos_list_stock_changes` | read | List stock changes |
| `elementarypos_add_stock_change` | **write** | Add a stock change |
| `elementarypos_get_webhook_status` | read | Get webhook status |
| `elementarypos_usage_status` | meta | Usage status (free-tier meter) |
| `elementarypos_request_feature` | meta | Request a missing feature |
| `elementarypos_upgrade` | meta | Upgrade to Pro or Pro+ |
| `elementarypos_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `elementarypos_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `elementarypos_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `elementarypos_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
