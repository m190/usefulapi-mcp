# RentMy MCP by usefulapi

Use your [RentMy](https://rentmy.co) account from Claude, Cursor, or any MCP client. It browses products and categories, reads rental prices and package availability, and builds carts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://rentmy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rentmy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rentmy https://rentmy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rentmy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frentmy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rentmy": {
      "url": "https://rentmy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your RentMy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rentmy/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **RentMy API key**, your **RentMy API secret** and your numeric **location ID** (your pickup location), from the app you create in RentMy. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rentmy_list_categories` | read | List categories |
| `rentmy_list_child_categories` | read | List child categories |
| `rentmy_list_products` | read | List products |
| `rentmy_search_products` | read | Search products |
| `rentmy_list_products_in_category` | read | List products in a category |
| `rentmy_list_featured_products` | read | List featured products |
| `rentmy_get_product` | read | Get product |
| `rentmy_get_product_variant` | read | Get product variant |
| `rentmy_list_product_addons` | read | List product add-ons |
| `rentmy_get_price` | read | Get rental price |
| `rentmy_check_package_availability` | read | Check package availability |
| `rentmy_list_locations` | read | List pickup locations |
| `rentmy_get_cart` | read | Get cart |
| `rentmy_add_to_cart` | **write** | Add item to cart |
| `rentmy_update_cart_item` | **write** | Change cart item quantity |
| `rentmy_remove_cart_item` | **write** | Remove cart item |
| `rentmy_apply_coupon` | **write** | Apply coupon |
| `rentmy_usage_status` | meta | Usage status (free-tier meter) |
| `rentmy_request_feature` | meta | Request a missing feature |
| `rentmy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rentmy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `rentmy_upgrade` (it returns a Stripe Checkout link). Cancel any time with `rentmy_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `rentmy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
