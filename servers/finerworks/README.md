# FinerWorks MCP by usefulapi

Use [FinerWorks](https://finerworks.com) from Claude, Cursor, or any MCP client — look up orders and their production status, saved pending orders and virtual inventory, browse the product, media, style and framing catalog, price products, quote shipping and validate addresses. The server only reads and quotes: it never submits, changes or deletes an order.
Hosted, no local install: connect with your own FinerWorks credentials.

**Live endpoint:** `https://finerworks.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/finerworks

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://finerworks.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http finerworks https://finerworks.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=finerworks&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffinerworks.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "finerworks": {
      "url": "https://finerworks.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your FinerWorks credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/finerworks/

<!-- connect:end (generated above, edit below) -->

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your FinerWorks web_api_key and app_key.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `finerworks_get_account` | read | Get account |
| `finerworks_list_orders` | read | List orders |
| `finerworks_get_order` | read | Get order |
| `finerworks_get_order_status` | read | Get order production status |
| `finerworks_list_order_status_definitions` | read | List order status definitions |
| `finerworks_list_pending_orders` | read | List pending orders |
| `finerworks_list_virtual_inventory` | read | List virtual inventory |
| `finerworks_get_product_details` | read | Get product details |
| `finerworks_get_prices` | read | Get prices |
| `finerworks_list_product_types` | read | List product types |
| `finerworks_list_media_types` | read | List media types |
| `finerworks_list_style_types` | read | List style types |
| `finerworks_list_static_products` | read | List static products |
| `finerworks_list_frame_collections` | read | List frame collections |
| `finerworks_get_frame` | read | Get frame details |
| `finerworks_list_mats` | read | List mats |
| `finerworks_list_glazing` | read | List glazing |
| `finerworks_get_shipping_options` | read | Get shipping options |
| `finerworks_validate_address` | read | Validate address |
| `finerworks_usage_status` | meta | Usage status (free-tier meter) |
| `finerworks_request_feature` | meta | Request a missing feature |
| `finerworks_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `finerworks_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `finerworks_upgrade` (it returns a Stripe Checkout link). Cancel any time with `finerworks_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `finerworks_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by FinerWorks.
