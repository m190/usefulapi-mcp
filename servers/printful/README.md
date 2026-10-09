# Printful MCP by usefulapi

Use [Printful](https://www.printful.com) from Claude, Cursor, or any MCP client — browse the catalog, orders, shipping rates and sales stats, and create draft orders, files and mockups.
Hosted, no local install: connect with your own Printful credentials.

**Live endpoint:** `https://printful.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/printful

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://printful.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http printful https://printful.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=printful&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fprintful.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "printful": {
      "url": "https://printful.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Printful credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/printful/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Printful Private Token** (developers.printful.com > Your tokens), plus an optional default store ID.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `printful_list_stores` | read | List stores |
| `printful_list_catalog_categories` | read | List catalog categories |
| `printful_list_catalog_products` | read | List catalog products |
| `printful_get_catalog_product` | read | Get a catalog product |
| `printful_get_catalog_variant` | read | Get a catalog variant |
| `printful_list_store_products` | read | List store products (Manual/API store) |
| `printful_get_store_product` | read | Get a store product |
| `printful_list_sync_products` | read | List synced products (integrated store) |
| `printful_list_orders` | read | List orders |
| `printful_get_order` | read | Get an order |
| `printful_calculate_shipping_rates` | read | Calculate shipping rates |
| `printful_estimate_order_costs` | read | Estimate order costs |
| `printful_get_file` | read | Get a file |
| `printful_get_printfiles` | read | Get printfile specs for a product |
| `printful_get_mockup_task` | read | Get a mockup task result |
| `printful_get_statistics` | read | Get store statistics |
| `printful_create_draft_order` | **write** | Create a draft order |
| `printful_update_draft_order` | **write** | Update a draft order |
| `printful_add_file` | **write** | Add a file to the File Library |
| `printful_create_mockup_task` | **write** | Create a mockup generation task |
| `printful_usage_status` | meta | Usage status (free-tier meter) |
| `printful_request_feature` | meta | Request a missing feature |
| `printful_upgrade` | meta | Upgrade to Pro (unlimited) |
| `printful_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `printful_upgrade` (it returns a Stripe Checkout link). Cancel any time with `printful_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `printful_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Printful.
