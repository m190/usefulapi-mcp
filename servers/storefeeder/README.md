# StoreFeeder MCP by usefulapi

Use your [StoreFeeder](https://www.storefeeder.com) account from Claude, Cursor, or any MCP client. Search products, stock, orders and inventory logs, and adjust stock or add order notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://storefeeder.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://storefeeder.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http storefeeder https://storefeeder.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=storefeeder&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstorefeeder.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "storefeeder": {
      "url": "https://storefeeder.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your StoreFeeder credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/storefeeder/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API key**, the **API user email** and the **API user password** of your StoreFeeder account. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `storefeeder_get_current_user` | read | Get current API user |
| `storefeeder_list_channels` | read | List sales channels |
| `storefeeder_list_warehouses` | read | List warehouses |
| `storefeeder_list_stock_locations` | read | List stock locations |
| `storefeeder_list_suppliers` | read | List suppliers |
| `storefeeder_list_order_statuses` | read | List order statuses |
| `storefeeder_search_products` | read | Search products |
| `storefeeder_get_product` | read | Get product |
| `storefeeder_get_product_inventory_logs` | read | Get product inventory log |
| `storefeeder_get_warehouse_inventory` | read | Get warehouse inventory report |
| `storefeeder_list_listings` | read | List channel listings |
| `storefeeder_list_purchase_orders` | read | List purchase orders |
| `storefeeder_search_orders` | read | Search orders |
| `storefeeder_get_order` | read | Get order |
| `storefeeder_get_order_logs` | read | Get order log |
| `storefeeder_adjust_stock` | **write** | Adjust stock (relative) |
| `storefeeder_add_order_note` | **write** | Add order note |
| `storefeeder_usage_status` | meta | Usage status (free-tier meter) |
| `storefeeder_request_feature` | meta | Request a missing feature |
| `storefeeder_upgrade` | meta | Upgrade to Pro or Pro+ |
| `storefeeder_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `storefeeder_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `storefeeder_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `storefeeder_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
