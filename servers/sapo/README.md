# Sapo MCP by usefulapi

**Live endpoint:** `https://sapo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/sapo

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sapo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sapo https://sapo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sapo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsapo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sapo": {
      "url": "https://sapo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sapo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sapo/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sapo_get_store` | read | Get store |
| `sapo_list_products` | read | List products |
| `sapo_count_products` | read | Count products |
| `sapo_get_product` | read | Get product |
| `sapo_list_product_variants` | read | List product variants |
| `sapo_get_product_variant` | read | Get product variant |
| `sapo_list_custom_collections` | read | List collections |
| `sapo_list_orders` | read | List orders |
| `sapo_count_orders` | read | Count orders |
| `sapo_get_order` | read | Get order |
| `sapo_list_order_transactions` | read | List order transactions |
| `sapo_list_customers` | read | List customers |
| `sapo_count_customers` | read | Count customers |
| `sapo_get_customer` | read | Get customer |
| `sapo_list_locations` | read | List locations |
| `sapo_list_inventory_items` | read | List inventory items |
| `sapo_list_inventory_levels` | read | List inventory levels |
| `sapo_list_price_rules` | read | List price rules |
| `sapo_update_order` | **write** | Update order note or tags |
| `sapo_set_inventory_level` | **write** | Set stock quantity |
| `sapo_usage_status` | meta | Usage status (free-tier meter) |
| `sapo_request_feature` | meta | Request a missing feature |
| `sapo_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `sapo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per store) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `sapo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `sapo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `sapo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
