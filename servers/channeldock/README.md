# ChannelDock MCP by usefulapi

Use your [ChannelDock](https://channeldock.com) account from Claude, Cursor, or any MCP client. Read orders, stock, shipments and returns, and change product stock or add order log notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://channeldock.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://channeldock.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http channeldock https://channeldock.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=channeldock&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fchanneldock.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "channeldock": {
      "url": "https://channeldock.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ChannelDock credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/channeldock/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **ChannelDock API key** and **API secret** (ChannelDock → Settings → API & Webhooks). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `channeldock_check_auth` | read | Check API key |
| `channeldock_list_orders` | read | List orders |
| `channeldock_search_order` | read | Search order by number |
| `channeldock_list_order_logs` | read | List order log |
| `channeldock_list_inventory` | read | List products and stock |
| `channeldock_list_listings` | read | List marketplace listings |
| `channeldock_list_bundles` | read | List bundles |
| `channeldock_list_product_tags` | read | List product tags |
| `channeldock_list_variant_groups` | read | List variant groups |
| `channeldock_list_stock_locations` | read | List stock locations |
| `channeldock_list_stock_sections` | read | List stock sections |
| `channeldock_list_warehouses` | read | List warehouses |
| `channeldock_list_channels` | read | List connected channels |
| `channeldock_list_shipments` | read | List shipments |
| `channeldock_list_returns` | read | List returns |
| `channeldock_list_carriers` | read | List carriers |
| `channeldock_list_deliveries` | read | List pending deliveries |
| `channeldock_list_suppliers` | read | List suppliers |
| `channeldock_list_tasks` | read | List tasks |
| `channeldock_update_product` | **write** | Update a product |
| `channeldock_add_order_log` | **write** | Add order log entry |
| `channeldock_usage_status` | meta | Usage status (free-tier meter) |
| `channeldock_request_feature` | meta | Request a missing feature |
| `channeldock_upgrade` | meta | Upgrade to Pro or Pro+ |
| `channeldock_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `channeldock_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `channeldock_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `channeldock_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
