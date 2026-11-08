# EasyStore MCP by usefulapi

Connect your EasyStore store to your AI client at https://easystore.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://easystore.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http easystore https://easystore.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=easystore&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Feasystore.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "easystore": {
      "url": "https://easystore.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your EasyStore account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/easystore/

<!-- connect:end (generated above, edit below) -->

Sign in with EasyStore and authorize UsefulAPI. Customer information passes to your chosen AI client and its LLM provider. Reconnecting a store replaces older AI connections. Uninstall the app to revoke vendor access; stored grants are removed by its signed notification, confirmed token rejection or after 30 days without a successful store API call. Disabling the app may require reconnecting. Billing is per store.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `easystore_get_store` | read | Get store |
| `easystore_list_locations` | read | List locations |
| `easystore_list_products` | read | List products |
| `easystore_get_product` | read | Get product |
| `easystore_list_product_variants` | read | List product variants |
| `easystore_list_collections` | read | List collections |
| `easystore_get_collection` | read | Get collection |
| `easystore_list_inventory_levels` | read | List inventory levels |
| `easystore_list_orders` | read | List orders |
| `easystore_get_order` | read | Get order |
| `easystore_list_order_fulfillments` | read | List order fulfillments |
| `easystore_list_order_transactions` | read | List order transactions |
| `easystore_list_checkouts` | read | List checkouts |
| `easystore_list_customers` | read | List customers |
| `easystore_search_customers` | read | Search customers |
| `easystore_get_customer` | read | Get customer |
| `easystore_list_customer_addresses` | read | List customer addresses |
| `easystore_get_customer_points` | read | Get customer points |
| `easystore_list_customer_groups` | read | List customer groups |
| `easystore_list_pages` | read | List pages |
| `easystore_list_blogs` | read | List blogs |
| `easystore_list_articles` | read | List blog articles |
| `easystore_set_inventory_level` | **write** | Set inventory level |
| `easystore_adjust_inventory_level` | **write** | Adjust inventory level |
| `easystore_update_variant` | **write** | Update variant |
| `easystore_cancel_order` | **write** | Cancel order |
| `easystore_create_fulfillment` | **write** | Create fulfillment |
| `easystore_create_customer` | **write** | Create customer |
| `easystore_update_customer` | **write** | Update customer |
| `easystore_usage_status` | meta | Usage status (free-tier meter) |
| `easystore_request_feature` | meta | Request a missing feature |
| `easystore_upgrade` | meta | Upgrade to Pro or Pro+ |
| `easystore_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per store) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per store) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `easystore_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `easystore_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `easystore_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

This is an independent integration by usefulapi. See [Terms](https://usefulapi.io/terms/) and [Privacy](https://usefulapi.io/privacy/).
