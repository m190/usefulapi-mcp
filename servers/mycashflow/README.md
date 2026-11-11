# MyCashflow MCP by usefulapi

Use your [MyCashflow](https://www.mycashflow.fi/) account from Claude, Cursor, or any MCP client. Read orders, products, stock, customers and shipments, add private order comments, and change stock balances. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://mycashflow.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mycashflow.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mycashflow https://mycashflow.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mycashflow&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmycashflow.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mycashflow": {
      "url": "https://mycashflow.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MyCashflow credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mycashflow/

<!-- connect:end (generated above, edit below) -->

On first connect you provide **Store name** (the `mystore` part of `mystore.mycashflow.fi`), **API user name** and **API key** (create the API user in the store admin after you install the API extension under **Account → Extensions**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mycashflow_list_orders` | read | List orders |
| `mycashflow_get_order` | read | Get an order |
| `mycashflow_get_order_by_external_id` | read | Get an order by external ID |
| `mycashflow_list_order_shipments` | read | List order shipments |
| `mycashflow_list_products` | read | List products |
| `mycashflow_get_product` | read | Get a product |
| `mycashflow_get_product_by_code` | read | Get a product by product code |
| `mycashflow_list_categories` | read | List categories |
| `mycashflow_list_customers` | read | List customers |
| `mycashflow_get_customer` | read | Get a customer |
| `mycashflow_get_customer_by_email` | read | Get a customer by email |
| `mycashflow_list_stock` | read | List stock items |
| `mycashflow_get_stock_item` | read | Get a stock item |
| `mycashflow_list_stock_changes` | read | List stock changes |
| `mycashflow_list_shipping_methods` | read | List shipping methods |
| `mycashflow_list_payment_methods` | read | List payment methods |
| `mycashflow_add_order_comment` | **write** | Add a private order comment |
| `mycashflow_update_stock_balance` | **write** | Change a stock balance |
| `mycashflow_usage_status` | meta | Usage status (free-tier meter) |
| `mycashflow_request_feature` | meta | Request a missing feature |
| `mycashflow_upgrade` | meta | Upgrade to Pro or Pro+ |
| `mycashflow_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `mycashflow_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `mycashflow_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `mycashflow_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
