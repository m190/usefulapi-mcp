# Gumroad MCP by usefulapi

Use your [Gumroad](https://gumroad.com) account from Claude, Cursor, or any MCP client — read products, sales, subscribers and offer codes, and verify, enable or disable product licenses. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://gumroad.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gumroad.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gumroad https://gumroad.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gumroad&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgumroad.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gumroad": {
      "url": "https://gumroad.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gumroad/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Gumroad access token** (Settings → Advanced → Applications). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gumroad_get_user` | read | Get user |
| `gumroad_list_products` | read | List products |
| `gumroad_get_product` | read | Get product |
| `gumroad_list_sales` | read | List sales |
| `gumroad_get_sale` | read | Get sale |
| `gumroad_list_subscribers` | read | List subscribers |
| `gumroad_get_subscriber` | read | Get subscriber |
| `gumroad_list_offer_codes` | read | List offer codes |
| `gumroad_get_offer_code` | read | Get offer code |
| `gumroad_list_variant_categories` | read | List variant categories |
| `gumroad_get_variant_category` | read | Get variant category |
| `gumroad_list_custom_fields` | read | List custom fields |
| `gumroad_list_resource_subscriptions` | read | List resource subscriptions |
| `gumroad_verify_license` | read | Verify license |
| `gumroad_enable_product` | **write** | Enable product |
| `gumroad_disable_product` | **write** | Disable product |
| `gumroad_create_offer_code` | **write** | Create offer code |
| `gumroad_update_offer_code` | **write** | Update offer code |
| `gumroad_enable_license` | **write** | Enable license |
| `gumroad_disable_license` | **write** | Disable license |
| `gumroad_usage_status` | meta | Usage status (free-tier meter) |
| `gumroad_upgrade` | meta | Upgrade to Pro (unlimited) |
| `gumroad_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `gumroad_upgrade` (it returns a Stripe Checkout link). Cancel any time with `gumroad_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `gumroad_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
