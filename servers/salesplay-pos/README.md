# SalesPlay POS MCP by usefulapi

Use your [SalesPlay POS](https://salesplaypos.com) account from Claude, Cursor, or any MCP client. It reads shops, products, stock, customers and sales. It creates products or customers and sets stock levels. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://salesplay-pos.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://salesplay-pos.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http salesplay-pos https://salesplay-pos.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=salesplay-pos&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsalesplay-pos.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "salesplay-pos": {
      "url": "https://salesplay-pos.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SalesPlay POS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/salesplay-pos/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **SalesPlay personal access token** (Back Office → Integrations → Access Token → Generate Token). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `salesplay_get_merchant` | read | Get merchant account |
| `salesplay_list_shops` | read | List shops |
| `salesplay_list_pos_devices` | read | List POS devices |
| `salesplay_list_employees` | read | List employees |
| `salesplay_list_products` | read | List products |
| `salesplay_list_categories` | read | List categories |
| `salesplay_list_sub_categories` | read | List sub-categories |
| `salesplay_list_measurements` | read | List measurements |
| `salesplay_list_taxes` | read | List taxes |
| `salesplay_list_payment_types` | read | List payment types |
| `salesplay_list_order_types` | read | List order types |
| `salesplay_list_modifiers` | read | List modifiers |
| `salesplay_list_customers` | read | List customers |
| `salesplay_list_suppliers` | read | List suppliers |
| `salesplay_list_receipts` | read | List receipts |
| `salesplay_list_void_receipts` | read | List voided receipts |
| `salesplay_list_credit_notes` | read | List credit notes and refunds |
| `salesplay_list_orders` | read | List orders |
| `salesplay_list_online_order_status` | read | List online order status |
| `salesplay_list_shifts` | read | List shifts |
| `salesplay_list_inventory` | read | List inventory levels |
| `salesplay_list_grn` | read | List goods received notes |
| `salesplay_list_purchase_orders` | read | List purchase orders |
| `salesplay_create_customer` | **write** | Create a customer |
| `salesplay_create_product` | **write** | Create a product |
| `salesplay_update_inventory` | **write** | Set inventory levels |
| `salesplay_usage_status` | meta | Usage status (free-tier meter) |
| `salesplay_request_feature` | meta | Request a missing feature |
| `salesplay_upgrade` | meta | Upgrade to Pro or Pro+ |
| `salesplay_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `salesplay_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `salesplay_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `salesplay_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
