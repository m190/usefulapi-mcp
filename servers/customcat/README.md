# CustomCat MCP by usefulapi

Browse the CustomCat catalog, your products and designs; check shipping; create and cancel orders.

**Live endpoint:** `https://customcat.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/customcat

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://customcat.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http customcat https://customcat.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=customcat&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcustomcat.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "customcat": {
      "url": "https://customcat.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CustomCat credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/customcat/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your CustomCat **API key** (the CustomCat app → Settings).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `customcat_list_products` | read | List your products |
| `customcat_get_product` | read | Get one of your products |
| `customcat_list_designs` | read | List your designs |
| `customcat_list_catalog_categories` | read | List catalog categories |
| `customcat_list_catalog` | read | List the blank-product catalog |
| `customcat_get_catalog_product` | read | Get a catalog product |
| `customcat_get_catalog_sku` | read | Get a catalog SKU (stock check) |
| `customcat_list_shipping_methods` | read | List shipping methods |
| `customcat_get_shipping_cost` | read | Get the shipping cost for items |
| `customcat_get_order_status` | read | Get order status |
| `customcat_create_order` | **write** | Place an order |
| `customcat_cancel_order` | **write** | Cancel an order |
| `customcat_usage_status` | meta | Usage status (free-tier meter) |
| `customcat_request_feature` | meta | Request a missing feature |
| `customcat_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `customcat_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `customcat_upgrade` (it returns a Stripe Checkout link). Cancel any time with `customcat_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `customcat_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by CustomCat.
